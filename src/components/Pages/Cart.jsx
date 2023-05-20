import React, { useEffect, useState } from 'react'
import { useCurrentLocalStorageState } from '../../Context/LocalStorageDataContext'
import { ProductCard } from '../';

export const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [{ cartItems }] = useCurrentLocalStorageState();
  useEffect(() => {
    let rufTotal = 0
    if (cartItems) {
      cartItems.forEach(({ productPrice }, indx) => {
        rufTotal += productPrice
      })
      setTotalAmount(rufTotal)
    }
  }, [cartItems])

  if (cartItems.length < 1) return (<div className='text-center text-blue-100 p-5 h-1/2 flex justify-center'>No Items Available</div>)

  return (
    <div className='w-full h-full flex flex-col gap-5 sm:flex-row'>

      <div className="productRow flex-1 w-full flex flex-col gap-2 overflow-x-scroll">
        {
          cartItems && cartItems.map(({ buildForm, productImage, productName, productPrice }, indx) => (
            <ProductCard buildForm={buildForm} fromCart={true} image={productImage} name={productName} price={productPrice} />
          ))
        }
      </div>

      <div className="cartDetails w-[400px] mx-auto">
        <div className="cartDetailsRow p-2 w-full flex flex-row justify-between gap-2">
          <p className='text-slate-100'>Total Amount</p>
          <p className='text-slate-50'>{totalAmount.toLocaleString()}</p>
        </div>

        <div className="cartDetailsRow p-2 w-full flex flex-row justify-between gap-2">
          <p className='text-slate-100'>Discount (20%)</p>
          <p className='text-slate-50'>{Math.floor(((totalAmount * 20) / 100)).toLocaleString()}</p>
        </div>

        <div className="cartDetailsRow p-2 w-full flex flex-row justify-between gap-2">
          <p className='text-slate-100'>Net Amount + GST</p>
          <p className='text-slate-50'>{Math.floor((totalAmount - ((totalAmount * 20) / 100))).toLocaleString()}</p>
        </div>

        <div className="cartDetailsCTADiv text-right mt-3">
          <button className='text-sm px-5 py-2 bg-blue-600 text-blue-100 outline-none ring-blue-400 hover:ring-2 hover:text-blue-600 hover:bg-blue-100' onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Payment Integration Required...
          }}>PAY NOW</button>
        </div>
      </div>
    </div>
  )
}
