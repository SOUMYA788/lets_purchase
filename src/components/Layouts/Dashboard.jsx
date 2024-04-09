import React, { useEffect, useState } from 'react'
import { BiImage } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import CustomButton, { UpdateButton } from './CustomButton'
import { BiPencil } from 'react-icons/bi'
import { updateUserDetails, updateUserProfilePicture } from '../../services/user_management'
import { showErrorToast, showSuccessToast } from '../../utils/toastMethods'


const Dashboard = () => {
    const { auth } = useSelector(state => state.authReducer)
    const { user } = auth

    const [userDetailsEditMode, setUserDetailsEditMode] = useState(false);
    const [profilePictureEditMode, setProfilePictureEditMode] = useState(false);

    const [profileImageFile, setProfileImageFile] = useState(null);

    const [userInfo, setUserInfo] = useState({
        userProfile: "",
        userName: "",
        userEmail: "",
        userNumber: ""
    });

    const changeProfilePicture = async () => {
        if(profileImageFile){
            updateUserProfilePicture(profileImageFile)
        }else{
            showErrorToast("Please Select a Profile Picture First")
        }
    }

    const updateUserProfileForm = async (e) => {
        e.preventDefault();
        
        const { userName, userEmail, userNumber } = userInfo;
        await updateUserDetails({ userName, userEmail, userNumber }, user);
    }


    const userInfoOnChange = (e) => {
        if (e.target.name === "userProfile") {
            setProfileImageFile(e.target.files[0])
        } else {
            setUserInfo({
                ...userInfo,
                [e.target.name]: e.target.value
            })
        }
    }

    const cancelUpdate = () => {
        setUserInfo({ ...user })
        setUserDetailsEditMode(false)
    }

    useEffect(() => {
        setUserInfo({
            ...userInfo,
            ...user
        })
    }, [user?.userName, user?.userEmail, user?.Number, user?.userProfile])


    // if (!user) return <h2>USER NOT FOUND</h2>

    return (
        <div className='w-full flex flex-col relative'>

            <h2 className='mb-3 p-1 text-sm 600px:text-lg font-semibold text-slate-800 tracking-wider'>DASHBOARD</h2>

            <div className="w-full flex flex-col 400px:flex-row flex-wrap gap-3 bg-gray-100 dark:bg-slate-700 p-2 rounded-xl relative">

                <div className="w-24 h-24 flex gap-3 items-center justify-center cursor-pointer" onClick={() => setProfilePictureEditMode(true)}>
                    {userInfo?.userProfile ? <img src={userInfo.userProfile} alt="Profile Image" className='w-full h-full' /> : <BiImage className='w-full h-full rounded-md 400px:rounded-full mx-0 bg-slate-500 p-2' />}
                </div>

                {
                    profilePictureEditMode && <div className='absolute left-0 w-full h-fit bg-gray-100 flex items-center gap-3'>
                        <label htmlFor='userProfile' className='w-24 h-24 rounded-md 300px:rounded-full mx-0 bg-slate-500 overflow-hidden cursor-pointer'>
                            {
                                (userInfo?.userProfile || profileImageFile) ? <img src={URL.createObjectURL(profileImageFile) || userInfo.userProfile} alt="user" className='w-full h-full 400px:rounded-full' /> : <BiImage className='w-full h-full rounded-md 400px:rounded-full mx-0 bg-slate-500 p-2' />
                            }
                            <input type="file" accept='.jpg, .png, .jpeg' name="userProfile" id="userProfile" className='hidden ' onChange={userInfoOnChange} />
                        </label>

                        <div className="flex gap-2 ml-3">
                            <UpdateButton type='button' className='text-slate-400 bg-slate-800 focus:ring-slate-800' disabled={profileImageFile ? false : true} onClick={changeProfilePicture}>
                                Update
                            </UpdateButton>

                            <UpdateButton type='button' className={`text-white bg-red-500 focus:ring-red-500`} disabled={false} onClick={() => {
                                setProfileImageFile(null);
                                setProfilePictureEditMode(false)
                            }}>
                                cancel
                            </UpdateButton>
                        </div>
                    </div>
                }

                <form onSubmit={updateUserProfileForm} className='flex-1 flex gap-3'>

                    <div className='flex-1 h-full flex flex-col gap-1'>

                        <input type='text' placeholder='user name' name='userName' aria-label='any' value={userInfo?.userName} className={`capitalize font-semibold bg-transparent text-slate-800 dark:text-slate-300 disabled:text-slate-600 text-base placeholder:text-slate-400 outline-none border-none`} disabled={!userDetailsEditMode} onChange={userInfoOnChange} />

                        <input placeholder='Email ID' value={userInfo?.userEmail} className="bg-transparent text-slate-800 dark:text-slate-300 disabled:text-slate-600 text-base placeholder:text-slate-400 outline-none border-none" disabled={!userDetailsEditMode} onChange={userInfoOnChange} />

                        <input placeholder='Number' value={userInfo.userNumber} className="bg-transparent text-slate-800 dark:text-slate-300 disabled:text-slate-600 text-base placeholder:text-slate-400 outline-none border-none" disabled={!userDetailsEditMode} onChange={userInfoOnChange} />

                        {
                            userDetailsEditMode && <div className="flex gap-2 mt-3">
                                <CustomButton type='submit' className={`w-fit flex uppercase text-xs text-slate-400 bg-slate-800 px-3 py-1  ring-2 ring-transparent ring-offset-1 focus:ring-slate-800 rounded-full disabled:opacity-50`} disabled={false}>
                                    Update
                                </CustomButton>

                                <CustomButton type='button' className={`w-fit flex uppercase text-xs text-white bg-red-500 ring-2 ring-transparent ring-offset-1 focus:ring-red-500 px-3 py-1 rounded-full disabled:opacity-50`} disabled={false} onClick={cancelUpdate}>
                                    cancel
                                </CustomButton>
                            </div>
                        }
                    </div>
                </form>


                <CustomButton type='button' className={`w-fit h-fit text-lg text-slate-300 bg-slate-800 p-1  ring-2 ring-transparent ring-offset-1 focus:ring-slate-800 rounded-full ${userDetailsEditMode ? "hidden" : "block"}`} onClick={() => setUserDetailsEditMode(true)}>
                    <BiPencil />
                </CustomButton>
            </div>


            <div className='mt-5 p-2'>
                <h2 className='text-base font-semibold mb-2 uppercase'>Order History</h2>
                <p className='px-2'>Sorry, No Order Found!</p>
            </div>

        </div>
    )
}

export default Dashboard