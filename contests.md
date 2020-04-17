# Contests API

## List public contests

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /contest/list</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: any; page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ contests: List&lt;Contest&gt;; }&gt;</code>)</td>
  </tr>
</table>

## Get joined contests

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /fe/api/user/joinedContests</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ contests: List&lt;Contest&gt;; }</code>)</td>
  </tr>
</table>

## Get created contests

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /fe/api/user/createdContests</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ contests: List&lt;Contest&gt;; }</code>)</td>
  </tr>
</table>

## Get contest

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /contest/:id</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: any; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ContestData&gt;</code>)</td>
  </tr>
</table>

## Get scoreboard

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /fe/api/contest/scoreboard/:id</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>GetScoreboardResponse</code>)</td>
  </tr>
</table>

## Join contest

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/contest/join/:id</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ code?: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ id: number; }</code>)</td>
  </tr>
</table>

## Create contest

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/contest/new</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>EditContestRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ id: number; }</code>)</td>
  </tr>
</table>

## Edit contest

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/contest/edit/:id</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>EditContestRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ id: number; }</code>)</td>
  </tr>
</table>

## Edit problems in contest

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/contest/editProblem/:id</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>{ pids: string[]; scores: { [pid: string]: number; }; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## Delete contest

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/contest/delete/:id</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>
