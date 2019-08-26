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
GET /ranking
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

## Punch

### Request

```
GET /index/ajax_punch
```

### Response

```
application/json: LegacyResponse<PunchData>
```
