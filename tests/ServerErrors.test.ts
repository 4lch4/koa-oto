import axios from 'axios'
import * as chai from 'chai'
import * as mocha from 'mocha'
import { ServerErrors } from '../'

const { expect } = chai
const { it, describe } = mocha
const axiosInstance = axios.create({ baseURL: 'http://localhost:3240/test' })

describe('Basic validation of exported ServerErrors response class', () => {
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

describe('Validate Server Error response functions', () => {
  it('internalServerError should set status to 500 and message to Internal Server Error', async () => {
    axiosInstance.get('/internalServerError').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(500)
        expect(error.response.statusText).to.equal('Internal Server Error')
      }
    })
  })

  it('notImplemented should set status to 501 and message to Not Implemented', async () => {
    axiosInstance.get('/notImplemented').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(501)
        expect(error.response.statusText).to.equal('Not Implemented')
      }
    })
  })

  it('badGateway should set status to 502 and message to Bad Gateway', async () => {
    axiosInstance.get('/badGateway').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(502)
        expect(error.response.statusText).to.equal('Bad Gateway')
      }
    })
  })

  it('serviceUnavailable should set status to 503 and message to Service Unavailable', async () => {
    axiosInstance.get('/serviceUnavailable').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(503)
        expect(error.response.statusText).to.equal('Service Unavailable')
      }
    })
  })

  it('gatewayTimeout should set status to 504 and message to Gateway Timeout', async () => {
    axiosInstance.get('/gatewayTimeout').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(504)
        expect(error.response.statusText).to.equal('Gateway Timeout')
      }
    })
  })

  it('httpVersionNotSupported should set status to 505 and message to HTTP Version Not Supported', async () => {
    axiosInstance.get('/httpVersionNotSupported').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(505)
        expect(error.response.statusText).to.equal('HTTP Version Not Supported')
      }
    })
  })

  it('variantAlsoNegotiates should set status to 506 and message to Variant Also Negotiates', async () => {
    axiosInstance.get('/variantAlsoNegotiates').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(506)
        expect(error.response.statusText).to.equal('Variant Also Negotiates')
      }
    })
  })

  it('insufficientStorage should set status to 507 and message to Insufficient Storage', async () => {
    axiosInstance.get('/insufficientStorage').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(507)
        expect(error.response.statusText).to.equal('Insufficient Storage')
      }
    })
  })

  it('loopDetected should set status to 508 and message to Loop Detected', async () => {
    axiosInstance.get('/loopDetected').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(508)
        expect(error.response.statusText).to.equal('Loop Detected')
      }
    })
  })

  it('notExtended should set status to 510 and message to Not Extended', async () => {
    axiosInstance.get('/notExtended').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(510)
        expect(error.response.statusText).to.equal('Not Extended')
      }
    })
  })

  it('networkAuthenticationRequired should set status to 511 and message to Network Authentication Required', async () => {
    axiosInstance.get('/networkAuthenticationRequired').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(511)
        expect(error.response.statusText).to.equal(
          'Network Authentication Required'
        )
      }
    })
  })
})
