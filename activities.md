# Activities API

## Get watching activities

### Request

```
GET /feed/watching
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| page | `number` | ✓ |

### Response

```
text/html
```

## Get all activities

### Request

```
GET /feed/all
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| page | `number` | ✓ |

### Response

```
text/html
```

## Post activity

### Request

```
POST /api/feed/postBenben
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| content | `string` | |

### Response

```
application/json: APIResponse<ActivityData>
```

## Delete activity

### Request

```
POST /api/feed/delete/:id
```

### Response

```
application/json: APIResponse<[]>
```
