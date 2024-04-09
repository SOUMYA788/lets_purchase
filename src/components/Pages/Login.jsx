import React, { useState } from 'react'
import { BiLoader, BiLock } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginWithEmailAndPassword } from '../../services/auth';
import { updateUser } from '../../store/slices/authSlice';
import { CustomButton, CustomInput, CustomLink } from '../Layouts';
import { showSuccessToast } from '../../utils/toastMethods';


const Login = () => {

  const [loginInfo, setLoginInfo] = useState({
    userEmail: "",
    userPassword: "",
  })

  const [loginError, setLoginError] = useState(null);

  const [loginProcessing, setLoginProcessing] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const loginInputOnChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    })
  }



  // function responsible to submit login form
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginProcessing(true);
    setLoginError(false);

    const { userEmail, userPassword } = loginInfo;

    // trying to login
    try {
      const user = await loginWithEmailAndPassword(userEmail, userPassword);
      if (user) {
        showSuccessToast(`Welcome ${user.displayName || user.email}`);
        dispatch(updateUser(user));
        navigate("/");
      } else {
        showErrorToast("Sorry, Faild to Login");
      }
    } catch (error) {
      setLoginError("Faild to create an account");
      showErrorToast("Faild to create an account");
    } finally {
      setLoginProcessing(false);
    }

  }




  return (
    <div className="w-full 300px:w-72 p-1 mx-auto flex flex-col justify-center items-center">

      <div className={`w-10 h-10 text-black ring-2 ring-offset-1 ring-offset-transparent rounded-full p-2 ${loginError ? "bg-red-500 ring-red-800" : "bg-green-500 ring-green-800"}`}>
        <BiLock className="w-full h-full text-inherit" />
      </div>

      <p className="my-2 text-base"> {loginError || "Login"} </p>

      <form onSubmit={handleLogin} className="w-full mt-5 flex flex-col items-center justify-center gap-3">

        <CustomInput type="email" title={loginInfo.userEmail} name="userEmail" placeholder="Email ID" required autoComplete="email" onChange={loginInputOnChange} />

        <CustomInput type="password" title={loginInfo.userPassword} name="userPassword" placeholder="Password" required onChange={loginInputOnChange} />

        <CustomButton type="submit" disabled={loginProcessing} className="bg-green-500 font-semibold text-slate-600 capitalize w-full p-1.5 rounded-md my-2 ring-2 ring-transparent focus:ring-green-700 hover:ring-green-700 disabled:hover:ring-transparent disabled:opacity-50 flex items-center justify-center gap-3">

          {loginProcessing ? <>
            <BiLoader className="animate-spin w-6 h-6 text-white" /> Processing...
          </> : "login"}

        </CustomButton>


        <CustomLink title="Forget password?" to="/forget-password" className="hover:text-red-500 focus:text-red-500 dark:hover:text-red-500 dark:focus:text-red-500" />

        <p className="dark:text-slate-400">
          Need an account? <CustomLink title="sign in" to="/signin" className="hover:text-black focus:text-black dark:hover:text-black dark:focus:text-black" />
        </p>

      </form>
    </div>
  )
}


export default Login