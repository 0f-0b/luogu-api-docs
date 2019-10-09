# Users API

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
