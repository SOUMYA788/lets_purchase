import React, { useState } from 'react'
import { BsCart4, BsSearch } from 'react-icons/bs'
import { allCatagories } from '../../Reducers/StockReducer'
import { NavLink } from 'react-router-dom'
import { SearchBar } from './SearchBar'
const Header = () => {
  const [searchBarState, setSearchBarState] = useState(false)
  const [searchValue, setsearchValue] = useState("")
  return (
    <>
      <div className='w-full h-[40px] relative flex flex-row gap-6 text-white justify-between items-center px-[5px] py-[1px]'>
        <p className="logo text-[1rem]">let's purchase</p>

        <div className="headerRight w-full flex-1 justify-end flex flex-row gap-2 items-center">

          <BsSearch className={`w-[20px] h-[20px] text-[rgba(255,255,255,0.8)] outline-none border-none hover:text-[rgba(255,255,255,1)] ${searchBarState ? "hidden" : "static"} sm:hidden`} onClick={(e) => {
            e.stopPropagation();
            setSearchBarState(!searchBarState)
          }} />

          <SearchBar searchBarState={searchBarState} setSearchBarState={setSearchBarState} searchValue={searchValue} setsearchValue={setsearchValue} />

          <BsCart4 className='w-[25px] h-[25px] text-[rgba(255,255,255,0.8)] outline-none border-none hover:text-[rgba(255,255,255,1)]' />

        </div>
      </div>

      <div id='catagoryNav' className="flex flex-row gap-6 overflow-x-scroll my-[5px] px-[10px]">
        <NavLink
          to="/"
          className='p-2 text-center text-slate-400 hover:text-slate-300'>
          ALL
        </NavLink>

        {
          allCatagories.map((catagory, indx) => (
            <NavLink
              to={`/product/${catagory}`}
              key={`catagory_${catagory}_${indx}`}
              className='p-2 text-center text-slate-400 hover:text-slate-300'>
              {catagory.toUpperCase()}
            </NavLink>
          ))
        }
      </div>
    </>
  )

}



export { Header }