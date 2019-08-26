# Authentication API

## Get captcha image

### Request

```
GET /api/verify/captcha
```

### Response

```
image/jpeg
```

## Send verification code

### Request

```
POST /api/verify/sendVerificationCode
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| endpoint | `string` | |
| endpointType | `number` | |
| captcha | `string` | |
| userExist | `boolean` | |

### Response

```
application/json: /* TODO */
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

### Response

```
application/json: /* TODO */
```

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

### Response

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

### Response

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

### Response

```
application/json: DataResponse<UnlockModeData>
```
