webpackJsonp([49],{"CBW/":function(s){s.exports='import { Grid, Icon } from \'cafune\';\nimport { Component } from \'preact\';\nconst { Item } = Grid;\nimport IconList from \'../icon/list\';\n\nexport default class GridComp extends Component {\n  render() {\n    return (\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-block"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title"</span>&gt;</span>正常使用<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Grid</span>&gt;</span>\n            {IconList.map(item =&gt; (\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item}</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">{item}</span> /&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{item}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n              <span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            ))}\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span>\n\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title"</span>&gt;</span>无边框<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">border</span>=<span class="hljs-string">{false}</span>&gt;</span>\n            {IconList.map(item =&gt; (\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item}</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">{item}</span> /&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{item}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n              <span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            ))}\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span>\n\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title"</span>&gt;</span>不居中显示<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">center</span>=<span class="hljs-string">{false}</span>&gt;</span>\n            {IconList.map(item =&gt; (\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item}</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">{item}</span> /&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{item}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n              <span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            ))}\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span>\n\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caf-demo-title"</span>&gt;</span>设置边距<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">gutter</span>=<span class="hljs-string">{20}</span>&gt;</span>\n            {IconList.map(item =&gt; (\n              <span class="hljs-tag">&lt;<span class="hljs-name">Item</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item}</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">{item}</span> /&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{item}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n              <span class="hljs-tag">&lt;/<span class="hljs-name">Item</span>&gt;</span>\n            ))}\n          <span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    );\n  }\n}\n'}});
//# sourceMappingURL=49.chunk.9248f.js.map