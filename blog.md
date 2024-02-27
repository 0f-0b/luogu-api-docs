# 博客 API

## 列出所有文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/blog/userBlogs</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ user?: number; page?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ blogs: List&lt;BlogSummary&gt; }</code>)</td>
  </tr>
</table>

## 列出未隐藏的文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/blog/lists</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>BlogListParams</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: List&lt;Blog&gt; }</code>)</td>
  </tr>
</table>

## 获取文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/blog/detail/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: List&lt;LegacyBlog&gt; }</code>)</td>
  </tr>
</table>

## 创建文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /blogAdmin/article/post_new</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>EditBlogRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: number }</code>)</td>
  </tr>
</table>

## 编辑文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /blogAdmin/article/post_edit/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>EditBlogRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: number }</code>)</td>
  </tr>
</table>

## 删除文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/blog/delete/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number }</code>)</td>
  </tr>
</table>

## 批量更新文章状态

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /blogAdmin/article/list</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ pageType: "list" }</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ method: "update"; "blog-id": number[]; "edit-status": number; "csrf-token": string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>text/html</code></td>
  </tr>
</table>

## 批量恢复/删除回收站中的文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /blogAdmin/article/list</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ pageType: "trash" }</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ method: "recover" | "delete"; "blog-id": number[]; "csrf-token": string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>text/html</code></td>
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
    <td><code>{ page?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: List&lt;Comment&gt; }</code>)</td>
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
    <td><code>application/json</code> (<code>{ content: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; reply: Comment }</code>)</td>
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
    <td><code>application/json</code> (<code>{ Type: number }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: number }</code>)</td>
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
    <td><code>application/x-www-form-urlencoded</code> (<code>{ "reply-id": number; "csrf-token": string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: string }</code>)</td>
  </tr>
</table>
