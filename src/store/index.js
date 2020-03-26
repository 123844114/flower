import Vue from 'vue'
import Vuex from 'vuex'
import banner from '../data/banner.json'
import catagory from '../data/catagory.json'
Vue.use(Vuex)
import axios from 'axios'
// 写一个方法实现‘万’的转化
function saleFormat(num) {
  // 判断num上有没有‘万’这个汉字，如果有的话flag返回true
  let flag = num.includes('万')
  // 如果有的话，把万除去掉parseFloat，获取到数值
  if (flag) {
     // 给数值*10000
    return parseFloat(num) * 10000
  }else{ //如果没有万，那就把字符串转化为数字
   return num*1
  }
 
}
export default new Vuex.Store({
  state: {
    banner,
    catagory,
    selectList: [], // 存储选中的数据
    list: [],
    copyList:[],
    flag: false, //开关
  },
  mutations: {
    setSelectList(state, payload) {
      // 将选项存到数据中
      state.selectList[payload[1]] = payload[0]
    },
    setList(state, payload) {
      state.list = payload
       // 深拷贝一份数据
       state.copyList=JSON.parse(JSON.stringify(payload))
    },
    sortFn(state, code) {
      // 排序  code===2  价格排序   sort改变原数组
      if (code === 2) {
        state.flag = !state.flag
        state.list.sort((a, b) => {
          if (state.flag) {
            return a.Price - b.Price
          } else {
            return b.Price - a.Price
          }
        })
      } else if (code === 1) { // 销量
        // 判断a.Sales上有没有‘万’这个汉字
        // 如果有的话，把万除去掉，获取到数值
        // 给数值*10000

        state.list.sort((a, b) => {
          return saleFormat(a.Sales) - saleFormat(b.Sales)
        })

      }else if(code===0){// 综合，数据恢复到原始状态，即接口里的状态
        state.list=state.copyList
      }


    }
  },
  actions: {
    // 调用list接口
    getList({ commit }) {
      axios.get('/list').then(({ data }) => {
       
        commit('setList', data.Datas.FlowerList)
      })
    }
  },
  modules: {
  }
})
