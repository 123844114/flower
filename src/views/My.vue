<template>
  <div class="my">{{selectList}}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["selectList"])
  },
  destroyed() {
    console.log("我的销毁");
  },
  created() {
    console.log("我的创建");
  }
};
</script>

<style>
</style>