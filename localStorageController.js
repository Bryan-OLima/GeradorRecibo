export default function localStorageController(keyName) {
    console.log("local storage controller");
    return {
        set: (receipt) => {
            localStorage.setItem(keyName, JSON.stringify(receipt));
            console.log("registered");
        },
        get: (receipt) => {
            localStorage.getItem(keyName);
            return receipt? JSON.parse(receipt) : null;
        },
        delete: () => {
            localStorage.clear(keyName);
        },
        getAll: () => {
        
        }
    };
}