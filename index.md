# 洛谷 API 文档

不方便直接列出的类型定义在 [luogu-api.d.ts](luogu-api.d.ts)。

对于所有请求：

- 文本编码为 UTF-8。
- 头字段 `user-agent` 的值不能含有子串 `python-requests`（大小写不敏感）。

对于非 `GET` 请求：

- 头字段 `referer` 的值为 `https://www.luogu.com.cn/`。
- 需要头字段 `x-csrf-token`，值为未失效的
  [CSRF 令牌](misc#获取-csrf-令牌)（除非在请求主体中给出）。

对于响应主体类型为 `DataResponse` 的请求：

- 需要参数 `_contentOnly`（值任意）或头字段 `x-luogu-type`（值为
  `content-only`）。

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
- [博客](blog)
- [身份验证](auth)
- [杂项](misc)

## 范例

### `GET` 请求

列出主题库中标题含有“模板”的题目。

```js
await fetch("https://www.luogu.com.cn/problem/list?type=P&keyword=模板", {
  headers: [
    ["x-luogu-type", "content-only"],
  ],
});
```

### `POST` 请求

向[此文档的编者](https://www.luogu.com.cn/user/206953)发送一条内容为“Hi”的私信。

```js
await fetch("https://www.luogu.com.cn/api/chat/new", {
  headers: [
    ["content-type", "application/json"],
    ["referer", "https://www.luogu.com.cn/"],
    ["x-csrf-token", document.querySelector("meta[name=csrf-token]").content],
  ],
  body: JSON.stringify({
    user: 206953,
    content: "Hi",
  }),
  method: "POST",
});
```
