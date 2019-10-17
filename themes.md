# Themes API

## List themes

### Request

```
GET /theme/list?_contentOnly=1
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| page | `number` | ✓ |
| orderBy | `string` | ✓ |
| order | `string` | ✓ |
| type | `string` | ✓ |

### Response

```
application/json: DataResponse<ThemeListData>
```

## Get theme

### Request

```
GET /theme/design/:id?_contentOnly=1
```

### Response

```
application/json: DataResponse<ThemeData>
```

## Apply theme

### Request

```
POST /theme/setTheme/:id
```

### Response

```
application/json: []
```

## Create theme

### Request

```
POST /theme/edit/
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| name | `string` | |
| header | `ThemeHeaderFooter` | |
| sideNav | `ThemeSideNav` | |
| footer | `ThemeHeaderFooter` | |

### Response

```
application/json: IDResponse
```

## Edit theme

### Request

```
POST /theme/edit/:id
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| name | `string` | |
| header | `ThemeHeaderFooter` | |
| sideNav | `ThemeSideNav` | |
| footer | `ThemeHeaderFooter` | |

### Response

```
application/json: IDResponse
```

## Delete theme

### Request

```
POST /theme/delete/:id
```

### Response

```
application/json: []
```
