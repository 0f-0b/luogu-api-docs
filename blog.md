# Blog API

## Get articles

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /api/blog/lists</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>GetArticlesRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; data: List&lt;Article&gt;; }</code>)</td>
  </tr>
</table>

## Get comments

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /api/blog/replies/:id</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; data: List&lt;LReply&gt;; }</code>)</td>
  </tr>
</table>

## Add comment

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/blog/reply/:id</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ content: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; }</code>)</td>
  </tr>
</table>

## Vote on article

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/blog/vote/:id</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ Type: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; data: number; }</code>)</td>
  </tr>
</table>

## Delete comment

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /blogAdmin/article/deleteComment/:id</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ "reply-id": number; "csrf-token": string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; data: string; }</code>)</td>
  </tr>
</table>
