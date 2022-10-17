export default {
    // text: 'Guide',
    // items: [
    //     {text: 'Introduction', link: '/introduction'},
    //     {text: 'Getting Started', link: '/getting-started'},
    // ],

    '/fingerpost': [
        {
            text: '指南',
            collapsible: true,

            items: [
                {text: '介绍', link: '/fingerpost/index', collapsed: true,},
                {text: '安装', link: '/fingerpost/start'},
                {text: '基础示例', link: '/fingerpost/usage'},
            ]
        },
    ],
    '/unit': [
        {
            text: '入门',
            collapsible: true,
            items: [
                {text: '第一个自动化工程', link: '/unit/top', collapsed: true,},
                {text: '命令行工具', link: '/unit/cli',},

            ]
        },
        {
            text: '基础',
            collapsible: true,
            items: [
                {text: '基本规范', link: '/basics/base_',},
                {text: '测试执行', link: '/basics/test_run',},
                {text: '基础用法', link: '/basics/directions',},

            ]
        },
        {
            text: '进阶',
            collapsible: true,
            items: [
                {text: '核心', link: '/unit/advance',},
                 {text: '配置文件', link: '/unit/settings_conf',},
                 {text: '发送钉钉', link: '/basics/dingtalk',},
                 {text: '发送邮件', link: '/basics/email',},


            ]
        },

    ],
    '/basics': [
        {
            text: '入门',
            collapsible: true,
            items: [
                {text: '第一个自动化工程', link: '/unit/top', collapsed: true,},
                {text: '命令行工具', link: '/unit/cli',},

            ]
        },
        {
            text: '基础',
            collapsible: true,
            items: [
                {text: '基本规范', link: '/basics/base_',},
                {text: '测试执行', link: '/basics/test_run',},
                {text: '基础用法', link: '/basics/directions',},

            ]
        },
        {
            text: '进阶',
            collapsible: true,
            items: [
                {text: '核心', link: '/unit/advance',},
                {text: '配置文件', link: '/unit/settings_conf',},
                  {text: '发送钉钉', link: '/basics/dingtalk',},
                 {text: '发送邮件', link: '/basics/email',},

            ]
        },

    ],
    '/version': [
        {
            text: '版本管理',
            collapsible: true,
            items: [
                {text: '版本', link: '/version/index', collapsed: true,},
            ]
        },
        {
            text: '更新日志',
            collapsible: true,
            items: [
                {text: '1.x', link: '/version/v1',},

            ]
        },


    ],

    // '/unit': [
    //     {
    //         text: '入门',
    //         collapsible: true,
    //
    //         items: [
    //             {text: '第一个自动化工程', link: '/unit/top',  collapsed: true,},
    //             {text: '命令行工具', link: '/unit/cli',},
    //             {text: '命令行工具', link: '/unit/cli',},
    //
    //         ]
    //     },        {
    //         text: '基础',
    //         // collapsible: true,
    //         items: [
    //             {text: '基本规范', link: '/basics/base_',},
    //
    //         ]
    //     },
    //
    //     ],


}


