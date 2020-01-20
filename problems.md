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

### Response

```
application/json: DataResponse<ProblemListData>
```

## Get problem

### Request

```
GET /problem/:pid?_contentOnly=1
```

### Response

```
application/json: DataResponse<ProblemData>
```

## Submit code

### Request

```
POST /fe/api/problem/submit/:pid
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| code | `string` | |
| lang | `number` | |
| enableO2 | `number` | ✓ |
| verify | `string` | ✓ |

### Response

```
application/json: APIResponse<SubmitCodeData>
```

## Create problem

### Request

```
POST /api/problem/new
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| name | `string` | |
| background | `string` | |
| describes | `string` | |
| inputformat | `string` | |
| outputformat | `string` | |
| hint | `string` | |
| sample | `[string, string][]` | |
| type | `string` | |
| provider | `number` | |
| flag | `number` | |
| tags | `number[]` | |
| difficulty | `number` | |
| stdcode | `string` | |
| showScore | `number` | |

### Response

```
application/json: APIResponse<string>
```

## Edit problem

### Request

```
POST /api/problem/edit/:pid
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| method | `string` | ✓ |
| name | `string` | |
| background | `string` | |
| describes | `string` | |
| inputformat | `string` | |
| outputformat | `string` | |
| hint | `string` | |
| sample | `[string, string][]` | |
| type | `string` | |
| provider | `number` | |
| flag | `number` | |
| tags | `number[]` | |
| difficulty | `number` | |
| stdcode | `string` | |
| showScore | `number` | |

### Response

```
application/json: APIResponse<string>
```
