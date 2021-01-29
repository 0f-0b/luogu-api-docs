# 题单 API

## 列出题单

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /training/list</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>ProblemSetListParams</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ProblemSetListData&gt;</code>)</td>
  </tr>
</table>

## 列出创建的题单

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/user/createdTrainings</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page?: number; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ trainings: List&lt;ProblemSet&gt; }</code>)</td>
  </tr>
</table>

## 获取题单

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /training/:id</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ _contentOnly: any; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ProblemSetData&gt;</code>)</td>
  </tr>
</table>

## 列出收藏的题单

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/user/markedTrainings</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page?: number; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ trainingParticipations: List&lt;{ training: ProblemSet; user: UserInfo; }&gt; }</code>)</td>
  </tr>
</table>

## 收藏题单

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/training/mark/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 取消收藏题单

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/training/unmark/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 创建题单

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/training/new</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>EditProblemSetRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ id: number; }</code>)</td>
  </tr>
</table>

## 编辑题单

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/training/edit/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>EditProblemSetRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ id: number; }</code>)</td>
  </tr>
</table>

## 编排题单题目

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/training/editProblems/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ pids: string[]; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>

## 转存题单

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /api/training/clone/:id</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ type: number; providerID: number | null; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>
