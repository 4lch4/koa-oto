import * as chai from 'chai'
import * as mocha from 'mocha'
import {
  ClientErrorCodes,
  ClientErrors,
  Informational,
  InformationalCodes,
  Redirection,
  RedirectionCodes,
  ServerErrorCodes,
  ServerErrors,
  Successful,
  SuccessfulCodes
} from './index'

const { expect } = chai
const { it, describe } = mocha

describe('Test exported status codes', () => {
  it('should have a code for Client Error status codes 400 - 451', () => {
    expect(ClientErrorCodes.BadRequest).to.equal(400)
    expect(ClientErrorCodes.Unauthorized).to.equal(401)
    expect(ClientErrorCodes.PaymentRequired).to.equal(402)
    expect(ClientErrorCodes.Forbidden).to.equal(403)
    expect(ClientErrorCodes.NotFound).to.equal(404)
    expect(ClientErrorCodes.MethodNotAllowed).to.equal(405)
    expect(ClientErrorCodes.NotAcceptable).to.equal(406)
    expect(ClientErrorCodes.ProxyAuthenticationRequired).to.equal(407)
    expect(ClientErrorCodes.RequestTimeout).to.equal(408)
    expect(ClientErrorCodes.Conflict).to.equal(409)
    expect(ClientErrorCodes.Gone).to.equal(410)
    expect(ClientErrorCodes.LengthRequired).to.equal(411)
    expect(ClientErrorCodes.PreconditionFailed).to.equal(412)
    expect(ClientErrorCodes.PayloadTooLarge).to.equal(413)
    expect(ClientErrorCodes.URITooLong).to.equal(414)
    expect(ClientErrorCodes.UnsupportedMediaType).to.equal(415)
    expect(ClientErrorCodes.RangeNotSatisfiable).to.equal(416)
    expect(ClientErrorCodes.ExpectationFailed).to.equal(417)
    expect(ClientErrorCodes.ImATeapot).to.equal(418)
    expect(ClientErrorCodes.MisdirectedRequest).to.equal(421)
    expect(ClientErrorCodes.UnprocessableEntity).to.equal(422)
    expect(ClientErrorCodes.Locked).to.equal(423)
    expect(ClientErrorCodes.FailedDependency).to.equal(424)
    expect(ClientErrorCodes.UpgradeRequired).to.equal(426)
    expect(ClientErrorCodes.PreconditionRequired).to.equal(428)
    expect(ClientErrorCodes.TooManyRequests).to.equal(429)
    expect(ClientErrorCodes.RequestHeaderFieldsTooLarge).to.equal(431)
    expect(ClientErrorCodes.UnavailableForLegalReasons).to.equal(451)
  })

  it('should have a code for Server Error status codes 500 - 511', () => {
    expect(ServerErrorCodes.InternalServerError).to.equal(500)
    expect(ServerErrorCodes.NotImplemented).to.equal(501)
    expect(ServerErrorCodes.BadGateway).to.equal(502)
    expect(ServerErrorCodes.ServiceUnavailable).to.equal(503)
    expect(ServerErrorCodes.GatewayTimeout).to.equal(504)
    expect(ServerErrorCodes.HTTPVersionNotSupported).to.equal(505)
    expect(ServerErrorCodes.VariantAlsoNegotiates).to.equal(506)
    expect(ServerErrorCodes.InsufficientStorage).to.equal(507)
    expect(ServerErrorCodes.LoopDetected).to.equal(508)
    expect(ServerErrorCodes.NotExtended).to.equal(510)
    expect(ServerErrorCodes.NetworkAuthenticationRequired).to.equal(511)
  })

  it('should have a code for Successful status codes 200 - 206', () => {
    expect(SuccessfulCodes.OK).to.equal(200)
    expect(SuccessfulCodes.Created).to.equal(201)
    expect(SuccessfulCodes.Accepted).to.equal(202)
    expect(SuccessfulCodes.NonAuthoritativeInformation).to.equal(203)
    expect(SuccessfulCodes.NoContent).to.equal(204)
    expect(SuccessfulCodes.ResetContent).to.equal(205)
    expect(SuccessfulCodes.PartialContent).to.equal(206)
  })

  it('should have a code for each Informational status codes 100 - 103', () => {
    expect(InformationalCodes.Continue).to.equal(100)
    expect(InformationalCodes.SwitchingProtocols).to.equal(101)
    expect(InformationalCodes.Processing).to.equal(102)
    expect(InformationalCodes.EarlyHints).to.equal(103)
  })

  it('should have a code for Redirectional status codes 300 - 308', () => {
    expect(RedirectionCodes.MultipleChoices).to.equal(300)
    expect(RedirectionCodes.MovedPermanently).to.equal(301)
    expect(RedirectionCodes.Found).to.equal(302)
    expect(RedirectionCodes.SeeOther).to.equal(303)
    expect(RedirectionCodes.NotModified).to.equal(304)
    expect(RedirectionCodes.UseProxy).to.equal(305)
    expect(RedirectionCodes.TemporaryRedirect).to.equal(307)
    expect(RedirectionCodes.PermanentRedirect).to.equal(308)
  })
})

