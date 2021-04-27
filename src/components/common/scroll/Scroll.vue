<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  data(){
    return {
      scroll: null
    }
  },
  props:{
    probeType:{
      type: Number,
      default(){
        return 3
      }
    },
    pullUpLoad:{
      type: Boolean,
      default() {
        return false
      }
    }
  },
  methods: {
    //经过time回到(x,y)位置
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      //实时监听滚动，probeType: 3
      probeType: this.probeType,
      //是否要上拉加载更多
      pullUpLoad: this.pullUpLoad,
      click: true,
      observeImage: true,
      observeDOM: true,
      disableTouch: false
    })

  //  监听滚动的位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll',position)
    })

  //  监听上拉加载更多
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  }
}
</script>

<style scoped>

</style>
