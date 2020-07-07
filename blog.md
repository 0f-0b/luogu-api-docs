# 博客 API

## 列出文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/blog/lists</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>GetArticlesRequest</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: List&lt;Article&gt;; }</code>)</td>
  </tr>
</table>

## 获取评论

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/blog/replies/:id</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page?: number; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: List&lt;LReply&gt;; }</code>)</td>
  </tr>
</table>

## 发表评论

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/blog/reply/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ content: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; }</code>)</td>
  </tr>
</table>

## 赞/踩文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/blog/vote/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ Type: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: number; }</code>)</td>
  </tr>
</table>

## 删除评论

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /blogAdmin/article/deleteComment/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ "reply-id": number; "csrf-token": string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: string; }</code>)</td>
  </tr>
</table>
