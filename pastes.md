# Pastes API

## List pastes

### Request

```
GET /fe/paste/list?_contentOnly=1
```

### Response Type

```
application/json: DataResponse<PasteListData>
```

## Get paste

### Request

```
GET /fe/paste/:id?_contentOnly=1
```

### Response Type

```
application/json: DataResponse<PasteData>
```

## Delete paste

### Request

```
POST /fe/paste/delete/:id
```

### Response Type

```
application/json: DeletePasteAPIResponse
```
