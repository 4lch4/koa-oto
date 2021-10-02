import axios from 'axios'
import * as chai from 'chai'
import * as mocha from 'mocha'
import { Redirection } from '../'

const { expect } = chai
const { it, describe } = mocha
const axiosInstance = axios.create({ baseURL: 'http://localhost:3240/test' })

describe('Basic validation of exported Redirection response class', () => {
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

describe('Validate Redirection response functions', () => {
  it('multipleChoices() should set status to 300 and statusText to Multiple Choices', () => {
    axiosInstance.get('/multipleChoices').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(300)
        expect(error.response.statusText).to.equal('Multiple Choices')
      }
    })
  })

  it('movedPermanently() should set status to 301 and statusText to Moved Permanently', () => {
    axiosInstance.get('/movedPermanently').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(301)
        expect(error.response.statusText).to.equal('Moved Permanently')
      }
    })
  })

  it('found() should set status to 302 and statusText to Found', () => {
    axiosInstance.get('/found').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(302)
        expect(error.response.statusText).to.equal('Found')
      }
    })
  })

  it('seeOther() should set status to 303 and statusText to See Other', () => {
    axiosInstance.get('/seeOther').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(303)
        expect(error.response.statusText).to.equal('See Other')
      }
    })
  })

  it('notModified() should set status to 304 and statusText to Not Modified', () => {
    axiosInstance.get('/notModified').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(304)
        expect(error.response.statusText).to.equal('Not Modified')
      }
    })
  })

  it('useProxy() should set status to 305 and statusText to Use Proxy', () => {
    axiosInstance.get('/useProxy').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(305)
        expect(error.response.statusText).to.equal('Use Proxy')
      }
    })
  })

  it('temporaryRedirect() should set status to 307 and statusText to Temporary Redirect', () => {
    axiosInstance.get('/temporaryRedirect').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(307)
        expect(error.response.statusText).to.equal('Temporary Redirect')
      }
    })
  })

  it('permanentRedirect() should set status to 308 and statusText to Permanent Redirect', () => {
    axiosInstance.get('/permanentRedirect').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(308)
        expect(error.response.statusText).to.equal('Permanent Redirect')
      }
    })
  })
})
