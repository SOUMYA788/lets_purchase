import React from 'react'
import { BsX } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCurrentLocalStorageState } from '../../Context/LocalStorageDataContext'


const ProductCard = ({ image, name, price, buildForm, fromCart }) => {
    const [, dispatch] = useCurrentLocalStorageState()
    return (
        <div className={`p-2 ${fromCart ? "min-w-[350px] w-full h-fit flex-row" : "w-full xs:w-[calc(50%-0.75rem)] flex-col cursor-pointer sm:hover:scale-105 "} flex items-center justify-between bg-slate-200 bg-opacity-50 border border-slate-300 rounded-md duration-300`}>

            <div className={`${fromCart ? "w-[80px] h-[80px]" : "w-full h-[150px]"} bg-white`}>
                <Link to={`/product/${buildForm}/${name}`} className='bg-transparent w-full h-full'>
                    <img src={image} alt={`${image}_${name}`} className='w-full h-full object-contain' />
                </Link>
            </div>

            <div className={`w-full`}>
                <Link to={`/product/${buildForm}/${name}`} className={`bg-transparent w-full flex ${fromCart ? "flex-row justify-between px-[10px]" : "flex-col justify-center p-[2px]"} overflow-hidden gap-[3px] text-slate-800 text-sm mt-2`}>
                    {
                        name.length > 19 ? <p className=' font-semibold whitespace-nowrap animate-text_scroll'>{name}</p> : <p className='whitespace-nowrap'>{name}</p>
                    }
                    <p className='text-slate-800'>₹ {price.toLocaleString()}</p>
                </Link>
            </div>

            {
                fromCart && <BsX className='w-[30px] h-[30px] cursor-pointer text-slate-200 mx-1 hover:text-slate-300' onClick={(e) => {
                    e.stopPropagation();
                    dispatch({
                        type: "removeItems",
                        removedItem: name
                    })
                }} />
            }

        </div>
    )
}

export { ProductCard }