# Miscellaneous

## Get CSRF token

### Request

```
GET /
```

### Response

```
text/html: document.querySelector("meta[name=csrf-token]").content
```

## Get ranking list

### Request

```
GET /ranking?_contentOnly=1
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| page | `number` | ✓ |
| orderBy | `number` | ✓ |

### Response

```
application/json: DataResponse<RankingListData>
```

## Get notifications

```
GET /user/notification?_contentOnly=1
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| type | `number` | ✓ |
| page | `number` | ✓ |

### Response

```
application/json: DataResponse<NotificationsData>
```

## Punch

### Request

```
GET /index/ajax_punch
```

### Response

```
application/json: HTMLResponse
```
