import React, { useEffect, useRef } from 'react'
import { BsSearch } from 'react-icons/bs';

export const SearchBar = ({ searchValue, setsearchValue, searchBarState, setSearchBarState }) => {

    const searchInput = useRef(null);

    const searchSubmit = (subEvt) => {
        subEvt.preventDefault();
        subEvt.stopPropagation();
        console.log(`Search ${searchValue}`);
        setsearchValue("");
        setSearchBarState(false)
    }

    useEffect(() => {
        if (searchBarState) {
            searchInput.current.focus()
        }
    }, [searchBarState])
    

    return (

        <div className={`searchDiv absolute top-0 left-0 w-full h-full flex-row justify-between items-center gap-1 bg-blue-900 ${searchBarState ? "flex" : "hidden"} sm:flex sm:static sm:max-w-[320px]`}>
            <form className='w-full h-full flex flex-row items-center' onSubmit={(subEvt) => searchSubmit(subEvt)}>
                <input
                    ref={searchInput}
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setsearchValue(e.target.value)}
                    className='h-full w-[calc(100%-40px)] flex-1 bg-transparent p-1 outline-none border-none'
                    onBlur={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        searchBarState && setSearchBarState(false);
                    }}
                />
                <button
                    type='submit'
                    className='w-[40px] h-full px-[10px] border bg-transparent border-slate-200 rounded-tl-sm rounded-bl-sm outline-none border-none'>
                    <BsSearch className='w-full h-full text-[rgba(255,255,255,0.8)] outline-none border-none hover:text-[rgba(255,255,255,1)]' />
                </button>
            </form>
        </div>
    )
}
