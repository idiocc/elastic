import { equal, deepEqual } from 'zoroaster/assert'
import { search } from '../../src'
import SearchClient from '../context/search-client'

/** @type {Object.<string, (c: SearchClient)>} */
export const Search = {
  context: SearchClient,
  'is a function'() {
    equal(typeof search, 'function')
  },
  async 'searches without params'({ client, hits, getSearch }) {
    const index = 'test'
    const type = 'user'
    const Res = await search(client, { index, type })
    deepEqual(Res, hits)

    const { q, ...rest } = getSearch()
    equal(q, '')
    deepEqual(rest, { index, type })
  },
  async 'searches with params'({ client, hits, getSearch }) {
    const index = 'test'
    const type = 'user'
    const Res = await search(client, { index, type }, { field: 'test' })
    deepEqual(Res, hits)

    const { q, ...rest } = getSearch()
    equal(q, 'field:test')
    deepEqual(rest, { index, type })
  },
  async 'searches with multiple params'({ client, hits, getSearch }) {
    const index = 'test'
    const type = 'user'
    const Res = await search(client, { index, type }, { field: 'test', field2: 'giraffe' })
    deepEqual(Res, hits)

    const { q, ...rest } = getSearch()
    equal(q, 'field:test,field2:giraffe')
    deepEqual(rest, { index, type })
  },
}