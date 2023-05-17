import React from 'react'
import { BsX } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const ProductCard = ({ image, name, price, buildForm, fromCart }) => {
    return (
        <div className={`p-2 ${fromCart ? "min-w-[350px] w-full h-fit flex-row" : "w-[calc(50%-0.75rem)] h-[210px] flex-col cursor-pointer"} flex items-center justify-between bg-[rgba(255,255,255,0.2)] backdrop-blur border border-slate-50 rounded-sm duration-300 sm:hover:scale-105 sm:w-[150px]`}>
            <div className={`${fromCart ? "w-[80px] h-[80px]" : "w-full h-[150px]"} bg-white`}>
                <Link to={`/product/${buildForm}/${name}`} className='bg-transparent w-full h-full'>
                    <img src={image} alt={`${image}_${name}`} className='w-full h-full object-contain' />
                </Link>
            </div>

            <div className={`w-full flex-1`}>
                <Link to={`/product/${buildForm}/${name}`} className={`bg-transparent w-full h-full flex ${fromCart ? "flex-row justify-between px-[10px]" : "flex-col justify-center p-[2px]"} overflow-hidden gap-[3px]`}>
                    {
                        name.length > 19 ? <p className='text-slate-300 whitespace-nowrap animate-text_scroll'>{name}</p> : <p className='text-slate-300 whitespace-nowrap'>{name}</p>
                    }
                    <p className='text-slate-300'>₹ {price.toLocaleString()}</p>
                </Link>
            </div>

            {
                fromCart && <BsX className='w-[30px] h-[30px] cursor-pointer text-slate-50 mx-1 hover:text-slate-300'/>
            }

        </div>
    )
}

export { ProductCard }