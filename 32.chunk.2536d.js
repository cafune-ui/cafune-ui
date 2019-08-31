webpackJsonp([32],{nzMm:function(n){n.exports='<span class="token keyword">import</span> <span class="token punctuation">{</span> Tabs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'cafune\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'preact\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> TabPanel <span class="token operator">=</span> Tabs<span class="token punctuation">.</span>Panel<span class="token punctuation">;</span>\n<span class="token keyword">const</span> TabNav <span class="token operator">=</span> Tabs<span class="token punctuation">.</span>Nav<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> containerStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n  background<span class="token punctuation">:</span> <span class="token string">\'#f5f5f5\'</span><span class="token punctuation">,</span>\n  height<span class="token punctuation">:</span> <span class="token string">\'100px\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> tabsData <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token string">\'Sporttrey320\'</span><span class="token punctuation">,</span>\n    actived<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'足球\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token string">\'Sporttrey307\'</span><span class="token punctuation">,</span>\n    actived<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'篮球\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token string">\'Sporttrey327\'</span><span class="token punctuation">,</span>\n    actived<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'aa球\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">NormalTab</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    activeId<span class="token punctuation">:</span> <span class="token string">\'forecast\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token parameter">id</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      activeId<span class="token punctuation">:</span> id\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> activeId <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>containerStyle<span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Tabs activeId<span class="token operator">=</span><span class="token punctuation">{</span>activeId<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"方案"</span> id<span class="token operator">=</span><span class="token string">"forecast"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div<span class="token operator">></span>方案<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"战绩"</span> id<span class="token operator">=</span><span class="token string">"history"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div<span class="token operator">></span>战绩<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"赔率"</span> id<span class="token operator">=</span><span class="token string">"odds"</span> visable<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div<span class="token operator">></span>赔率<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">RoundTab</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    activeId<span class="token punctuation">:</span> <span class="token string">\'forecast\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token parameter">id</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      activeId<span class="token punctuation">:</span> id\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> activeId <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>containerStyle<span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Tabs activeId<span class="token operator">=</span><span class="token punctuation">{</span>activeId<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"round"</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"方案"</span> id<span class="token operator">=</span><span class="token string">"forecast"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div<span class="token operator">></span>方案<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"战绩"</span> id<span class="token operator">=</span><span class="token string">"history"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div<span class="token operator">></span>战绩<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabPanel label<span class="token operator">=</span><span class="token string">"赔率"</span> id<span class="token operator">=</span><span class="token string">"odds"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>div<span class="token operator">></span>赔率<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>TabPanel<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">TabsComp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>默认用法<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>NormalTab <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>圆形Tab<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>RoundTab <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"caf-demo-title"</span><span class="token operator">></span>单独使用Nav<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>div\n          style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n            width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span>\n            padding<span class="token punctuation">:</span> <span class="token string">\'10px 20px\'</span><span class="token punctuation">,</span>\n            margin<span class="token punctuation">:</span> <span class="token string">\'20px auto\'</span><span class="token punctuation">,</span>\n            background<span class="token punctuation">:</span> <span class="token string">\'#3f77f6\'</span><span class="token punctuation">,</span>\n            boxSizing<span class="token punctuation">:</span> <span class="token string">\'border-box\'</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n          <span class="token operator">&lt;</span>TabNav tabsData<span class="token operator">=</span><span class="token punctuation">{</span>tabsData<span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"card"</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>p<span class="token operator">></span>\n          当需要隐藏掉某个tab但里面涉及的功能需要保留时，使用visable将该tab标签隐藏掉，需要配合activeId\n          更改\n        <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}});