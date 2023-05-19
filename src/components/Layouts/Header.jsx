import React, { useState } from 'react'
import { BsCart4, BsSearch } from 'react-icons/bs'
import { allCatagories } from '../../Reducers/StockReducer'
import { Link, NavLink } from 'react-router-dom'
import { SearchBar } from './SearchBar'
import { useCurrentLocalStorageState } from '../../Context/LocalStorageDataContext'
const Header = () => {
  const [searchBarState, setSearchBarState] = useState(false)
  const [searchValue, setsearchValue] = useState("")
  const [{ cartItems }, dispatch] = useCurrentLocalStorageState();
  return (
    <div className='w-full h-[100px]'>
      <div className='w-full h-[40px] relative flex flex-row gap-6 text-white justify-between items-center px-[5px] py-[1px]'>
        <p className="logo text-[1rem]">let's purchase</p>

        <div className="headerRight w-full flex-1 justify-end flex flex-row gap-2 items-center">

          {
            // we have an option for search bar, for this small project, we didn't requrie this...
            /* <SearchBar searchBarState={searchBarState} setSearchBarState={setSearchBarState} searchValue={searchValue} setsearchValue={setsearchValue} /> */
          }

          <div className="relative">
            <Link to={`/cart`}>
              <BsCart4 className='w-[25px] h-[25px] text-[rgba(255,255,255,0.8)] outline-none border-none hover:text-[rgba(255,255,255,1)]' />
              <p className='absolute -top-2 -right-2 text-[rgba(255,255,255,0.8)]'>
                {
                  cartItems.length
                }
              </p>
            </Link>
          </div>

        </div>
      </div>

      <div id='catagoryNav' className="flex w-full h-[60px] items-center flex-row gap-6 overflow-x-scroll my-[5px] px-[10px]">
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
    </div>
  )
}



export { Header }