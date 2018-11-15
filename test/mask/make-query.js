import { makeTestSuite } from 'zoroaster'
import { makeQuery } from '../../src/make-query'

export const MakeQuery = makeTestSuite('test/result/make-query.md', {
  getResults(input) {
    const i = JSON.parse(input)
    const res = makeQuery(i)
    return res
  },
})