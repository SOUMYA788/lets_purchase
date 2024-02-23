import React, { useEffect, useRef, useState } from 'react'
import { BsCart4, BsMenuButton } from 'react-icons/bs'
import { allCatagories } from '../../Reducers/StockReducer'
import { Link, NavLink } from 'react-router-dom'
import { IconWrapperBtn, SearchBar } from "./"
import { useCurrentLocalStorageState } from '../../Context/LocalStorageDataContext'

import { IoLogIn, IoLogInOutline, IoLogOut, IoMenu } from "react-icons/io5"


const Header = () => {
  const [{ cartItems }] = useCurrentLocalStorageState();
  const [showCollapsNavigation, setShowCollapsNavigation] = useState(false);
  
  const changeCollapsNavState = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowCollapsNavigation(value => !value);
  }


  return (
    <>
      <div className='relative w-full flex flex-col 600px:flex-row items-center justify-between gap-3 py-3 px-1 bg-white'>

        <div className='w-full 600px:w-fit flex gap-3 items-center justify-start'>
          <IconWrapperBtn className="600px:hidden" onClick={changeCollapsNavState}>
            <IoMenu />
          </IconWrapperBtn>
          <p className="logo text-base 300px:text-base font-semibold">let's purchase</p>
        </div>



        <div className={`max-w-full relative ${showCollapsNavigation ? "flex" : "hidden"} 600px:flex  gap-6 items-center overflow-x-scroll`}>

          <SearchBar />

          <div className="relative flex items-center">
            <Link to={`/cart`} className='w-8 h-8 block bg-slate-800 text-slate-200 focus:bg-black focus:text-white outline-none border-none rounded-full p-[7px]'>
              <BsCart4 className='w-full h-full outline-none border-none' />
              <p className='absolute -top-2 -right-2 text-[rgba(255,255,255,0.8)]'>
                {
                  cartItems.length || ""
                }
              </p>
            </Link>
          </div>

          <Link to={'/login'} className='text-sm capitalize flex items-center justify-center bg-slate-800 text-slate-200 focus:bg-black focus:text-white focus:rounded-full hover:rounded-full outline-none border-none rounded-sm px-4 py-1.5' > login </Link>

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