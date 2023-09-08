# 讨论 API

## 列出帖子

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /discuss</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ forum?: string; page?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;PostListData&gt;</code>)</td>
  </tr>
</table>

## 列出发布的帖子

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/user/createdPosts</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page?: number; orderBy?: string }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ posts: List&lt;LegacyPost&gt; }</code>)</td>
  </tr>
</table>

## 获取帖子

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /discuss/:id</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page?: number; sort?: string }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;PostData&gt;</code>)</td>
  </tr>
</table>

## 发布帖子

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/discuss/post</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>CreatePostRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: number }</code>)</td>
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
    <td><code>application/json</code> (<code>{ captcha: string; content: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: [] }</code>)</td>
  </tr>
</table>

## 删除帖子

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>DELETE /api/discuss/delete/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: [] }</code>)</td>
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
    <td><code>application/json</code> (<code>{ status: number; data: [] }</code>)</td>
  </tr>
</table>

## 举报帖子

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/report/post</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ relevantID: number; reason: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: string }</code>)</td>
  </tr>
</table>

## 举报回复

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/report/post_reply</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ relevantID: number; reason: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: string }</code>)</td>
  </tr>
</table>
