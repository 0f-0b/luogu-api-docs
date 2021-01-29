# 记录 API

## 列出记录

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /record/list</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>RecordListParams</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ records: List&lt;RecordBase&gt;; }&gt;</code>)</td>
  </tr>
</table>

## 获取记录

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /record/:id</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ _contentOnly: any; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;RecordData&gt;</code>)</td>
  </tr>
</table>

## 获取可下载的数据点

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /fe/api/record/queryDownloadableTestcase/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ testcaseId: number | null; }</code>)</td>
  </tr>
</table>

## 获取数据点内容

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/record/downloadTestcase/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ testcaseId: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: { input: string; output: string; }; }</code>)</td>
  </tr>
</table>
