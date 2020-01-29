# Posts API

## Get sent posts

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /fe/api/user/userPosts</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>GetPostsRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ posts: List&lt;Post&gt;; }</code>)</td>
  </tr>
</table>

## Add reply

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/discuss/reply/:id</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ content: string; verify?: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; data: []; }</code>)</td>
  </tr>
</table>

## Delete reply

**Note**: Requires `X-CSRF-Token`.

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>DELETE /api/discuss/deleteReply/:id</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; data: []; }</code>)</td>
  </tr>
</table>

## Report post

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/report/post</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ relevantID: number; reason: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; data: string; }</code>)</td>
  </tr>
</table>
