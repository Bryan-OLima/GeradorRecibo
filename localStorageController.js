export default function localStorageController(keyName) {
    console.log("local storage controller");
    return {
        set: (receipt) => {
            localStorage.setItem(receipt.id, JSON.stringify(receipt));
            console.log("registered");
        },
        get: (receipt) => {
            localStorage.getItem(receipt.id);
            return receipt? JSON.parse(receipt) : null;
        },
        delete: (receipt) => {
            localStorage.clear(receipt.id);
        },
        getAll: () => {
            const db = {};

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);

                try {
                    db[key] = JSON.parse(value);
                } catch {
                    db[key] = value;
                }
                
            }
            return db;
        }
    };
}