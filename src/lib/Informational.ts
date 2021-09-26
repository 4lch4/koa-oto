import { ParameterizedContext } from 'koa'
import { Helpers, InformationalCodes } from '.'
import { Args } from '../interface'

export class Informational {
  public static continues(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Continue', args)

    ctx.status = InformationalCodes.Continue
  }

  public static switchingProtocols(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Switching Protocols', args)

    ctx.status = InformationalCodes.SwitchingProtocols
  }

  public static processing(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Processing', args)

    ctx.status = InformationalCodes.Processing
  }

  public static earlyHints(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Early Hints', args)

    ctx.status = InformationalCodes.EarlyHints
  }
}
