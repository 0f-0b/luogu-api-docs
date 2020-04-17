# Themes API

## List themes

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /theme/list</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>ListThemesRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ themes: List&lt;ThemeDetails&gt;; }&gt;</code>)</td>
  </tr>
</table>

## Get theme

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>GET /theme/design/:id</code></td>
  </tr>
  <tr>
    <th align="right">Parameters</th>
    <td><code>application/x-www-form-urlencoded</code> (<code>{ _contentOnly: any; }</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>DataResponse&lt;{ theme: ThemeDetails; }&gt;</code>)</td>
  </tr>
</table>

## Apply theme

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /theme/setTheme/:id</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>[]</code>)</td>
  </tr>
</table>

## Create theme

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /theme/edit/</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>EditThemeRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ id: string; }</code>)</td>
  </tr>
</table>

## Edit theme

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /theme/edit/:id</code></td>
  </tr>
  <tr>
    <th align="right">Body</th>
    <td><code>application/json</code> (<code>EditThemeRequest</code>)</td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>{ id: string; }</code>)</td>
  </tr>
</table>

## Delete theme

<table>
  <tr>
    <th align="right">Request</th>
    <td><code>POST /theme/delete/:id</code></td>
  </tr>
  <tr>
    <th align="right">Response</th>
    <td><code>application/json</code> (<code>[]</code>)</td>
  </tr>
</table>
