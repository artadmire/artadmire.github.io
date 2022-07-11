(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{701:function(s,t,a){"use strict";a.r(t);var r=a(13),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"前端安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端安全"}},[s._v("#")]),s._v(" 前端安全")]),s._v(" "),a("h2",{attrs:{id:"应考虑哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应考虑哪些"}},[s._v("#")]),s._v(" 应考虑哪些")]),s._v(" "),a("h3",{attrs:{id:"硬件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件"}},[s._v("#")]),s._v(" 硬件")]),s._v(" "),a("ul",[a("li",[s._v("服务器")]),s._v(" "),a("li")]),s._v(" "),a("h3",{attrs:{id:"软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软件"}},[s._v("#")]),s._v(" 软件")]),s._v(" "),a("ul",[a("li",[s._v("前端\n"),a("ul",[a("li",[s._v("加密")]),s._v(" "),a("li",[s._v("校验")]),s._v(" "),a("li",[s._v("程序的抗压能力")])])]),s._v(" "),a("li",[s._v("后端")])]),s._v(" "),a("h2",{attrs:{id:"xss-攻击是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击是什么"}},[s._v("#")]),s._v(" XSS 攻击是什么")]),s._v(" "),a("p",[s._v("XSS (Cross-Site Scripting)，跨站脚本攻击，因为缩写和 CSS重叠，所以只能叫 XSS。跨站脚本攻\n击是指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的非本站点HTML标签或JavaScript进行的一种攻击。")]),s._v(" "),a("p",[s._v("不需要你做任何的登录认证，它会通过合法的操作（比如在url中输入、在评论框中输入），向你的页面注入脚本（可能是js、hmtl代码块等）。")]),s._v(" "),a("h2",{attrs:{id:"xss-攻击类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击类型"}},[s._v("#")]),s._v(" XSS 攻击类型")]),s._v(" "),a("h3",{attrs:{id:"反射性xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反射性xss"}},[s._v("#")]),s._v(" 反射性XSS")]),s._v(" "),a("p",[s._v("反射型 XSS 的攻击步骤：")]),s._v(" "),a("ol",[a("li",[s._v("攻击者构造出特殊的 URL，其中包含恶意代码。")]),s._v(" "),a("li",[s._v("用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。")]),s._v(" "),a("li",[s._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。")]),s._v(" "),a("li",[s._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),s._v(" "),a("p",[s._v("比如：某网站具有搜索功能，该功能通过 URL 参数接收用户提供的搜索词，https://xxx.com/search?query=123，后端接收到url后，会获取url中的参数，拼接在html中返回。")]),s._v(" "),a("p",[s._v("如果说url是带有攻击信息的，如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 服务器在对此 URL 的响应中回显提供的搜索词：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("您搜索的是"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果服务器不对数据进行转义等处理，则攻击者可以构造如下链接进行攻击：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// https://xxx.com/search?query=<img src="empty.png" onerror ="alert(\'xss\')">')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该 URL 将导致以下响应，并运行 alert('xss')：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果有用户请求攻击者的 URL ，则攻击者提供的脚本将在用户的浏览器中执行。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("您搜索的是"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"empty.png"')]),s._v(" onerror "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"alert('xss')\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("input type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'XSS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("搜索"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v('\n  您搜索的关键词是："'),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'XSS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"存储型-xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储型-xss"}},[s._v("#")]),s._v(" 存储型 XSS")]),s._v(" "),a("p",[s._v("存储型 XSS 的攻击步骤：")]),s._v(" "),a("ol",[a("li",[s._v("攻击者将恶意代码提交到目标网站的数据库中。")]),s._v(" "),a("li",[s._v("用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。")]),s._v(" "),a("li",[s._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。")]),s._v(" "),a("li",[s._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 某个评论页，能查看用户评论。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 攻击者将恶意代码当做评论提交，服务器没对数据进行转义等处理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 评论输入：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 则攻击者提供的脚本将在所有访问该评论页的用户浏览器执行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("textarea"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"empty.png"')]),s._v(" onerror "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"alert('xss')\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("textarea"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"dom-型-xss-非持久"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-型-xss-非持久"}},[s._v("#")]),s._v(" DOM 型 XSS(非持久)")]),s._v(" "),a("p",[s._v("DOM 型 XSS 的攻击步骤：")]),s._v(" "),a("ol",[a("li",[s._v("攻击者构造出特殊的 URL，其中包含恶意代码。")]),s._v(" "),a("li",[s._v("用户打开带有恶意代码的 URL。")]),s._v(" "),a("li",[s._v("用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。")]),s._v(" "),a("li",[s._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),s._v(" "),a("p",[s._v("类似反射型，区别在于 DOM 型 XSS 并不会和后台进行交互，前端直接将 URL 中的数据不做处理并动态插入到 HTML 中，是纯粹的前端安全问题，要做防御也只能在客户端上进行防御。XSS型是后端返回了带有攻击性的HTML。")]),s._v(" "),a("h2",{attrs:{id:"xss攻击的危害"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击的危害"}},[s._v("#")]),s._v(" XSS攻击的危害")]),s._v(" "),a("ul",[a("li",[s._v("获取页面数据")]),s._v(" "),a("li",[s._v("获取Cookies")]),s._v(" "),a("li",[s._v("劫持前端逻辑")]),s._v(" "),a("li",[s._v("发送请求")]),s._v(" "),a("li",[s._v("偷取网站的任意数据")]),s._v(" "),a("li",[s._v("偷取用户的资料")]),s._v(" "),a("li",[s._v("偷取用户的秘密和登录态")]),s._v(" "),a("li",[s._v("欺骗用户")])]),s._v(" "),a("h2",{attrs:{id:"防范手段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防范手段"}},[s._v("#")]),s._v(" 防范手段")]),s._v(" "),a("h3",{attrs:{id:"head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[s._v("#")]),s._v(" HEAD")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'X-XSS-Protection'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 禁止XSS过滤")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// http://localhost:3000/?from=<script>alert(3)<\/script> 可以拦截 但伪装一下就不行了开课吧")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("0 禁止XSS过滤。")]),s._v(" "),a("li",[s._v("1 启用XSS过滤（通常浏览器是默认的）。 如果检测到跨站脚本攻击，浏览器将清除页面（删除\n不安全的部分）。")]),s._v(" "),a("li",[s._v("1;mode=block 启用XSS过滤。 如果检测到攻击，浏览器将不会清除页面，而是阻止页面加载。")]),s._v(" "),a("li",[s._v("1; report= (Chromium only)\n启用XSS过滤。 如果检测到跨站脚本攻击，浏览器将清除页面并使用CSP  report-uri 指令的功能\n发送违规报告。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);