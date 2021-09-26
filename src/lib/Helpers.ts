import { ParameterizedContext } from 'koa'
import { Args } from '../interface'

export class Helpers {
  public static handleHeaders(ctx: ParameterizedContext, args?: Args) {
    if (args?.headers) {
      for (const key in Object.keys(args.headers))
        ctx.set(key, `${args.headers[key]}`)
    }
  }

  public static handleMsgBody(
    ctx: ParameterizedContext,
    msg: string,
    args?: Args
  ) {
    ctx.message = args?.msg || msg
    ctx.body = args?.body || undefined
  }
}
