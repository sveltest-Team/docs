import nav from './nav/index'
import socialLink from './conf/socialLink'
import sidebar from './sidebar/index'
import { markdown } from './conf/markdown'


export default {
    title: 'sveltest 文档',
     lang: 'zh-CN',
    description: '编写测试脚本变得容易、快捷，方便创建更为复杂的测试',
    base: "/docs/",
    head:[
        [
            "link",
            { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },
        ],
        ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],

    ],
    ignoreDeadLinks: true,

    markdown,
    themeConfig: {
        // 网站标题
        siteTitle: 'sveltest 文档',
        // 网站logo
        logo: '/logo.png',
        nav: nav,
        socialLinks: socialLink,
        sidebar:sidebar,
        outline:2,
        lastUpdated: true,
    }
}
