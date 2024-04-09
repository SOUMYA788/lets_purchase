import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BiLock, BiLoader } from "react-icons/bi";
import { CustomButton, CustomInput, CustomLink } from "../Layouts";
import { validateEmail } from "../../utils/validators";
import { showErrorToast, showSuccessToast } from "../../utils/toastMethods";
import { createNewUserWithEmailAndPassword } from "../../services/auth";
import { updateUser } from "../../store/slices/authSlice";



const SignIn = () => {

  const [signinInfo, setSigninInfo] = useState({
    userEmail: "",
    userPassword: "",
  })

  const [signInError, setSignInError] = useState(null);

  const [signInProcessing, setSignInProcessing] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const signinInfoOnChange = (e) => {
    setSigninInfo({
      ...signinInfo,
      [e.target.name]: e.target.value
    })
  }


  // function responsible to submit sign in form and create a new user...
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setSignInProcessing(true)
      setSignInError(null)

      const { userEmail, userPassword } = signinInfo

      const isEmailValid = validateEmail(userEmail);

      if (!isEmailValid) {
        showErrorToast("Invalid Email")
        return
      }

      // trying to signup
      const newUser = await createNewUserWithEmailAndPassword(userEmail, userPassword);

      if (newUser) {
        dispatch(updateUser(newUser));
        navigate("/");
      } else {
        showErrorToast(`Faild to register ${userEmail}`)
      }

    } catch (error) {
      setSignInError("Faild to create an account")
      showErrorToast("faild to create an account")
    } finally {
      setSignInProcessing(false)
    }

  }




  return (
    <div className="w-full 300px:w-72 p-5 mx-auto flex flex-col justify-center items-center dark:bg-transparent border-2 border-slate-300 dark:border-transparent rounded-sm">

      <div className={`w-10 h-10 text-black ring-2 ring-offset-1 ring-offset-transparent rounded-full p-2 ${signInError ? "bg-red-500 ring-red-800" : "bg-green-500 ring-green-800"}`}>
        <BiLock className="w-full h-full text-inherit" />
      </div>

      <p className="mt-2 text-base"> {signInError || "SIGN IN"} </p>

      <form onSubmit={handleSignIn} className="w-full mt-5 flex flex-col items-center justify-center gap-3">

        <CustomInput type="email" title={signinInfo.userEmail} name="userEmail" placeholder="Email ID" onChange={signinInfoOnChange} required />

        <CustomInput type="password" title={signinInfo.userPassword} name="userPassword" placeholder="Password" onChange={signinInfoOnChange} required />

        {/* onsubmit attached in form. */}
        <CustomButton type="submit" disabled={signInProcessing} className="text-sm bg-green-600 text-white uppercase w-full p-1.5 rounded-md my-2 ring ring-transparent focus:ring-green-700 hover:ring-green-700 disabled:hover:ring-transparent disabled:opacity-50 flex items-center justify-center gap-3">
          {signInProcessing ? <>
            <BiLoader className="animate-spin w-6 h-6 text-black" />
            loading...
          </> : "Sign In"}
        </CustomButton>

        <p className="dark:text-slate-400">Already have an account? <CustomLink title="login" to="/login" className="w-full text-left hover:text-black focus:text-black dark:focus:text-white dark:hover:text-white" /></p>

      </form>
    </div>
  )
}


export default SignIn