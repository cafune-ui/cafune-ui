webpackJsonp([34],{sG9k:function(s){s.exports='import { Switch } from \'cafune\';\nimport { Component } from \'preact\';\n\nexport default class SwitchComp extends Component {\n  state = {\n    isActived1: true,\n    isActived2: false\n  };\n  onChange = (name, isWait = false) =&gt; {\n    return actives =&gt; {\n      if (isWait) {\n        setTimeout(() =&gt; {\n          this.setState({\n            [name]: actives\n          });\n        }, 1000);\n      } else {\n        this.setState({\n          [name]: actives\n        });\n      }\n    };\n  };\n  render({}, { isActived1, isActived2 }) {\n    return (\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">""</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>默认用法<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">isActived</span>=<span class="hljs-string">{isActived1}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.onChange(</span>\'<span class="hljs-attr">isActived1</span>\')} /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>禁用状态<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span>\n          <span class="hljs-attr">isActived</span>=<span class="hljs-string">{isActived1}</span>\n          <span class="hljs-attr">isDisabled</span>\n          <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.onChange(</span>\'<span class="hljs-attr">isActived1</span>\')}\n        /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>自定义尺寸<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span>\n          <span class="hljs-attr">isActived</span>=<span class="hljs-string">{isActived1}</span>\n          <span class="hljs-attr">size</span>=<span class="hljs-string">"20px"</span>\n          <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.onChange(</span>\'<span class="hljs-attr">isActived1</span>\')}\n        /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>加载状态<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span>\n          <span class="hljs-attr">isActived</span>=<span class="hljs-string">{isActived1}</span>\n          <span class="hljs-attr">isLoading</span>=<span class="hljs-string">{true}</span>\n          <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.onChange(</span>\'<span class="hljs-attr">isActived1</span>\')}\n        /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>自定义颜色<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span>\n          <span class="hljs-attr">isActived</span>=<span class="hljs-string">{isActived1}</span>\n          <span class="hljs-attr">activedColor</span>=<span class="hljs-string">"#2e4e7e"</span>\n          <span class="hljs-attr">inActivedColor</span>=<span class="hljs-string">"#bbcdc5"</span>\n          <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.onChange(</span>\'<span class="hljs-attr">isActived1</span>\')}\n        /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>异步切换（1秒后才切换）<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span>\n          <span class="hljs-attr">isActived</span>=<span class="hljs-string">{isActived2}</span>\n          <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.onChange(</span>\'<span class="hljs-attr">isActived2</span>\', <span class="hljs-attr">true</span>)}\n        /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    );\n  }\n}\n'}});
//# sourceMappingURL=34.chunk.0c65b.js.map