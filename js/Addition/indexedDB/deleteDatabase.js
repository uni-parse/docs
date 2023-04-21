export function deleteDatabase(db) {
  const deleteRequest = indexedDB.deleteDatabase(db)

  return new Promise((resolve, reject) => {
    deleteRequest.onsuccess = e => {
      resolve()
      console.log(
        `deleted database: "${db}"`)
    }

    deleteRequest.onerror = () => {
      console.log(`can't delete database: "${db}"`)
      reject(deleteRequest.error)
    }
  })
}