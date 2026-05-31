# 剪贴板 API

## 列出剪贴板

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /paste</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ pastes: List&lt;Paste&gt; }&gt;</code>)</td>
  </tr>
</table>

## 获取剪贴板

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /paste/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ paste: Paste }&gt;</code>)</td>
  </tr>
</table>

## 创建剪贴板

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /paste/new</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ data?: string; public?: boolean }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ id: string }</code>)</td>
  </tr>
</table>

## 编辑剪贴板

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /paste/edit/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ data?: string; public?: boolean }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ id: string }</code>)</td>
  </tr>
</table>

## 删除剪贴板

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /paste/delete/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ id: string }</code>)</td>
  </tr>
</table>
