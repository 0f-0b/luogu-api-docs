# Problems API

## List problems

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /problem/list</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>ProblemListRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ProblemListData&gt;</code>)</td>
  </tr>
</table>

## Get problem

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /problem/:pid</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: 1; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ProblemData&gt;</code>)</td>
  </tr>
</table>

## Submit code

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/problem/submit/:pid</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>SubmitCodeRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ rid: number; }</code>)</td>
  </tr>
</table>

## Create problem

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/problem/new</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>EditProblemRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; data: string; }</code>)</td>
  </tr>
</table>

## Edit problem

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/problem/edit/:pid</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>EditProblemRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; data: string; }</code>)</td>
  </tr>
</table>
