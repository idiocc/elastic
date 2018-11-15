# @idio/elastic

[![npm version](https://badge.fury.io/js/%40idio%2Felastic.svg)](https://npmjs.org/package/@idio/elastic)

`@idio/elastic` Is A Library To Manage Operations On ElasticSearch.

```sh
yarn add -E @idio/elastic
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`async search(client: Client, searchParams: SearchParams, queryParams?: Object): Hits[]`](#async-searchclient-clientsearchparams-searchparamsqueryparams-object-hits)
  * [`Hit`](#type-hit)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its components functions:

```js
import { search } from '@idio/elastic'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `async search(`<br/>&nbsp;&nbsp;`client: Client,`<br/>&nbsp;&nbsp;`searchParams: SearchParams,`<br/>&nbsp;&nbsp;`queryParams?: Object,`<br/>`): Hits[]`

The wrapper around search to make a query based on a data object. Returns an empty array no no hits are found.

`import('elasticsearch').Client` __<a name="type-client">`Client`</a>__

`import('elasticsearch').SearchParams` __<a name="type-searchparams">`SearchParams`</a>__

__<a name="type-hit">`Hit`</a>__

|      Name       |     Type      |               Description                |
| --------------- | ------------- | ---------------------------------------- |
| ___id*__        | _string_      | `DQn4JC6q5zZQsgv5KNhiWlgd`               |
| ___index*__     | _string_      | `idio-example`                           |
| ___score*__     | _number_      | `1`                                      |
| ___source*__    | _*_           | `Object {name: "example", user: "idio"}` |
| ___type*__      | _string_      | `doc`                                    |
| _version        | _number_      |                                          |
| _explanation    | _Explanation_ |                                          |
| fields          | _*_           |                                          |
| highlight       | _*_           |                                          |
| inner_hits      | _*_           |                                          |
| matched_queries | _string[]_    |                                          |
| sort            | _string[]_    |                                          |

```js
const INDEX = 'idio-example'

;(async () => {
  // 1. Create a record in ElasticSearch for the example.
  const { id, client } = await getClient()
  const res = await search(client, {
    index: INDEX,
    type: 'doc',
  }, { _id: id })
  console.log(res)
})()
```
```
[ { _index: 'idio-example',
    _type: 'doc',
    _id: '7Tn79YCXy9lKoxQi7l9k0SHq',
    _score: 1,
    _source: 
     { name: 'example',
       user: 'idio',
       date: '2018-11-15T15:57:52.031Z' } } ]
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Idio][1] 2018

[1]: https://idio.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>