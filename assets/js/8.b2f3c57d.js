(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{586:function(_,t,v){_.exports=v.p+"assets/img/lianlu.9d3d4c33.png"},587:function(_,t,v){_.exports=v.p+"assets/img/http.dbe767ad.png"},588:function(_,t,v){_.exports=v.p+"assets/img/http2.9418efe3.png"},589:function(_,t,v){_.exports=v.p+"assets/img/tcp2.e86c347b.png"},590:function(_,t,v){_.exports=v.p+"assets/img/tcp1.fbc0952e.png"},591:function(_,t,v){_.exports=v.p+"assets/img/tcp3.95bc5cbd.png"},592:function(_,t,v){_.exports=v.p+"assets/img/tcp4.f061ab73.png"},593:function(_,t,v){_.exports=v.p+"assets/img/tcp5.93014fcc.png"},594:function(_,t,v){_.exports=v.p+"assets/img/tcp8.d753f04d.png"},595:function(_,t,v){_.exports=v.p+"assets/img/tcp10.fd4d773e.png"},596:function(_,t,v){_.exports=v.p+"assets/img/tcp9.3aa74262.png"},597:function(_,t,v){_.exports=v.p+"assets/img/tcp11.eeeb98f2.png"},598:function(_,t,v){_.exports=v.p+"assets/img/tcpby.24afc166.png"},599:function(_,t,v){_.exports=v.p+"assets/img/http1.9313c5fc.png"},692:function(_,t,v){"use strict";v.r(t);var s=v(13),p=Object(s.a)({},(function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"网络协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络协议"}},[_._v("#")]),_._v(" 网络协议")]),_._v(" "),s("h1",{attrs:{id:"一-概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-概念"}},[_._v("#")]),_._v(" 一，概念")]),_._v(" "),s("p",[s("strong",[_._v("网络协议")]),_._v("指的是计算机网络中互相通信的对等实体之间交换信息时所必须遵守的规则的集合。")]),_._v(" "),s("h1",{attrs:{id:"二-iso-osi七层模型-标准化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-iso-osi七层模型-标准化"}},[_._v("#")]),_._v(" 二，ISO/OSI七层模型 标准化")]),_._v(" "),s("h2",{attrs:{id:"_1-物理层-比特流-有没有通电"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-物理层-比特流-有没有通电"}},[_._v("#")]),_._v(" 1. 物理层： -- 比特流 -- 有没有通电")]),_._v(" "),s("p",[_._v("实际最终信号的传输是通过物理层实现的。比如 快递寄送过程中的交通工具，就相当于我们的物理层，例如汽车，火车，飞机，船。")]),_._v(" "),s("h2",{attrs:{id:"_2-数据链路层-帧-交换机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据链路层-帧-交换机"}},[_._v("#")]),_._v(" 2. 数据链路层：-- 帧 -- 交换机")]),_._v(" "),s("p",[_._v("只有物理层远远不够，0和1究竟会怎样去组合，不同的划分代表了什么意思，这就需要链路层来处理，将0和1划分为具有意义的数据帧进行传送。")]),_._v(" "),s("p",[_._v("一组电信号为一个数据包，一个数据包包含了标、 data、结束祯。数据包的传输就是一块一块网卡之间的传输。")]),_._v(" "),s("p",[_._v("以太网协议：")]),_._v(" "),s("p",[s("img",{attrs:{src:v(586),alt:"lianlu"}})]),_._v(" "),s("p",[_._v("链路层：数据包从这个网卡发送到另一个网卡。计算机的网卡有一个唯一的标识，网卡的MAC地址很重要（类似人的身份证，修改不了）。")]),_._v(" "),s("p",[_._v("网卡想要知道局域网内另一个网卡的位置，很难，只有使用广播协议的方式，发送给本局域网内所有的网卡，网卡自己去判断要这个信息还是不要。")]),_._v(" "),s("h2",{attrs:{id:"_3-网络层-ip协议。-包-路由器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-网络层-ip协议。-包-路由器"}},[_._v("#")]),_._v(" 3. 网络层：IP协议。 -- 包 -- 路由器")]),_._v(" "),s("p",[_._v("广播是低效的。而且局限在发送者的子网络，那么要想找到别的子网络MAC地址，就需要Internet将他们相互链接一起。网络层就出现了，让每一台主机都有一个除了MAC地址外的另外一个重要的东西：IP地址。IP地址能帮助我们确定计算机所在的子网络。")]),_._v(" "),s("p",[_._v("理解下面几个概念：")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("IP地址 1-255 IPv4 32位的整数。为了方便，转化为每8位一组，一共四组； 2进制的8位，只有2的32次方个ip地址。不在同一个子网络，ip可以相同。一台机子一般通过ip和MAC地址去找另外一台机子。 IPv6。")])]),_._v(" "),s("li",[s("p",[_._v("子网掩码：可以判断是不是需要同一个子网。")])]),_._v(" "),s("li",[s("p",[_._v("DNS是属于应用层的，属于域名，DNS可以定位于ip。")])]),_._v(" "),s("li",[s("p",[_._v("ARP：地址解析协议，即ARP（Address Resolution Protocol），是根据IP地址获取物理地址的一个TCP/IP协议。")])])]),_._v(" "),s("p",[s("img",{attrs:{src:v(587),alt:"http"}})]),_._v(" "),s("ul",[s("li",[_._v("IP数据包：")])]),_._v(" "),s("p",[s("img",{attrs:{src:v(588),alt:"ip"}})]),_._v(" "),s("h2",{attrs:{id:"_4-传输层-实现端到端的传输-tcp-udp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-传输层-实现端到端的传输-tcp-udp"}},[_._v("#")]),_._v(" 4. 传输层：实现端到端的传输： TCP / UDP...")]),_._v(" "),s("p",[_._v("有了以上三层就可以建立通信了，可是那些数据究竟如何给电脑里面的应用程序呢？这是就需要端口（port）。通过不同端口，服务器将数据分给不同的应用程序（进程）。传输层就是建立端口到端口的通信。网络层主要是主机到主机的通信。只要确定了端口和主机就实现交流了。")]),_._v(" "),s("p",[_._v("传输层常用以下两种协议：")]),_._v(" "),s("h3",{attrs:{id:"tcp协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议"}},[_._v("#")]),_._v(" TCP协议")]),_._v(" "),s("p",[_._v("是一种面向连接的、可靠的协议，可类比打电话：双方拿起电话互通身份后就建立了连接，然后说话就行了，双方说的话都保证能听到，并且是按说话的顺序听到的，说完话挂机断开连接。即TCP传输的双方需要首先建立连接，之后由TCP协议保证数据收发的可靠性，丢失的数据包自动重发，上层应用程序收到的总是可靠数据流，通讯之后关闭连接。")]),_._v(" "),s("ul",[s("li",[_._v("需要建立连接")]),_._v(" "),s("li",[_._v("流失重发")]),_._v(" "),s("li",[_._v("比较可靠")]),_._v(" "),s("li",[_._v("面向连接")])]),_._v(" "),s("p",[_._v("TCP数据包：")]),_._v(" "),s("p",[s("img",{attrs:{src:v(589),alt:"tcp2"}})]),_._v(" "),s("p",[_._v("一个完整的TCP协议头：")]),_._v(" "),s("p",[s("img",{attrs:{src:v(590),alt:"tcp1"}})]),_._v(" "),s("h3",{attrs:{id:"udp协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp协议"}},[_._v("#")]),_._v(" UDP协议")]),_._v(" "),s("p",[_._v("不面向连接，也不保证可靠性，可类比寄信：写好信放到邮筒里，既不能保证信件在邮递过程中不会丢失，也不能保证信件是按顺序寄到目的地的。使用UDP协议的应用程序需要自己完成丢包重发、消息排序等工作。")]),_._v(" "),s("p",[_._v("实时通信的一般都是UDP协议。")]),_._v(" "),s("ul",[s("li",[_._v("不需要建立连接")]),_._v(" "),s("li",[_._v("封包比较小，传递速度比较快")]),_._v(" "),s("li",[_._v("传递的数据不保证包不丢失,丢失不重发")]),_._v(" "),s("li",[_._v("不保证顺序")]),_._v(" "),s("li",[_._v("自由度比较高，以上的方法可以自己去实现")]),_._v(" "),s("li",[_._v("面向消息")])]),_._v(" "),s("h3",{attrs:{id:"tcp的三次握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp的三次握手"}},[_._v("#")]),_._v(" TCP的三次握手")]),_._v(" "),s("p",[s("img",{attrs:{src:v(591),alt:"tcp3"}})]),_._v(" "),s("p",[_._v("如上图的聊天方式，如果没有第三次握手，Bob就不知道Alice是不是有空。客户端请求同步，服务端已经确认收到了同步请求， 客户端确认。都在努力的保证数据的可靠。")]),_._v(" "),s("p",[s("strong",[_._v("数据顺序问题：")])]),_._v(" "),s("p",[_._v("但是很难保证回复数据那哪一条是对应哪一条的，如下图：？")]),_._v(" "),s("p",[s("img",{attrs:{src:v(592),alt:"tcp4"}})]),_._v(" "),s("p",[_._v("好像不能很精准的知道哪条回复是针对一个提问看的？解决这个问题的方式就是加一个自增序号，如下图，但是这种方式解决不了同时发送请求。")]),_._v(" "),s("p",[s("img",{attrs:{src:v(593),alt:"tcp5"}})]),_._v(" "),s("p",[_._v("A-B-A-B形式的可以解决，但是A-(AB)-B形式的无法解决。（AB）就是说对方回复的时候，客户端同时又发了一条信息，所以哪个是3？哪个是4？不容易区分。")]),_._v(" "),s("p",[_._v("TCP/IP的解决办法是：")]),_._v(" "),s("ul",[s("li",[_._v("SEQ(Sequence):这个消息发送前一共发送了多少条字节")]),_._v(" "),s("li",[_._v("ACK(Acknowledge)：这个消息发送前一共收到了多少个字节")])]),_._v(" "),s("p",[_._v("所以三次握手就变成了这样：")]),_._v(" "),s("p",[s("img",{attrs:{src:v(594),alt:"tcp8"}})]),_._v(" "),s("ul",[s("li",[s("p",[_._v("第一次握手：")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("客户端会随机一个初始序列号seq=x（client_isn），设置SYN=1 ，表示这是SYN握手报文。")])]),_._v(" "),s("li",[s("p",[_._v("然后就可以把这个 SYN 报文发送给服务端了，表示向服务端发起连接，之后客户端处于 同步已发送 状态。")])])])]),_._v(" "),s("li",[s("p",[_._v("第二次握手：")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("服务端收到客户端的 SYN 报文后，也随机一个初始序列号（server_isn）(seq=y)，设置ack=x+1, 表示收到了客户端的x之前的数据，希望客户端下次发送的数据从x+1开始。")])]),_._v(" "),s("li",[s("p",[_._v("设置 SYN=1 和 ACK=1。表示这是一个SYN握手和ACK确认应答报文。")])]),_._v(" "),s("li",[s("p",[_._v("最后把该报文发给客户端，该报文也不包含应用层数据，之后服务端处于 同步已接收 状态。")])])])]),_._v(" "),s("li",[s("p",[_._v("第三次握手：")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("客户端收到服务端报文后，还要向服务端回应最后一个应答报文，将ACK置为 1 ，表示这是一个应答报文。ack=y+1 ，表示收到了服务器的y之前的数据，希望服务器下次发送的数据从y+1开始。")])]),_._v(" "),s("li",[s("p",[_._v("最后把报文发送给服务端，这次报文可以携带数据，之后客户端处于连接已建立状态。服务器收到客户端的应答报文后，也进入连接已建立状态。")])])])])]),_._v(" "),s("p",[_._v("简单理解：")]),_._v(" "),s("ol",[s("li",[s("p",[_._v("客户端发送 SYN；")])]),_._v(" "),s("li",[s("p",[_._v("服务端收到 SYN 后，回复 SYN+ACK；")])]),_._v(" "),s("li",[s("p",[_._v("客户端收到 SYN+ACK 后，回复 ACK。")])])]),_._v(" "),s("p",[s("strong",[_._v("为什么要三次握手，而不是两次握手/四次握手?")])]),_._v(" "),s("ul",[s("li",[s("p",[_._v("三次握手才可以阻止历史重复连接（主要原因）")])]),_._v(" "),s("li",[s("p",[_._v("三次握手才可以同步双方的初始序列号")])]),_._v(" "),s("li",[s("p",[_._v("三次握手才可以避免重复建立连接")])])]),_._v(" "),s("p",[s("strong",[_._v("阻止历史重复连接")])]),_._v(" "),s("p",[_._v("网络环境是错综复杂的，往往并不是如我们期望的一样:先发送的数据包，就先到达目标主机。可能会由于网络拥堵等乱七八糟的原因，会使得后发送的数据包先到达目标主机\n那么这种情况下 TCP 三次握手是如何避免的呢？")]),_._v(" "),s("p",[s("img",{attrs:{src:v(595),alt:"tcp10"}})]),_._v(" "),s("p",[s("strong",[_._v("避免重复建立连接")])]),_._v(" "),s("p",[_._v("如果只有「两次握手」，当客户端的 SYN 请求连接在网络中阻塞，客户端没有接收到 ACK 报文，就会重新发送 SYN ，由于没有第三次握手，服务器不清楚客户端是否收到了自己发送的建立连接的 ACK 确认信号，所以每收到一个 SYN 就会建立一个新的连接，服务器就会建立多个冗余的无效链接，造成不必要的资源浪费。")]),_._v(" "),s("p",[s("img",{attrs:{src:v(596),alt:"tcp9"}})]),_._v(" "),s("p",[s("strong",[_._v("同步双方初始序列号")])]),_._v(" "),s("p",[s("img",{attrs:{src:v(597),alt:"tcp11"}})]),_._v(" "),s("p",[_._v("两次握手只保证了客户端的初始序列号被服务端成功接收，没办法保证服务端的初始序列号被客户端确认接收。")]),_._v(" "),s("p",[_._v("四次握手当然能够可靠的同步双方的初始化序号，但由于第二步和第三步可以优化成一步，所以就成了「三次握手」，即四次握手没有必要，优化成了三次握手。")]),_._v(" "),s("h3",{attrs:{id:"tcp四次挥手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp四次挥手"}},[_._v("#")]),_._v(" TCP四次挥手")]),_._v(" "),s("p",[_._v("四次挥手是浏览器和服务器断开连接的一种方式，目的是断开连接，结束数据传输的过程。")]),_._v(" "),s("ul",[s("li",[_._v("第一次挥手：浏览器告诉服务器，我的数据传输完了，我要断开连接了。")]),_._v(" "),s("li",[_._v("第二次挥手：服务器告诉浏览器，好的我知道你要断开连接了，但我还有数据没传完，我传完再告诉你")]),_._v(" "),s("li",[_._v("第三次挥手：服务器的数据传完了，告诉浏览器自己也要断开连接了")]),_._v(" "),s("li",[_._v("第四次挥手：浏览器告诉服务器，我收到了你的两次挥手报文，可以成功断开。")])]),_._v(" "),s("p",[_._v("至此，双方数据都传输完了，并知道对方做好了断开连接的准备，也知道对方知道自己的情况。可以正式断开了。\n"),s("img",{attrs:{src:v(598),alt:"tcpby"}})]),_._v(" "),s("p",[s("strong",[_._v("为什么挥手需要四次？")])]),_._v(" "),s("p",[_._v("服务器收到对方的FIN报文时，很可能还有数据没发完，需要等到数据发送完毕之后才向客户端发送FIN报文，但是又不能让客户端等太久，就先发ACK告诉客户端我收到了你的FIN释放连接请求，客户端收到ACK之后便不会重复发送断开连接的请求。等到服务器数据传输完毕后，才会发FIN释放连接报文。")]),_._v(" "),s("p",[_._v("另外，如果服务端确定没有数据需要发给客户端，那么当然是可以把 FIN 和 ACK 合并成一个包，四次挥手的过程就成了三次。")]),_._v(" "),s("h3",{attrs:{id:"四次挥手数据包丢失"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手数据包丢失"}},[_._v("#")]),_._v(" 四次挥手数据包丢失")]),_._v(" "),s("p",[s("strong",[_._v("第一次挥手丢失了，会发生什么？")])]),_._v(" "),s("p",[_._v("客户端重传 FIN 报文，超过阈值之后进入close 状态。")]),_._v(" "),s("p",[s("strong",[_._v("第二次挥手丢失了，会发生什么？")])]),_._v(" "),s("p",[_._v("第二次挥手发的是ACK 报文，ACK 报文是不会重传的，所以如果服务端的第二次挥手丢失了，还是客户端这边超时重传第一次挥手的FIN 报文，直到收到服务端的第二次挥手的ACK报文，或者达到最大的重传次数进入close状态。")]),_._v(" "),s("p",[s("strong",[_._v("第三次挥手丢失了，会发生什么？")])]),_._v(" "),s("p",[_._v("服务端重发 FIN 报文，超过阈值之后进入close 状态。")]),_._v(" "),s("p",[s("strong",[_._v("第四次挥手丢失了，会发生什么？")])]),_._v(" "),s("p",[_._v("同样的。第四次挥手的ACK不会重传，所以服务端会重传FIN。\n如果客户端在2MSL时间内能收到重传FIN，则客户端可以重传ACK，否则客户端关闭，服务端也会在重传FIN达到一定次数之后关闭。")]),_._v(" "),s("h2",{attrs:{id:"_5-会话层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-会话层"}},[_._v("#")]),_._v(" 5. 会话层：")]),_._v(" "),s("p",[_._v("会话层是建立在传输层之上，利用传输层提供的服务，是应用建立和维持绘画，并能是绘画获得同步。会话层使用检验点可使通信绘画在通信失效时从校验点继续恢复通信。")]),_._v(" "),s("ul",[s("li",[_._v("建立会话")]),_._v(" "),s("li",[_._v("保持会话")]),_._v(" "),s("li",[_._v("断开会话")])]),_._v(" "),s("h2",{attrs:{id:"_6-表示层-数据transform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-表示层-数据transform"}},[_._v("#")]),_._v(" 6. 表示层：数据transform")]),_._v(" "),s("p",[_._v("该层可提供一种标准表示形式，用于将计算机内部的多种数据格式转换成通信中采用的标准表示形式。如：序列化，压缩和加密，确保数据发送出去后，可以被接受者理解。")]),_._v(" "),s("h2",{attrs:{id:"_7-应用层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-应用层"}},[_._v("#")]),_._v(" 7. 应用层：")]),_._v(" "),s("p",[_._v("提供应用服务，负责应用之间的数据沟通。HTTP 80, HTTPS 443根节点的证书, FTP, TELNET, SMTP...，这部分内容放在http协议单独讲。")]),_._v(" "),s("p",[_._v("看下一个数据封包长什么样？")]),_._v(" "),s("p",[s("img",{attrs:{src:v(599),alt:"http1"}})]),_._v(" "),s("h1",{attrs:{id:"三-tcp-ip模型-4层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-tcp-ip模型-4层"}},[_._v("#")]),_._v(" 三，TCP/IP模型（4层）")]),_._v(" "),s("p",[_._v("实际上没有分那么细，一般喜欢分为下面四层：")]),_._v(" "),s("ul",[s("li",[_._v("应用层")]),_._v(" "),s("li",[_._v("传输层")]),_._v(" "),s("li",[_._v("网络层")]),_._v(" "),s("li",[_._v("网络接口/访问层")])])])}),[],!1,null,null,null);t.default=p.exports}}]);