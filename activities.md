# 动态 API

## 获取用户动态

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/feed/list</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ user?: number; page?: number; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ feeds: List&lt;Activity&gt;; }</code>)</td>
  </tr>
</table>

## 获取关注的用户的动态

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/feed/watching</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page?: number; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: ActivityData[]; }</code>)</td>
  </tr>
</table>

## 发布动态

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/feed/postBenben</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ content: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: ActivityData; }</code>)</td>
  </tr>
</table>

## 删除动态

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/feed/delete/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: []; }</code>)</td>
  </tr>
</table>

## 举报动态

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/report/feed</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ relevantID: number; reason: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: string; }</code>)</td>
  </tr>
</table>
