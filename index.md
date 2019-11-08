# Luogu API Documentation

For definitions of types, see [luogu-api.d.ts](luogu-api.d.ts).

All `POST` requests must have a header field named `X-CSRF-Token`, which is documented [here](misc.md#get-csrf-token).

* [Problems](problems.md)
* [Contests](contests.md)
* [Records](records.md)
* [Posts](posts.md)
* [Activities](activities.md)
* [Users](users.md)
* [Chat](chat.md)
* [Themes](themes.md)
* [Images](images.md)
* [Pastes](pastes.md)
* [Blog](blog.md)
* [Authentication](auth.md)
* [Miscellaneous](misc.md)

## Example

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
