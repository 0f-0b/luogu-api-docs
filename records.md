# 记录 API

## 评测状态码

| status | 简称 | 含义 |
|-------:|------|------|
| -1 | Unshown | 隐藏 |
| 0 | Waiting | 排队中 |
| 1 | Judging | 评测中 |
| 2 | CE | 编译错误 |
| 3 | OLE | 输出过长 |
| 4 | MLE | 内存超限 |
| 5 | TLE | 时间超限 |
| 6 | WA | 答案错误 |
| 7 | RE | 运行错误 |
| 11 | UKE | 未知错误 |
| 12 | AC | 通过 |
| 14 | Unaccepted | 未通过 |
| 21 | Hack Success | Hack 成功 |
| 22 | Hack Failure | Hack 失败 |
| 23 | Hack Skipped | Hack 跳过 |

## 列出记录

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /record/list</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>RecordListParams</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ records: List&lt;RecordBase&gt; }&gt;</code>)</td>
  </tr>
</table>

## 获取记录

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /record/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;RecordData&gt;</code>)</td>
  </tr>
</table>

## 获取可下载的数据点

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /fe/api/record/queryDownloadableTestcase/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ testcaseId: number | null }</code>)</td>
  </tr>
</table>

## 获取数据点内容

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/record/downloadTestcase/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ testcaseId: number }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: { input: string; output: string } }</code>)</td>
  </tr>
</table>

## 监听记录状态

<table>
  <tr>
    <th align="right">WebSocket 频道</th>
    <td><code>channel</code> = <code>record.track</code>, <code>channel_param</code> = <var>rid</var></td>
  </tr>
  <tr>
    <th align="right">初始数据</th>
    <td><code>ClientboundInitialRecordStatusMessageData</code></td>
  </tr>
  <tr>
    <th align="right">接收数据</th>
    <td><code>ClientboundRecordStatusMessageData</code></td>
  </tr>
  <tr>
    <th align="right">发送数据</th>
    <td><code>never</code></td>
  </tr>
</table>
