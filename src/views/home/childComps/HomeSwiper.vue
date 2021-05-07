<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
//轮播图
import {Swiper, SwiperItem} from "components/common/swiper"

export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  data(){
    return {
      isLoad: false
    }
  },
  props:{
    banners:{
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods:{
    swiperImgLoad(){
      //此处判断加载一次图片之后发送即可，无需发送多次，因为图片高度相同，计算一张的发送即可
      if(!this.isLoad){
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>

</style>
