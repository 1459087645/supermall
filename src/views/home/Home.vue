<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import {getHomeMultidata} from "@/network/home";

export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data(){
    return{
      banners: [],
      recommends: []
    }
  },
  //组件创建之后回调
  created() {
    getHomeMultidata().then(res => {
      // console.log(res);
      // console.log(res.data.banner);
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
  #home{
    /*因为固定定位会脱离标准流，即设置一个与导航栏相同高度的间距*/
    padding-top: 44px;
  }

  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;

    /*将导航栏固定，不随页面滚动而滚动*/
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
</style>

