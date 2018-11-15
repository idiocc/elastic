/* yarn example/ */
import { Client } from 'elasticsearch'
import { sync } from 'uid-safe'
import { search } from '../src'

const getClient = async () => {
  const client = new Client({
    host: 'docks.cc:9200',
  })
  const id = sync(18)
  await client.create({
    id,
    index: INDEX,
    type: 'doc',
    body: {
      name: 'example',
      user: 'idio',
      date: new Date(),
    },
  })
  await new Promise(s => setTimeout(s, 250))
  return { id, client }
}

/* start example */
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
/* end example */