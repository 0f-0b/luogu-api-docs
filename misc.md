# Miscellaneous

## Get CSRF token

### Request

```
GET /
```

### Response Type

```
text/html, document.querySelector("meta[name=csrf-token]").content
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

### Response Type

```
application/json: DataResponse<RankingListData>
```
