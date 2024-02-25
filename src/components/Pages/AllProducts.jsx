import React from 'react'
import { allCatagories, stockData } from '../../Reducers/StockReducer'
import { ProductCard } from '../'
import { useCurrentStockState } from '../../Context/StockDataContext'
import { Slider } from '../Layouts'
import { general_banner } from '../../Assets/banner'



export const AllProducts = () => {
  const [stockDataState] = useCurrentStockState();

  return (
    <div className='w-full flex flex-col mx-auto'>

      {/* BANNER */}
      <Slider slideName="banner" imagesList={general_banner} slideInterval={2000} />



      <div className='w-full p-2'>
        {/* offers */}
        <h2 className='font-semibold text-base mb-1'>50% Offer on Lava Smartphones</h2>
        <div className='w-full flex gap-3'>
          {
            stockDataState['android'].filter(stocks => stocks?.details?.manufacturer === "Lava").map(product => <ProductCard name={product?.name} image={product?.img[0]} price={product?.details?.price} buildForm={product?.buildForm} key={`AllProduct_product_card_${product?.name}`} />)
          }
        </div>
      </div>



      <div className='w-full p-2 mt-5'>
        {/* offers */}
        <h2 className='font-semibold text-base mb-1'>20% cashback on first order</h2>
        <div className='w-full flex flex-wrap gap-2'>
          {
            allCatagories.map((catagory, indx) => {
              let products = stockDataState[catagory];
              return (
                <div className='w-full sm:w-fit mx-auto 400px:mx-0 px-2 flex gap-2 flex-wrap' key={`product_list_${indx}`}>

                  {
                    products.map((product) => {
                      return (
                        <ProductCard
                          name={product?.name}
                          image={product?.img[0]}
                          price={product?.details?.price}
                          buildForm={product?.buildForm}
                          key={`AllProduct_product_card_${product?.name}`} />
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}