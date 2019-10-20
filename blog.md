# Blog API

## Get articles

### Request

```
GET /api/blog/lists
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| uid | `number` | |
| keyword | `string` | ✓ |
| type | `string` | ✓ |
| page | `number` | ✓ |

### Response

```
application/json: APIResponse<List<Article>>
```

## Get comments

### Request

```
GET /api/blog/replies/:id
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| page | `number` | ✓ |

### Response

```
application/json: APIResponse<List<ArticleComment>>
```

## Add comment

### Request

```
POST /api/blog/reply/:id
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| content | `string` | |

### Response

```
application/json: StatusResponse
```

## Vote on article

### Request

```
POST /api/blog/vote/:id
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| Type | `number` | |

### Response

```
application/json: APIResponse<number>
```

## Delete comment

### Request

```
POST /blogAdmin/article/deleteComment/:id
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| reply-id | `number` | |

### Response

```
application/json: APIResponse<string>
```
