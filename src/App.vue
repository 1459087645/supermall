<template>
  <div id="app" class="wrapper">
<!--    exclude="detail":将这个vue排除在keep-alive外，防止无法获取新的详情数据(需要新数据而不需要一直保持不变)
          "detail":为组件的name属性-->
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from "components/content/maintarbar/MainTarBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
