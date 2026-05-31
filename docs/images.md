# 图片 API

## 列出图片

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /image</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ user: number; content: string }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ImageListData&gt;</code>)</td>
  </tr>
</table>

## 获取图片

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/image/detail/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ image: Image }</code>)</td>
  </tr>
</table>

## 生成上传参数

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/image/generateUploadLink</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ watermarkType: number; captcha: string }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>GenerateUploadParametersResponse</code>)</td>
  </tr>
</table>

## 删除图片

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/image/delete</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ images: string[] }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>
