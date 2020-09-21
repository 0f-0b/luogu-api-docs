# 题目 API

## 列出题目

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /problem/list</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>ProblemListRequest</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ problems: List&lt;Problem & ProblemStatus&gt;; page: number; }&gt;</code>)</td>
  </tr>
</table>

## 列出创建的题目

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /api/user/createdProblems</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ page?: number; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ problems: List&lt;Problem&gt;; }&gt;</code>)</td>
  </tr>
</table>

## 获取题目

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /problem/:pid</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ _contentOnly: any; contestId?: number; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;ProblemData&gt;</code>)</td>
  </tr>
</table>

## 获取题解

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /problem/solution/:pid</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ _contentOnly: any; }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>DataResponse&lt;SolutionsData&gt;</code>)</td>
  </tr>
</table>

## 收藏题目

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/problem/tasklistAdd</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ pid: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; }</code>)</td>
  </tr>
</table>

## 取消收藏题目

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/problem/tasklistRemove</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ pid: string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number; }</code>)</td>
  </tr>
</table>

## 提交代码

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/problem/submit/:pid</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ contestId?: number; }</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>SubmitCodeRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ rid: number; }</code>)</td>
  </tr>
</table>

## 提交翻译

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /problemnew/translate/:pid</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ "translation": string; "csrf-token": string; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td>（暂缺）</td>
  </tr>
</table>

## 创建题目

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/problem/new</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>CreateProblemRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ pid: string; }</code>)</td>
  </tr>
</table>

## 编辑题目

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/problem/edit/:pid</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ settings: ProblemSettings; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ pid: string; }</code>)</td>
  </tr>
</table>

## 更新数据点设置

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/problem/editTestCase/:pid</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>UpdateTestCasesSettingsRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>UpdateTestCasesSettingsResponse</code>)</td>
  </tr>
</table>

## 迁移题目

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/problem/transfer/:pid</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ type: ProblemType; teamID?: number; }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ pid: string; }</code>)</td>
  </tr>
</table>

## 删除题目

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/problem/delete/:id</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{}</code>)</td>
  </tr>
</table>
