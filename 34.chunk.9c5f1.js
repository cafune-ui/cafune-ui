webpackJsonp([34],{sG9k:function(n){n.exports='<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'cafune\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'preact\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">SwitchComp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    isActived1<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    isActived2<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> isWait <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token parameter">actives</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>isWait<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">:</span> actives\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">:</span> actives\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> isActived1<span class="token punctuation">,</span> isActived2 <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-block"</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p<span class="token operator">></span>默认用法<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Switch isActived<span class="token operator">=</span><span class="token punctuation">{</span>isActived1<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token string">\'isActived1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p<span class="token operator">></span>禁用状态<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Switch\n          isActived<span class="token operator">=</span><span class="token punctuation">{</span>isActived1<span class="token punctuation">}</span>\n          isDisabled\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token string">\'isActived1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p<span class="token operator">></span>自定义尺寸<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Switch\n          isActived<span class="token operator">=</span><span class="token punctuation">{</span>isActived1<span class="token punctuation">}</span>\n          size<span class="token operator">=</span><span class="token string">"20px"</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token string">\'isActived1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p<span class="token operator">></span>加载状态<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Switch\n          isActived<span class="token operator">=</span><span class="token punctuation">{</span>isActived1<span class="token punctuation">}</span>\n          isLoading<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token string">\'isActived1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p<span class="token operator">></span>自定义颜色<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Switch\n          isActived<span class="token operator">=</span><span class="token punctuation">{</span>isActived1<span class="token punctuation">}</span>\n          activedColor<span class="token operator">=</span><span class="token string">"#2e4e7e"</span>\n          inActivedColor<span class="token operator">=</span><span class="token string">"#bbcdc5"</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token string">\'isActived1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p<span class="token operator">></span>异步切换（<span class="token number">1</span>秒后才切换）<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Switch\n          isActived<span class="token operator">=</span><span class="token punctuation">{</span>isActived2<span class="token punctuation">}</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token string">\'isActived2\'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}});