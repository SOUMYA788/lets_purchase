import React, { useEffect, useRef, useState } from 'react'
import { BsArrowLeft, BsArrowLeftCircle, BsBack, BsSearch } from 'react-icons/bs';
import { GoSearch } from "react-icons/go"
import { IconWrapperBtn } from "./"

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [showSearchBar, setShowSearchBar] = useState(false)

    const searchInput = useRef(null);

    const changeSearchBarState = (e, value) => {
        e.preventDefault();
        e.stopPropagation();
        setShowSearchBar(value)
    }

    const searchSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setsearchValue("");
        setSearchBarState(false)
    }


    return <>

        <IconWrapperBtn type="button" className={`${showSearchBar ? "hidden" : "flex"}`} onClick={e => changeSearchBarState(e, true)}>
            <GoSearch className="w-full h-full" />
        </IconWrapperBtn>


        <form className={`absolute left-0 top-2 w-full flex-row items-center justify-center p-2 rounded-full bg-white border border-black ${showSearchBar ? "flex" : "hidden"} gap-3`} onSubmit={searchSubmit}>

            <IconWrapperBtn type="button" className={`${showSearchBar ? "flex" : "hidden"} w-6 h-6 500px:w-8 500px:h-8 bg-slate-800 text-slate-300`} onClick={e => changeSearchBarState(e, false)}>
                <BsArrowLeft className='w-full h-full' />
            </IconWrapperBtn >

            <input ref={searchInput} type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='h-full flex-1 p-1 bg-transparent outline-none border-none text-slate-800' />

            <IconWrapperBtn type='submit' className={`${showSearchBar ? "flex" : "hidden"} w-6 h-6 500px:w-8 500px:h-8 bg-slate-800 text-slate-300`}>
                <BsSearch className='w-full h-full text-slate-200 outline-none border-none hover:text-slate-400' />
            </IconWrapperBtn>
        </form>
    </>
}

export default SearchBar