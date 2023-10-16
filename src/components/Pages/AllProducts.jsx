import React from 'react'
import { allCatagories } from '../../Reducers/StockReducer'
import { ProductCard } from '../'
import { useCurrentStockState } from '../../Context/StockDataContext'
export const AllProducts = () => {
  const [stockDataState] = useCurrentStockState();
  return (
    <div className='w-full   flex flex-col items-center mx-auto sm:w-[650px]'>
      {
        allCatagories.map((catagory, indx) => {
          let products = stockDataState[catagory];
          return (
            <div className='w-full my-3 py-2 px-2' key={`product_list_${indx}`}>
              <p className='w-full bg-[rgba(255,255,255,0.2)] backdrop-blur border border-slate-50 rounded-sm p-2 text-slate-300 py-2 tracking-wider'>{catagory.toUpperCase()}</p>
              <div className='w-full mx-auto flex flex-row gap-[10px] flex-wrap my-2 sm:w-fit' key={`AllProducts_${indx}`}>
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
            </div>
          )
        })
      }
    </div>
  )
}