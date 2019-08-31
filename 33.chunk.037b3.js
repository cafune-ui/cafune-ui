webpackJsonp([33],{SyuP:function(n){n.exports='<span class="token keyword">import</span> <span class="token punctuation">{</span> TabBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'cafune\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'preact\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> TabBarItem <span class="token punctuation">}</span> <span class="token operator">=</span> TabBar<span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">TabBarComp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    page<span class="token punctuation">:</span> <span class="token string">\'news\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token parameter">activedId</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      page<span class="token punctuation">:</span> activedId\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> page <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-block"</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>page<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>TabBar activedId<span class="token operator">=</span><span class="token punctuation">{</span>page<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabBarItem\n            text<span class="token operator">=</span><span class="token string">"news"</span>\n            id<span class="token operator">=</span><span class="token string">"news"</span>\n            icons<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              actived<span class="token punctuation">:</span>\n                <span class="token string">\'https://image.flaticon.com/icons/png/128/2026/2026462.png\'</span><span class="token punctuation">,</span>\n              normal<span class="token punctuation">:</span>\n                <span class="token string">\'https://image.flaticon.com/icons/png/128/2026/2026450.png\'</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabBarItem\n            text<span class="token operator">=</span><span class="token string">"match"</span>\n            id<span class="token operator">=</span><span class="token string">"match"</span>\n            icons<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              actived<span class="token punctuation">:</span>\n                <span class="token string">\'https://image.flaticon.com/icons/png/128/2026/2026478.png\'</span><span class="token punctuation">,</span>\n              normal<span class="token punctuation">:</span>\n                <span class="token string">\'https://image.flaticon.com/icons/png/128/2026/2026469.png\'</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabBarItem\n            text<span class="token operator">=</span><span class="token string">"leagues"</span>\n            id<span class="token operator">=</span><span class="token string">"leagues"</span>\n            icons<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              actived<span class="token punctuation">:</span>\n                <span class="token string">\'https://image.flaticon.com/icons/png/128/2026/2026518.png\'</span><span class="token punctuation">,</span>\n              normal<span class="token punctuation">:</span>\n                <span class="token string">\'https://image.flaticon.com/icons/png/128/2026/2026521.png\'</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>TabBar<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}});