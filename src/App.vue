<template>
  <div class="app">
    <!-- 缓存组件 -->
    <keep-alive> 
      <router-view />
    </keep-alive>
    <MyFooter />
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter";
export default {
  components: { MyFooter }
};
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
html,
body,
.app {
  width: 100%;
  height: 100%;
}
.app {
  display: flex;
  flex-direction: column;
}
@import url("//at.alicdn.com/t/font_1712356_aw4eq5js5mn.css");
</style>