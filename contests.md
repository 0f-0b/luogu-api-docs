# Contests API

## List public contests

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /contest/list</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>PagedDataRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ContestListData&gt;</code>)</td>
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
    <td><code>application/x-www-form-urlencoded</code> (<code>DataRequest</code>)</td>
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
    <td><code>application/x-www-form-urlencoded</code> (<code>PagedRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>GetScoreboardResponse</code>)</td>
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
    <td><code>application/x-www-form-urlencoded</code> (<code>PagedRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>GetJoinedContestsResponse</code>)</td>
  </tr>
</table>

## Join contest

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /fe/api/contest/join/:id</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/json</code> (<code>JoinContestRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>JoinContestResponse</code>)</td>
  </tr>
</table>
