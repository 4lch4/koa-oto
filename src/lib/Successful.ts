import { ParameterizedContext } from 'koa'
import { Args } from '../interface'
import { Helpers, SuccessfulCodes } from './'

export class Successful {
  /**
   * Returns a `200` (OK) response with the provided Args values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static ok(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'OK', args)

    ctx.status = SuccessfulCodes.OK
  }

  /**
   * Returns a `201` (Created) response with the provided Args value, if any
   * exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static created(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Created', args)

    ctx.status = SuccessfulCodes.Created
  }

  /**
   * Returns a `202` (Accepted) response with the provided Argsvalues, if any
   * exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static accepted(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Accepted', args)

    ctx.status = SuccessfulCodes.Accepted
  }

  /**
   * Returns a `203` (Non-Authoritative Information) response with the Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static nonAuthoritativeInformation(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Non-Authoritative Information', args)

    ctx.status = SuccessfulCodes.NonAuthoritativeInformation
  }

  /**
   * Returns a `204` (No Content) response with the provided Args values, if any
   * exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static noContent(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'No Content', args)

    ctx.status = SuccessfulCodes.NoContent
  }

  /**
   * Returns a `205` (Reset Content) response with the provided Args values, if
   * any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static resetContent(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Reset Content', args)

    ctx.status = SuccessfulCodes.ResetContent
  }

  /**
   * Returns a `206` (Partial Content) response with the provided Args values,
   * if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static partialContent(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Partial Content', args)

    ctx.status = SuccessfulCodes.PartialContent
  }
}
