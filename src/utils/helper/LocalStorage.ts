type props = {
    key: string;
    value: any;
};

function setLocalStorage({key, value} : props) {
    if (typeof value === "object") {
        value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
}

function getLocalStorage(key: string) {
    return localStorage.getItem(key);
}

function clearLocalStorage() {
    localStorage.clear();
}

export { setLocalStorage, getLocalStorage, clearLocalStorage };
