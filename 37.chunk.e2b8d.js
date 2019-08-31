webpackJsonp([37],{U6WW:function(n){n.exports='<span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper<span class="token punctuation">,</span> Cell <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'cafune\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'preact\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">StepperComp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    val1<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    val2<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    val3<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n    val4<span class="token punctuation">:</span> <span class="token number">1</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">changeHandler</span> <span class="token operator">=</span> <span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token parameter">val</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">:</span> val\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> val1<span class="token punctuation">,</span> val2<span class="token punctuation">,</span> val3<span class="token punctuation">,</span> val4 <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Cell\n          title<span class="token operator">=</span><span class="token string">"基础用法"</span>\n          value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Stepper value<span class="token operator">=</span><span class="token punctuation">{</span>val1<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeHandler</span><span class="token punctuation">(</span><span class="token string">\'val1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>\n          middle\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Cell\n          title<span class="token operator">=</span><span class="token string">"自定义步进"</span>\n          value<span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token operator">&lt;</span>Stepper\n              value<span class="token operator">=</span><span class="token punctuation">{</span>val2<span class="token punctuation">}</span>\n              step<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>\n              onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeHandler</span><span class="token punctuation">(</span><span class="token string">\'val2\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token punctuation">}</span>\n          middle\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Cell\n          title<span class="token operator">=</span><span class="token string">"禁用状态"</span>\n          value<span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token operator">&lt;</span>Stepper\n              value<span class="token operator">=</span><span class="token punctuation">{</span>val2<span class="token punctuation">}</span>\n              step<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>\n              disabled\n              onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeHandler</span><span class="token punctuation">(</span><span class="token string">\'val2\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token punctuation">}</span>\n          middle\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Cell\n          title<span class="token operator">=</span><span class="token string">"限定范围(2-8)"</span>\n          value<span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token operator">&lt;</span>Stepper\n              value<span class="token operator">=</span><span class="token punctuation">{</span>val3<span class="token punctuation">}</span>\n              min<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>\n              max<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span>\n              onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeHandler</span><span class="token punctuation">(</span><span class="token string">\'val3\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token punctuation">}</span>\n          middle\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Cell\n          title<span class="token operator">=</span><span class="token string">"限定整数"</span>\n          value<span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token operator">&lt;</span>Stepper\n              value<span class="token operator">=</span><span class="token punctuation">{</span>val4<span class="token punctuation">}</span>\n              min<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">}</span>\n              integerOnly\n              onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeHandler</span><span class="token punctuation">(</span><span class="token string">\'val4\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token punctuation">}</span>\n          middle\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Cell\n          title<span class="token operator">=</span><span class="token string">"只读"</span>\n          value<span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token operator">&lt;</span>Stepper\n              value<span class="token operator">=</span><span class="token punctuation">{</span>val4<span class="token punctuation">}</span>\n              readOnly\n              onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeHandler</span><span class="token punctuation">(</span><span class="token string">\'val4\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token punctuation">}</span>\n          middle\n        <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}});