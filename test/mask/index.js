import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import elastic from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await elastic({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts