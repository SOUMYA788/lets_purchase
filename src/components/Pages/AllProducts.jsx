import React from 'react'
import { ProductCard } from '../'
import { Slider } from '../Layouts'
import { general_banner } from '../../Assets/banner'
import { allCatagories, stockData } from '../../store/stock'



export const AllProducts = () => {
  return (
    <div className='w-full flex flex-col mx-auto'>

      {/* BANNER */}
      <Slider slideName="banner" imagesList={general_banner} slideInterval={2000} />



      <div className='w-full p-2'>
        {/* offers */}
        <h2 className='font-semibold text-base mb-1'>50% Offer on Lava Smartphones</h2>
        <div className='w-full flex flex-wrap gap-3'>
          {
            stockData['android'].filter(stocks => stocks?.details?.manufacturer === "Lava").map(product => <ProductCard name={product?.name} image={product?.img[0]} price={product?.details?.price} buildForm={product?.buildForm} key={`AllProduct_product_card_${product?.name}`} />)
          }
        </div>
      </div>



      <div className='w-full p-2 mt-5'>
        {/* offers */}
        <h2 className='font-semibold text-base mb-1'>20% cashback on first order</h2>
        <div className='w-full flex flex-wrap gap-3'>
          {
            allCatagories.map((catagory, indx) => {
              let products = stockData[catagory];
              return products.map((product) => {
                return (
                  <ProductCard
                    name={product?.name}
                    image={product?.img[0]}
                    price={product?.details?.price}
                    buildForm={product?.buildForm}
                    key={`AllProduct_product_card_${product?.name}`} />
                )
              })
            })
          }
        </div>
      </div>

    </div>
  )
}