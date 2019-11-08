# Activities API

## Get activities of user

### Request

```
GET /api/feed/list
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| user | `number` | |
| page | `number` | ✓ |

### Response

```
application/json: GetActivitiesAPIResponse
```

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

## Report activity

### Request

```
POST /api/report/feed
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
