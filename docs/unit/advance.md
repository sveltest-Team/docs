---
title: 进阶
layout: doc
---





## 测试用例运行原理

> 构建的工程目录下有个case目录，该目录用于存放测试用例。



### sveltest执行测试用例具体的原理步骤：

::: tip 提示

sveltest运行步骤及原理与unittest类似

 :::



在非DEBUG模式下，main()方法启用的是`unittest.defaultTestLoader.discover()`作为用例加载器，因此你在非DEBUG模式下无法去找到不存在于case目录下的用例的，因为sveltest有个重要的文件配置[settings.py](#)内配置了默认的框架所需要用到的所有配置项。



非DEBUG模式下，提供智能的用例加载只要你存在于case目录下的所有用例都会被加载到，会自动递归查询

但是你必须在子目录下创建一个`__init__.py`文件否则你将不会加载如何用例。



而DEBUG模式则是使用的`sveltest`自己实现的`SvelteTextTestRunner`它需要你提供一个测试模块这样它才能加载模块下的测试用例。



## 测试加载器

> sveltest 比起unittest提供的testLoader显然简单的多，仅仅提供了二个方法`loadTestsFromModule`与`defaultTestLoader`



仅需知道sveltest使用的是这二个类来加载测试用例的即可，你无需再去实了解或熟悉unittest其他的加载方法。



loadTestsFromModule：提供一个单一的测试模块用例加载测试方法

defaultTestLoader：智能搜索测试用例，支持递归搜索



## 测试执行器

> sveltest 提供二个自己实现`SvelteTextTestRunner` 和` MainTestSuite`



### SvelteTextTestRunner

DEBUG模式下的测试执行器，提供命令行结果报告，文本类型的测试结果输出。

```python
def __init__(self, stream: Optional[object] = None,
            descriptions: Optional[Union[str, bool]] = True,
            verbosity: Optional[Union[str, int]] = 1,
            failfast: Optional[bool] = False,
            buffer: Optional[bool] = False,
            warnings: Optional[str] = None,
            *, tb_locals: Optional[bool] = False,
            module: Optional[Any] = None
    ):
```

不是用main(),进行单独使用执行器

```python
from sveltest import TestCase, SvelteTextTestRunner, svelteTestLoader
suite = svelteTestLoader.loadTestsFromModule(module= __import__("__main__"))
testrunner = SvelteTextTestRunner(
    verbosity=3,
    # 测试用例模块名称
    module=__import__("__main__")
)
testrunner.run(
        test=suite, max_workers=0
)

```

执行结果与main()方法一样

```
================================ 用例开始执行 =================================

test_baidu.py    test_search (__main__.BaiduTestUi)   PASS
******************************** 测试结果汇总 *********************************
     执行结果     
┌────────┬───────┐
│ status │ count │
├────────┼───────┤
│ PASS   │ 1     │
│ FAIL   │ 0     │
│ SKIP   │ 0     │
│ ERROR  │ 0     │
│ COUNT  │ 1     │
└────────┴───────┘
================= 总共运行了 1 条测试用例  总共运行了 8.308s ==================
```



### MainTestSuite

::: danger 警告
该类适用于生产模式批量统一执行用例时使用，配合`manage.py`启动文件使用最佳
:::

> 非DEBUG模式下使用的执行器，提供一个较为复杂的测试执行器，拥有强大的功能。与SvelteTextTestRunner相比它提供了自动化输出报告，发送邮件，自动打包测试报告zip文件等。

```python
def test_suite_base(
    self,suites:Optional[list],
    test_title_name:Optional[str]=None,
    description:Optional[str]=None,
    thread_count:Optional[int]=0,
    save_last_try:Optional[bool]=True,
) -> Dict:
```



```python
from sveltest.bin.conf.commandline import MainTestSuite
MainTestSuite().test_suite_base(
    suites=suits,
    test_title_name=self.title, description=self.description,
    thread_count=self.thread_count,
    save_last_try=True
)
```

