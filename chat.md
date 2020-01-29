# Chat API

## List chat sessions

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /chat</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: 1; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ChatListData&gt;</code>)</td>
  </tr>
</table>

## Get messages

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /api/chat/record</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ user: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ messages: List&lt;Message&gt;; }</code>)</td>
  </tr>
</table>

## Send message

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/chat/new</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ user: number; content: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Delete message

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/chat/delete</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ id: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Clear unread notifications

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/chat/clearUnread</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ user: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>
