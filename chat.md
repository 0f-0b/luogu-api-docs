# Chat API

## List chat sessions

### Request

```
GET /chat?_contentOnly=1
```

### Response

```
application/json: DataResponse<ChatListData>
```

## Get messages

### Request

```
GET /api/chat/record
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| user | `number` | |

### Response

```
application/json: MessagesAPIResponse
```

## Send message

### Request

```
POST /api/chat/new
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| user | `number` | |
| content | `string` | |

### Response

```
application/json: {}
```

## Delete message

### Request

```
POST /api/chat/delete
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| id | `number` | |

### Response

```
application/json: {}
```
