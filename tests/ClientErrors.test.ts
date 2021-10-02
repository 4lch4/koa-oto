import axios from 'axios'
import * as chai from 'chai'
import * as mocha from 'mocha'
import { ClientErrors } from '../'

const { expect } = chai
const { it, describe } = mocha
const axiosInstance = axios.create({ baseURL: 'http://localhost:3240/test' })

describe('Basic validation of exported ClientErrors response class', () => {
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

describe('Validate Client Error response functions', () => {
  it('badRequest() should set status to 400 and message to Bad Request', () => {
    axiosInstance.get('/badRequest').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(400)
        expect(error.response.data.message).to.equal('Bad Request')
      }
    })
  })

  it('unauthorized() should set status to 401 and message to Unauthorized', () => {
    axiosInstance.get('/unauthorized').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(401)
        expect(error.responsestatusText).to.equal('Unauthorized')
      }
    })
  })

  it('paymentRequired() should set status to 402 and message to Payment Required', () => {
    axiosInstance.get('/paymentRequired').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(402)
        expect(error.responsestatusText).to.equal('Payment Required')
      }
    })
  })

  it('forbidden() should set status to 403 and message to Forbidden', () => {
    axiosInstance.get('/forbidden').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(403)
        expect(error.responsestatusText).to.equal('Forbidden')
      }
    })
  })

  it('notFound() should set status to 404 and message to Not Found', () => {
    axiosInstance.get('/notFound').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(404)
        expect(error.responsestatusText).to.equal('Not Found')
      }
    })
  })

  it('methodNotAllowed() should set status to 405 and message to Method Not Allowed', () => {
    axiosInstance.get('/methodNotAllowed').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(405)
        expect(error.responsestatusText).to.equal('Method Not Allowed')
      }
    })
  })

  it('notAcceptable() should set status to 406 and message to Not Acceptable', () => {
    axiosInstance.get('/notAcceptable').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(406)
        expect(error.responsestatusText).to.equal('Not Acceptable')
      }
    })
  })

  it('proxyAuthenticationRequired() should set status to 407 and message to Proxy Authentication Required', () => {
    axiosInstance.get('/proxyAuthenticationRequired').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(407)
        expect(error.responsestatusText).to.equal(
          'Proxy Authentication Required'
        )
      }
    })
  })

  it('requestTimeout() should set status to 408 and message to Request Timeout', () => {
    axiosInstance.get('/requestTimeout').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(408)
        expect(error.responsestatusText).to.equal('Request Timeout')
      }
    })
  })

  it('conflict() should set status to 409 and message to Conflict', () => {
    axiosInstance.get('/conflict').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(409)
        expect(error.responsestatusText).to.equal('Conflict')
      }
    })
  })

  it('gone() should set status to 410 and message to Gone', () => {
    axiosInstance.get('/gone').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(410)
        expect(error.responsestatusText).to.equal('Gone')
      }
    })
  })

  it('lengthRequired() should set status to 411 and message to Length Required', () => {
    axiosInstance.get('/lengthRequired').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(411)
        expect(error.responsestatusText).to.equal('Length Required')
      }
    })
  })

  it('preconditionFailed() should set status to 412 and message to Precondition Failed', () => {
    axiosInstance.get('/preconditionFailed').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(412)
        expect(error.responsestatusText).to.equal('Precondition Failed')
      }
    })
  })

  it('payloadTooLarge() should set status to 413 and message to Request Entity Too Large', () => {
    axiosInstance.get('/payloadTooLarge').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(413)
        expect(error.responsestatusText).to.equal('Payload Too Large')
      }
    })
  })

  it('uriTooLong() should set status to 414 and message to Request-URI Too Long', () => {
    axiosInstance.get('/uriTooLong').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(414)
        expect(error.responsestatusText).to.equal('URI Too Long')
      }
    })
  })

  it('unsupportedMediaType() should set status to 415 and message to Unsupported Media Type', () => {
    axiosInstance.get('/unsupportedMediaType').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(415)
        expect(error.responsestatusText).to.equal('Unsupported Media Type')
      }
    })
  })

  it('rangeNotSatisfiable() should set status to 416 and message to Requested Range Not Satisfiable', () => {
    axiosInstance.get('/rangeNotSatisfiable').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(416)
        expect(error.responsestatusText).to.equal(
          'Requested Range Not Satisfiable'
        )
      }
    })
  })

  it('expectationFailed() should set status to 417 and message to Expectation Failed', () => {
    axiosInstance.get('/expectationFailed').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(417)
        expect(error.responsestatusText).to.equal('Expectation Failed')
      }
    })
  })

  it('imATeapot() should set status to 418 and message to I\'m a Teapot', () => {
    axiosInstance.get('/imATeapot').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(418)
        expect(error.responsestatusText).to.equal('I\'m a Teapot')
      }
    })
  })

  it('misdirectedRequest() should set status to 421 and message to Misdirected Request', () => {
    axiosInstance.get('/misdirectedRequest').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(421)
        expect(error.responsestatusText).to.equal('Misdirected Request')
      }
    })
  })

  it('unprocessableEntity() should set status to 422 and message to Unprocessable Entity', () => {
    axiosInstance.get('/unprocessableEntity').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(422)
        expect(error.responsestatusText).to.equal('Unprocessable Entity')
      }
    })
  })

  it('locked() should set status to 423 and message to Locked', () => {
    axiosInstance.get('/locked').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(423)
        expect(error.responsestatusText).to.equal('Locked')
      }
    })
  })

  it('failedDependency() should set status to 424 and message to Failed Dependency', () => {
    axiosInstance.get('/failedDependency').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(424)
        expect(error.responsestatusText).to.equal('Failed Dependency')
      }
    })
  })

  it('tooEarly() should set status to 425 and message to Too Early', () => {
    axiosInstance.get('/tooEarly').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(425)
        expect(error.responsestatusText).to.equal('Too Early')
      }
    })
  })

  it('upgradeRequired() should set status to 426 and message to Upgrade Required', () => {
    axiosInstance.get('/upgradeRequired').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(426)
        expect(error.responsestatusText).to.equal('Upgrade Required')
      }
    })
  })

  it('preconditionRequired() should set status to 428 and message to Precondition Required', () => {
    axiosInstance.get('/preconditionRequired').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(428)
        expect(error.responsestatusText).to.equal('Precondition Required')
      }
    })
  })

  it('tooManyRequests() should set status to 429 and message to Too Many Requests', () => {
    axiosInstance.get('/tooManyRequests').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(429)
        expect(error.responsestatusText).to.equal('Too Many Requests')
      }
    })
  })

  it('requestHeaderFieldsTooLarge() should set status to 431 and message to Request Header Fields Too Large', () => {
    axiosInstance.get('/requestHeaderFieldsTooLarge').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(431)
        expect(error.responsestatusText).to.equal(
          'Request Header Fields Too Large'
        )
      }
    })
  })

  it('unavailableForLegalReasons() should set status to 451 and message to Unavailable For Legal Reasons', () => {
    axiosInstance.get('/unavailableForLegalReasons').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(451)
        expect(error.responsestatusText).to.equal(
          'Unavailable For Legal Reasons'
        )
      }
    })
  })
})
