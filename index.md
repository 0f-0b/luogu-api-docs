# Luogu API Documentation

For definitions of types, see [luogu-api.d.ts](luogu-api.d.ts).

## Problems

### List problems

#### Request

```
GET /problem/list?_contentOnly=1
```

#### Parameters

| Key | Type | Optional |
|-|-|-|
| page | `number` | ✓ |
| keyword | `string` | ✓ |
| content | `boolean` | ✓ |
| orderBy | `string` | ✓ |
| order | `string` | ✓ |
| type | `string` | ✓ |
| tag | `string` | ✓ |

#### Response Type

```ts
APIResponse<ProblemListData>
```

### Get problem

#### Request

```
GET /problem/:pid?_contentOnly=1
```

#### Response Type

```ts
APIResponse<ProblemData>
```

## Contests

### List public contests

#### Request

```
GET /contest/list?_contentOnly=1
```

#### Response Type

```ts
APIResponse<ContestListData>
```

### Get contest

#### Request

```
GET /contest/:id?_contentOnly=1
```

#### Response Type

```ts
APIResponse<ContestData>
```
