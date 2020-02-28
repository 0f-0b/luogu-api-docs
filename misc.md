# Miscellaneous

## Get CSRF token

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>text/html</code> (The token can be accessed through <code>document.querySelector("meta[name=csrf-token]").content</code>)</td>
  </tr>
</table>

## Get configuration

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /_lfe/config</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>ConfigResponse</code>)</td>
  </tr>
</table>

## Get ranking list

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /ranking</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>GetRankingListRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ rankList: List&lt;Rating&gt;; }&gt;</code>)</td>
  </tr>
</table>

## Get notifications

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /user/notification</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>GetNotificationsRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;NotificationsData&gt;</code>)</td>
  </tr>
</table>
