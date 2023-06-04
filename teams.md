# 团队 API

## 获取团队

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /team/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;TeamData&gt;</code>)</td>
  </tr>
</table>

## 列出团队成员

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/team/members/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ members: TeamMember[] }</code>)</td>
  </tr>
</table>

## 列出团队题目

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/team/problems/:id</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ problems: List&lt;Problem&gt; }</code>)</td>
  </tr>
</table>

## 列出团队题单

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/team/trainings/:id</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ trainings: List&lt;ProblemSet&gt; }</code>)</td>
  </tr>
</table>

## 列出团队比赛

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/team/contests/:id</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ contests: List&lt;Contest&gt; }</code>)</td>
  </tr>
</table>

## 加入团队

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/team/join/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ applyMessage?: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 退出团队

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/team/exit/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 创建团队

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/team/create</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ name: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ teamId: number }</code>)</td>
  </tr>
</table>

## 编辑团队

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/team/edit/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ settings: { description: string; joinPermission: number } }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 转让团队

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/team/setMaster/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ uid: number }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 更新公告

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/team/editNotice/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ notice: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 管理成员

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/team/editMember/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>ManageTeamMemberRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>TeamMember</code>)</td>
  </tr>
</table>

## 审核成员

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/team/review/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ uid: number; reviewResult: "apply" | "refuse" | "ban" }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 移除成员

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/team/kick/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ uid: number }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>
