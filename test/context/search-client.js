/**
 * A mock search client to see what gets sent to the search, and control the return value.
 */
export default class SearchClient {
  constructor() {
    this._search = null
    this.setHits([])
  }
  /**
   * The mock `elasticsearch` client that will set the `search` property of the context when a search is made, and return the hits set with `setHits` method (default `[]`).
   */
  get client() {
    return {
      search: async (params) => {
        this._search = params
        return {
          hits: {
            hits: this.hits,
            total: this.hits.length,
          },
        }
      },
    }
  }
  /**
   * The hits to be returned by the search. `[]` by default.
   */
  get hits() {
    return this._hits
  }
  /**
   * Set the hits returned by the search.
   */
  setHits(a = []) {
    this._hits = a
  }
  /**
   * Returns the parameters passed to the search (`null` when no search was done).
   */
  getSearch() {
    return this._search
  }
  // get search() {
  //   return this._search
  // }
}