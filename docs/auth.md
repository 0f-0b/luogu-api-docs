# 身份验证 API

**注**: `_uid` 和 `__client_id` 是有关会话状态的 cookie。本页面部分接口可能要求从 `/` 以外的特定路径[获取 CSRF 令牌](misc#获取-csrf-令牌)。

## 获取图片验证码

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /lg4/captcha</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>image/jpeg</code></td>
  </tr>
</table>

## 发送注册验证码

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /auth/motp/to</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ endpoint: number, exist: number }</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ endpoint: string, captcha: string }</code>)</td>
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
    <td><code>POST /auth/finish-signup</code></td>
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

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /do-auth/password</code></td>
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

## 通过 OpenID 登录

**注**: 重定向到对应的认证页面。

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /openid/:id/connect</code></td>
  </tr>
</table>

## 登出

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /auth/logout</code></td>
  </tr>
</table>

## 锁定

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /auth/lock</code></td>
  </tr>
</table>

## 使用 TOTP 解锁

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /do-auth/totp</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ code: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LoginResponse</code>)</td>
  </tr>
</table>

## 发送一次性验证码

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /auth/motp/request</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ endpoint: number }</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ captcha: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 使用一次性验证码解锁

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /do-auth/motp</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ code: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LoginResponse</code>)</td>
  </tr>
</table>

## 获取解锁方式

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /auth/unlock</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ mode: string }&gt;</code>)</td>
  </tr>
</table>
