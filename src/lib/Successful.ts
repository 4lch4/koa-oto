import { ParameterizedContext } from 'koa'
import { Args } from '../interface'
import { Helpers, SuccessfulCodes } from './'

export class Successful {
  public static ok(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'OK', args)

    ctx.status = SuccessfulCodes.OK
  }

  public static created(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Created', args)

    ctx.status = SuccessfulCodes.Created
  }

  public static accepted(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Accepted', args)

    ctx.status = SuccessfulCodes.Accepted
  }

  public static nonAuthoritativeInformation(
    ctx: ParameterizedContext,
    args?: Args
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Non-Authoritative Information', args)

    ctx.status = SuccessfulCodes.NonAuthoritativeInformation
  }

  public static noContent(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'No Content', args)

    ctx.status = SuccessfulCodes.NoContent
  }

  public static resetContent(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Reset Content', args)

    ctx.status = SuccessfulCodes.ResetContent
  }

  public static partialContent(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Partial Content', args)

    ctx.status = SuccessfulCodes.PartialContent
  }
}
