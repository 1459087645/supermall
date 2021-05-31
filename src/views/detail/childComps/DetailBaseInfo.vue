<template>
<!--  v-if="Object.keys(goods).length !== 0":判断商品信息，如果为空则不展示-->
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[3].name}}</span>
    </div>
    <div class="info-services">
<!--      v-for="index in goods.services.length-1":遍历结果(1，2，3),需要减1，因为最后一个值并不是这列所需要展示的-->
      <span v-for="index in goods.services.length-1" :key="index">
<!--       goods.services[index-1]:以下角标为条件遍历的话取出的index是从1开始，所以这边需要index-1(从0开始) -->
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{
    goods: {
      type: Object,
      default: {}
      }
    }
}
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title{
    color: #222
  }

  .info-price{
    margin-top: 10px;
  }

  .info-price .n-price{
    font-size: 24px;
    color: var(--color-high-text);
  }

  .info-price .o-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .info-price .discount{
    font-size: 12px;
    padding: 2px 5px;
    color: #ffffff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;
  }

  .info-other{
    margin-top: 15px;
    line-height: 30px;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    display: flex;
    justify-content: space-between;
  }

  .info-services{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .info-services img{
    height: 14px;
    width: 14px;
    /*图标过于靠上，使其浮动，向下偏移两个像素*/
    position: relative;
    top: 2px;
  }

  .info-services span{
    font-size: 13px;
    color: #333;
  }
</style>
