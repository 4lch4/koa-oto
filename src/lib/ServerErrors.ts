import { ParameterizedContext } from 'koa'
import { Helpers, ServerErrorCodes } from '.'
import { Args } from '../interface'

export class ServerErrors {
  /**
   * Returns a `500` (Internal Server Error) response with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request
   * @param args An optional object containing content to return.
   */
  public static internalServerError(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Internal Server Error', args)

    ctx.status = ServerErrorCodes.InternalServerError
  }

  /**
   * Returns a `501` (Not Implemented) response with the provided Args values,
   * if any exist.
   *
   * @param ctx The context of the request
   * @param args An optional object containing content to return.
   */
  public static notImplemented(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Not Implemented', args)

    ctx.status = ServerErrorCodes.NotImplemented
  }

  /**
   * Returns a `502` (Bad Gateway) response with the provided Args values, if
   * any exist.
   *
   * @param ctx The context of the request
   * @param args An optional object containing content to return.
   */
  public static badGateway(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Bad Gateway', args)

    ctx.status = ServerErrorCodes.BadGateway
  }

  /**
   * Returns a `503` (Service Unavailable) response with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request
   * @param args An optional object containing content to return.
   */
  public static serviceUnavailable(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Service Unavailable', args)

    ctx.status = ServerErrorCodes.ServiceUnavailable
  }

  /**
   * Returns a `504` (Gateway Timeout) response with the provided Args values,
   * if any exist.
   *
   * @param ctx The context of the request
   * @param args An optional object containing content to return.
   */
  public static gatewayTimeout(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Gateway Timeout', args)

    ctx.status = ServerErrorCodes.GatewayTimeout
  }

  /**
   * Returns a `505` (HTTP Version Not Supported) response with the provided
   * Args values, if any exist.
   *
   * @param ctx The context of the request
   * @param args An optional object containing content to return.
   */
  public static httpVersionNotSupported(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'HTTP Version Not Supported', args)

    ctx.status = ServerErrorCodes.HTTPVersionNotSupported
  }

  /**
   * Returns a `506` (Variant Also Negotiates) response with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static variantAlsoNegotiates(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Variant Also Negotiates', args)

    ctx.status = ServerErrorCodes.VariantAlsoNegotiates
  }

  /**
   * Returns a `507` (Insufficient Storage) response with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static insufficientStorage(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Insufficient Storage', args)

    ctx.status = ServerErrorCodes.InsufficientStorage
  }

  /**
   * Returns a `508` (Loop Detected) response with the provided Args values,
   * if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static loopDetected(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Loop Detected', args)

    ctx.status = ServerErrorCodes.LoopDetected
  }

  /**
   * Returns a `509` (Bandwidth Limit Exceeded) response with the provided
   * Args values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static notExtended(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Not Extended', args)

    ctx.status = ServerErrorCodes.NotExtended
  }

  /**
   * Returns a `510` (Network Authentication Required) response with the
   * provided Args values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static networkAuthenticationRequired(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Network Authentication Required', args)

    ctx.status = ServerErrorCodes.NetworkAuthenticationRequired
  }
}
