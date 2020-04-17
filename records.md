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
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: any; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;RecordData&gt;</code>)</td>
  </tr>
</table>

## Get downloadable test case

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /fe/api/record/queryDownloadableTestcase/:id</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ testcaseId: number | null; }</code>)</td>
  </tr>
</table>

## Download test case

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/record/downloadTestcase/:id</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ testcaseId: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; data: { input: string; output: string; }; }</code>)</td>
  </tr>
</table>
