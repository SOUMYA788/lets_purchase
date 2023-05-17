import React from 'react'
import { useCurrentLocalStorageState } from '../../Context/LocalStorageDataContext'
import { ProductCard } from '../';

export const Cart = () => {
  const [{ cartItems }, dispatch] = useCurrentLocalStorageState();
  return (
    <div className='w-full h-fit flex flex-col gap-2 md:flex-row'>

      <div className="productRow flex flex-col gap-2 overflow-x-scroll"> 
        {
          cartItems && cartItems.map(({ buildForm, productImage, productName, productPrice }, indx) => (
            <ProductCard buildForm={buildForm} fromCart={true} image={productImage} name={productName} price={productPrice} />
          ))
        }
      </div>

      <div className="cartDetails">
        
      </div>

    </div>
  )
}
