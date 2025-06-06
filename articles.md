# 专栏 API

## 列出文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /article</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ category?: number; page?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LentilleDataResponse&lt;ArticleListData&gt;</code>)</td>
  </tr>
</table>

## 列出用户文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/article/find</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>ArticleListParams</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ articles: List&lt;Article&gt; }</code>)</td>
  </tr>
</table>

## 列出创建的文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /article/mine</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>CreatedArticleListParams</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LentilleDataResponse&lt;CreatedArticleListData&gt;</code>)</td>
  </tr>
</table>

## 列出收藏的文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /article/favored</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ favorites: List&lt;{ time: number; article: Article }&gt; }</code>)</td>
  </tr>
</table>

## 获取文章

**注**: 此处的域名为 `www.luogu.com`。

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /article/:lid</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LentilleDataResponse&lt;ArticleData&gt;</code>)</td>
  </tr>
</table>

## 列出合集文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /article/collection/:id</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LentilleDataResponse&lt;ArticleCollectionData&gt;</code>)</td>
  </tr>
</table>

## 获取可投稿的官方合集

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /article/:lid/availableCollection</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ collections: ArticleCollectionSummary[] }</code>)</td>
  </tr>
</table>

## 创建文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/article/new</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>EditArticleRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ article: ArticleDetails }</code>)</td>
  </tr>
</table>

## 编辑文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/article/edit/:lid</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>EditArticleRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ article: ArticleDetails }</code>)</td>
  </tr>
</table>

## 删除文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/article/delete/:lid</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ lid: string }</code>)</td>
  </tr>
</table>

## 批量修改文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/article/batchEdit</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>BatchEditArticleRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ lids: string[] }</code>)</td>
  </tr>
</table>

## 收藏文章

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/article/favor/:lid</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ remove?: unknown }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ lid: string }</code>)</td>
  </tr>
</table>

## 赞/踩文章

**注**：和原博客 API 不同，此处通过 URL 而非请求主体传参。

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/article/vote/:lid</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ vote: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ voted: number; upvotes: number }</code>)</td>
  </tr>
</table>

## 申请全站推荐

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/article/requestPromotion/:lid</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><!-- TODO --></td>
  </tr>
</table>

## 撤回全站推荐

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/article/withdrawPromotion/:lid</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><!-- TODO --></td>
  </tr>
</table>

## 获取评论

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /article/:lid/replies</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ sort?: string; after?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ replySlice: Comment[] }</code>)</td>
  </tr>
</table>

## 发表评论

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /article/:lid/reply</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ content: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ reply: Comment }</code>)</td>
  </tr>
</table>

## 删除评论

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /article/:lid/deleteReply/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ id: number }</code>)</td>
  </tr>
</table>
