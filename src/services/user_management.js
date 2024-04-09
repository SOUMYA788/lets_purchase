import React from 'react'
import { auth } from '../Firebase'
import { updateProfile } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { showErrorToast, showSuccessToast } from '../utils/toastMethods'


export const updateUserProfilePicture = async (imageFile) => {
    const { auth } = useSelector(state => state.authReducer)
    const { user } = auth

    try {
        const storage = getStorage();
        const userFolder = ref(storage, user?.userId)

        if (imageFile) {
            // Upload image to storage...
            const snapshot = await uploadBytes(userFolder, imageFile)
            console.log(snapshot)

            // Update Database...
            // const updatedProfile = await updateProfile(auth.currentUser, { "photoURL": "" });
            // console.log(updatedProfile)
        } else { throw new Error("Damaged File Detected") }
    } catch (error) {
        return {
            success: false,
            message: error.message,
            data: null
        }
    }
}

export const updateUserDetails = async (updatedData, user) => {
    
    try {
        const toBeUpdate = {}

        for (const key in updatedData) {
            const value = updatedData[key];
            if (value && user[key] !== value) {
                if (key === "userName") { toBeUpdate.displayName = value; }
                if (key === "userEmail") { toBeUpdate.email = value; }
                if (key === "userNumber") { toBeUpdate.phoneNumber = value; }
            }
        }

        await updateProfile(auth?.currentUser, { ...toBeUpdate });
        showSuccessToast("Succesfully Updated");
    } catch (error) {
        console.log(error.message)
        showErrorToast("Faild to Update")
    }
}


