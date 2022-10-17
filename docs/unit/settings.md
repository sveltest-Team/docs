---
layout: doc
title: settings
---






# settings 内置全局基本参数



### BASE_DIR

- Type: `string`
- Default: `/`

获取项目的根目录、无需改动



### BROWSER_DRIVER_PATH

**浏览器驱动路径、在没有配置环境变量时使用**



### BINARY_LOCATION

**Linux操作系统上安装的浏览器程序路径（以chrome为例）**

```python
BINARY_LOCATION = '/opt/google/chrome/google-chrome'
```



### CHROME_DRIVER_BINARY

**Linux操作系统上存放的chrome浏览器驱动程序路径**

```python
CHROME_DRIVER_BINARY = '/usr/bin/chromedriver' # 指定chrome安装路径
```



### TEST_CASE_ERROR_RETRY

- Type: `int`
- Default: `2`

设置错误重跑次数、默认为2，该值默认是有生效的如果你在本地settings文件中添加并修改它的值那么就会替换为你配置的相关值



### SCREENSHOTS_STATE

- Type: `bool`
- Default: `False`

错误截图状态、默认为False，在非debug模式下你执行的测试用例如果出现有错误或者异常如果你开启了该项则会将异常情况时截屏当前屏幕并保存到测试报告中(仅UI测试时有效)。



### DEBUG

- Type: `bool`
- Default: `True`

本地调试环境用、默认为True

一般如果在正式的持续集成任务时需要进行关闭、关闭后才可正常发送自动邮件、报告、钉钉群通知等！！！



### LOG_FILE_PATH

**日志配置项**

```python
# 默认如果没有配置则会在你的工程目录下的report/logs目录下进行保存
LOG_FILE_PATH = {
    'context_processors':{
        'debug':os.path.join(BASE_DIR,'report/logs')
    }
}
```

**你可配置info级别的日志存放路径**





### TEST_REPORT

**测试报告存放路径、默认是将html格式的报告存放到你的report/html目录下**

```python
# 一般情况TEST_REPORT需要配置 zip、html、img三个参数的值、均为路径
TEST_REPORT = {
    'context_processors':
        {
            'zip':'',
            'html':'',
            'img':'',
        }
}
```

**zip：用于存放的是你的测试报告打包的zip文件、tank会自动给你打包或者你可以设置不进行打包**

**html：用于存放html格式的测试报告**

**img：用于存放错误时的截图**



### RUN_PATTERN_CASE

**运行测试时的匹配表达式、这个参数是内置默认的一般不需要进行修改或者配置**



### CASE_SUITE_PATH

**测试用例集路径**



### EMAIL_LISTS

**接受邮件报告的邮箱、是一个列表类型、可以设置多个邮箱**



### AUTO_SEND_EMAIL

**自动邮箱状态**



### EMAIL_SENDER

**邮件发送人**



### DATABASE

**数据库配置**



### LOGGING_STATUS

**日志状态**



### TEST_RUN_ENV

**测试环境**
