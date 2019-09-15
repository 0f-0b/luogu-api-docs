# Discussions API

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

## Report discussion

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
