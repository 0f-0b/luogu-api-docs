# Activities API

## Get activities of user

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /api/feed/list</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ user: number; page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ feeds: List&lt;Activity&gt;; }</code>)</td>
  </tr>
</table>

## Get watching activities

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /feed/watching</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>text/html</code></td>
  </tr>
</table>

## Get all activities

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /feed/all</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>text/html</code></td>
  </tr>
</table>

## Post activity

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/feed/postBenben</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ content: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; data: ActivityData; }</code>)</td>
  </tr>
</table>

## Delete activity

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/feed/delete/:id</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; data: []; }</code>)</td>
  </tr>
</table>

## Report activity

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/report/feed</code></td>
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
