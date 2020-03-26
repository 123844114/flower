<template>
  <div class="home">
    <header>鲜花网</header>
    <div class="banner">
      <img :src="banner.TopPic" alt="">
    </div>
    <MySwiper :data="banner.BannerList"/>
  </div>
</template>

<script>
import MySwiper from '../components/MySwiper'
import {mapState} from 'vuex'
export default {
  components:{MySwiper},
  computed:{...mapState(['banner'])}
};
</script>

<style scoped lang='scss'>
.home {
  flex: 1;
  header {
    height: 40px;
    text-indent: 20px;
    font-size: 20px;
    line-height: 40px;
  }
  .banner{
    img{width: 100%}
  }
}
</style>