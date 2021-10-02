import axios from 'axios'
import * as chai from 'chai'
import * as mocha from 'mocha'
import { Informational } from '../'

const { expect } = chai
const { it, describe } = mocha
const axiosInstance = axios.create({ baseURL: 'http://localhost:3240/test' })

describe('Basic validation of exported Informational response class', () => {
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

describe('Validate Information response functions', () => {
  it('continues() should set status to 100 and statusText to Continue', () => {
    axiosInstance.get('/continues').catch(error => {
      if (error.response) {
        expect(error.response.status).to.equal(400)
        expect(error.response.statusText).to.equal('Not Found')
      }
    })
  })

  it('switchingProtocols() should set status to 101 and statusText to Switching Protocols', () => {
    axiosInstance.get('/switchingProtocols').catch(error => {
      expect(error.message).to.equal('aborted')
    })
  })

  it('processing() should set status to 102 and statusText to Processing',  () => {
    axiosInstance.get('/processing').catch(error => {
      expect(error.message).to.equal('socket hang up')
    })
  })

  it('earlyHints() should set status to 103 and statusText to Checkpoint', () => {
    axiosInstance.get('/earlyHints').catch(error => {
      expect(error.message).to.equal('socket hang up')
    })
  })
})
