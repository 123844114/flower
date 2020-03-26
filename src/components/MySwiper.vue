<template>
  <div class="myswiper">
    <!-- tab切换 -->
    <div class="tabbar">
      <div class="content">
        <span v-for="(item,index) in data" :key="index" :class="index===currentIndex?'active':null" @click="tabFn(index)">{{item.Linkage}}</span>
      </div>
    </div>
    <!-- swiper轮播 -->
    <swiper :options="swiperOptions" ref="mySwiper">
      <swiper-slide v-for="(item,index) in data" :key="index">
        <img :src="item.ImageUrl" @click="goList(item)"/>
        <div class="text">
          <p>{{item.LabelName}}</p>
          <p>{{item.Desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  props: ["data"],
  data() {
    return {
      currentIndex:0,
      swiperOptions: {
        // 配置swiper属性
        autoplay: true,
        loop: true
      }
    };
  },
  mounted(){
    // 监听slideChange事件，实现图片的轮换关联tab
    // 事件可以参考swiper官网
    this.$refs.mySwiper.$swiper.on('slideChangeTransitionStart',()=>{
      let activeIndex=this.$refs.mySwiper.$swiper.activeIndex
      // 关联tab下标
      this.currentIndex=activeIndex-1 
    })
  },
  methods:{
    tabFn(index){
      // tab切换
      console.log(index)
      this.currentIndex=index
      this.$refs.mySwiper.$swiper.slideTo(index+1, 500, false)
    },
    goList(item){
      // 跳到list页面 参数LabelName
      // this.$router.push('/list/'+item.LabelName)
      // this.$router.push('/list?name='+item.LabelName)
      this.$router.push({path:'/list',query:{name:item.LabelName}})


    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style scoped lang='scss'>
.tabbar {
  width: 100%;
  overflow: auto;
  height: 40px;
  line-height: 40px;
  .content {
    width: 480px;
    span {
      display: inline-block;
      width: 80px;
      text-align: center;
      &.active{
        color: red
      }
    }
  }
}
.swiper-wrapper {
  .swiper-slide {
    img {
      width: 70%;
      margin: 5px 15%;
      border-radius: 10px;
    }
    .text{
      position: absolute;
      bottom: 40px;
      width: 100%;
      text-align: center;
      color: #ffffff
    }

  }
}
</style>