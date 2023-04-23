import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import configSidebar from "./configSidebar";

export default {
  base: '/',
  port: 8072,
  title: '编程词典',
  description: '计算机编程领域专业术语大全',
  head: [
    ['link', {rel: 'icon', href: '/logo.svg'}],  //  插入到 head 标签


    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  // 主题配置
  theme: defaultTheme({
    colorModeSwitch: true,  //  切换颜色模式
    home: '/',
    logo: '/logo.svg',  //  导航栏显示 logo.svg
    navbar: [
      {text: 'Java', link: 'aaa'},
      {text: 'Python', link: 'aaa'},
      {text: '前端', link: 'aaa'},
      {text: 'Go', link: 'aaa'},
      {text: 'C++', link: 'aaa'},
      {text: '游戏开发', link: 'aaa'},
      {text: '人工智能', link: 'aaa'},
      {text: '大数据', link: 'aaa'},
      {text: '云计算', link: 'aaa'},
      {text: '图像处理', link: 'aaa'},
      {text: '网络安全', link: 'aaa'},
      {text: '数据库', link: 'aaa'},
      {text: '嵌入式系统', link: 'aaa'},
      {text: '移动开发', link: 'aaa'},
      {text: '测试', link: 'aaa'},
    ],
    sidebar: configSidebar,
    sidebarDepth: 2,
    lastUpdated: false,
    contributors: false,
    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',
    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
  }),
  plugins: [
    docsearchPlugin({
      appId: '34YFD9IUQ2',
      apiKey: '9a9058b8655746634e01071411c366b8',
      indexName: 'vuepress',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
    }),
  ]
}
// module.exports = {
//   title: 'Hello VuePress',
//   description: 'Just playing around'
// }