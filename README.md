# luogu-api-docs

洛谷（luogu.com.cn）非官方 API 文档。

## 文档结构

```
├── docs/                    # Markdown 文档
│   ├── index.md             # 总览与通用约定
│   ├── problems.md          # 题目 API
│   ├── problem-sets.md      # 题单 API
│   ├── contests.md          # 比赛 API
│   ├── records.md           # 记录 API
│   ├── discussions.md       # 讨论 API
│   ├── activities.md        # 动态 API
│   ├── users.md             # 用户 API
│   ├── teams.md             # 团队 API
│   ├── chat.md              # 私信 API
│   ├── articles.md          # 专栏 API
│   ├── blog.md              # 博客 API
│   ├── themes.md            # 主题 API
│   ├── images.md            # 图片 API
│   ├── ide.md               # IDE API
│   ├── pastes.md            # 剪贴板 API
│   ├── auth.md              # 身份验证 API
│   ├── misc.md              # 杂项 API
│   └── ws.md                # WebSocket API
├── openapi/                 # OpenAPI 3.1 规范
│   ├── openapi.yaml         # 根文件
│   ├── paths/               # 按 API 分组的路径定义
│   └── components/          # 共享 Schema、参数、安全方案
└── luogu-api.d.ts           # TypeScript 类型定义
```

## 快速开始

### 获取题目列表（GET）

```bash
curl -G "https://www.luogu.com.cn/problem/list" \
  --header "x-lentille-request: content-only" \
  --data-urlencode "type=P" \
  --data-urlencode "keyword=模板"
```

### 发送私信（POST）

```bash
curl -X POST "https://www.luogu.com.cn/api/chat/new" \
  --header "content-type: application/json" \
  --header "referer: https://www.luogu.com.cn/" \
  --header "x-csrf-token: YOUR_CSRF_TOKEN" \
  --cookie "_uid=YOUR_UID; __client_id=YOUR_CLIENT_ID" \
  --data '{"user":206953,"content":"Hi"}'
```

## 通用约定

- 文本编码为 UTF-8
- `user-agent` 不能含有子串 `python-requests`（忽略大小写），也不能以 `mozilla/` 开头
- 非 GET 请求需要 `referer: https://www.luogu.com.cn/` 和 `x-csrf-token` 头
- CSRF 令牌从页面 HTML 的 `<meta name="csrf-token">` 获取

## 许可证

[Unlicense](UNLICENSE)
