import { debuglog } from 'util'
import { makeQuery } from './make-query'

const LOG = debuglog('@idio/elastic')

/**
 * Searches by stringifying the query object into the `q` parameter. Returns hits without any metadata.
 * https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference-6-5.html#api-search-6-5
 * @param {Client} client The elastic client.
 * @param {SearchParams} searchParams The search method parameters, such as index, type.
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

/* documentary types/search.xml */
/**
 * @typedef {import('elasticsearch').Client} Client
 * @typedef {import('elasticsearch').SearchParams} SearchParams
 *
 * @typedef {Object} Hit
 * @prop {string} _id `DQn4JC6q5zZQsgv5KNhiWlgd`
 * @prop {string} _index `idio-example`
 * @prop {number} _score `1`
 * @prop {*} _source `Object {name: "example", user: "idio"}`
 * @prop {string} _type `doc`
 * @prop {number} [_version]
 * @prop {Explanation} [_explanation]
 * @prop {*} [fields]
 * @prop {*} [highlight]
 * @prop {*} [inner_hits]
 * @prop {string[]} [matched_queries]
 * @prop {string[]} [sort]
 */
