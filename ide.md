# IDE API

## 提交代码

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/ide_submit</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>IDESubmitRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; data: { rid: number; }; }</code>)</td>
  </tr>
</table>
