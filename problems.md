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

## Submit code

### Request

```
POST /api/problem/submit/:pid
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| code | `string` | |
| lang | `number` | |
| enableO2 | `number` | |
| verify | `string` | |

### Response Type

```
application/json: SubmitCodeAPIResponse
```
