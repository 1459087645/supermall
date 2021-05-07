<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-top-images :top-images="topImages"></detail-top-images>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailTopImages from "./childComps/DetailTopImages";

import {getDetail} from "@/network/detail";

export default {
  name: "detail",
  components: {
    DetailNavBar,
    DetailTopImages
  },
  data(){
    return{
      iid: null,
      topImages: []
    }
  },
  created() {
    //获取当前商品的id
    this.iid = this.$route.params.iid

    //获取详情页数据
    getDetail(this.iid).then(res => {
      console.log(res);
      //轮播图数据
      this.topImages = res.result.itemInfo.topImages
    })
  }
}
</script>

<style scoped>

</style>
