# Problem Sets API

## List problem sets

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /training/list</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: any; page?: number; type?: "official" | "public"; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ProblemSetListData&gt;</code>)</td>
  </tr>
</table>

## Get created problem sets

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /fe/api/user/createdTrainings</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ trainings: List&lt;ProblemSet&gt; }</code>)</td>
  </tr>
</table>

## Get problem set

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /training/:id</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: any; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ProblemSetData&gt;</code>)</td>
  </tr>
</table>

## Get problem sets in task list

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /fe/api/user/markedTrainings</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ trainingParticipations: List&lt;{ training: ProblemSet; user: UserInfo; }&gt; }</code>)</td>
  </tr>
</table>

## Add problem set to task list

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/training/mark/:id</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Remove problem set from task list

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/training/unmark/:id</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Create problem set

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/training/new</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>EditProblemSetRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ id: number; }</code>)</td>
  </tr>
</table>

## Edit problem set

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/training/edit/:id</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>EditProblemSetRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ id: number; }</code>)</td>
  </tr>
</table>

## Edit problems in problem set

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/training/editProblems/:id</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ pids: string[]; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Clone problem set

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /api/training/clone/:id</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ type: number; providerID: number | null; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>
