# 比赛 API

## 列出比赛

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /contest/list</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ contests: List&lt;Contest&gt; }&gt;</code>)</td>
  </tr>
</table>

## 列出参加的比赛

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/user/joinedContests</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ contests: List&lt;Contest&gt; }</code>)</td>
  </tr>
</table>

## 列出创建的比赛

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/user/createdContests</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ contests: List&lt;Contest&gt; }</code>)</td>
  </tr>
</table>

## 获取比赛

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /contest/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ContestData&gt;</code>)</td>
  </tr>
</table>

## 获取创建的比赛

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /contest/edit/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;CreatedContestData&gt;</code>)</td>
  </tr>
</table>

## 获取排行榜

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /fe/api/contest/scoreboard/:id</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>GetScoreboardResponse</code>)</td>
  </tr>
</table>

## 参加比赛

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/contest/join/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ code?: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ id: number }</code>)</td>
  </tr>
</table>

## 创建比赛

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/contest/new</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>EditContestRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ id: number }</code>)</td>
  </tr>
</table>

## 编辑比赛

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/contest/edit/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>EditContestRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ id: number }</code>)</td>
  </tr>
</table>

## 编排比赛题目

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/contest/editProblem/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ pids: string[]; scores: { [pid: string]: number } }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 删除比赛

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/contest/delete/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>
