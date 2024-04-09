import React from 'react'
import { BsX } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeItemFromCart } from '../../store/slices/localStorageSlice'


const ProductCard = ({ image, name, price, buildForm, fromCart }) => {

    // const [, dispatch] = useCurrentLocalStorageState()

    const dispatch = useDispatch();

    return (
        <div className={`p-2 ${fromCart ? "min-w-[350px] w-full h-fit flex-row" : "w-full 300px:w-[182px] mx-auto 400px:mx-0 flex-col cursor-pointer"} flex items-center justify-between bg-slate-200 bg-opacity-50 border border-slate-300 rounded-md duration-300`}>

            <div className={`${fromCart ? "w-full h-[80px]" : "w-full 300px:h-[91px]"} bg-white`}>
                <Link to={`/product/${buildForm}/${name}`} className='bg-transparent w-full h-full outline-slate-400'>
                    <img src={image} alt={`${image}_${name}`} className='w-full h-full object-contain' />
                </Link>
            </div>

            <div className={`w-full`}>
                {/* /product/category_name/product_name */}
                <Link to={`/product/${buildForm}/${name}`} className={`bg-transparent w-full flex ${fromCart ? "flex-row justify-between px-2" : "flex-col justify-center p-0.5"} overflow-hidden gap-1 text-slate-800 text-sm mt-2 outline-slate-400`}>
                    <p>{name}</p>
                    <p className='text-slate-800'>₹ {price.toLocaleString()}</p>
                </Link>
            </div>

            {
                fromCart && <BsX className='w-[30px] h-[30px] cursor-pointer text-slate-200 mx-1 hover:text-slate-300' onClick={(e) => {
                    e.stopPropagation();
                    dispatch(removeItemFromCart({
                        productName:name
                    }))
                }} />
            }

        </div>
    )
}

export { ProductCard }