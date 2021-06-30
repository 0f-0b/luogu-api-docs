# 讨论 API

## 列出讨论

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/discuss</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ forum?: string; page?: number; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: LegacyList&lt;LegacyPost&gt;; }</code>)</td>
  </tr>
</table>

## 列出发起的讨论

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/user/createdPosts</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page?: number; orderBy?: string; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ posts: List&lt;Post&gt;; }</code>)</td>
  </tr>
</table>

## 发起讨论

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/discuss/post</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>CreatePostRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: number; }</code>)</td>
  </tr>
</table>

## 发表回复

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/discuss/reply/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ content: string; captcha: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: []; }</code>)</td>
  </tr>
</table>

## 删除讨论

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>DELETE /api/discuss/delete/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: []; }</code>)</td>
  </tr>
</table>

## 删除回复

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>DELETE /api/discuss/deleteReply/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: []; }</code>)</td>
  </tr>
</table>

## 举报讨论

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/report/post</code></td>
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
