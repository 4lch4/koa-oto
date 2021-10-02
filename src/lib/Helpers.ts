import { ParameterizedContext } from 'koa'
import { Args } from '../interface'

export class Helpers {
  public static isArgs(object?: any): object is Args {
    return (
      object && ('body' in object || 'msg' in object || 'headers' in object)
    )
  }

  public static handleHeaders(ctx: ParameterizedContext, args?: Args | any) {
    if (args?.headers) {
      for (const key in Object.keys(args.headers)) {
        ctx.set(key, `${args.headers[key]}`)
      }
    }
  }

  public static handleMsgBody(
    ctx: ParameterizedContext,
    msg: string,
    args?: Args | any
  ) {
    if (Helpers.isArgs(args)) {
      ctx.message = args.msg || msg
      ctx.body = args.body || undefined
    } else if (args) ctx.body = args
  }
}
