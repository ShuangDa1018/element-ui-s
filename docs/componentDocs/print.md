# print 打印

兼容性强大的的打印功能，支持局部打印
:::demo
```vue
<template>
  <div>
    <el-button @click="printAll" type="success">全局打印</el-button>
    <el-button @click="print">局部打印</el-button>
    <el-button @click="printFilter">过滤打印</el-button>
    <el-button @click="printFilterList">多过滤打印</el-button>
    <div id="test">
      <h3 class="print-red">你看我是什么颜色(过滤打印:隐藏)</h3>
      <h4 class="print-hidden">欢迎贡献组件(多过滤打印:隐藏)</h4>
      <img class="print-img" src="https://github.com/ShuangDa1018/element-ui-s/raw/gh-pages/logo.jpg" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    printAll() {
      this.$Print('#app'); // 全局引入Vue.use(ElementUiS)
    },
    print() {
      this.$Print('#test');
    },
    printFilter(){
      this.$Print('#test','.print-hidden')
    },
    printFilterList(){
      this.$Print('#test',['.print-hidden','img'])
    }
  },
};
</script>
<style>
.print-red{
  color:red
}
.print-img{
  width:400px
}
</style>
```
:::

<start />