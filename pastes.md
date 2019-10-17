# Pastes API

## List pastes

### Request

```
GET /paste?_contentOnly=1
```

### Response

```
application/json: DataResponse<PasteListData>
```

## Get paste

### Request

```
GET /paste/:id?_contentOnly=1
```

### Response

```
application/json: DataResponse<PasteData>
```

## Create paste

### Request

```
POST /paste/new
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| data | `string` | |
| public | `number` | ✓ |

### Response

```
application/json: IDResponse
```

## Edit paste

### Request

```
POST /paste/edit/:id
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| data | `string` | |
| public | `number` | ✓ |

### Response

```
application/json: IDResponse
```

## Delete paste

### Request

```
POST /paste/delete/:id
```

### Response

```
application/json: IDResponse
```
