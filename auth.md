# 身份验证 API

## Get captcha image

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/verify/captcha</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>image/jpeg</code></td>
  </tr>
</table>

## Send verification code

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/verify/sendVerificationCode</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>SendVerificationCodeRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Register

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/auth/register</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>RegisterRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Login

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/auth/userPassLogin</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>LoginRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LoginResponse</code>)</td>
  </tr>
</table>

## Login with OpenID

See [Bind OpenID account](users.md#bind-openid-account).

## Logout

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/auth/logout</code></td>
  </tr>
</table>

## Unlock

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/auth/unlock</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ code: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ redirectTo: string; }</code>)</td>
  </tr>
</table>

## Lock

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/auth/lock</code></td>
  </tr>
</table>

## Get unlock mode

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /auth/unlock</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: any; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ mode: string; }&gt;</code>)</td>
  </tr>
</table>
