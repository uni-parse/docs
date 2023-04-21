export function openDatabase(dbName, version) {

  const openRequest = indexedDB.open(dbName, version)


  openRequest.addEventListener('upgradeneeded', e => {
    console.log('event upgradeneeded')

    const db = e.target.result

    switch (e.oldVersion) { // existing db version
      case 0: console.log(`initialize database "${db.name}" version ${db.version}`)
        break
      //...

      default:
        console.log(`upgrade database "${db.name}" from version ${e.oldVersion} to ${db.version}`)
    }

    // object-Stores: are database columns or tabels
    // ⚠️ create || delete stores happend only on upgradeneeded
    db.createObjectStore('webStore', { keyPath: 'id' })
    db.deleteObjectStore('webStore')

    db.createObjectStore('frontendStore', { keyPath: 'id' })
    db.createObjectStore('backendStore', { keyPath: 'id' })


  }, { once: true })



  return new Promise((resolve, reject) => {

    openRequest.addEventListener('success', e => {
      console.log('event success')

      const db = e.target.result

      //parallel update issue: fix1 (prefered)
      //  when other tab trying to upgrade database
      //  while this tab still connecting to the same database
      //  so the oher tab will be blocked
      db.addEventListener('versionchange', e => {
        db.close() // disconnect, so other tab can connect & upgrade
        alert(`database ${db.name} is outdated, please reload this page`)
      }, { once: true })

      resolve(db)
    }, { once: true })



    openRequest.addEventListener('error', e => {
      const db = e.target.result
      console.log(`event err`)
      reject(openRequest.error)
    }, { once: true })


    //parallel update issue: fix2 (not prefered)
    //  when this tab are upgrading batabase
    //  but other tab still connecting to it.
    openRequest.addEventListener('blocked', e => {
      console.log(`event blocked`)

      const db = e.target.result

      alert(`blocked, can't upgrade database ${db.name}, please close all other tabs who still connecting to this database, then reload this page`)

      reject(openRequest.error)
    }, { once: true })

  })

}