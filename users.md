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

## Get settings

### Request

```
GET /user/setting?_contentOnly=1
```

### Response

```
application/json: DataResponse<UserSettingsData>
```

## Update settings

### Request

```
POST /fe/api/user/updateSetting
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| settings | `UserSettings` | |

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
POST /fe/api/user/bindVjudgeAccount
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| oj | `string` | |
| username | `string` | |
| password | `string` | |
| captcha | `string` | |

### Response

```
application/json: {}
```

## Unbind RemoteJudge account

### Request

```
POST /fe/api/user/unbindVjudgeAccount
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| oj | `string` | |

### Response

```
application/json: {}
```
