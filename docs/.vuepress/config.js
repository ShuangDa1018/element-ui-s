// .vuepress/config.js
console.log(process.env,process)
module.exports = {
  base:'/element-ui-s/',
  title:'Element-Ui-S',
  description: '开箱即用的组件库文档', //描述
    port: 1080, 
    head: [
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: 'Github地址', link: 'https://github.com/ShuangDa1018/element-ui-s' },
            { text: 'Npm地址', link: 'https://www.npmjs.com/package/element-ui-s' },
          ],
      sidebar: {
        '/componentDocs/':[
          {title:'安装',path: 'guide/install',},
          {title:'快速上手',path: 'guide/quick-start',},
          {
            title:'使用说明',
            collapsable: false,
            children: [
              {title:'简介',path: 'guide/introduction',},
              {title:'vuepress说明',path: 'guide/tips',},
            ]
          },
          {title:'组件',collapsable: false, },
          // {title:'atest',path: 'atest',},// 测试组件打开用()
          {title:'count-up 数字动画',path: 'count-up',},
          {title:'chat 客服聊天',path: 'chat',},
          {title:'copy 复制',path: 'copy',},
          {title:'dialogdrag 弹框拖拽',path: 'dialogdrag',},
          {title:'fullscreen 全屏',path: 'fullscreen',},
          // {title:'highlight-code 代码高亮',path: 'highlight-code',},
          // {title:'html-pdf 导出PDF',path: 'html-pdf',},
          {title:'magnifie 放大镜',path: 'magnifie',},
          {title:'nprogress 进度条',path: 'nprogress',},
          {title:'keyboard 键盘',path: 'keyboard',},
          {title:'print 打印',path: 'print',},
          {title:'qrcode 二维码',path: 'qrcode',},
          {title:'screenshot 截图',path: 'screenshot',},
          {title:'scratch 刮刮乐',path: 'scratch',},
          {title:'sign 电子签名',path: 'sign',},
          {title:'sticker 图片拖拽',path: 'sticker',},
          {title:'typer 打字效果',path: 'typer',},
          {title:'text-ellipsis 溢出省略',path: 'text-ellipsis',},
          {title:'video 摄像头',path: 'video',},
          {title:'watermark 水印',path: 'watermark',},
          // {title:'export-excel 导出',path: 'export-excel',},
        ],
      }
    },
    plugins:[
       // 官方回到顶部插件
       '@vuepress/back-to-top',
      //官方图片放大组件 目前是所有img都可以点击放大。具体配置见https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html
      ['@vuepress/medium-zoom',{selector: 'img'}],
      ['@vssue/vuepress-plugin-vssue',{
        // 设置 `platform` 而不是 `api` 我这里是在github平台
        platform: 'github',

        // owner与repo配置 https://github.com/${owner}/${repo}
        // 例如我的仓库地址为https://github.com/1011cat/shotCat_doc 则owner为1011cat，repo为shotCat_doc
        owner: 'ShuangDa1018',
        repo: 'element-ui-s',

        // 填写自己的OAuth App 信息。详见https://vssue.js.org/zh/options/#repo
        clientId: '5b7c3d23f228ad6d497c',
        clientSecret: 'bfdab50ac2f22535844ac77d6484cc8c0274a8d3',
        locale: 'zh', //使用的语言  这里是简体中文
        baseURL: 'https://github.com'}], //平台的 base URL
       ['@vuepress/last-updated'],
       [require('../vue-demo')]
    ]
  } 