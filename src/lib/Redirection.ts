import { ParameterizedContext } from 'koa'
import { Helpers, RedirectionCodes } from '.'
import { Args } from '../interface'

export class Redirection {
  /**
   * Returns a `300` (Multiple Choices) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static multipleChoices(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Multiple Choices', args)

    ctx.status = RedirectionCodes.MultipleChoices
  }

  /**
   * Returns a `301` (Moved Permanently) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static movedPermanently(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Moved Permanently', args)

    ctx.status = RedirectionCodes.MovedPermanently
  }

  /**
   * Returns a `302` (Found) status code with the provided Args values, if any
   * exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static found(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Found', args)

    ctx.status = RedirectionCodes.Found
  }

  /**
   * Returns a `303` (See Other) status code with the provided Args values, if
   * any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static seeOther(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'See Other', args)

    ctx.status = RedirectionCodes.SeeOther
  }

  /**
   * Returns a `304` (Not Modified) status code with the provided Args values,
   * if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static notModified(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Not Modified', args)

    ctx.status = RedirectionCodes.NotModified
  }

  /**
   * Returns a `305` (Use Proxy) status code with the provided Args values, if
   * any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static useProxy(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Use Proxy', args)

    ctx.status = RedirectionCodes.UseProxy
  }

  /**
   * Returns a `307` (Temporary Redirect) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static temporaryRedirect(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Temporary Redirect', args)

    ctx.status = RedirectionCodes.TemporaryRedirect
  }

  /**
   * Returns a `308` (Permanent Redirect) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static permanentRedirect(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Permanent Redirect', args)

    ctx.status = RedirectionCodes.PermanentRedirect
  }
}
