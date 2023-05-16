import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({ image, name, price, buildForm }) => {
    return (
        <div className="w-[calc(50%-0.75rem)] h-[210px] flex flex-col items-center justify-between bg-[rgba(255,255,255,0.2)] backdrop-blur border border-slate-50 rounded-sm cursor-pointer duration-300 sm:hover:scale-105 sm:w-[150px]">
            <div className='w-full h-[150px] bg-white'>
                <Link to={`/product/${buildForm}/${name}`} className='bg-transparent w-full h-full'>
                    <img src={image} alt={`${image}_${name}`} className='w-full h-full object-contain' />
                </Link>
            </div>
            <div className='w-full flex-1'>
                <Link to={`/product/${buildForm}/${name}`} className='bg-transparent w-full h-full flex flex-col justify-center gap-[3px] overflow-hidden p-[2px]'>
                    {
                        name.length > 19 ? <p className='text-slate-300 whitespace-nowrap animate-text_scroll'>{name}</p> : <p className='text-slate-300 whitespace-nowrap'>{name}</p>
                    }
                    <p className='text-slate-300'>₹ {price.toLocaleString()}</p>
                </Link>
            </div>
        </div>
    )
}

export { ProductCard }