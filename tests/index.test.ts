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

  router.get(
    '/classHelpers/handleHeaders',
    async (ctx: ParameterizedContext) => {
      Helpers.handleHeaders(ctx, {
        headers: { key: 'value' }
      })

      ctx.status = 200
      expect(ctx.get('key')).to.equal('value')
    }
  )

  router.get(
    '/classHelpers/handleMsgBody/0',
    async (ctx: ParameterizedContext) => {
      ctx.status = 200

      Helpers.handleMsgBody(ctx, 'Class Helper Test', {
        msg: 'Class Helper Test Message',
        body: 'Class Helper Test Body'
      })

      expect(ctx.body).to.equal('Class Helper Test Body')
      expect(ctx.message).to.equal('Class Helper Test Message')
    }
  )

  router.get(
    '/classHelpers/handleMsgBody/1',
    async (ctx: ParameterizedContext) => {
      Helpers.handleMsgBody(ctx, 'Class Helper Test', {
        body: 'Class Helper Test Body'
      })

      expect(ctx.body).to.equal('Class Helper Test Body')
    }
  )

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
