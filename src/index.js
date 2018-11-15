import { debuglog } from 'util'
import { makeQuery } from './make-query'

const LOG = debuglog('@idio/elastic')

/**
 * The wrapper around search to make a query based on a data object. Returns an empty array no no hits are found.
 * @param {import('elasticsearch').Client} client The elastic client.
 * @param {import('elasticsearch').SearchParams} searchParams The search method parameters, such as index, type.
 * @param {Object} [queryParams] The params for search terms.
 */
export const search = async (client, searchParams, queryParams = {}) => {
  const q = makeQuery(queryParams)
  const res = await client.search({
    ...searchParams,
    q,
  })
  const { hits: { hits, total } } = res
  if (!total) return []
  return hits
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */
