# 主题 API

## 列出主题

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /theme/list</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>ThemeListParams</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ themes: List&lt;ThemeDetails&gt; }&gt;</code>)</td>
  </tr>
</table>

## 获取主题

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /theme/design/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ theme: ThemeDetails }&gt;</code>)</td>
  </tr>
</table>

## 应用主题

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /theme/setTheme/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>[]</code>)</td>
  </tr>
</table>

## 创建主题

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /theme/edit/</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>EditThemeRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ id: string }</code>)</td>
  </tr>
</table>

## 编辑主题

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /theme/edit/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>EditThemeRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ id: string }</code>)</td>
  </tr>
</table>

## 删除主题

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /theme/delete/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>[]</code>)</td>
  </tr>
</table>
