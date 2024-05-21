> [!IMPORTANT]
> This repo has been archived as I've switched to [Elysia](https://elysiajs.com) for my preferred API framework.
>
> Feel free to fork and modify this repo to suit your needs.

![NPM](https://img.shields.io/npm/l/@4lch4/koa-oto?style=flat-square) [![Standard-Js](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com/) [![Codecov](https://img.shields.io/codecov/c/github/4lch4/koa-oto?style=flat-square)](https://codecov.io/gh/4lch4/koa-oto) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/ba7620b8dcd54f8b9b16d3a327293ab5)](https://www.codacy.com/gh/4lch4/koa-oto/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=4lch4/koa-oto&amp;utm_campaign=Badge_Grade)

[![CI/CD Pipeline](https://github.com/4lch4/koa-oto/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/4lch4/koa-oto/actions/workflows/CI.yml) [![npm (tag)](https://img.shields.io/npm/v/@4lch4/koa-oto?style=flat-square&label=NPM)](https://npmjs.org/package/4lch4/koa-oto) [![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/4lch4/koa-oto?label=GPR&sort=semver&style=flat-square)](https://github.com/4lch4/koa-oto/packages/)

# @4lch4/koa-oto

This library is a responder library for handling responses within the [Koa][0] framework.

## The Name

The name "Koa-Ōtō" is a combination of Koa (duh), and the Japanese Romaji version of 応答 (Ōtō) which means "Respond".

[_NOTE: According to Google Translate at least 😅_][1]

## Example Usage

It isn't much, but this is the most basic way to use the library within your API:

```typescript
import { ClientErrors, Successful } from '@4lch4/koa-oto'
import Router from '@koa/router'
import Koa from 'koa'

const app = new Koa()
const router = new Router()

router.get('/', async ctx => Successful.ok(ctx, 'Hello World'))
router.get('/error', ctx => ClientErrors.badRequest(ctx, 'Bad Request'))

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
```

## Testing and Coverage

I went a really weird route for testing this library, but in the end I've achieved a solid coverage percentage in CodeCov. The following images are an icicle and grid representation of the current test coverage:

![Code-Coverage-Icicle](https://codecov.io/gh/4lch4/koa-oto/branch/main/graphs/icicle.svg)

![Code-Coverage-Tree](https://codecov.io/gh/4lch4/koa-oto/branch/main/graphs/tree.svg)

> **Icicle**: The top section represents the entire project. Proceeding with folders and finally individual files. The size and color of each slice is representing the number of statements and the coverage, respectively.
>
> **Grid**: Each block represents a single file in the project. The size and color of each block is represented by the number of statements and the coverage, respectively.

[0]: https://github.com/koajs/koa
[1]: https://translate.google.com/?sl=en&tl=ja&text=respond%0A&op=translate
