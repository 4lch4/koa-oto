import Axios from 'axios'
import * as chai from 'chai'
import * as mocha from 'mocha'
import { Helpers } from '../'

const { expect } = chai
const { it, describe } = mocha
const axios = Axios.create({ baseURL: 'http://localhost:3240/test' })

describe('Basic validation of exported Helpers class', () => {
  it('should export a function called isArgs', () => {
    expect(Helpers.isArgs).to.be.a('function')
  })

  it('should properly detect if the object contains Args properties', () => {
    expect(Helpers.isArgs({})).to.be.false
    expect(Helpers.isArgs({ body: 'Hello' })).to.be.true
    expect(Helpers.isArgs({ msg: 'Hello' })).to.be.true
    expect(Helpers.isArgs({ headers: { key: 'value' } })).to.be.true
  })

  it('should handle headers for return values', async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        key: 'value'
      }
      await axios.get('/classHelpers', { headers })
    } catch (error) {
      console.error(error)
      return Promise.reject(error)
    }
  })
})
