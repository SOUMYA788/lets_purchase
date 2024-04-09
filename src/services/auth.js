import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { auth } from "../Firebase";

import { validateEmail } from "../utils/validators";
import { showErrorToast, showSuccessToast } from "../utils/toastMethods";
import { updateUser } from "../store/slices/authSlice";
import { useDispatch } from "react-redux";


export const createNewUserWithEmailAndPassword = async (email, password) => {
    try {
        const validatedEmail = validateEmail(email);
        if (!validatedEmail) {
            showErrorToast("Invalid Email Id");
            return
        }
        const newUser = await createUserWithEmailAndPassword(auth, email, password);
        showSuccessToast("Registration Complete");
        return newUser?.user;
    } catch (error) {
        console.log(error.message || "faild to register new user");
    }
}




export const loginWithEmailAndPassword = async (email, password) => {
    try {
        const validatedEmail = validateEmail(email);
        if (!validatedEmail) return showErrorToast("Invalid Email Id");
        const loginUser = await signInWithEmailAndPassword(auth, email, password);
        return loginUser.user;
    } catch (error) {
        console.log(error.message || "faild to login");
    }
}



export const logoutCurrentUser = async () => await signOut(auth)
