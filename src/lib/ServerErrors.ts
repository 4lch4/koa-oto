import { ParameterizedContext } from 'koa'
import { Helpers, ServerErrorCodes } from '.'
import { Args } from '../interface'

export class ServerErrors {
  public static internalServerError(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Internal Server Error', args)

    ctx.status = ServerErrorCodes.InternalServerError
  }

  public static notImplemented(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Not Implemented', args)

    ctx.status = ServerErrorCodes.NotImplemented
  }

  public static badGateway(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Bad Gateway', args)

    ctx.status = ServerErrorCodes.BadGateway
  }

  public static serviceUnavailable(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Service Unavailable', args)

    ctx.status = ServerErrorCodes.ServiceUnavailable
  }

  public static gatewayTimeout(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Gateway Timeout', args)

    ctx.status = ServerErrorCodes.GatewayTimeout
  }

  public static httpVersionNotSupported(
    ctx: ParameterizedContext,
    args?: Args
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'HTTP Version Not Supported', args)

    ctx.status = ServerErrorCodes.HTTPVersionNotSupported
  }

  public static variantAlsoNegotiates(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Variant Also Negotiates', args)

    ctx.status = ServerErrorCodes.VariantAlsoNegotiates
  }

  public static insufficientStorage(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Insufficient Storage', args)

    ctx.status = ServerErrorCodes.InsufficientStorage
  }

  public static loopDetected(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Loop Detected', args)

    ctx.status = ServerErrorCodes.LoopDetected
  }

  public static notExtended(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Not Extended', args)

    ctx.status = ServerErrorCodes.NotExtended
  }

  public static networkAuthenticationRequired(
    ctx: ParameterizedContext,
    args?: Args
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Network Authentication Required', args)

    ctx.status = ServerErrorCodes.NetworkAuthenticationRequired
  }
}
