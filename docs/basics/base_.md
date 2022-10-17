---
layout: dos
title: 基本规范
---
`sveltest `的一些核心类都继承`unittest`测试框架中相关的类，因此`sveltest`的编写规范与[unittest](https://docs.python.org/3/library/unittest.html)可以无缝衔接。



## 创建测试

```python
from sveltest import TestCase
from sveltest import main

class SveltTestCase(TestCase):

    def setUp(self):
        pass

    def test_case(self):
        """第一测试用例demo"""
        self.assertEqual(1,1)

    def tearDown(self):
        pass

if __name__ == '__main__':
    main(debug=True)
```





### 执行测试

:::tip 提示
由于`sveltest` 对`unittest`相关进行部分的自定义扩展，如果在执行`sveltest`编写的用例时要注意下面几点情况，可能对你有帮助！！！

[点击这里](/unit/execute_test)


:::

```
================================ 用例开始执行 =================================
test_case (__main__.SveltTestCase)   PASS
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
================= 总共运行了 1 条测试用例  总共运行了 0.000s ==================
```





## 基本规范

如果你会unittest相关基础，其实sveltest你也会很快理解并掌握其中的编写规范

1. 创建测试类`SveltTestCase`并继承`sveltest.TestCase`类。
2. 创建测试方法`test_case`, 必须以`test`开头。
3. `sveltest.mian()`是框架运行测试用例的主程序方法，具体使用将在下面详细的介绍。



