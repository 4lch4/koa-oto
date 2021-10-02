import { ParameterizedContext } from 'koa'
import { ClientErrorCodes, Helpers } from '.'
import { Args } from '../interface'

export class ClientErrors {
  /**
   * Returns a `400` (Bad Request) status code with the provided Args values, if
   * any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static badRequest(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Bad Request', args)

    ctx.status = ClientErrorCodes.BadRequest
  }

  /**
   * Returns a `401` (Unauthorized) status code with the provided Args values,
   * if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static unauthorized(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Unauthorized', args)

    ctx.status = ClientErrorCodes.Unauthorized
  }

  /**
   * Returns a `402` (Payment Required) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static paymentRequired(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Payment Required', args)

    ctx.status = ClientErrorCodes.PaymentRequired
  }

  /**
   * Returns a `403` (Forbidden) status code with the provided Args values, if
   * any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static forbidden(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Forbidden', args)

    ctx.status = ClientErrorCodes.Forbidden
  }

  /**
   * Returns a `404` (Not Found) status code with the provided Args values, if
   * any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static notFound(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Not Found', args)

    ctx.status = ClientErrorCodes.NotFound
  }

  /**
   * Returns a `405` (Method Not Allowed) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static methodNotAllowed(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Method Not Allowed', args)

    ctx.status = ClientErrorCodes.MethodNotAllowed
  }

  /**
   * Returns a `406` (Not Acceptable) status code with the provided Args values,
   * if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static notAcceptable(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Not Acceptable', args)

    ctx.status = ClientErrorCodes.NotAcceptable
  }

  /**
   * Returns a `407` (Proxy Authentication Required) status code with the
   * provided Args values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static proxyAuthenticationRequired(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Proxy Authentication Required', args)

    ctx.status = ClientErrorCodes.ProxyAuthenticationRequired
  }

  /**
   * Returns a `408` (Request Timeout) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static requestTimeout(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Request Timeout', args)

    ctx.status = ClientErrorCodes.RequestTimeout
  }

  /**
   * Returns a `409` (Conflict) status code with the provided Args values, if
   * any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static conflict(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Conflict', args)

    ctx.status = ClientErrorCodes.Conflict
  }

  /**
   * Returns a `410` (Gone) status code with the provided Args values, if any
   * exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static gone(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Gone', args)

    ctx.status = ClientErrorCodes.Gone
  }

  /**
   * Returns a `411` (Length Required) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static lengthRequired(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Length Required', args)

    ctx.status = ClientErrorCodes.LengthRequired
  }

  /**
   * Returns a `412` (Precondition Failed) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static preconditionFailed(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Precondition Failed', args)

    ctx.status = ClientErrorCodes.PreconditionFailed
  }

  /**
   * Returns a `413` (Payload Too Large) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static payloadTooLarge(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Payload Too Large', args)

    ctx.status = ClientErrorCodes.PayloadTooLarge
  }

  /**
   * Returns a `414` (URI Too Long) status code with the provided Args values,
   * if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static uriTooLong(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'URI Too Long', args)

    ctx.status = ClientErrorCodes.URITooLong
  }

  /**
   * Returns a `415` (Unsupported Media Type) status code with the provided
   * Args values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static unsupportedMediaType(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Unsupported Media Type', args)

    ctx.status = ClientErrorCodes.UnsupportedMediaType
  }

  /**
   * Returns a `416` (Range Not Satisfiable) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static rangeNotSatisfiable(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Range Not Satisfiable', args)

    ctx.status = ClientErrorCodes.RangeNotSatisfiable
  }

  /**
   * Returns a `417` (Expectation Failed) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static expectationFailed(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Expectation Failed', args)

    ctx.status = ClientErrorCodes.ExpectationFailed
  }

  /**
   * Returns a `418` (I'm a Teapot) status code with the provided Args values,
   * if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static imATeapot(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, "I'm a teapot", args)

    ctx.status = ClientErrorCodes.ImATeapot
  }

  /**
   * Returns a `421` (Misdirected Request) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static misdirectedRequest(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Misdirected Request', args)

    ctx.status = ClientErrorCodes.MisdirectedRequest
  }

  /**
   * Returns a `422` (Unprocessable Entity) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static unprocessableEntity(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Unprocessable Entity', args)

    ctx.status = ClientErrorCodes.UnprocessableEntity
  }

  /**
   * Returns a `423` (Locked) status code with the provided Args values, if any
   * exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static locked(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Locked', args)

    ctx.status = ClientErrorCodes.Locked
  }

  /**
   * Returns a `424` (Failed Dependency) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static failedDependency(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Failed Dependency', args)

    ctx.status = ClientErrorCodes.FailedDependency
  }

  /**
   * Returns a `425` (Too Early) status code with the provided Args values, if
   * any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static tooEarly(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Too Early', args)

    ctx.status = ClientErrorCodes.TooEarly
  }

  /**
   * Returns a `426` (Upgrade Required) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static upgradeRequired(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Upgrade Required', args)

    ctx.status = ClientErrorCodes.UpgradeRequired
  }

  /**
   * Returns a `428` (Precondition Required) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static preconditionRequired(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Precondition Required', args)

    ctx.status = ClientErrorCodes.PreconditionRequired
  }

  /**
   * Returns a `429` (Too Many Requests) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static tooManyRequests(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Too Many Requests', args)

    ctx.status = ClientErrorCodes.TooManyRequests
  }

  /**
   * Returns a `431` (Request Header Fields Too Large) status code with the
   * provided Args values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static requestHeaderFieldsTooLarge(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Request Header Fields Too Large', args)

    ctx.status = ClientErrorCodes.RequestHeaderFieldsTooLarge
  }

  /**
   * Returns a `451` (Unavailable For Legal Reasons) status code with the
   * provided Args values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static unavailableForLegalReasons(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Unavailable For Legal Reasons', args)

    ctx.status = ClientErrorCodes.UnavailableForLegalReasons
  }
}
