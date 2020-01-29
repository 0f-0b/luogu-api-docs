# Contests API

## List public contests

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /contest/list</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: 1; page?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ contests: List&lt;Contes&gt;; }&gt;</code>)</td>
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
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: 1; }</code>)</td>
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
    <td><code>application/json</code> (<code>{ scoreboard: List&lt;Score&gt;; userScore: Score; }</code>)</td>
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
