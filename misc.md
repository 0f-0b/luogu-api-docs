# 杂项

## 获取 CSRF 令牌

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>text/html</code> (可以通过 <code>document.querySelector("meta[name=csrf-token]").content</code> 获取)</td>
  </tr>
</table>

## 获取配置

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /_lfe/config</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>ConfigResponse</code>)</td>
  </tr>
</table>

## 获取标签

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /_lfe/tags</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>TagsResponse</code>)</td>
  </tr>
</table>

## 获取咕值排名

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /ranking</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>GetRankingListParams</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ rankList: List&lt;Rating&gt;; }&gt;</code>)</td>
  </tr>
</table>

## 获取通知

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /user/notification</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>GetNotificationsParams</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;NotificationsData&gt;</code>)</td>
  </tr>
</table>

## 获取广告

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/qiaFan/getFan/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ advertisement: { image: Image; url: string; id: number; }; }</code>)</td>
  </tr>
</table>

## 冬日绘版内容

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /paintboard/board</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>text/plain</code></td>
  </tr>
</table>

## 冬日绘版更新 token

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /paintboard/resetToken </code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code>(<code>{ token: string }</code>)</td>
  </tr>
</table>
注：不需要 CSRF 令牌。

## 冬日绘版更新检测

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET wss://ws.luogu.com.cn/ws </code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td>自己意会</td>
  </tr>
</table>

