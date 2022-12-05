import { firebaseConfig } from "../../../utils/constants";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setLocalStorage } from "../../../utils/helper/LocalStorage";
import { LOCAL_STORAGE_LOGIN, LOCAL_STORAGE_USER } from "../../../utils/constants";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

type LoginHandlerProps = {
    email: string;
    password: string;
};

export default async function LoginHandler({email, password} : LoginHandlerProps) : Promise<any> {
    try{
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            setLocalStorage({key: LOCAL_STORAGE_LOGIN, value: user.refreshToken});
            setLocalStorage({key: LOCAL_STORAGE_USER, value: user.email});

            return Promise.resolve({
                status: "success",
                message: "User logged in"
            });
        })
        return Promise.resolve({
                status: "success",
                message: "User logged in"
            });
    } catch(error: any) {
        const errorMessage = error.message;
        return Promise.resolve({
            status: "error",
            message: errorMessage
        })
    };
    }