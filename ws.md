# WebSocket API

[获取配置](misc#获取配置)并从响应主体的 `.ws.server` 属性得到需连接的 WebSocket URI。连接中以 JSON 文本形式传输以下消息，其中 <var>初始数据</var>、<var>接收数据</var> 和 <var>发送数据</var> 的类型在具体频道的文档说明。

## 请求加入频道

<table>
  <tr>
    <th align="right">方向</th>
    <td>客户端 → 服务端</td>
  </tr>
  <tr>
    <th align="right">内容</th>
    <td><code>ServerboundJoinChannelMessage</code></td>
  </tr>
</table>

## 离开频道

<table>
  <tr>
    <th align="right">方向</th>
    <td>客户端 → 服务端</td>
  </tr>
  <tr>
    <th align="right">内容</th>
    <td><code>ServerboundDisconnectChannelMessage</code></td>
  </tr>
</table>

## 发送数据

<table>
  <tr>
    <th align="right">方向</th>
    <td>客户端 → 服务端</td>
  </tr>
  <tr>
    <th align="right">内容</th>
    <td><code>ServerboundDataMessage&lt;<var>发送数据</var>&gt;</code></td>
  </tr>
</table>

## 成功加入频道

客户端请求加入频道且校验通过后服务器发送。

<table>
  <tr>
    <th align="right">方向</th>
    <td>服务端 → 客户端</td>
  </tr>
  <tr>
    <th align="right">内容</th>
    <td><code>ClientboundJoinResultMessage&lt;<var>初始数据</var>&gt;</code></td>
  </tr>
</table>

## 心跳

对于客户端已加入的每个频道，服务器每 90 秒左右发送。

<table>
  <tr>
    <th align="right">方向</th>
    <td>服务端 → 客户端</td>
  </tr>
  <tr>
    <th align="right">内容</th>
    <td><code>ClientboundHeartbeatMessage</code></td>
  </tr>
</table>

## 被踢出频道

另一客户端持相同非空 `exclusive_key` 加入同一频道后服务器发送。

<table>
  <tr>
    <th align="right">方向</th>
    <td>服务端 → 客户端</td>
  </tr>
  <tr>
    <th align="right">内容</th>
    <td><code>ClientboundExclusiveKickoffMessage</code></td>
  </tr>
</table>

## 接收数据

<table>
  <tr>
    <th align="right">方向</th>
    <td>服务端 → 客户端</td>
  </tr>
  <tr>
    <th align="right">内容</th>
    <td><code>ClientboundServerBroadcastMessage &amp; <var>接收数据</var></code></td>
  </tr>
</table>
