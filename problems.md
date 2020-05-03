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
    <td><code>application/json</code> (<code>DataResponse&lt;{ problems: List&lt;Problem & ProblemStatus&gt;; page: number; }&gt;</code>)</td>
  </tr>
</table>

## Get created problems

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /fe/api/user/createdProblems</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ problems: List&lt;Problem&gt;; }&gt;</code>)</td>
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
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: any; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ProblemData&gt;</code>)</td>
  </tr>
</table>

## Add problem to task list

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/problem/tasklistAdd</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ pid: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; }</code>)</td>
  </tr>
</table>

## Remove problem from task list

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/problem/tasklistRemove</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ pid: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ status: number; }</code>)</td>
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
    <td><code>POST /fe/api/problem/new</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>CreateProblemRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ pid: string; }</code>)</td>
  </tr>
</table>

## Edit problem

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/problem/edit/:pid</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ settings: ProblemSettings; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ pid: string; }</code>)</td>
  </tr>
</table>

## Update test cases settings

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/problem/editTestCase/:pid</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>UpdateTestCasesSettingsRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>UpdateTestCasesSettingsResponse</code>)</td>
  </tr>
</table>

## Transfer problem

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/problem/transfer/:pid</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ type: ProblemType; teamID?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ pid: string; }</code>)</td>
  </tr>
</table>

## Delete problem

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/problem/delete/:id</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>
