export const getField = (field, value) => `${field}:${value}`

/**
 * Makes a query string from the object parameters.
 */
export const makeQuery = (params) => {
  const q = Object.keys(params).map((k) => {
    const s = getField(k, params[k])
    return s
  }).join(',')
  return q
}