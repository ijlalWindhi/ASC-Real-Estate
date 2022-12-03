import { getLocalStorage } from "./helper/LocalStorage";

const firebaseConfig = {
  apiKey: "AIzaSyCSfZkmjN8KMd9eJjJrfk2fqO-tP1ANUp4",
  authDomain: "asc-real-estate.firebaseapp.com",
  projectId: "asc-real-estate",
  storageBucket: "asc-real-estate.appspot.com",
  messagingSenderId: "825715756088",
  appId: "1:825715756088:web:e609e32767d2ea2194aacd",
  measurementId: "G-58QNS2TDG8"
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