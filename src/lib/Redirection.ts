import { ParameterizedContext } from 'koa'
import { Helpers, RedirectionCodes } from '.'
import { Args } from '../interface'

export class Redirection {
  public static multipleChoices(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Multiple Choices', args)

    ctx.status = RedirectionCodes.MultipleChoices
  }

  public static movedPermanently(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Moved Permanently', args)

    ctx.status = RedirectionCodes.MovedPermanently
  }

  public static found(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Found', args)

    ctx.status = RedirectionCodes.Found
  }

  public static seeOther(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'See Other', args)

    ctx.status = RedirectionCodes.SeeOther
  }

  public static notModified(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Not Modified', args)

    ctx.status = RedirectionCodes.NotModified
  }

  public static useProxy(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Use Proxy', args)

    ctx.status = RedirectionCodes.UseProxy
  }

  public static temporaryRedirect(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Temporary Redirect', args)

    ctx.status = RedirectionCodes.TemporaryRedirect
  }

  public static permanentRedirect(ctx: ParameterizedContext, args?: Args) {
    Helpers.handleHeaders(ctx, args)
    Helpers.handleMsgBody(ctx, 'Permanent Redirect', args)

    ctx.status = RedirectionCodes.PermanentRedirect
  }
}
