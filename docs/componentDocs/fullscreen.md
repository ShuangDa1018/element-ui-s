# fullscreen 全屏
开启、关闭全屏
:::demo
```vue
<template>
  <i
    @click="handleFull(isfullscreen)"
    :class="[isfullscreen ? 'el-icon-rank' : 'el-icon-full-screen', 'icon']"
  ></i>
</template>

<script>
export default {
  data() {
    return {
      isfullscreen: false,
    };
  },
  methods: {
    handleFull(is) {
      this.$Fullscreen(is);
      this.isfullscreen = !this.isfullscreen;
    },
  },
};
</script>

<style >
.icon {
  font-size: 30px;
  cursor: pointer;
  transition: 0.3s;
}
.icon:hover {
  transform: scale(1.5);
  color: red;
}
</style>
```
:::

<vssue/>
