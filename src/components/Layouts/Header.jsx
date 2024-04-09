import React, { useState } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md';
import { IoMenu } from "react-icons/io5"
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { allCatagories } from '../../store/stock'
import { CustomButton, IconWrapperBtn, SearchBar } from "./"
import { toggleUserWindow } from '../../store/slices/windowSlice'
import { showErrorToast, showSuccessToast } from '../../utils/toastMethods';


const Header = () => {

  const { cartItems } = useSelector(state => state.localStorageReducer)
  const { auth } = useSelector(state => state.authReducer)
  const showTopNavProfileCard = useSelector(state => state.windowReducer.userWindow);

  const [showCollapsNavigation, setShowCollapsNavigation] = useState(false);
  const [logoutProcessing, setLogoutProcessing] = useState(false)

  const dispatch = useDispatch();

  const { user } = auth


  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      setLogoutProcessing(true);
      await logOut()
      showSuccessToast("Logout Succesfully")
    } catch (error) {
      showErrorToast("Faild to Logout")
    } finally {
      setLogoutProcessing(false);
    }
  }


  const changeCollapsNavState = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowCollapsNavigation(value => !value);
  }


  return (
    <>
      <div className='w-full flex flex-col 600px:flex-row items-center justify-between gap-3 py-3 px-1 bg-white'>

        <div className='w-full 600px:w-fit flex gap-3 items-center justify-start'>
          <IconWrapperBtn className="600px:hidden" onClick={changeCollapsNavState}>
            <IoMenu />
          </IconWrapperBtn>
          <Link to={"/"} className="logo text-base text-slate-500 300px:text-base font-semibold outline-none border-none focus:text-black hover:text-black">let's purchase</Link>
        </div>



        <div className={`max-w-full h-full ${showCollapsNavigation ? "flex" : "hidden"} 600px:flex gap-6 items-center`}>

          <SearchBar />

          <div className="relative flex items-center">
            <Link to={`/cart`} className='w-8 h-8 block bg-slate-800 text-slate-200 focus:bg-black focus:text-white outline-none border-none rounded-full p-[7px]'>
              <BsCart4 className='w-full h-full outline-none border-none' />
              <p className='absolute -top-3 -right-2.5 text-black text-base'>
                {
                  cartItems?.length > 0 ? cartItems.length : ""
                }
              </p>
            </Link>
          </div>

          {
            user && <>

              <div className='relative w-9 h-9'>

                <CustomButton className='w-full h-full outline-none border-none rounded-full text-slate-500 ring-2 ring-transparent hover:ring-slate-800 focus:ring-slate-800 dark:hover:ring-slate-400 dark:focus:ring-slate-400' onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  dispatch(toggleUserWindow())
                }}>
                  <MdAccountCircle className='w-full h-full text-inherit cursor-pointer transition-colors' />
                </CustomButton>

                <div className={`w-44 p-3 bg-white dark:bg-slate-600 ring-2 ring-slate-500 absolute top-10 right-0 ${showTopNavProfileCard ? "block" : "hidden"} z-[101] transition-all rounded-md shadow-sm`}>

                  <h2 className='text-base uppercase text-center text-slate-800 dark:text-slate-100 font-semibold tracking-wider'>
                    profile
                  </h2>

                  {/* Horizontal Line */}
                  <div className='w-full h-0.5 bg-slate-500 mt-2 mb-4' />

                  <p className='w-full text-sm my-2 text-black dark:text-slate-300 text-left'> {user?.email}</p>

                  <Link to="/dashboard" className='w-full block outline-none border-none my-2 text-sm text-slate-800 focus:text-black hover:text-black focus:underline underline-offset-2 dark:text-slate-300 dark:focus:text-white dark:hover:text-white transition-colors text-left'> dashboard </Link>

                  {/* SETUP LOGOUT deleteUser */}
                  <CustomButton className='w-full text-center text-white font-semibold capitalize rounded-md bg-red-500 my-1.5 py-1 text-sm outline-none border-2 border-transparent hover:border-slate-400 focus:border-slate-400 dark:focus:border-slate-300 dark:hover:border-slate-300 disabled:opacity-60 disabled:hover:border-transparent' disabled={logoutProcessing} onClick={handleLogout}> Log Out </CustomButton>

                </div>

              </div>

            </>
          }

          {
            !user && <>
              <Link to={'/login'} className='text-sm capitalize font-semibold flex items-center justify-center ring-2 ring-slate-800 bg-slate-800 text-slate-300 focus:bg-black focus:text-white focus:rounded-full hover:rounded-full outline-none border-none rounded-sm px-4 py-1.5' > login </Link>

              <Link to={'/signin'} className='text-sm capitalize font-semibold flex items-center justify-center ring-2 ring-slate-800 text-slate-800 focus:text-white focus:bg-slate-800 outline-none border-none rounded-sm px-4 py-1.5' > signin </Link>
            </>
          }


        </div>

      </div>

      <div className="w-full flex flex-row gap-6 overflow-x-scroll p-2 bg-white bg-opacity-90 backdrop-blur-sm">
        {
          allCatagories.map((catagory, indx) => (
            <NavLink to={`/product/${catagory}`} key={`catagory_${catagory}_${indx}`} className='text-sm text-slate-800 font-semibold hover:text-black focus:text-black focus:underline outline-none border-none'> {catagory.toUpperCase()} </NavLink>
          ))
        }
      </div>
    </>
  )
}



export { Header }