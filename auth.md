# Authentication API

## Get captcha image

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /api/verify/captcha</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>image/jpeg</code></td>
  </tr>
</table>

## Send verification code

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/verify/sendVerificationCode</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>SendVerificationCodeRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Register

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/auth/register</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>RegisterRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Login

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/auth/userPassLogin</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>LoginRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>LoginResponse</code>)</td>
  </tr>
</table>

## Logout

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /api/auth/logout</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ uid: number; }</code>)</td>
  </tr>
</table>

## Unlock

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/auth/unlock</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ code: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ redirectTo: string; }</code>)</td>
  </tr>
</table>

## Lock

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /api/auth/lock</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ uid: number; }</code>)</td>
  </tr>
</table>

## Get unlock mode

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /auth/unlock</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ _contentOnly: 1; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ mode: string; }&gt;</code>)</td>
  </tr>
</table>
