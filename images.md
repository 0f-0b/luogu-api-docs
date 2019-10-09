# Images API

## List images

### Request

```
GET /image
```

### Parameters

| Name | Type | Optional |
|-|-|-|
| order | `string` | ✓ |
| bigImage | `boolean` | ✓ |
| page | `number` | ✓ |

### Response

```
application/json: DataResponse<ImageListData>
```

## Get image

### Request

```
GET /api/image/detail/:id
```

### Response

```
application/json: GetImageAPIResponse
```

## Generate upload parameters

### Request

```
GET /api/image/generateUploadLink
```

### Parameters

| Name | Type | Optional |
|-|-|-|
| watermarkType | `number` | |
| captcha | `string` | |

### Response

```
application/json: GenerateUploadParametersAPIResponse
```

## Delete image

### Request

```
POST /api/image/delete
```

### Parameters

| Name | Type | Optional |
|-|-|-|
| images | `string[]` | |

### Response

```
application/json: {}
```
