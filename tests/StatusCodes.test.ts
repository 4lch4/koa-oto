import * as chai from 'chai'
import * as mocha from 'mocha'
import {
  ClientErrorCodes,
  InformationalCodes,
  RedirectionCodes,
  ServerErrorCodes,
  SuccessfulCodes
} from '../'

const { expect } = chai
const { it, describe } = mocha

describe('Basic validation of exported status codes', () => {
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
