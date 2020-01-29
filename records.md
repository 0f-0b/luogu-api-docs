# Records API

## List records

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /record/list</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>RecordListRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ records: List&lt;RecordBase&gt;; }&gt;</code>)</td>
  </tr>
</table>

## Get record

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /record/:id</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: 1; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;RecordData&gt;</code>)</td>
  </tr>
</table>
