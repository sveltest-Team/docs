export default [ // 导航栏配置
    {text: '指南', link: '/fingerpost/index'},
    // {text: 'vue组件', link: '/Vue/template'},
    {
        text: '教程',
        items: [
            {

                text: '入门',
                items: [
                    {text: '快速开始', link: '/unit/top'},
                ]
            },
            {
                text: '进阶',
                items: [
                    {text: 'settings', link: '/unit/settings'},
                ]
            },
            {
                text: 'API',
                items: [
                    {text: '框架', link: '#'},
                ]
            },
        ]
    },
    {
        text: '组件',
        items: [
            {
                items: [
                    {text: '测试报告', link: '/python/drf/tutorial/nav'},
                ]
            },
            {
                items: [
                    {text: '数据驱动', link: '/components/data'},
                    {text: '数据库', link: '/python/drf/tutorial/nav'},
                ]
            },
            {
                items: [
                    {text: 'UI测试', link: '/components/webui'},
                    {text: 'APP UI测试', link: '/components/uiapp'},
                ]
            },
        ]
    },
    {
        text: '更新日志',
        items: [
            {
                items: [
                    {text: '版本管理', link: '/version/index'},
                ]
            },
            {
                items: [
                    {text: 'v1.x', link: '/version/v1'},

                ]
            },
        ]
    },

    {
        text: '更多',
        items: [
            {text: '团队', link: '/team/team'},
            {text: '加入我们', link: '/resume/my'},
            // {text: '我的简历(求职版)', link: '/resume/guanfl'},
            // {
            //     text: '使用教程',
            //     items: [
            //         {text: 'vuepress', link: '/vuepressInter.md'},
            //     ]
            // },
        ]
    },



]
