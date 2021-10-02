import Router from '@koa/router'
import { Server } from 'http'
import Koa from 'koa'
import * as mocha from 'mocha'
import { AllRoutes } from './TestRouteData'

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
      console.log(`Mapping ${key} to ${path} path...`)
      router.get(path, AllRoutes[key])
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
