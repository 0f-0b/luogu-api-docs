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

## Get user from name

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
