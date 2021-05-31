<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content"
            :pull-up-load="true"
            ref="scroll"
            @scroll="scroll">
      <detail-top-images :top-images="topImages"></detail-top-images>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-img-info :detail-info="detailInfo"></detail-img-info>
      <detail-item-params :item-params="itemParams"></detail-item-params>
    </scroll>

    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailTopImages from "./childComps/DetailTopImages";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailImgInfo from "@/views/detail/childComps/DetailImgInfo";
import DetailItemParams from "@/views/detail/childComps/DetailItemParams";

import BackTop from "@/components/content/backtop/BackTop";

import Scroll from "@/components/common/scroll/Scroll";

import {getDetail,Goods} from "@/network/detail";

export default {
  name: "detail",
  components: {
    DetailNavBar,
    DetailTopImages,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImgInfo,
    DetailItemParams,
    Scroll,
    BackTop
  },
  data(){
    return{
      iid: null,
      topImages: [],
      //商品信息
      goods: {},
      shopInfo: {},
      detailInfo: {},
      isShowBackTop: false,
      itemParams: {}
    }
  },
  created() {
    //获取当前商品的id
    this.iid = this.$route.params.iid

    //获取详情页数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result
      //轮播图数据
      this.topImages = data.itemInfo.topImages
      //商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // console.log(this.goods);
      //店铺信息
      this.shopInfo = data.shopInfo
      // console.log(data.shopInfo);
      //商品详情信息
      this.detailInfo = data.detailInfo
      // console.log(data.detailInfo);
      //商品参数信息
      this.itemParams = data.itemParams
      console.log(data.itemParams);
    })
  },
  methods: {
    backTop(){
      this.$refs.scroll.scrollTo(0,0)
    },
    scroll(position){
      this.isShowBackTop = (-position.y) > 1000
    }
  }
}
</script>

<style scoped>
  #detail{
    height: 100vh;
    background-color: #ffffff;
    position: relative;
    z-index: 1;
  }

  .content{
    background-color: #ffffff;
    /*可滚动区域*/
    height: calc(100% - 44px);
  }
</style>
