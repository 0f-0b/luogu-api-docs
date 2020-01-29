# Images API

## List images

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /image</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ user: number; content: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ImageListData&gt;</code>)</td>
  </tr>
</table>

## Get image

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /api/image/detail/:id</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ image: Image; }</code>)</td>
  </tr>
</table>

## Generate upload parameters

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /api/image/generateUploadLink</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ watermarkType: number; captcha: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>GenerateUploadParametersResponse</code>)</td>
  </tr>
</table>

## Delete image

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/image/delete</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ images: string[]; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>
