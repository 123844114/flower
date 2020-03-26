<template>
  <div class="cate">
    <h1>{{data.Subject}}{{cateIndex}}</h1>
    <ul class="cate-list">
      <li
        v-for="(item,index) in data.Content"
        :key="index"
        :class="[{'border':data.Layout==='border'},{'active':index===currentIndex}]"
        @click="sigleFn(index,item)"
      >
        <img :src="item.Icon" v-if="item.Icon" />
        <span>{{item.Label}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["data","cateIndex"],
  data() {
    return {
      currentIndex: null
    };
  },
  methods: {
    sigleFn(index,item) {
      // 单选
      this.currentIndex = index;
      // 传入仓库,item同时将cateIndex一并传入
      this.setSelectList([item,this.cateIndex])
    },
    ...mapMutations(["setSelectList"])
  }
};
</script>

<style scoped lang='scss'>
h1 {
  font-size: 14px;
}
.cate-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 25%;
    text-align: center;
    img {
      width: 100%;
    }
    span {
      font-size: 14px;
    }
    &.active {
      border: 2px solid red !important;
    }
    &.border {
      border: 1px solid rgb(134, 130, 130);
      display: flex;
      justify-content: space-between;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>