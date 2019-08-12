# Records API

## List records

### Request

```
GET /record/list?_contentOnly=1
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| page | `number` | ✓ |
| pid | `string` | ✓ |
| user | `string` | ✓ |
| status | `number` | ✓ |
| language | `number` | ✓ |
| orderBy | `number` | ✓ |

### Response Type

```
application/json: DataResponse<RecordListData>
```

## Get record

### Request

```
GET /record/:id?_contentOnly=1
```

### Response Type

```
application/json: DataResponse<RecordData>
```
