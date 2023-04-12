const dbName = "test"
let db;
try {
    const request = indexedDB.open(dbName, 3);
    request.onerror = (e) => { console.log("error", e) };
    request.onsuccess = (e) => {
        console.log("success", e);
        db = e.target.result;
    };
    request.onupgradeneeded = (e) => {
        console.log("upgradeneeded", e);
        db = e.target.result;
        db.createObjectStore("dummy", { autoIncrement: true });
    };
} catch (e) {
    console.log(e);
}

async function addData() {
    const dummyObjectStore = db.transaction("dummy", "readwrite").objectStore("dummy");
    const count = document.getElementById("count").value;
    const size = document.getElementById("size").value;
    try {
        for (let i = 0; i < count; i++) {
            console.log(i + " / " + count, size);
            await addToPromise(dummyObjectStore, "a".repeat(size));
        }
    } catch (e) {
        console.error(e);
    }
}

function addToPromise(store, data) {
    return new Promise((resolve, reject) => {
        const req = store.add(
            data
        );
        req.onerror = (e) => { reject(e); };
        req.onsuccess = (e) => { resolve(e.target.result); }
    })
} 