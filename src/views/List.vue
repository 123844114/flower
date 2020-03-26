<template>
  <div class="list">
    <header>&lt;{{$route.query.name}}</header>
    <div class="tabbar">
      <span v-for="item in tab" :key="item.code" :class="item.code===currentIndex?'active':null" @click="tabFn(item.code)">
        {{item.name}}
        <i class="iconfont" :class="flag?'icon-sanjiaodown':'icon-shangjiantou'" v-if="item.code===2"></i>
      </span>
    </div>
    <div class="content">
      <ListItem v-for="(item,index) in list" :key="index" :flowerItem="item" />
    </div>
  </div>
</template>

<script>
import ListItem from "../components/ListItem";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  components: { ListItem },
  computed: {
    ...mapState(["list","flag"])
  },
  data() {
    return {
      currentIndex:0, // 当前选中项的下标
      tab: [
        { name: "综合", code: 0 },
        { name: "销量", code: 1 },
        { name: "价格", code: 2 },
        { name: "最新", code: 3 }
      ]
    };
  },
  created() {
    this.getList();
  },
  methods: {
    ...mapActions(["getList"]),
    ...mapMutations(["sortFn"]),
    tabFn(code){
      this.currentIndex=code
      this.sortFn(code)
    }
  }
};
</script>

<style scoped lang='scss'>
.list {
  flex: 1;
  header {
    height: 40px;
    text-indent: 20px;
    font-size: 20px;
    line-height: 40px;
  }
  .tabbar {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    span {
      flex: 1;
      text-align: center;
      position: relative;
      &.active{
        color: red
      }
      &:last-child{
        &::after{
          width: 0
        }
      }
      &::after {
        width: 1px;
        height: 20px;
        background: #a6a1a1;
        position: absolute;
        content: "";
        right: 0;
        top: 10px;
      }
      
    }
  }
}
</style>