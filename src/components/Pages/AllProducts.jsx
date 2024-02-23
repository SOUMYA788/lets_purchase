import React from 'react'
import { allCatagories } from '../../Reducers/StockReducer'
import { ProductCard } from '../'
import { useCurrentStockState } from '../../Context/StockDataContext'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import HomePageOne from './NewPages/HomePageOne'

const BannerButton = ({ buttonName, className, ...props }) => {
  return <div className={`absolute w-44 h-full top-0 flex items-center justify-center text-3xl p-2 text-white bg-slate-800 border-2 border-slate-700 bg-opacity-45 backdrop-blur-sm ${className}`} {...props}>
    {buttonName === "left" ? <BsArrowLeft /> : <BsArrowRight />}
  </div>
}


export const AllProducts = () => {
  const [stockDataState] = useCurrentStockState();

  const changeBannerTo = (direction) => {
    if (!["left", "right"].includes(direction.toLowerCase())) return

    if (direction === "left") {

    } else {

    }

  }


  return (
    <div className='w-full flex flex-col items-center mx-auto sm:w-[650px]'>
      {
        allCatagories.map((catagory, indx) => {
          let products = stockDataState[catagory];
          return (
            <div className='w-full my-3 py-2 px-2' key={`product_list_${indx}`}>

              {/* BANNER */}

              <div className="w-full h-52 mb-5 flex flex-row items-center justify-center relative">
                <BannerButton buttonName="left" className="left-0" onClick={() => changeBannerTo("left")} />
                <BannerButton buttonName="right" className="right-0" onClick={() => changeBannerTo("right")} />

              </div>


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