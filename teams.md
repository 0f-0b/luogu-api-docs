# 团队 API

## 获取团队

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /team/:id</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: any; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;TeamData&gt;</code>)</td>
  </tr>
</table>

## 列出团队题目

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /fe/api/team/problems/:id</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ problems: List&lt;Problem&gt;; }</code>)</td>
  </tr>
</table>
