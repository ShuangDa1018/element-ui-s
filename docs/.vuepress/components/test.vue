# keyboard 键盘

模拟键盘，后续会增加键盘显示同步
:::demo
```vue
<template>
  <div class="md-keyboard">
    <el-form :inline="true">
      <el-form-item label="输入框1">
        <el-input
          ref="text"
          id="text"
          v-model="text"
          placeholder="点击我，完后用虚拟键盘输入"
        ></el-input>
      </el-form-item>
    </el-form>
    <els-keyboard
      ref="kb"
      type="mobile"
      :ele="ele"
      :keys="keys"
      theme="dark"
      @click="handleKeyboardClick"
      style="width: 800px; height: 300px"
    >
    </els-keyboard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keys: null,
      text: '',
      text2: '',
      ele: 'text',
    };
  },
  mounted() {
    this.$refs.text.focus();
    // 自定义按键绑定click
    this.$refs.kb.bindClick('清空', () => {
      this[this.ele] = '';
    });

    // 模拟更换输入框
    setTimeout(() => {
      this.ele = 'text2';
    }, 5000);
  },
  methods: {
    // 键盘点击
    handleKeyboardClick(key, val) {
      this[this.ele] = val;
    },
  },
};
</script>
<style >
.md-keyboard {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
</style>
```
:::
### Attributes
参数 | 说明 | 类型 | 可选值 |	默认值
| --  | -- | :--: | :--: | --
keys | 键盘按钮 |	Array	| -- | 键盘
type | 键盘类型 |	String	| default/number/mobile
theme | 主题 | String | default/green/dark/classic | default


:::数字键盘
```vue
```
:::
<vssue/>