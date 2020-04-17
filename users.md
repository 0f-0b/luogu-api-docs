# Users API

## Get user

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /user/:uid</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: any; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;UserData&gt;</code>)</td>
  </tr>
</table>

## Get user from UID or name

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /fe/api/user/search</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ keyword: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ users: [UserInfo | null]; }</code>)</td>
  </tr>
</table>

## Get followed users

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /fe/api/user/followings</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ user: number; page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ users: List&lt;User&gt;; }</code>)</td>
  </tr>
</table>

## Get followers

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /fe/api/user/followers</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ user: number; page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ users: List&lt;User&gt;; }</code>)</td>
  </tr>
</table>

## Get settings

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /user/setting</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: any; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;UserSettingsData&gt;</code>)</td>
  </tr>
</table>

## Update settings

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/user/updateSetting</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ settings: UserSettings; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Edit slogan

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/user/updateSlogan</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ slogan: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Edit introduction

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/user/updateIntroduction</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ introduction: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Set header image

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/user/updateHeaderImage</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ imageID: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Bind RemoteJudge account

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/user/bindVjudgeAccount</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>BindRemoteJudgeAccountRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Unbind RemoteJudge account

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/user/unbindVjudgeAccount</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ oj: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Bind OpenID account

**Note**: Redirects to the corresponding authorization page.

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /api/openid/connect/:id</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>text/html</code></td>
  </tr>
</table>

## Unbind OpenID account

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/user/unbindOpenId/:id</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>
