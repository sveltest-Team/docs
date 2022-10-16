import{_ as s,o as n,c as a,a as p}from"./app.c11aa023.js";const l="/docs/assets/image-20221010183634754.f21c4ed8.png",_=JSON.parse('{"title":"\u5165\u95E8","description":"","frontmatter":{"layout":"doc","title":"\u5165\u95E8"},"headers":[],"relativePath":"fingerpost/usage.md"}'),o={name:"fingerpost/usage.md"},e=p(`<p>\u4E00\u4E2A\u7B80\u5355\u6D4B\u8BD5\u7684demo\uFF1A</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> sveltest </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> TestCase</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">main</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TestDemoTo1</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">TestCase</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;&quot;&quot;</span><span style="color:#676E95;">\u7B80\u5355\u7684\u6D4B\u8BD5demo</span><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setUp</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">tearDown</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_case_demo</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">assertEqual</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sveltest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sweet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">verbosity</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>\u6267\u884C\u540E\u7684\u7ED3\u679C</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">================================</span><span style="color:#A6ACCD;"> \u7528\u4F8B\u5F00\u59CB\u6267\u884C </span><span style="color:#89DDFF;">=================================</span></span>
<span class="line"><span style="color:#82AAFF;">test_case_demo </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">__main__</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">TestDemoTo1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   PASS</span></span>
<span class="line"><span style="color:#89DDFF;">********************************</span><span style="color:#A6ACCD;"> \u6D4B\u8BD5\u7ED3\u679C\u6C47\u603B </span><span style="color:#89DDFF;">*********************************</span></span>
<span class="line"><span style="color:#A6ACCD;">     \u6267\u884C\u7ED3\u679C     </span></span>
<span class="line"><span style="color:#A6ACCD;">\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 status \u2502 count \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 PASS   \u2502 </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 FAIL   \u2502 </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 SKIP   \u2502 </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 ERROR  \u2502 </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 COUNT  \u2502 </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518</span></span>
<span class="line"><span style="color:#89DDFF;">=================</span><span style="color:#A6ACCD;"> \u603B\u5171\u8FD0\u884C\u4E86 </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> \u6761\u6D4B\u8BD5\u7528\u4F8B  \u603B\u5171\u8FD0\u884C\u4E86 </span><span style="color:#F78C6C;">0.</span><span style="color:#A6ACCD;">000s </span><span style="color:#89DDFF;">==================</span></span>
<span class="line"></span></code></pre></div><p>\u7EC8\u7AEF\u7684\u7ED3\u679C:</p><p><img src="`+l+`" alt="image-20221010183634754" data-fancybox="gallery"></p><p>\u53C2\u6570\u5316\u5B9E\u4F8B\uFF1A</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> sveltest </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> TestCase</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">main</span></span>
<span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> sveltest</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">core</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">components</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parameterized </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> char</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">parameterized</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">parameterized</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TestDemoTo1</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">TestCase</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;&quot;&quot;</span><span style="color:#676E95;">\u7B80\u5355\u7684\u6D4B\u8BD5demo</span><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setUp</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">tearDown</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">char</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sweet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">testcase</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_case_demo</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">assertEqual</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sweet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">msg</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">666</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">verbosity</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"></span></code></pre></div><p>\u5185\u7F6E\u53C2\u6570\u5316\u3001\u63D0\u4F9B\u591A\u79CD\u53EF\u80FD\u6027\u9009\u62E9\u5982\uFF1A\u968F\u673A\u6570\u636E\u3001\u81EA\u5B9A\u4E49\u53C2\u6570\u3001\u6570\u636E\u5E93\u8BFB\u53D6\u3001\u6587\u4EF6\u6570\u636E\u8BFB\u53D6\u7B49</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">================================ \u7528\u4F8B\u5F00\u59CB\u6267\u884C =================================</span></span>
<span class="line"><span style="color:#A6ACCD;">test_case_demo_1 (__main__.TestDemoTo1)   PASS</span></span>
<span class="line"><span style="color:#A6ACCD;">test_case_demo_2 (__main__.TestDemoTo1)   FAIL</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------- \u94FA\u6293\u5230\u7684\u5F02\u5E38 ---------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; test_case_demo_2 (__main__.TestDemoTo1)</span></span>
<span class="line"><span style="color:#A6ACCD;">Traceback (most recent call last):</span></span>
<span class="line"><span style="color:#A6ACCD;">  File &quot;D:\\python39\\lib\\site-packages\\sweet\\core\\components\\parameterized.py&quot;, </span></span>
<span class="line"><span style="color:#A6ACCD;">line 446, in wrapper</span></span>
<span class="line"><span style="color:#A6ACCD;">    return func(self,*args, **kwargs)</span></span>
<span class="line"><span style="color:#A6ACCD;">  File &quot;F:\\app\\test_case_666.py&quot;, line 90, in test_case_demo</span></span>
<span class="line"><span style="color:#A6ACCD;">    self.assertEqual(&quot;sweet&quot;,a,msg=666)</span></span>
<span class="line"><span style="color:#A6ACCD;">AssertionError: &#39;sweet&#39; != &#39;testcase&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">- sweet</span></span>
<span class="line"><span style="color:#A6ACCD;">+ testcase</span></span>
<span class="line"><span style="color:#A6ACCD;"> : 666</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">******************************** \u6D4B\u8BD5\u7ED3\u679C\u6C47\u603B *********************************</span></span>
<span class="line"><span style="color:#A6ACCD;">     \u6267\u884C\u7ED3\u679C     </span></span>
<span class="line"><span style="color:#A6ACCD;">\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 status \u2502 count \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 PASS   \u2502 1     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 FAIL   \u2502 1     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 SKIP   \u2502 0     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 ERROR  \u2502 0     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 COUNT  \u2502 2     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518</span></span>
<span class="line"><span style="color:#A6ACCD;">================= \u603B\u5171\u8FD0\u884C\u4E86 2 \u6761\u6D4B\u8BD5\u7528\u4F8B  \u603B\u5171\u8FD0\u884C\u4E86 0.001s ==================</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,10),t=[e];function c(r,D,y,A,C,F){return n(),a("div",null,t)}const u=s(o,[["render",c]]);export{_ as __pageData,u as default};
