import React from 'react'
import { allCatagories } from '../../Reducers/StockReducer'
import { ProductCard } from '../'
import { useCurrentStockState } from '../../Context/StockDataContext'
export const AllProducts = () => {
  const [stockDataState, dispatch] = useCurrentStockState()
  return (
    <div className='w-full h-full flex flex-col items-center mx-auto overflow-x-scroll sm:w-[650px]'>
      {
        allCatagories.map((catagory, indx) => {
          let products = stockDataState[catagory];
          return (
            <>
              <p className='w-full text-slate-300 py-2 tracking-wider'>{catagory.toUpperCase()}</p>
              <div className='w-full flex flex-row gap-2 flex-wrap my-2 sm:w-[650px] sm:justify-center' key={`AllProducts_${indx}`}>
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
            </>
          )
        })
      }
    </div>
  )
}