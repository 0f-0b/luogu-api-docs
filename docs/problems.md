# 题目 API

## 列出题目

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /problem/list</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>ProblemListParams</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LentilleDataResponse&lt;{ problems: List&lt;LegacyProblem &amp; Maybe&lt;ProblemStatus&gt;&gt;; page: number }&gt;</code>)</td>
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
    <td><code>{ page?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ problems: List&lt;LegacyProblem&gt; }</code>)</td>
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
    <td><code>{ contestId?: number }</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LentilleDataResponse&lt;ProblemData&gt;</code>)</td>
  </tr>
</table>

## 获取题解

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>GET /problem/solution/:pid</code></td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>LentilleDataResponse&lt;SolutionsData&gt;</code>)</td>
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
    <td><code>application/json</code> (<code>{ pid: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number }</code>)</td>
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
    <td><code>application/json</code> (<code>{ pid: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number }</code>)</td>
  </tr>
</table>

## 提交代码

**注**：提交代码时，CSRF 令牌需要从**对应题目的页面** HTML 中读取（`<meta name="csrf-token" content="...">`），而非主页或其他页面。例如提交 `AT_abc001_a` 需要请求 `GET /problem/AT_abc001_a` 并从返回的 HTML 中提取 CSRF 令牌。

**`lang` 取值**：

| `lang` | 语言 | `lang` | 语言 | `lang` | 语言 |
|-------:|------|-------:|------|-------:|------|
| 1 | Pascal | 2 | C | 28 | C++14 (GCC 9) |
| 3 | C++98 | 4 | C++11 | 11 | C++14 |
| 12 | C++17 | 27 | C++20 | 34 | C++23 |
| 7 | Python 3 | 25 | PyPy 3 | 8 | Java 8 |
| 33 | Java 21 | 15 | Rust | 14 | Go |
| 9 | Node.js LTS | 16 | PHP | 13 | Ruby |
| 19 | Haskell | 21 | Kotlin/JVM | 22 | Scala |
| 17 | C# Mono | 30 | OCaml | 31 | Julia |
| 32 | Lua | 23 | Perl | 5 | 提交答案 |

已禁用的语言：6 (Python 2)、24 (PyPy 2)、10 (Shell)、20 (Kotlin/Native)、18 (Visual Basic Mono)、29 (F#.NET)、26 (文言)。

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/problem/submit/:pid</code></td>
  </tr>
  <tr>
    <th align="right">参数</th>
    <td><code>{ contestId?: number }</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>SubmitCodeRequest</code>) 或 <code>multipart/form-data</code> (<code>{ file: Blob; captcha?: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ rid: number }</code>)</td>
  </tr>
</table>

## 提交翻译

<table>
  <tr>
    <th align="right">请求</th>
    <td><code>POST /fe/api/problem/translate/:pid</code></td>
  </tr>
  <tr>
    <th align="right">请求主体</th>
    <td><code>application/json</code> (<code>{ translation: string }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ status: number }</code>)</td>
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
    <td><code>application/json</code> (<code>{ pid: string }</code>)</td>
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
    <td><code>application/json</code> (<code>{ settings: ProblemSettings }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ pid: string }</code>)</td>
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
    <td><code>application/json</code> (<code>{ type: string; teamID?: number } | { operation: "clone"; type: "T"; teamID: number }</code>)</td>
  </tr>
  <tr>
    <th align="right">响应主体</th>
    <td><code>application/json</code> (<code>{ pid: string }</code>)</td>
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
