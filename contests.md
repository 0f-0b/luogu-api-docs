# Contests API

## List public contests

### Request

```
GET /contest/list?_contentOnly=1
```

### Response

```
application/json: DataResponse<ContestListData>
```

## Get contest

### Request

```
GET /contest/:id?_contentOnly=1
```

### Response

```
application/json: DataResponse<ContestData>
```

## Get scoreboard

### Request

```
GET /fe/api/contest/scoreboard/:id
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| page | `number` | ✓ |

### Response

```
application/json: GetScoreboardAPIResponse
```

## Get joined contests

### Request

```
GET /fe/api/user/joinedContests
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| page | `number` | ✓ |

### Response

```
application/json: GetJoinedContestsAPIResponse
```

## Join contest

### Request

```
POST /fe/api/contest/join/:id
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| code | `string` | ✓ |

### Response

```
application/json: IDResponse
```
