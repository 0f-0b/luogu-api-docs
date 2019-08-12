# Themes API

## List themes

### Request

```
GET /theme/list?_contentOnly=1
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| page | `number` | ✓ |
| orderBy | `string` | ✓ |
| order | `string` | ✓ |
| type | `string` | ✓ |

### Response Type

```
application/json: DataResponse<ThemeListData>
```

## Get theme

### Request

```
GET /theme/design/:id?_contentOnly=1
```

### Response Type

```
application/json: DataResponse<ThemeData>
```
