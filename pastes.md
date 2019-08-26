# Pastes API

## List pastes

### Request

```
GET /fe/paste/list?_contentOnly=1
```

### Response

```
application/json: DataResponse<PasteListData>
```

## Get paste

### Request

```
GET /fe/paste/:id?_contentOnly=1
```

### Response

```
application/json: DataResponse<PasteData>
```

## Create paste

### Request

```
POST /fe/paste/new
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| data | `string` | |
| public | `number` | ✓ |

### Response

```
application/json: EditPasteAPIResponse
```

## Delete paste

### Request

```
POST /fe/paste/delete/:id
```

### Response

```
application/json: EditPasteAPIResponse
```
