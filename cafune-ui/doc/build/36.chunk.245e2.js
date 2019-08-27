webpackJsonp([36],{BQiJ:function(s){s.exports='<span class="hljs-keyword">import</span> { Steps, Button } <span class="hljs-keyword">from</span> <span class="hljs-string">\'cafune\'</span>;\n<span class="hljs-keyword">const</span> { Step } = Steps;\n<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'preact\'</span>;\n\n<span class="hljs-keyword">const</span> stepsArr = [\n  { <span class="hljs-attr">title</span>: <span class="hljs-string">\'Step 1\'</span>, <span class="hljs-attr">desc</span>: <span class="hljs-string">\'this is the step 1\'</span> },\n  {\n    <span class="hljs-attr">title</span>: <span class="hljs-string">\'Step 2\'</span>,\n    <span class="hljs-attr">icons</span>: { <span class="hljs-attr">pend</span>: <span class="hljs-string">\'search\'</span>, <span class="hljs-attr">finish</span>: <span class="hljs-string">\'notice\'</span> },\n    <span class="hljs-attr">status</span>: <span class="hljs-string">\'error\'</span>\n  },\n  {\n    <span class="hljs-attr">title</span>: <span class="hljs-string">\'Step 3\'</span>,\n    <span class="hljs-attr">icon</span>: { <span class="hljs-attr">error</span>: <span class="hljs-string">\'search\'</span>, <span class="hljs-attr">process</span>: <span class="hljs-string">\'notice\'</span> },\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">\'now is the step 3\'</span>\n  },\n  { <span class="hljs-attr">title</span>: <span class="hljs-string">\'Step 4\'</span>, <span class="hljs-attr">desc</span>: <span class="hljs-string">\'this is the step 4\'</span> },\n  { <span class="hljs-attr">title</span>: <span class="hljs-string">\'Step 5\'</span> }\n];\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">StepsComp</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{\n  state = {\n    <span class="hljs-attr">current</span>: <span class="hljs-number">3</span>\n  };\n  nextStep = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n    <span class="hljs-keyword">const</span> { current } = <span class="hljs-keyword">this</span>.state;\n    <span class="hljs-keyword">this</span>.setState({\n      <span class="hljs-attr">current</span>: current === stepsArr.length ? <span class="hljs-number">0</span> : current + <span class="hljs-number">1</span>\n    });\n  };\n  renderSteps() {\n    <span class="hljs-keyword">return</span> stepsArr.map(<span class="hljs-function">(<span class="hljs-params">item, ind</span>) =&gt;</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Step</span> {<span class="hljs-attr">...item</span>} <span class="hljs-attr">key</span>=<span class="hljs-string">{ind}</span> /&gt;</span>);\n  }\n  render({}, { current }) {\n    return (\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-block"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{this.nextStep}</span>&gt;</span>下一步<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title"</span>&gt;</span>默认用法<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Steps</span> <span class="hljs-attr">step</span>=<span class="hljs-string">{current}</span>&gt;</span>{this.renderSteps()}<span class="hljs-tag">&lt;/<span class="hljs-name">Steps</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title"</span>&gt;</span>数字进度<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Steps</span> <span class="hljs-attr">step</span>=<span class="hljs-string">{current}</span> <span class="hljs-attr">isDecimalInd</span>&gt;</span>\n          {this.renderSteps()}\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Steps</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title"</span>&gt;</span>垂直方向<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Steps</span> <span class="hljs-attr">step</span>=<span class="hljs-string">{current}</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">"vertical"</span>&gt;</span>\n          {this.renderSteps()}\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Steps</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    );\n  }\n}\n</span>'}});
//# sourceMappingURL=36.chunk.245e2.js.map