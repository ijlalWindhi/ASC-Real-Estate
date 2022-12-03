import { firebaseConfig } from "../../../utils/constants";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

type RegisterHandler = {
    email: string;
    password: string;
};

export default function RegisterHandler({email, password} : RegisterHandler) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            return Promise.resolve({
                status: "success",
                message: "User created"
            });
        })
        .catch((error) => {
            const errorMessage = error.message;
            return Promise.reject({
                status: "error",
                message: errorMessage
            })
        });
    }