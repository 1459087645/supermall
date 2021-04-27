<template>
  <div class="goods">
<!--    这里的key不推荐使用index下角标，vue在做一个新增删除操作时，打印的结果将会出现预料之外的结果，建议使用数据的唯一属性（例如id）-->
    <goods-list-item v-for="(item,index) in goods" :goodsItem="item" :key="index"/>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props:{
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  /*多行，溢出部分换到下行(弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行。)*/
  flex-wrap: wrap;
  /*平均分配每一行宽度*/
  justify-content: space-around;
}
</style>
