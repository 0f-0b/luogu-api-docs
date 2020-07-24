# 身份验证 API

## 获取验证码图片

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

## 发送验证码

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

## 注册

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

## 登录

**注**: 需要包含请求头字段 `Referer: www.luogu.com.cn`。

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

## 用 OpenID 登录

**注**: 见[绑定 OpenID](users.md#绑定-openid)。

## 登出

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/auth/logout</code></td>
  </tr>
</table>

## 锁定

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/auth/lock</code></td>
  </tr>
</table>

## 解锁

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

## 获取解锁方式

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /auth/unlock</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ _contentOnly: any; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ mode: string; }&gt;</code>)</td>
  </tr>
</table>
