# 用户 API

## 获取用户

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /user/:uid</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LentilleDataResponse&lt;UserData&gt;</code>)</td>
  </tr>
</table>

## 获取用户（旧）

**注**: 该旧接口能访问不可见（如被封禁）的用户，但不返回做题热度图和等级分历史。

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/user/info/:uid</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ user: LegacyUserDetails & UserStats & Maybe&lt;LegacySelfDetails&gt; }</code>)</td>
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
    <td><code>{ keyword: string }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ users: [UserSummary | null] }</code>)</td>
  </tr>
</table>

## 获取练习情况

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /user/:uid/practice</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LentilleDataResponse&lt;UserPracticeData&gt;</code>)</td>
  </tr>
</table>

## 获取历史等级分

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/rating/elo</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ user: number; page?: number; limit?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ records: List&lt;EloRating&gt; }</code>)</td>
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
    <td><code>{ user: number; page?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ users: List&lt;User &amp; UserStats&gt; }</code>)</td>
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
    <td><code>{ user: number; page?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ users: List&lt;User &amp; UserStats&gt; }</code>)</td>
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
    <td><code>{ user: number; page?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ users: List&lt;User &amp; UserStats&gt; }</code>)</td>
  </tr>
</table>

## 获取账号设置

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /user/setting</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LentilleDataResponse&lt;UserAccountsData&gt;</code>)</td>
  </tr>
</table>

## 获取偏好设置

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /user/setting/preference</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LentilleDataResponse&lt;UserPreferencesData&gt;</code>)</td>
  </tr>
</table>

## 更新偏好设置

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /user/setting/preference/update</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>UserPreferences</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ setting: UserPreferences }</code>)</td>
  </tr>
</table>

## 获取奖项认证设置

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /user/setting/prize</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LentilleDataResponse&lt;UserPrizeSettingsData&gt;</code>)</td>
  </tr>
</table>

## 获取安全设置

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /user/setting/security</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LentilleDataResponse&lt;UserSecuritySettingsData&gt;</code>)</td>
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
    <td><code>application/json</code> (<code>{ slogan: string }</code>)</td>
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
    <td><code>application/json</code> (<code>{ introduction: string }</code>)</td>
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
    <td><code>application/json</code> (<code>{ imageID: string | null }</code>)</td>
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
    <td><code>application/json</code> (<code>{ oj: string }</code>)</td>
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
    <td><code>GET /openid/:id/bind</code></td>
  </tr>
</table>

## 解绑 OpenID

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
