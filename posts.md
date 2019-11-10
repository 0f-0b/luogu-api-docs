# Posts API

## Get sent posts

### Request

```
GET /fe/api/user/userPosts
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| page | `number` | |
| orderBy | `string` | |

### Response

```
application/json: GetPostsAPIResponse
```

## Add reply

### Request

```
POST /api/discuss/reply/:id
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| content | `string` | |
| verify | `string` | |

### Response

```
application/json: APIResponse<[]>
```

## Delete reply

### Request

```
DELETE /api/discuss/deleteReply/:id
```

### Response

```
application/json: APIResponse<[]>
```

## Report post

### Request

```
POST /api/report/post
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| relevantID | `number` | |
| reason | `string` | |

### Response

```
application/json: APIResponse<string>
```