describe('Test exported Successful response class', () => {
  it('should export a function for the 200 OK status code', () => {
    expect(Successful.ok).to.be.a('function')
  })

  it('should export a function for the 201 Created status code', () => {
    expect(Successful.created).to.be.a('function')
  })

  it('should export a function for the 202 Accepted status code', () => {
    expect(Successful.accepted).to.be.a('function')
  })

  it('should export a function for the 203 Non-Authoritative Information status code', () => {
    expect(Successful.nonAuthoritativeInformation).to.be.a('function')
  })

  it('should export a function for the 204 No Content status code', () => {
    expect(Successful.noContent).to.be.a('function')
  })

  it('should export a function for the 205 Reset Content status code', () => {
    expect(Successful.resetContent).to.be.a('function')
  })

  it('should export a function for the 206 Partial Content status code', () => {
    expect(Successful.partialContent).to.be.a('function')
  })
})

describe('Test exported ClientErrors response class', () => {
  it('should export a function for the 400 Bad Request status code', () => {
    expect(ClientErrors.badRequest).to.be.a('function')
  })

  it('should export a function for the 401 Unauthorized status code', () => {
    expect(ClientErrors.unauthorized).to.be.a('function')
  })

  it('should export a function for the 402 Payment Required status code', () => {
    expect(ClientErrors.paymentRequired).to.be.a('function')
  })

  it('should export a function for the 403 Forbidden status code', () => {
    expect(ClientErrors.forbidden).to.be.a('function')
  })

  it('should export a function for the 404 Not Found status code', () => {
    expect(ClientErrors.notFound).to.be.a('function')
  })

  it('should export a function for the 405 Method Not Allowed status code', () => {
    expect(ClientErrors.methodNotAllowed).to.be.a('function')
  })

  it('should export a function for the 406 Not Acceptable status code', () => {
    expect(ClientErrors.notAcceptable).to.be.a('function')
  })

  it('should export a function for the 407 Proxy Authentication Required status code', () => {
    expect(ClientErrors.proxyAuthenticationRequired).to.be.a('function')
  })

  it('should export a function for the 408 Request Timeout status code', () => {
    expect(ClientErrors.requestTimeout).to.be.a('function')
  })

  it('should export a function for the 409 Conflict status code', () => {
    expect(ClientErrors.conflict).to.be.a('function')
  })

  it('should export a function for the 410 Gone status code', () => {
    expect(ClientErrors.gone).to.be.a('function')
  })

  it('should export a function for the 411 Length Required status code', () => {
    expect(ClientErrors.lengthRequired).to.be.a('function')
  })

  it('should export a function for the 412 Precondition Failed status code', () => {
    expect(ClientErrors.preconditionFailed).to.be.a('function')
  })

  it('should export a function for the 413 Payload Too Large status code', () => {
    expect(ClientErrors.payloadTooLarge).to.be.a('function')
  })

  it('should export a function for the 414 URI Too Long status code', () => {
    expect(ClientErrors.uriTooLong).to.be.a('function')
  })

  it('should export a function for the 415 Unsupported Media Type status code', () => {
    expect(ClientErrors.unsupportedMediaType).to.be.a('function')
  })

  it('should export a function for the 416 Range Not Satisfiable status code', () => {
    expect(ClientErrors.rangeNotSatisfiable).to.be.a('function')
  })

  it('should export a function for the 417 Expectation Failed status code', () => {
    expect(ClientErrors.expectationFailed).to.be.a('function')
  })

  it("should export a function for the 418 I'm a teapot status code", () => {
    expect(ClientErrors.imATeapot).to.be.a('function')
  })

  it('should export a function for the 421 Misdirected Request status code', () => {
    expect(ClientErrors.misdirectedRequest).to.be.a('function')
  })

  it('should export a function for the 422 Unprocessable Entity status code', () => {
    expect(ClientErrors.unprocessableEntity).to.be.a('function')
  })

  it('should export a function for the 423 Locked status code', () => {
    expect(ClientErrors.locked).to.be.a('function')
  })

  it('should export a function for the 424 Failed Dependency status code', () => {
    expect(ClientErrors.failedDependency).to.be.a('function')
  })

  it('should export a function for the 425 Too Early status code', () => {
    expect(ClientErrors.tooEarly).to.be.a('function')
  })

  it('should export a function for the 426 Upgrade Required status code', () => {
    expect(ClientErrors.upgradeRequired).to.be.a('function')
  })

  it('should export a function for the 428 Precondition Required status code', () => {
    expect(ClientErrors.preconditionRequired).to.be.a('function')
  })

  it('should export a function for the 429 Too Many Requests status code', () => {
    expect(ClientErrors.tooManyRequests).to.be.a('function')
  })

  it('should export a function for the 431 Request Header Fields Too Large status code', () => {
    expect(ClientErrors.requestHeaderFieldsTooLarge).to.be.a('function')
  })

  it('should export a function for the 451 Unavailable For Legal Reasons status code', () => {
    expect(ClientErrors.unavailableForLegalReasons).to.be.a('function')
  })
})

