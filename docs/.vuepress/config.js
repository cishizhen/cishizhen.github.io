const themeConfig = require('./config/theme/')

module.exports = {
  base: '/',
  title: "CiShiZhen",
  description: 'Silence is gold',
  dest: 'docs/.vuepress/dist',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  codeTheme: 'coy',
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/medium-zoom',
    'flowchart',
    '@vuepress-reco/vuepress-plugin-loading-page',
    // 鼠标点击特效
    [
      "cursor-effects",
      {
        size: 2,                    // size of the particle, default: 2
        shape: ['star'],  // shape of the particle, default: 'star'， 可选'circle'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    
    // // 动态标题
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)好！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)快快回来！",
        recoverTime: 2000
      }
    ],
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      // width: '300px', // 默认 260px
      title: '个人微信:MMailBox',
      body: [
        // {
        //   type: 'title',
        //   content: '',
        //   style: 'text-aligin: center;'
        // },
        {
          type: 'image',
          src: '/wechat.jpg'
        }
      ],
    }]
  ] 
}  