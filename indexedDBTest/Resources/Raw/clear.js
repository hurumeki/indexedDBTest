window.indexedDB.databases().then(dbs => {
    dbs.forEach(db => { window.indexedDB.deleteDatabase(db.name); })
})