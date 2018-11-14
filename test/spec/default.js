import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import elastic from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof elastic, 'function')
  },
  async 'calls package without error'() {
    await elastic()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await elastic({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T