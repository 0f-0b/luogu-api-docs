# Miscellaneous

## Get CSRF token

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>text/html</code> (The token can be accessed through <code>document.querySelector("meta[name=csrf-token]").content</code>)</td>
  </tr>
</table>

## Get ranking list

### Request

```
GET /ranking?_contentOnly=1
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| page | `number` | ✓ |
| orderBy | `number` | ✓ |

### Response

```
application/json: DataResponse<RankingListData>
```

## Get notifications

```
GET /user/notification?_contentOnly=1
```

### Parameters

| Key | Type | Optional |
|-|-|-|
| type | `number` | ✓ |
| page | `number` | ✓ |

### Response

```
application/json: DataResponse<NotificationsData>
```
