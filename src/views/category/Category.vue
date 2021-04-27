<template>
  <div class="wrapper" ref="huang">
    <ul class="content">
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
      <li>huangjian</li>
    </ul>
  </div>
</template>

<script>
// 滚动框架相关的应用
import BScroll from 'better-scroll'

export default {
  name: "Category",
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
    //document.querySelector('.wrapper')可替换为this.$refs.huang
    this.scroll = new BScroll(this.$refs.huang,{

    })
  }
}
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
}
</style>
