import { ParameterizedContext } from 'koa'
import { Helpers, InformationalCodes } from '.'
import { Args } from '../interface'

export class Informational {
  /**
   * Returns a `100` (Continue) status code with the provided Args values, if
   * any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static continues(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Continue', args)

    ctx.status = InformationalCodes.Continue
  }

  /**
   * Returns a `101` (Switching Protocols) status code with the provided Args
   * values, if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static switchingProtocols(
    ctx: ParameterizedContext,
    args?: Args | any
  ) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Switching Protocols', args)

    ctx.status = InformationalCodes.SwitchingProtocols
  }

  /**
   * Returns a `102` (Processing) status code with the provided Args values, if
   * any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static processing(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Processing', args)

    ctx.status = InformationalCodes.Processing
  }

  /**
   * Returns a `103` (Early Hints) status code with the provided Args values,
   * if any exist.
   *
   * @param ctx The context of the request.
   * @param args An optional object containing content to return.
   */
  public static earlyHints(ctx: ParameterizedContext, args?: Args | any) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Early Hints', args)

    ctx.status = InformationalCodes.EarlyHints
  }
}
