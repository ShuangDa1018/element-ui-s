# element-ui-s 组件库

# 文档地址
https://shuangda1018.github.io/element-ui-s/

# 快速开始

#### 1.安装组件库

```sh
    npm i element-ui-s 
```

#### 2.引用组件库

#### 完整引入
在 main.js 中写入以下内容：
```js
// main.js 完整引入 
import Vue from 'vue';
import 'element-ui-s/lib/theme-chalk/index.css';
import ElementUiS from 'element-ui-s';
Vue.use(ElementUiS);
```
##### 按需引入
 首先，安装 babel-plugin-component,借助该插件，我们可以只引入需要的组件，以达到减小项目体积的目的。
```sh
npm install babel-plugin-component -D
```
然后，将 .babelrc 或 babel.config.json 文件 修改,.babelrc举例子（ps:element官网还不改这的代码，坑小白）：
```JS
// .babelrc
{
  "presets": [["@babel/preset-env", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui-s", 
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

```
babel-plugin-component的作用为编译源码如下（彩蛋：某些时候你可能会想用下面方式引入哦~~~~~哈哈）
```js
import { CountUp } form 'element-ui-s'
=> // 编译成下面这种
import CountUp from 'element-ui-s/lib/count-up.js'
require('element-ui-s/lib/theme-chalk/count-up.css')
```

```js
// main.js 按需引入 (组件，方法，指令3种)
import Vue from 'vue';
import { CountUp,Print，Dialogdrag } from 'element-ui-s';
Vue.use(CountUp) // <els-countUp/>
Vue.prototype.$Print = Print // this.$Print('#app')
Vue.dreactive('dialogdrag',Dialogdrag) // v-dialogdrag
```
