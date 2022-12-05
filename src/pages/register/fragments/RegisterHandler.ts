import { firebaseConfig } from "../../../utils/constants";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

type RegisterHandler = {
    email: string;
    password: string;
};

export default async function RegisterHandler({email, password} : RegisterHandler) : Promise<any> {
    try {
    await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            return Promise.resolve({
                status: "success",
                message: "User created"
            });
        })
        return Promise.resolve({
                status: "success",
                message: "User created"
            });
    } catch(error: any) {
        const errorMessage = error.message;
        return Promise.resolve({
            status: "error",
            message: errorMessage
        })
    };
    }