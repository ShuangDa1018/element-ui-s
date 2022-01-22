# export-excel 数字动画


添加v-dialogdrag指令即可拖动弹框，默认参数是element-ui 的 el-dialog组件，
::: demo 
```vue 
<template>
  <div>
    <el-dialog
      title="现在可以点这里拖动了"
      v-dialogdrag
      :visible.sync="type0"
      width="40%"
    >
      <span>亲爱的双哥哥😘,到底多努力，才能得到你</span>
      <span slot="footer">
        <el-button @click="type0 = false">取 消</el-button>
        <el-button @click="type0 = false" type="primary">确 定</el-button>
      </span>
    </el-dialog>
    <el-button @click="type0 = true" type="warning"
      >显示element-ui弹框</el-button
    >
  </div>
</template>
```

:::
### Options
|    参数    |    说明   |   类型   |	默认值	|
| -----------------  | ---------------- | :--------: | :----------: |
| startVal       | the value you want to begin at |Number| 0 |
| endVal         | the value you want to arrive at |Number | 1018 |
| duration  | duration in millisecond | Number | 3000 |
| autoplay     | when mounted autoplay | Boolean | true |
| decimals     | the number of decimal places to show | Number | 0 |
| decimal     | the split decimal | String | . |
| separator     | the separator | String | , |
| prefix     | the prefix | String | '' |
| suffix     | the suffix | String | '' |
| useEasing     | is use easing function | Boolean | true |
| easingFn     | the easing function | Function | — |

** notes: when autoplay:true , it will auto start when startVal or endVal change **


### Functions
| 方法名 | 说明   |
| :--------:   | -----  |
|    mountedCallback    |  when mounted will emit  mountedCallback  |
|    start    |  start the countTo  |
|    pause   |  pause  the countTo |
|    reset    |  reset  the countTo |

<start/>