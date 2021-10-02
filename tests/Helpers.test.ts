import * as chai from 'chai'
import * as mocha from 'mocha'
import { Helpers } from '../'

const { expect } = chai
const { it, describe } = mocha

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
})
