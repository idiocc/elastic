/* yarn example/ */
import elastic from '../src'

(async () => {
  const res = await elastic({
    text: 'example',
  })
  console.log(res)
})()