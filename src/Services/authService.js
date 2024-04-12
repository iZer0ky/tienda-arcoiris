import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {app, auth, firestore} from "../Config/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

export async function create(data){
    const responseUser = await createUserWithEmailAndPassword(auth, data.email, data.password);
    console.log(responseUser);

    if (responseUser.user.uid) {
        const uid = responseUser.user.uid;
        const document = await setDoc(doc(firestore, "Usuarios", uid), {
            username: data.username,
            userID: uid
          });
        return document;
    }

    return responseUser;
}

export async function login(data){
    const responseLogin = await signInWithEmailAndPassword(auth, data.email, data.password);
    console.log(responseLogin);

    return responseLogin;
}