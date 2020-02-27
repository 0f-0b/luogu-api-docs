# IDE API

## Submit code

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/ide_submit</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>IDESubmitRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; data: { rid: number; }; }</code>)</td>
  </tr>
</table>
