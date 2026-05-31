# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Project Overview

Unofficial API documentation for [Luogu](https://www.luogu.com.cn) (洛谷), a Chinese competitive programming platform. This is a **documentation-only repository** with no application source code, no build output, no tests, and no CI/CD.

All documentation is written in **Chinese (Simplified)**. Type names and code identifiers are in English.

## Commands

```bash
deno task lint    # Check formatting (deno fmt --check) and lint (deno lint)
deno fmt          # Auto-format all supported files (Markdown, YAML, JSON)
```

These are the only commands. There is no build, test, or serve step.

## Architecture

The repository contains **three parallel representations** of the same API that must be kept in sync when making changes:

1. **`docs/*.md`** — Markdown API documentation using HTML `<table>` blocks per endpoint (not standard MD tables). Each file covers one domain (problems, contests, users, etc.). `docs/index.md` is the entry point with general conventions.

2. **`openapi/`** — OpenAPI 3.1 spec split across files:
   - `openapi.yaml` — root file with info, servers, tags, and `$ref` path references
   - `paths/*.yaml` — one file per API domain, defining operations and responses
   - `components/` — shared schemas (`schemas.yaml`), parameters, and security schemes (`index.yaml`)

3. **`luogu-api.d.ts`** — Single TypeScript type definition file (~1500 lines) with interfaces for request params, request bodies, response wrappers, and domain models. Referenced from `docs/index.md` for types too complex to inline.

## Conventions

- **Markdown endpoint format**: Each endpoint uses an HTML `<table>` with rows for 请求 (request), 参数/请求主体 (params/body), and 响应主体 (response), using `<code>` tags for type references.
- **`deno fmt` is configured with `proseWrap: "never"`** — do not hard-wrap prose lines in Markdown.
- **Commit messages** use conventional commit style: `fix:`, `docs:`, `chore:`, `refactor:` with optional scope in parentheses.
- **Response wrappers**: `DataResponse` (needs `_contentOnly` param or `x-luogu-type` header) and `LentilleDataResponse` (needs `x-lentille-request: content-only` header). Both are documented in `docs/index.md`.
