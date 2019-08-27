exports.ids = [62];
exports.modules = {

/***/ "JHx0":
/***/ (function(module, exports) {

module.exports = "module.exports = \"<h1>Steps - 步骤条</h1> <h2>引入</h2> <pre><code class=language-jsx><span class=hljs-keyword>import</span> { Steps } <span class=hljs-keyword>from</span> <span class=hljs-string>'components'</span>;\\n</code></pre> <h2>配置项</h2> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> <th>备选值</th> <th>是否必须</th> </tr> </thead> <tbody> <tr> <td>prefix</td> <td>自定义类名</td> <td>string</td> <td><code>'caf-steps'</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>step</td> <td>当前步骤，从0开始计算，可在<code>Step</code>中通过<code>status</code>覆盖</td> <td>number</td> <td><code>0</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>status</td> <td>当前步骤状态</td> <td>string</td> <td><code>'process'</code></td> <td><code>'pend'</code>,<code>'process'</code>,<code>'finish'</code>,<code>'error'</code></td> <td>❌</td> </tr> <tr> <td>direction</td> <td>步骤条方向</td> <td>string</td> <td><code>'horizontal'</code></td> <td><code>'vertical'</code>,<code>'horizontal'</code></td> <td>❌</td> </tr> <tr> <td>isDecimalInd</td> <td>是否以下标(从1开始)显示图标</td> <td>bool</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>icons</td> <td>步骤图标（会被子<code>Step</code> 的<code>icon</code> 属性覆盖）</td> <td><a class=caf-markdown-hover data-desc=\\\"{ pend: union ❌,process: union ❌,finish: union ❌,error: union ❌ }\\\">custom</a></td> <td>-</td> <td>-</td> <td>❌</td> </tr> </tbody> </table> <h3>Step 配置项</h3> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> <th>备选值</th> <th>是否必须</th> </tr> </thead> <tbody> <tr> <td>prefix</td> <td>自定义类名</td> <td>string</td> <td><code>'caf-step'</code></td> <td>-</td> <td>❌</td> </tr> <tr> <td>status</td> <td>指定步骤状态，默认根据父级<code>Steps</code> 的step 来决定状态</td> <td>string</td> <td><code>'pend'</code></td> <td><code>'pend'</code>,<code>'process'</code>,<code>'finish'</code>,<code>'error'</code></td> <td>❌</td> </tr> <tr> <td>title</td> <td>标题</td> <td>string/element/node</td> <td>-</td> <td>-</td> <td>✅</td> </tr> <tr> <td>desc</td> <td>详情描述</td> <td>string/element/node</td> <td>-</td> <td>-</td> <td>❌</td> </tr> <tr> <td>icons</td> <td>步骤图标</td> <td><a class=caf-markdown-hover data-desc=\\\"{ pend: union ❌,process: union ❌,finish: union ❌,error: union ❌ }\\\">custom</a></td> <td>-</td> <td>-</td> <td>❌</td> </tr> </tbody> </table> \";"

/***/ })

};;
//# sourceMappingURL=62.chunk.66464.js.map