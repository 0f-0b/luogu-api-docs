# Authentication API

## Get captcha image

### Request

```
GET /api/verify/captcha
```

### Response Type

```
image/jpeg
```

## Register

### Request

```
POST /api/auth/register
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| username | `string` | |
| password | `string` | |
| endpoint | `string` | |
| endpointType | `number` | |
| verificationCode | `string` | |

## Login

### Request

```
POST /api/auth/userPassLogin
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| username | `string` | |
| password | `string` | |
| captcha | `string` | |

### Response Type

```
application/json: LoginAPIResponse
```

## Logout

### Request

```
GET /api/auth/logout
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| uid | `number` | |

## Unlock

### Request

```
POST /api/auth/unlock
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| code | `string` | |

### Response Type

```
application/json: UnlockAPIResponse
```

## Lock

### Request

```
GET /api/auth/lock
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| uid | `number` | |

## Get unlock mode

### Request

```
GET /auth/unlock?_contentOnly=1
```

### Response Type

```
application/json: DataResponse<UnlockModeData>
```
