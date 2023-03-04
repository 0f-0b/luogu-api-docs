# 私信 API

## 列出最近联系

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /chat</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ChatListData&gt;</code>)</td>
  </tr>
</table>

## 获取私信

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/chat/record</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ user: number; page?: number; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ messages: List&lt;Message&gt;; }</code>)</td>
  </tr>
</table>

## 发送私信

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/chat/new</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ user: number; content: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 删除私信

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/chat/delete</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ id: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 清除未读私信通知

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/chat/clearUnread</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ user: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>
