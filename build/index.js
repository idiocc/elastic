const { debuglog } = require('util');

const LOG = debuglog('@idio/elastic')

/**
 * Record Server Logs In Elastic Search.
 * @param {Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} config.text A text to return.
 */
               async function elastic(config = {}) {
  const {
    shouldRun = true,
    text,
  } = config
  if (!shouldRun) return
  LOG('@idio/elastic called with %s', text)
  return text
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */


module.exports = elastic
//# sourceMappingURL=index.js.map