import{_ as a,o as n,c as e,a as l}from"./app.c6c1542c.js";const t="/assets/1665578057912.c7f5d0ac.png",o="/assets/1665578312063.49fdfe27.png",s="/assets/image.8e3da171.png",F=JSON.parse('{"title":"\u9A71\u52A8\u7BA1\u7406","description":"","frontmatter":{"title":"\u9A71\u52A8\u7BA1\u7406","layout":"doc"},"headers":[{"level":2,"title":"\u81EA\u52A8\u5316\u4E0B\u8F7D\u6D4F\u89C8\u5668\u9A71\u52A8","slug":"\u81EA\u52A8\u5316\u4E0B\u8F7D\u6D4F\u89C8\u5668\u9A71\u52A8","link":"#\u81EA\u52A8\u5316\u4E0B\u8F7D\u6D4F\u89C8\u5668\u9A71\u52A8","children":[{"level":3,"title":"\u652F\u6301\u7684\u9A71\u52A8","slug":"\u652F\u6301\u7684\u9A71\u52A8","link":"#\u652F\u6301\u7684\u9A71\u52A8","children":[]},{"level":3,"title":"\u4E0B\u8F7D\u9A71\u52A8","slug":"\u4E0B\u8F7D\u9A71\u52A8","link":"#\u4E0B\u8F7D\u9A71\u52A8","children":[]}]},{"level":2,"title":"\u547D\u4EE4\u884C\u5DE5\u5177\u8FDB\u884C\u4E0B\u8F7D","slug":"\u547D\u4EE4\u884C\u5DE5\u5177\u8FDB\u884C\u4E0B\u8F7D","link":"#\u547D\u4EE4\u884C\u5DE5\u5177\u8FDB\u884C\u4E0B\u8F7D","children":[]}],"relativePath":"basics/driver_management.md"}'),p={name:"basics/driver_management.md"},r=l('<h2 id="\u81EA\u52A8\u5316\u4E0B\u8F7D\u6D4F\u89C8\u5668\u9A71\u52A8" tabindex="-1">\u81EA\u52A8\u5316\u4E0B\u8F7D\u6D4F\u89C8\u5668\u9A71\u52A8 <a class="header-anchor" href="#\u81EA\u52A8\u5316\u4E0B\u8F7D\u6D4F\u89C8\u5668\u9A71\u52A8" aria-hidden="true">#</a></h2><p><code>sveltest</code>\u4E3A\u4E86\u8003\u8651\u5230\u5728\u6211\u4EEC\u6D4B\u8BD5\u7684\u65F6\u5019\u7ECF\u5E38\u4F1A\u6709\u6D4F\u89C8\u5668\u81EA\u52A8\u5347\u7EA7\u66F4\u65B0\u3001\u8FD9\u662F\u65F6\u5019\u6709\u65F6\u4F1A\u5BFC\u81F4\u6D4F\u89C8\u5668\u7248\u672C\u4E8E\u9A71\u52A8\u5668\u7248\u672C\u4E0D\u4E00\u81F4\u5BFC\u81F4\u7ECF\u5E38\u629B\u51FA\u5F02\u5E38\u7136\u800C\u9700\u8981\u81EA\u5DF1\u53BB\u52A8\u624B\u4E0B\u8F7D\u5BF9\u5E94\u7248\u672C\u7684\u9A71\u52A8\u3001\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0Csveltest\u81EA\u5E26\u4E86\u81EA\u52A8\u4E0B\u8F7D\u6700\u65B0\u6D4F\u89C8\u5668\u9A71\u52A8\u65B9\u6CD5\uFF0C\u4E0B\u9762\u6211\u4EEC\u4F53\u9A8C\u4E00\u4E0B\uFF1A</p><h3 id="\u652F\u6301\u7684\u9A71\u52A8" tabindex="-1">\u652F\u6301\u7684\u9A71\u52A8 <a class="header-anchor" href="#\u652F\u6301\u7684\u9A71\u52A8" aria-hidden="true">#</a></h3><table><thead><tr><th>\u6D4F\u89C8\u5668\u9A71\u52A8</th><th>\u652F\u6301\u7684\u5E73\u53F0</th><th>\u9A71\u52A8\u540D\u79F0</th></tr></thead><tbody><tr><td>chrome</td><td>linux\u3001window(win32,win64)</td><td>chrome</td></tr><tr><td>ie</td><td>linux\u3001window(win32,win64)</td><td>ie</td></tr></tbody></table><p>\u76EE\u524D\u4EC5\u652F\u6301\u4EE5\u4E0A\u4E8C\u79CD\u9A71\u52A8\u4E0B\u8F7D\u65B9\u5F0F\u3001\u540E\u7EED\u5C06\u9646\u7EED\u96C6\u6210\u5269\u4E0B\u7684\u5168\u90E8\u9A71\u52A8\u3002</p><h3 id="\u4E0B\u8F7D\u9A71\u52A8" tabindex="-1">\u4E0B\u8F7D\u9A71\u52A8 <a class="header-anchor" href="#\u4E0B\u8F7D\u9A71\u52A8" aria-hidden="true">#</a></h3><p>\u8FDB\u884C\u5BFC\u5165 DownloadDriver \u7C7B\u8FDB\u884C\u4E0B\u8F7D\u5BF9\u5E94\u9A71\u52A8,\u4E0B\u9762\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u90E8\u5206\u63D0\u4F9B\u51FA\u6765\u7684API\u3002</p><p><img src="'+t+`" alt="1665578057912" data-fancybox="gallery"></p><p>open_chrome\u65B9\u6CD5\u7528\u4E8E\u4E0B\u8F7Dchrome\u6D4F\u89C8\u5668\u9A71\u52A8\uFF0C\u4F20\u9012\u4E00\u4E2A\u5E73\u53F0\u67B6\u6784\u53C2\u6570\u5373\u53EF\u4E0B\u8F7Dchrome\u6D4F\u89C8\u5668,\u9ED8\u8BA4\u4E3Awin32\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">from sveltest.support.browser.core import DownloadDriver</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">dr = DownloadDriver()</span></span>
<span class="line"><span style="color:#A6ACCD;">dr.open_chrome()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u6307\u5B9A\u9700\u8981\u4E0B\u8F7D\u7684\u9A71\u52A8\u3001\u9700\u8981\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\u3001\u8F93\u5165\u4E0A\u65B9\u652F\u6301\u7684\u9A71\u52A8\u7684\u9A71\u52A8\u540D\u79F0\u5373\u53EF\u4E0B\u8F7D\u5BF9\u5E94\u9A71\u52A8</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> sweet</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lib</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">drivermirrors</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">chrome </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> DownloadDriver</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">driver </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DownloadDriver</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chrome</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">driver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update_download</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">win32</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p><img src="`+o+'" alt="1665578312063" data-fancybox="gallery"></p><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u3001\u4E0B\u8F7D\u7684\u9A71\u52A8\u4F1A\u81EA\u52A8\u7684\u4E0B\u8F7D\u5230\u4F60\u7684\u7535\u8111D\u76D8\u4E0B\u7684driver\u76EE\u5F55\u4E0B</p><p><img src="'+s+'" alt="img" data-fancybox="gallery"></p><p>\u662F\u5DF2\u538B\u7F29\u6587\u4EF6\u8FDB\u884C\u4FDD\u5B58\u7684\u3001\u7136\u540E\u5B83\u53C8\u4F1A\u81EA\u52A8\u7684\u7ED9\u4F60\u89E3\u538B\u5230Python\u5B89\u88C5\u76EE\u5F55\u4E0B\u7684\u6839\u76EE\u5F55\u4E0B</p><p><img src="'+s+'" alt="img" data-fancybox="gallery"></p><h2 id="\u547D\u4EE4\u884C\u5DE5\u5177\u8FDB\u884C\u4E0B\u8F7D" tabindex="-1">\u547D\u4EE4\u884C\u5DE5\u5177\u8FDB\u884C\u4E0B\u8F7D <a class="header-anchor" href="#\u547D\u4EE4\u884C\u5DE5\u5177\u8FDB\u884C\u4E0B\u8F7D" aria-hidden="true">#</a></h2><p>\u540E\u7EED\u63D0\u4F9B\u4E0B\u8F7D</p>',19),c=[r];function i(d,D,h,y,_,m){return n(),e("div",null,c)}const C=a(p,[["render",i]]);export{F as __pageData,C as default};