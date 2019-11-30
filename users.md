# Users API

## Get user

### Request

```
GET /user/:uid?_contentOnly=1
```

### Response

```
application/json: DataResponse<UserData>
```

## Get user from UID or name

### Request

```
GET /fe/api/user/search
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| keyword | `string` | |

### Response

```
application/json: GetUserAPIResponse
```

## Get followed users

### Request

```
GET /fe/api/user/followings
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| user | `number` | |
| page | `number` | ✓ |

### Response

```
application/json: GetUsersAPIResponse
```

## Get followers

### Request

```
GET /fe/api/user/followers
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| user | `number` | |
| page | `number` | ✓ |

### Response

```
application/json: GetUsersAPIResponse
```

## Edit slogan

### Request

```
POST /fe/api/user/updateSlogan
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| slogan | `string` | |

### Response

```
application/json: {}
```

## Edit introduction

### Request

```
POST /fe/api/user/updateIntroduction
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| introduction | `string` | |

### Response

```
application/json: {}
```

## Set header image

### Request

```
POST /fe/api/user/updateHeaderImage
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| imageID | `string` | |

### Response

```
application/json: {}
```

## Bind RemoteJudge account

### Request

```
POST /api/user/bindVjudgeAccount
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| username | `string` | |
| password | `string` | |
| oj | `string` | |
| verify | `string` | |

### Response

```
application/json: /* TODO */
```
