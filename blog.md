# Blog API

## List articles

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
