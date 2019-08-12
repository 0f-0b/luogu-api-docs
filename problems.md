# Problems API

## List problems

### Request

```
GET /problem/list?_contentOnly=1
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| page | `number` | ✓ |
| keyword | `string` | ✓ |
| content | `boolean` | ✓ |
| orderBy | `string` | ✓ |
| order | `string` | ✓ |
| type | `string` | ✓ |
| tag | `string` | ✓ |

### Response Type

```
application/json: DataResponse<ProblemListData>
```

## Get problem

### Request

```
GET /problem/:pid?_contentOnly=1
```

### Response Type

```
application/json: DataResponse<ProblemData>
```
