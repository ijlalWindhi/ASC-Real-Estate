import { getLocalStorage } from "./helper/LocalStorage";

const firebaseConfig = {
  apiKey: "XXXX",
  authDomain: "XXXX",
  projectId: "XXXX",
  storageBucket: "XXXX",
  messagingSenderId: "XXXX",
  appId: "XXXX",
  measurementId: "XXXX"
};

const LOCAL_STORAGE_LOGIN = "realEstate/token";
const LOCAL_STORAGE_USER = "realEstate/user";

const checkLogged = () => {
    const token = getLocalStorage(LOCAL_STORAGE_LOGIN);
    const user = getLocalStorage(LOCAL_STORAGE_USER);

    if (token && user) {
        return true;
    }
};

export {firebaseConfig, LOCAL_STORAGE_LOGIN, LOCAL_STORAGE_USER, checkLogged};
