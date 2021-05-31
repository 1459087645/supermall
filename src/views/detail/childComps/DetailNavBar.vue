<template>
  <div class="nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="back">
        <img src="~assets/images/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title"
             class="title-item"
             :class="{active: currentTitle === index}"
             @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data(){
    return{
      title: ['商品','参数','评论','推荐'],
      currentTitle: 0
    }
  },
  methods: {
    titleClick(index){
      this.currentTitle = index
    },
    back(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .nav-bar{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }

  .title{
    display: flex;
    font-size: 13px;
  }

  .title-item{
    flex: 1;
  }

  .active{
    color: var(--color-high-text);
  }

  .back{
    margin-top: 8px;
  }
</style>
