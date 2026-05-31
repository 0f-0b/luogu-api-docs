# 洛谷 API 文档

不方便直接列出的类型定义在 [luogu-api.d.ts](luogu-api.d.ts)。

对于所有请求：

- 文本编码为 UTF-8。
- 头字段 `user-agent` 的值不能含有子串 `python-requests`（或其任何大小写形式），也不能以 `mozilla/`（或其任何大小写形式）开头。

对于非 `GET` 请求：

- 头字段 `referer` 的值为 `https://www.luogu.com.cn/`。
- 需要头字段 `x-csrf-token`，值为未失效的 [CSRF 令牌](misc#获取-csrf-令牌)（除非在请求主体中给出）。

对于响应主体类型为 `DataResponse` 的请求：

- 需要参数 `_contentOnly`（值任意）或头字段 `x-luogu-type`（值为 `content-only`）。
- 返回格式为 `{ code, currentTemplate, currentData, currentTitle, currentTheme, currentTime, currentUser }`，数据在 `currentData` 中。

对于响应主体类型为 `LentilleDataResponse` 的请求：

- 需要头字段 `x-lentille-request`（值为 `content-only`）。
- 返回格式为 `{ instance, template, status, locale, data, user, time, theme }`，数据在 `data` 中。

对于返回 HTML 的页面：

- `<script>` 标签内嵌入完整的 JSON 数据，格式同 `LentilleDataResponse`。

## 目录

- [题目](problems)
- [题单](problem-sets)
- [比赛](contests)
- [记录](records)
- [讨论](discussions)
- [动态](activities)
- [用户](users)
- [团队](teams)
- [私信](chat)
- [主题](themes)
- [图片](images)
- [IDE](ide)
- [剪贴板](pastes)
- [专栏](articles)
- [博客](blog)
- [身份验证](auth)
- [杂项](misc)
- [WebSocket](ws)
- [OpenAPI 规范](openapi/openapi.yaml)

## 常见错误

| HTTP 状态码 | 含义 |
|------------|------|
| 200 | 成功（具体业务状态见响应体） |
| 302 | 重定向（如 OpenID 登录） |
| 403 | 权限不足（未登录或无权访问） |
| 404 | 资源不存在或 API 已移除 |
| 429 | 请求频率过高 |

业务层面，部分接口在响应体中使用 `status` 字段表示结果（非零通常表示失败）。

## 范例

### `GET` 请求（JavaScript）

列出主题库中标题含有”模板”的题目。

```js
await fetch(“https://www.luogu.com.cn/problem/list?type=P&keyword=模板”, {
  headers: [
    [“x-lentille-request”, “content-only”],
  ],
});
```

### `GET` 请求（cURL）

```bash
curl -G “https://www.luogu.com.cn/problem/list” \
  --header “x-lentille-request: content-only” \
  --data-urlencode “type=P” \
  --data-urlencode “keyword=模板”
```

### `GET` 请求（Python）

```python
import requests

resp = requests.get(
    “https://www.luogu.com.cn/problem/list”,
    params={“type”: “P”, “keyword”: “模板”},
    headers={“x-lentille-request”: “content-only”},
    cookies={“_uid”: “YOUR_UID”, “__client_id”: “YOUR_CLIENT_ID”},
)
print(resp.json()[“data”])
```

### `POST` 请求（JavaScript）

向[此文档的编者](https://www.luogu.com.cn/user/206953)发送一条内容为”Hi”的私信。

```js
await fetch(“https://www.luogu.com.cn/api/chat/new”, {
  headers: [
    [“content-type”, “application/json”],
    [“referer”, “https://www.luogu.com.cn/”],
    [“x-csrf-token”, document.querySelector(“meta[name=csrf-token]”).content],
  ],
  body: JSON.stringify({
    user: 206953,
    content: “Hi”,
  }),
  method: “POST”,
});
```

### `POST` 请求（cURL）

```bash
curl -X POST “https://www.luogu.com.cn/api/chat/new” \
  --header “content-type: application/json” \
  --header “referer: https://www.luogu.com.cn/” \
  --header “x-csrf-token: YOUR_CSRF_TOKEN” \
  --cookie “_uid=YOUR_UID; __client_id=YOUR_CLIENT_ID” \
  --data '{“user”:206953,”content”:”Hi”}'
```

### WebSocket 连接

监听私信，在日志中记录内容和双方的用户名。

```js
const ws = new WebSocket(“wss://ws.luogu.com.cn/ws”);
ws.onopen = () => {
  ws.send(JSON.stringify({
    channel: “chat”,
    channel_param: `${_feInstance.currentUser.uid}`,
    type: “join_channel”,
  }));
};
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  switch (data._ws_type) {
    case “server_broadcast”: {
      const { message } = data;
      console.log(
        `${message.sender.name} → ${message.receiver.name}: ${message.content}`,
      );
      break;
    }
  }
};
```
