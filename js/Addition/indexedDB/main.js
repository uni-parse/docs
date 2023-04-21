import { openDatabase } from "./openDatabase.js"
import { deleteDatabase } from "./deleteDatabase.js"

// 💡 event delegation: request => transaction => database

await deleteDatabase('booksDb')

const booksDb = await openDatabase('booksDb', 1)
console.log(
  booksDb.name,
  booksDb.version,
  booksDb.objectStoreNames
)

const assetsDb = await openDatabase('assetsDb', 1)










// helpers
function eventPromise(target, event) {
  return new Promise(
    rs => target.addEventListener(event, rs, { once: true })
  )
}