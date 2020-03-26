<template>
  <footer>
    <router-link tag="span" to="/home">
      <span class="iconfont icon-shouye"></span>
      首页
    </router-link>
    <router-link tag="span" to="/cate">
      <span class="iconfont icon-fenlei"></span>
      分类
    </router-link>
    <router-link tag="span" to="/my">
      <span class="iconfont icon-daohanglan-05"></span>
      我的
    </router-link>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  height: 40px;
  display: flex;
  justify-content: space-around;
  span {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    &.router-link-active{
        color: red
    }
    span{
        &.iconfont{
        font-size: 20px
    }
    }
  }
}
</style>