# Users API

## Get UID from name

### Request

```
GET /space/ajax_getuid
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| username | `string` | |

### Response

```
application/json: AjaxResponse<UIDData>
```

## Get contacts

### Request

```
GET /space/ajax_getchatlist
```

### Response

```
application/json: AjaxResponse<HTMLData>
```

## Get messages

### Request

```
GET /space/ajax_getchatcontent
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| uid | `number` | |

### Response

```
application/json: AjaxResponse<MessagesData>
```

## Send message

### Request

```
POST /api/user/sendMessage
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| receiver | `number` | |
| content | `string` | |

### Response

```
application/json: APIResponse<[]>
```
