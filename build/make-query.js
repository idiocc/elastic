       const getField = (field, value) => `${field}:${value}`

/**
 * Makes a query string from the object parameters.
 */
       const makeQuery = (params) => {
  const q = Object.keys(params).map((k) => {
    const s = getField(k, params[k])
    return s
  }).join(',')
  return q
}

module.exports.getField = getField
module.exports.makeQuery = makeQuery