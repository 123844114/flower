<template>
  <div class="category">
    <header>分类</header>
    <Cate v-for="(item,index) in catagory" :key="index" :cateIndex="index" :data="item" />
  </div>
</template>

<script>
import Cate from "../components/Cate";
import { mapState } from "vuex";
export default {
  components: { Cate },
  computed: {
    ...mapState(["catagory"])
  },
  destroyed() {
    console.log("分类销毁");
  },
  activated() {
    console.log("分类activated");
  },
  deactivated() {
    console.log("分类deactivated");
  },
  created() {
    console.log("分类创建");
  }
};
</script>

<style scoped lang='scss'>
.category {
  flex: 1;
  header {
    height: 40px;
    text-indent: 20px;
    font-size: 20px;
    line-height: 40px;
  }
}
</style>