import { ParameterizedContext } from 'koa'
import {
  ClientErrors,
  Informational,
  Redirection,
  ServerErrors,
  Successful
} from '../'

export interface RouteCollection {
  [key: string]: (ctx: ParameterizedContext) => void
}

export const ClientErrorRoutes = {
  badRequest: (ctx: ParameterizedContext) => ClientErrors.badRequest(ctx),
  unauthorized: (ctx: ParameterizedContext) => ClientErrors.unauthorized(ctx),
  paymentRequired: (ctx: ParameterizedContext) =>
    ClientErrors.paymentRequired(ctx),
  forbidden: (ctx: ParameterizedContext) => ClientErrors.forbidden(ctx),
  notFound: (ctx: ParameterizedContext) => ClientErrors.notFound(ctx),
  methodNotAllowed: (ctx: ParameterizedContext) =>
    ClientErrors.methodNotAllowed(ctx),
  notAcceptable: (ctx: ParameterizedContext) => ClientErrors.notAcceptable(ctx),
  proxyAuthenticationRequired: (ctx: ParameterizedContext) =>
    ClientErrors.proxyAuthenticationRequired(ctx),
  requestTimeout: (ctx: ParameterizedContext) =>
    ClientErrors.requestTimeout(ctx),
  conflict: (ctx: ParameterizedContext) => ClientErrors.conflict(ctx),
  gone: (ctx: ParameterizedContext) => ClientErrors.gone(ctx),
  lengthRequired: (ctx: ParameterizedContext) =>
    ClientErrors.lengthRequired(ctx),
  preconditionFailed: (ctx: ParameterizedContext) =>
    ClientErrors.preconditionFailed(ctx),
  payloadTooLarge: (ctx: ParameterizedContext) =>
    ClientErrors.payloadTooLarge(ctx),
  uriTooLong: (ctx: ParameterizedContext) => ClientErrors.uriTooLong(ctx),
  unsupportedMediaType: (ctx: ParameterizedContext) =>
    ClientErrors.unsupportedMediaType(ctx),
  rangeNotSatisfiable: (ctx: ParameterizedContext) =>
    ClientErrors.rangeNotSatisfiable(ctx),
  expectationFailed: (ctx: ParameterizedContext) =>
    ClientErrors.expectationFailed(ctx),
  imATeapot: (ctx: ParameterizedContext) => ClientErrors.imATeapot(ctx),
  misdirectedRequest: (ctx: ParameterizedContext) =>
    ClientErrors.misdirectedRequest(ctx),
  unprocessableEntity: (ctx: ParameterizedContext) =>
    ClientErrors.unprocessableEntity(ctx),
  locked: (ctx: ParameterizedContext) => ClientErrors.locked(ctx),
  failedDependency: (ctx: ParameterizedContext) =>
    ClientErrors.failedDependency(ctx),
  upgradeRequired: (ctx: ParameterizedContext) =>
    ClientErrors.upgradeRequired(ctx),
  preconditionRequired: (ctx: ParameterizedContext) =>
    ClientErrors.preconditionRequired(ctx),
  tooManyRequests: (ctx: ParameterizedContext) =>
    ClientErrors.tooManyRequests(ctx),
  requestHeaderFieldsTooLarge: (ctx: ParameterizedContext) =>
    ClientErrors.requestHeaderFieldsTooLarge(ctx),
  unavailableForLegalReasons: (ctx: ParameterizedContext) =>
    ClientErrors.unavailableForLegalReasons(ctx)
}

export const SuccessfulRoutes = {
  ok: (ctx: ParameterizedContext) => Successful.ok(ctx),
  created: (ctx: ParameterizedContext) => Successful.created(ctx),
  accepted: (ctx: ParameterizedContext) => Successful.accepted(ctx),
  nonAuthoritativeInformation: (ctx: ParameterizedContext) =>
    Successful.nonAuthoritativeInformation(ctx),
  noContent: (ctx: ParameterizedContext) => Successful.noContent(ctx),
  resetContent: (ctx: ParameterizedContext) => Successful.resetContent(ctx),
  partialContent: (ctx: ParameterizedContext) => Successful.partialContent(ctx)
}

export const InformationalRoutes = {
  continue: (ctx: ParameterizedContext) => Informational.continues(ctx),
  switchingProtocols: (ctx: ParameterizedContext) =>
    Informational.switchingProtocols(ctx),
  processing: (ctx: ParameterizedContext) => Informational.processing(ctx),
  earlyHints: (ctx: ParameterizedContext) => Informational.earlyHints(ctx)
}

export const RedirectionRoutes = {
  multipleChoices: (ctx: ParameterizedContext) =>
    Redirection.multipleChoices(ctx),
  movedPermanently: (ctx: ParameterizedContext) =>
    Redirection.movedPermanently(ctx),
  found: (ctx: ParameterizedContext) => Redirection.found(ctx),
  seeOther: (ctx: ParameterizedContext) => Redirection.seeOther(ctx),
  notModified: (ctx: ParameterizedContext) => Redirection.notModified(ctx),
  useProxy: (ctx: ParameterizedContext) => Redirection.useProxy(ctx),
  temporaryRedirect: (ctx: ParameterizedContext) =>
    Redirection.temporaryRedirect(ctx),
  permanentRedirect: (ctx: ParameterizedContext) =>
    Redirection.permanentRedirect(ctx)
}

export const ServerErrorRoutes = {
  internalServerError: (ctx: ParameterizedContext) =>
    ServerErrors.internalServerError(ctx),
  notImplemented: (ctx: ParameterizedContext) =>
    ServerErrors.notImplemented(ctx),
  badGateway: (ctx: ParameterizedContext) => ServerErrors.badGateway(ctx),
  serviceUnavailable: (ctx: ParameterizedContext) =>
    ServerErrors.serviceUnavailable(ctx),
  gatewayTimeout: (ctx: ParameterizedContext) =>
    ServerErrors.gatewayTimeout(ctx),
  httpVersionNotSupported: (ctx: ParameterizedContext) =>
    ServerErrors.httpVersionNotSupported(ctx),
  variantAlsoNegotiates: (ctx: ParameterizedContext) =>
    ServerErrors.variantAlsoNegotiates(ctx),
  insufficientStorage: (ctx: ParameterizedContext) =>
    ServerErrors.insufficientStorage(ctx),
  loopDetected: (ctx: ParameterizedContext) => ServerErrors.loopDetected(ctx),
  notExtended: (ctx: ParameterizedContext) => ServerErrors.notExtended(ctx),
  networkAuthenticationRequired: (ctx: ParameterizedContext) =>
    ServerErrors.networkAuthenticationRequired(ctx)
}

export const AllRoutes: RouteCollection = {
  ...ClientErrorRoutes,
  ...SuccessfulRoutes,
  ...InformationalRoutes,
  ...RedirectionRoutes,
  ...ServerErrorRoutes
}
