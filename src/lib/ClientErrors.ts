import { ParameterizedContext } from 'koa'
import { ClientErrorCodes, Helpers } from '.'
import { Args } from '../interface'

export class ClientErrors {
  /**
   * Returns a 500 Internal Server Error response.
   *
   * @param ctx The request context
   * @param args Optional arguments to be passed to the client
   */
  public static badRequest(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Bad Request', args)

    ctx.status = ClientErrorCodes.BadRequest
  }

  public static unauthorized(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Unauthorized', args)

    ctx.status = ClientErrorCodes.Unauthorized
  }

  public static paymentRequired(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Payment Required', args)

    ctx.status = ClientErrorCodes.PaymentRequired
  }

  public static forbidden(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Forbidden', args)

    ctx.status = ClientErrorCodes.Forbidden
  }

  public static notFound(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Not Found', args)

    ctx.status = ClientErrorCodes.NotFound
  }

  public static methodNotAllowed(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Method Not Allowed', args)

    ctx.status = ClientErrorCodes.MethodNotAllowed
  }

  public static notAcceptable(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Not Acceptable', args)

    ctx.status = ClientErrorCodes.NotAcceptable
  }

  public static proxyAuthenticationRequired(
    ctx: ParameterizedContext,
    args?: Args
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Proxy Authentication Required', args)

    ctx.status = ClientErrorCodes.ProxyAuthenticationRequired
  }

  public static requestTimeout(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Request Timeout', args)

    ctx.status = ClientErrorCodes.RequestTimeout
  }

  public static conflict(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Conflict', args)

    ctx.status = ClientErrorCodes.Conflict
  }

  public static gone(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Gone', args)

    ctx.status = ClientErrorCodes.Gone
  }

  public static lengthRequired(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Length Required', args)

    ctx.status = ClientErrorCodes.LengthRequired
  }

  public static preconditionFailed(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Precondition Failed', args)

    ctx.status = ClientErrorCodes.PreconditionFailed
  }

  public static payloadTooLarge(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Payload Too Large', args)

    ctx.status = ClientErrorCodes.PayloadTooLarge
  }

  public static uriTooLong(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'URI Too Long', args)

    ctx.status = ClientErrorCodes.URITooLong
  }

  public static unsupportedMediaType(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Unsupported Media Type', args)

    ctx.status = ClientErrorCodes.UnsupportedMediaType
  }

  public static rangeNotSatisfiable(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Range Not Satisfiable', args)

    ctx.status = ClientErrorCodes.RangeNotSatisfiable
  }

  public static expectationFailed(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Expectation Failed', args)

    ctx.status = ClientErrorCodes.ExpectationFailed
  }

  public static imATeapot(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, "I'm a teapot", args)

    ctx.status = ClientErrorCodes.ImATeapot
  }

  public static misdirectedRequest(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Misdirected Request', args)

    ctx.status = ClientErrorCodes.MisdirectedRequest
  }

  public static unprocessableEntity(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Unprocessable Entity', args)

    ctx.status = ClientErrorCodes.UnprocessableEntity
  }

  public static locked(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Locked', args)

    ctx.status = ClientErrorCodes.Locked
  }

  public static failedDependency(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Failed Dependency', args)

    ctx.status = ClientErrorCodes.FailedDependency
  }

  public static tooEarly(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Too Early', args)

    ctx.status = ClientErrorCodes.TooEarly
  }

  public static upgradeRequired(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Upgrade Required', args)

    ctx.status = ClientErrorCodes.UpgradeRequired
  }

  public static preconditionRequired(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Precondition Required', args)

    ctx.status = ClientErrorCodes.PreconditionRequired
  }

  public static tooManyRequests(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Too Many Requests', args)

    ctx.status = ClientErrorCodes.TooManyRequests
  }

  public static requestHeaderFieldsTooLarge(
    ctx: ParameterizedContext,
    args?: Args
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Request Header Fields Too Large', args)

    ctx.status = ClientErrorCodes.RequestHeaderFieldsTooLarge
  }

  public static unavailableForLegalReasons(
    ctx: ParameterizedContext,
    args?: Args
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Unavailable For Legal Reasons', args)

    ctx.status = ClientErrorCodes.UnavailableForLegalReasons
  }
}
