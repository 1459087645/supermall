<template>
<!--  当不同的界面使用这个组件时，只有文字不同，可不使用slot插槽-->
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         :class="{active: index === current}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      current: 0
    }
  },
  methods:{
    itemClick(index){
      this.current = index
      //子传父，监听点击获取显示相应数据
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
  }

  .tab-control-item{
    flex: 1;
  }

  .tab-control-item span{
    padding: 5px;
  }

  .active{
    color: var(--color-high-text);
  }

  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
