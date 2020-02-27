# Luogu API Documentation

**English** \| [中文](https://bingogyz.github.io/luogu-api-docs/)

Definitions of types are in [luogu-api.d.ts](https://github.com/sjx233/luogu-api-docs/blob/master/luogu-api.d.ts).

* [Problems](problems.md)
* [Contests](contests.md)
* [Records](records.md)
* [Posts](posts.md)
* [Activities](activities.md)
* [Users](users.md)
* [Chat](chat.md)
* [Themes](themes.md)
* [Images](images.md)
* [IDE](ide.md)
* [Pastes](pastes.md)
* [Blog](blog.md)
* [Authentication](auth.md)
* [Miscellaneous](misc.md)

## Examples

### `GET` requests

```js
fetch("/user/notification?_contentOnly=1&type=3");
```

### `POST` requests

**Note**: All `POST` requests require a header field named [`X-CSRF-Token`](misc.md#get-csrf-token) to be included.

```js
fetch("/api/chat/new", {
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content
  },
  body: JSON.stringify({
    user: 206953,
    content: "Hi"
  }),
  method: "POST"
});
```
