webpackJsonp([78],{qtEI:function(t){t.exports="module.exports = \"<h1>Checkbox - 复选框</h1> <h2>引入</h2> <pre><code class=language-jsx><span class=hljs-keyword>import</span> { Checkbox } <span class=hljs-keyword>from</span> <span class=hljs-string>'components'</span>;\\n</code></pre> <h2>配置项</h2> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> <th>备选值</th> <th>是否必须</th> </tr> </thead> <tbody> <tr> <td>prefix</td> <td>自定义类名</td> <td>string</td> <td><code>'caf-checkbox'</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>icons</td> <td>自定义图标</td> <td><a class=caf-markdown-hover data-desc=\\\"{ actived: string ❌,inactive: string ❌ }\\\">custom</a></td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>value</td> <td>复选框值</td> <td>string/number</td> <td>-</td> <td>-</td> <td>✅</td> </tr> <tr> <td>id</td> <td>复选框 id</td> <td>string</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>checked</td> <td>默认是否选中</td> <td>bool</td> <td><code>false</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>checkedColor</td> <td>选中状态颜色</td> <td>string</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>disabled</td> <td>是否处于禁用状态</td> <td>bool</td> <td><code>false</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>handleChange</td> <td>值变化时回调事件</td> <td>func</td> <td>-</td> <td>-</td> <td>❌</td> </tr> </tbody> </table> <h3>CheckboxGroup 配置项</h3> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> <th>备选值</th> <th>是否必须</th> </tr> </thead> <tbody> <tr> <td>prefix</td> <td>自定义类名</td> <td>string</td> <td><code>'caf-checkbox-group'</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>model</td> <td>默认选中项目的id</td> <td>arrayOf</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>disabled</td> <td>是否禁用所有复选框</td> <td>bool</td> <td><code>false</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>maxSelect</td> <td>最多可选数</td> <td>number</td> <td><code>0</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>handleChange</td> <td>复选框组变化回调，参数为所有选中的数据</td> <td>func</td> <td>-</td> <td>-</td> <td>❌</td> </tr> </tbody> </table> \";"}});