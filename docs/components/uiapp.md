---
layout: doc
title: APP 自动化测试组件

---

## uiapp
uiapp 是我的个人另一个项目基于Android ADB底层封装实现的，全部自己实现无任何appium-client等依赖
后续将提供给sveltest作为一个组件来辅助我们做Android APP UI自动化测试

目前基本基础功能已完成实现，正在加急测试中。





## 以下是部分API

## 连接设备

```python
from uiapp import start
# 只有一台设备时无需输入设备序列号
app = start()
# 多设备连接
app = start("192.168.19.180:5555")
app.port() #修改设备端口
app.disconnect() #断开设备连接
```

## 应用程序包管理

### 基础

```python
# 清理应用程序的缓存及数据
app.clear_data("com.jideos.jnotes")
# 获取当前启动程序的信息()
app.current_package_info()
# 获取当前启动的应用的activity
app.activity()
# 获取当前启动的应用的package name
app.get_package()
# 列出设备中已经安装的所有应用包（包括系统应用和用户应用）
app.package_list()
# 获取所有安装程序路径
app.package_path_list()
# 判断指定的程序包是否存在
app.is_package("com.jideos.jnotes")
# 获取当前/指定应用程序安装路径
app.get_app_path(package_name="com.jideos.jnotes")
```

### 启动与退出应用程序

```python
# 启动app
app.run('com.jideos.jnotes', 'com.jideos.module_main.pad.ui.activity.NoteListActivity')
# 退出应用程序
app.quit()
```



## 元素定位

```python
# 使用文本元素定位
app.element_by_text(text="QQ音乐HD")
# 使用resourceId元素定位
app.element_by_id(id="com.jideos.jnotes:id/add_note")
# 采用坐标定位
app.element_by_coord(487,1165)
# 使用className元素定位
app.element_by_class("android.widget.RadioButton")
# 使用xpath进行定位
app.element_by_xpath('//*[@resource-id="com.example.jideailicense:id/btn_request_license"]')

# 使用文本元素定位一组控件
app.elements_by_text("QQ音乐HD")
# 使用className元素定位一组控件
app.elements_by_class("android.widget.RadioButton")
```

## 元素操作

```python
click()  #点击操作
value()  #输入文本/键盘操作
slide()  #滑动操作
description() #获取描述文本
text() #获取文本内容
```

## 应用安装与卸载

### 安装

```python
#默认安装
app.install(r"E:\file\docs\note_apk\app-release.apk").default()
# 强制安装
app.install(r"E:\file\docs\note_apk\app-release.apk").r()
# 安装测试包
app.install(r"E:\file\docs\note_apk\app-release.apk").t()
# 允许降级覆盖安装
app.install(r"E:\file\docs\note_apk\app-release.apk").d()
# 部分应用安装
app.install(r"E:\file\docs\note_apk\app-release.apk").p()
# 为应用程序授予所有运行时的权限
app.install(r"E:\file\docs\note_apk\app-release.apk").g()
```

### 卸载

```python
# 进行默认卸载
app.uninstall.default(package_name="com.jideos.jnotes")
# 卸载程序但不清理应用数据
app.uninstall.k("com.jideos.jnotes")
```

## 设备相关



```python
app.port() #修改设备adb服务端口
app.version() #获取设备Android版本
app.size()# 设备尺寸大小
app.set_size(1200,800)# 设置分辨率
# 截图
app.screen(path=r"F:\interfaceTestng\data\222.jpg")
app.for_wait() #进行重新重启adb连接
app.start_server() #开启本地adb服务
app.kill_server() #关闭本地adb服务
app.reboot() #重启设备
```

## 系统资源



## 网络

```python
app.netstat.view() # 查看网络信息
app.netstat.save("1.text") #保存网络信息到指定文件
```

## 按键操作

```python
# 按下home件
app.home()
# 返回上一页
app.back()
app.search() #打开搜索
app.powerUp() #按下电源
```

## 输入法操作

```python
# 获取系统所有输入法
app.inputmethod.get()
# 获取当前系统默认输入法
app.inputmethod.get_setting_default()
# 设置成系统的默认输入法
app.inputmethod.set_sys_default()
# 设置指定的默认输入法
app.inputmethod.set('com.baidu.input_huawei/.ImeService')
```

## 呼唤系统应用

```python
app.open_dial() #打开拨号应用
app.hang_up()#挂断电话
app.open_browser()#打开浏览器
```

## 其他方法