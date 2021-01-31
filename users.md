# 用户 API

## 获取用户

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /user/:uid</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;UserData&gt;</code>)</td>
  </tr>
</table>

## 根据 UID 或名字搜索用户

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/user/search</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ keyword: string; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ users: [UserInfo | null]; }</code>)</td>
  </tr>
</table>

## 列出关注

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/user/followings</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ user: number; page?: number; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ users: List&lt;User&gt;; }</code>)</td>
  </tr>
</table>

## 列出粉丝

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/user/followers</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ user: number; page?: number; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ users: List&lt;User&gt;; }</code>)</td>
  </tr>
</table>

## 获取黑名单

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/user/blacklist</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ user: number; page?: number; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ users: List&lt;User&gt;; }</code>)</td>
  </tr>
</table>

## 获取设置

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /user/setting</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;UserSettingsData&gt;</code>)</td>
  </tr>
</table>

## 更新设置

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/user/updateSetting</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ settings: UserSettings; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 更新签名

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/user/updateSlogan</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ slogan: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 更新介绍

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/user/updateIntroduction</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ introduction: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 更新封面

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/user/updateHeaderImage</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ imageID: string | null; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 绑定 RemoteJudge

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/user/bindVjudgeAccount</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>BindRemoteJudgeAccountRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 解除绑定 RemoteJudge

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/user/unbindVjudgeAccount</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ oj: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 绑定 OpenID

**注**: 重定向到对应的认证页面。

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/openid/connect/:id</code></td>
  </tr>
</table>

## 解除绑定 OpenID

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/user/unbindOpenId/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>
