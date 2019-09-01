webpackJsonp([75],{"8rGX":function(t){t.exports="module.exports = \"<h1>Layout - 布局</h1> <h2>引入</h2> <pre class=language-jsx><code class=language-jsx><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> Layout <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'components'</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre> <h2>配置项</h2> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> <th>备选值</th> <th>是否必须</th> </tr> </thead> <tbody> <tr> <td>prefix</td> <td>自定义类名</td> <td>string</td> <td><code>'caf-layout'</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>direction</td> <td>项目定位方向</td> <td>string</td> <td>-</td> <td><code>'row'</code>,<code>'row-reverse'</code>,<code>'column'</code>,<code>'column-reverse'</code></td> <td>❌</td> </tr> <tr> <td>wrap</td> <td>子元素换行方式</td> <td>string</td> <td>-</td> <td><code>'nowrap'</code>,<code>'wrap'</code>,<code>'wrap-reverse'</code></td> <td>❌</td> </tr> <tr> <td>justify</td> <td>子元素在主轴上的对齐方式（对应justify-content）</td> <td>string</td> <td>-</td> <td><code>'start'</code>,<code>'end'</code>,<code>'center'</code>,<code>'between'</code>,<code>'around'</code></td> <td>❌</td> </tr> <tr> <td>align</td> <td>子元素在交叉轴上的对齐方式（对应align-items）</td> <td>string</td> <td>-</td> <td><code>'start'</code>,<code>'center'</code>,<code>'end'</code>,<code>'baseline'</code>,<code>'stretch'</code></td> <td>❌</td> </tr> <tr> <td>alignContent</td> <td>有多根轴线时的对齐方式（对应align-content）</td> <td>string</td> <td>-</td> <td><code>'start'</code>,<code>'end'</code>,<code>'center'</code>,<code>'between'</code>,<code>'around'</code>,<code>'stretch'</code></td> <td>❌</td> </tr> <tr> <td>gutter</td> <td>列元素之间的间距</td> <td>string/number</td> <td>-</td> <td>-</td> <td>❌</td> </tr> </tbody> </table> <h3>LayoutItem 配置项</h3> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> <th>备选值</th> <th>是否必须</th> </tr> </thead> <tbody> <tr> <td>prefix</td> <td>自定义类名</td> <td>string</td> <td><code>'caf-layout-item'</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>col</td> <td>列元素跨越宽度</td> <td>string/number</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>offset</td> <td>偏移距离</td> <td>string/number</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>tag</td> <td>自定义元素标签</td> <td>string</td> <td><code>'div'</code></td> <td>-</td> <td>❌</td> </tr> </tbody> </table> \";"}});