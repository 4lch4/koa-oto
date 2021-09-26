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
