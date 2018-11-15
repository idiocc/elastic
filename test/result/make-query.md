// joins single param
{
  "query": "search"
}

/* expected */
query:search
/**/

// joins multiple params
{
  "query": "search",
  "test": "mask"
}

/* expected */
query:search AND test:mask
/**/