# @idio/elastic

[![npm version](https://badge.fury.io/js/%40idio%2Felastic.svg)](https://npmjs.org/package/@idio/elastic)

`@idio/elastic` Is A Library To Manage Operations On ElasticSearch.

```sh
yarn add -E @idio/elastic
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`search(client: Client, searchParams: SearchParams, queryParams?: Object)`](#searchclient-clientsearchparams-searchparamsqueryparams-object-void)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its components functions:

```js
import { search } from '@idio/elastic'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `search(`<br/>&nbsp;&nbsp;`client: Client,`<br/>&nbsp;&nbsp;`searchParams: SearchParams,`<br/>&nbsp;&nbsp;`queryParams?: Object,`<br/>`): void`

The wrapper around search to make a query based on a data object. Returns an empty array no no hits are found.

`import('elasticsearch').Client` __<a name="type-client">`Client`</a>__

`import('elasticsearch').SearchParams` __<a name="type-searchparams">`SearchParams`</a>__

```js
/* yarn example/ */
import elastic from '@idio/elastic'

(async () => {
  const res = await elastic({
    text: 'example',
  })
  console.log(res)
})()
```
```

```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Idio][1] 2018

[1]: https://idio.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>