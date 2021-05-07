<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control v-show="isFixed"
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1" :class="{tabControl: isFixed}"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="scroll"
            :pull-up-load="true"
            @pullingUp="pullingup">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view />
      <tab-control
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"/>
    </scroll>

<!--    无法直接监听组件，需要加修饰符.native-->
    <back-top @click.native="backClick"  v-show="isShowBackTop"/>

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backtop/BackTop";

import TabControl from "components/content/tabcontrol/TabControl";

import Scroll from "@/components/common/scroll/Scroll";

import {getHomeMultidata,getHomeGoods} from "@/network/home";
// import {debounce} from 'common/utils'
import {debounce} from "@/common/utils";

export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return{
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffset: 0,
      isFixed: false,
      saveY: 0
    }
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  //回到在当前页面调用
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  //离开当前页面是调用
  deactivated() {
    this.saveY = this.$refs.scroll.getSaveY()
  },
  //组件创建之后回调
  created() {
    //请求首页多个数据
    this.getHomeMultidata()

    //获取其商品数据并存储
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,200)
    //以免scroll组件出现未挂载出现undefined情况报错，即将此事件在mounted钩子中使用不在created中使用
    //监听图片加载完成之后让better-scroll重新计算整个可滚动区域(scroll)高度
    this.$bus.$on('itemImgLoad',() => {
      //如果第一次setTimeout还未执行，进入了第二次timer会被清空重新赋值进行第二次执行（如果加载第二次速度慢于delay refresh也会做一次刷新），
      // 以此类推，到最后一次刷新等待delay之后就会才会进行刷新
      refresh()
    })
  },
  methods:{
    //防抖函数：避免出现高频率刷新(例如多次想服务器请求会造成压力)；节流亦为同类型函数
    // debounce(func,delay){
    //   let timer = null
    //   return function (...args){
    //     if (timer) clearTimeout(timer)
    //     timer = setTimeout(() => {
    //       func.apply(this,args)
    //     },delay)
    //   }
    // },
    //事件监听相关方法
    tabClick(index){
      // console.log(index);
      switch (index){
        case 0: this.currentType = 'pop'
          break
        case 1: this.currentType = 'new'
          break
        case 2: this.currentType = 'sell'
          break
      }
      //保持两个类型选框(tabControl)选中之后页面转动之后还保持一致
      this.$refs.tabControl1.current = index
      this.$refs.tabControl2.current = index
    },
    backClick(){
      //监听点击回到顶部
      this.$refs.scroll.scrollTo(0,0)
    },
    scroll(position){
      // console.log(position);
      this.isShowBackTop = (-position.y) > 1000

      this.isFixed = (-position.y) > this.tabOffset
    },
    pullingup(){
      this.getHomeGoods(this.currentType)
      // this.$refs.scroll.refresh()
    },
    swiperImgLoad(){
      this.tabOffset = this.$refs.tabControl2.$el.offsetTop
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        // console.log(res);
        // console.log(res.data.banner);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res =>{
        //...res.data.list 讲这个list（数组）解析，并push进本组件data中存储
        // console.log(res.data.list);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

      //  上拉可加载多次
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
  #home{
    /*因为固定定位会脱离标准流，即设置一个与导航栏相同高度的间距*/
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;

    /*将导航栏固定，不随页面滚动而滚动*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
  .tabControl{
    position: relative;
    z-index: 9;
  }
  /*.tab-control{*/
  /*  !*滚动到一定位置（top）position即会改为fixed（固定），移动端可正常使用，pc端需考虑兼容问题*!*/
  /*  position: sticky;*/
  /*  top: 44px;*/

  /*  z-index: 9;*/
  /*}*/

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>

