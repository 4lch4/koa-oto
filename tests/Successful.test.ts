import axios from 'axios'
import * as chai from 'chai'
import * as mocha from 'mocha'
import { Successful } from '../'

const { expect } = chai
const { it, describe } = mocha
const axiosInstance = axios.create({ baseURL: 'http://localhost:3240/test' })

describe('Basic validation of exported Successful response class', () => {
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

describe('Validate Success response functions', () => {
  it('ok() should set status to 200 and message to OK', async () => {
    const res = await axiosInstance.get('/ok')

    expect(res.status).to.equal(200)
    expect(res.statusText).to.equal('OK')
  })

  it('created() should set status to 201 and message to Created', async () => {
    const res = await axiosInstance.get('/created')

    expect(res.status).to.equal(201)
    expect(res.statusText).to.equal('Created')
  })

  it('accepted() should set status to 202 and message to Accepted', async () => {
    const res = await axiosInstance.get('/accepted')

    expect(res.status).to.equal(202)
    expect(res.statusText).to.equal('Accepted')
  })

  it('nonAuthoritativeInformation() should set status to 203 and message to Non-Authoritative Information', async () => {
    const res = await axiosInstance.get('/nonAuthoritativeInformation')

    expect(res.status).to.equal(203)
    expect(res.statusText).to.equal('Non-Authoritative Information')
  })

  it('noContent() should set status to 204 and message to No Content', async () => {
    const res = await axiosInstance.get('/noContent')

    expect(res.status).to.equal(204)
    expect(res.statusText).to.equal('No Content')
  })

  it('resetContent() should set status to 205 and message to Reset Content', async () => {
    const res = await axiosInstance.get('/resetContent')

    expect(res.status).to.equal(205)
    expect(res.statusText).to.equal('Reset Content')
  })

  it('partialContent() should set status to 206 and message to Partial Content', async () => {
    const res = await axiosInstance.get('/partialContent')

    expect(res.status).to.equal(206)
    expect(res.statusText).to.equal('Partial Content')
  })
})
