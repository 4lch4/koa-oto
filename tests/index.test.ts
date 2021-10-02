import Router from '@koa/router'
import * as chai from 'chai'
import { Server } from 'http'
import Koa, { ParameterizedContext } from 'koa'
import * as mocha from 'mocha'
import { Helpers } from '../src'
import { AllRoutes } from './TestRouteData'

const { expect } = chai
const { before, after } = mocha
const TestConfig = {
  port: 3240,
  prefix: '/test',
  baseUrl: 'http://localhost:3240/test'
}

const app = new Koa()
const router = new Router({ prefix: TestConfig.prefix })

let server: Server | undefined = undefined

before(() => {
  Object.keys(AllRoutes)
    .map(key => {
      return { key, path: `/${key}` }
    })
    .forEach(({ key, path }) => {
      // console.log(`Mapping ${key} to ${path} path...`)
      router.get(path, AllRoutes[key])
    })

  router.get('/classHelpers', async (ctx: ParameterizedContext) => {
    Helpers.handleHeaders(ctx, {
      headers: { key: 'value' }
    })

    ctx.status = 200
    expect(ctx.get('key')).to.equal('value')
  })

  app.use(router.routes())
  app.use(router.allowedMethods())

  server = app.listen(TestConfig.port)
})

after(() => {
  if (server) server.close()
})

// export {
//   ClientErrorsTest,
//   Helpers,
//   Informational,
//   Redirection,
//   ServerErrors,
//   SuccessfulTest as Successful,
//   StatusCodes
// }
