## API

The package is available by importing its components functions:

```js
import { search } from '@idio/elastic'
```

%~%

```## async search => Hits[]
[
  ["client", "Client"],
  ["searchParams", "SearchParams"],
  ["queryParams?", "Object"]
]
```

The wrapper around search to make a query based on a data object. Returns an empty array no no hits are found.

%TYPEDEF types/search.xml%

%EXAMPLE: example/example.js, ../src => @idio/elastic%
%FORK example example/example%

%~%