describe('Test exported ServerErrors response class', () => {
  it('should export a function for the 500 Internal Server Error status code', () => {
    expect(ServerErrors.internalServerError).to.be.a('function')
  })

  it('should export a function for the 501 Not Implemented status code', () => {
    expect(ServerErrors.notImplemented).to.be.a('function')
  })

  it('should export a function for the 502 Bad Gateway status code', () => {
    expect(ServerErrors.badGateway).to.be.a('function')
  })

  it('should export a function for the 503 Service Unavailable status code', () => {
    expect(ServerErrors.serviceUnavailable).to.be.a('function')
  })

  it('should export a function for the 504 Gateway Timeout status code', () => {
    expect(ServerErrors.gatewayTimeout).to.be.a('function')
  })

  it('should export a function for the 505 HTTP Version Not Supported status code', () => {
    expect(ServerErrors.httpVersionNotSupported).to.be.a('function')
  })

  it('should export a function for the 506 Variant Also Negotiates status code', () => {
    expect(ServerErrors.variantAlsoNegotiates).to.be.a('function')
  })

  it('should export a function for the 507 Insufficient Storage status code', () => {
    expect(ServerErrors.insufficientStorage).to.be.a('function')
  })

  it('should export a function for the 508 Loop Detected status code', () => {
    expect(ServerErrors.loopDetected).to.be.a('function')
  })

  it('should export a function for the 510 Not Extended status code', () => {
    expect(ServerErrors.notExtended).to.be.a('function')
  })

  it('should export a function for the 511 Network Authentication Required status code', () => {
    expect(ServerErrors.networkAuthenticationRequired).to.be.a('function')
  })
})

describe('Test exported Informational response class', () => {
  it('should export a function for the 100 Continue status code', () => {
    expect(Informational.continues).to.be.a('function')
  })

  it('should export a function for the 101 Switching Protocols status code', () => {
    expect(Informational.switchingProtocols).to.be.a('function')
  })

  it('should export a function for the 102 Processing status code', () => {
    expect(Informational.processing).to.be.a('function')
  })

  it('should export a function for the 103 Checkpoint status code', () => {
    expect(Informational.earlyHints).to.be.a('function')
  })
})

describe('Test exported Redirection response class', () => {
  it('should export a function for the 300 Multiple Choices status code', () => {
    expect(Redirection.multipleChoices).to.be.a('function')
  })

  it('should export a function for the 301 Moved Permanently status code', () => {
    expect(Redirection.movedPermanently).to.be.a('function')
  })

  it('should export a function for the 302 Found status code', () => {
    expect(Redirection.found).to.be.a('function')
  })

  it('should export a function for the 303 See Other status code', () => {
    expect(Redirection.seeOther).to.be.a('function')
  })

  it('should export a function for the 304 Not Modified status code', () => {
    expect(Redirection.notModified).to.be.a('function')
  })

  it('should export a function for the 305 Use Proxy status code', () => {
    expect(Redirection.useProxy).to.be.a('function')
  })

  it('should export a function for the 307 Temporary Redirect status code', () => {
    expect(Redirection.temporaryRedirect).to.be.a('function')
  })

  it('should export a function for the 308 Permanent Redirect status code', () => {
    expect(Redirection.permanentRedirect).to.be.a('function')
  })
})
