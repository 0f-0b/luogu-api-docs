# 洛谷 API 文档

不方便直接列出的类型定义在 [luogu-api.d.ts](https://github.com/sjx233/luogu-api-docs/blob/master/luogu-api.d.ts)。

文本编码均为 UTF-8。所有非 `GET` 请求都需要包含头字段 <code>x-csrf-token: <a href="misc.md#获取-csrf-令牌">&lt;CSRF 令牌&gt;</a></code>（除非在请求主体中给出）和 `referer: https://www.luogu.com.cn/`。响应主体类型为 `DataResponse<any>` 的请求需要包含名为 `_contentOnly` 的参数（值任意）或头字段 `x-luogu-type: content-only`。

* [题目](problems.md)
* [题单](problem-sets.md)
* [比赛](contests.md)
* [记录](records.md)
* [讨论](discussions.md)
* [动态](activities.md)
* [用户](users.md)
* [团队](teams.md)
* [私信](chat.md)
* [主题](themes.md)
* [图片](images.md)
* [IDE](ide.md)
* [剪贴板](pastes.md)
* [博客](blog.md)
* [身份验证](auth.md)
* [杂项](misc.md)

## 范例

### `GET` 请求

列出主题库中标题含有“【模板】”的题目。

```js
await fetch("https://www.luogu.com.cn/problem/list?type=P&keyword=%E3%80%90%E6%A8%A1%E6%9D%BF%E3%80%91", {
  headers: {
    "x-luogu-type": "content-only"
  }
});
```

### `POST` 请求

向[此文档的作者](https://www.luogu.com.cn/user/206953)发送一条内容为“Hi”的私信。假设 CSRF 令牌保存在 `token` 中。

```js
await fetch("https://www.luogu.com.cn/api/chat/new", {
  headers: {
    "content-type": "application/json",
    "x-csrf-token": token,
    "referer": "https://www.luogu.com.cn/"
  },
  body: JSON.stringify({
    user: 206953,
    content: "Hi"
  }),
  method: "POST"
});
```
