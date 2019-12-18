(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{"gQG+":function(n){n.exports='<span class="token keyword">import</span> <span class="token punctuation">{</span> Swiper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'cafune\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'preact\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> SwiperItem <span class="token punctuation">}</span> <span class="token operator">=</span> Swiper<span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./index.scss\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">SwiperComp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    current<span class="token punctuation">:</span> <span class="token number">1</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">renderCustom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> current <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"swiper-indicator"</span><span class="token operator">></span><span class="token punctuation">{</span>current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token parameter">ind</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      current<span class="token punctuation">:</span> ind\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> sliderNum <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>默认<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Swiper initialIndex<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span> showIndicators<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span> autoplay<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token operator">></span>\n          <span class="token punctuation">{</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token function">Array</span><span class="token punctuation">(</span>sliderNum<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> ind</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>SwiperItem key<span class="token operator">=</span><span class="token punctuation">{</span>ind<span class="token punctuation">}</span><span class="token operator">></span>\n              <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"swiper-block"</span><span class="token operator">></span><span class="token punctuation">{</span>ind <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n            <span class="token operator">&lt;</span><span class="token operator">/</span>SwiperItem<span class="token operator">></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Swiper<span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>自定义<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Swiper\n          slideWidth<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">280</span><span class="token punctuation">}</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>change<span class="token punctuation">}</span>\n          intervel<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2000</span><span class="token punctuation">}</span>\n          duration<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span>\n          customIndicator<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderCustom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n          <span class="token punctuation">{</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> ind</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>SwiperItem key<span class="token operator">=</span><span class="token punctuation">{</span>ind<span class="token punctuation">}</span><span class="token operator">></span>\n              <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"swiper-block"</span><span class="token operator">></span><span class="token punctuation">{</span>ind <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n            <span class="token operator">&lt;</span><span class="token operator">/</span>SwiperItem<span class="token operator">></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Swiper<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}}]);