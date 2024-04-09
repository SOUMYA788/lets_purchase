import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { getProductDetails } from '../../store/stock';
import { ProductDetailsList } from "../"
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/slices/localStorageSlice';



export const ProductDetails = () => {
  const dispatch = useDispatch()
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);
  const [selectedProductImage, setSelectedProductImage] = useState();
  const { productName, catagory } = useParams();


  useEffect(() => {
    const productDetailsArr = getProductDetails(catagory, productName)
    if (productDetailsArr?.length > 0) {
      setSelectedProductDetails(productDetailsArr[0])
      setSelectedProductImage(productDetailsArr[0]?.img[0])
    }
  }, [catagory, productName])



  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addItemToCart({
      productName,
      productImage: selectedProductDetails?.img[0],
      productPrice: selectedProductDetails?.details?.price,
      buildForm: selectedProductDetails?.buildForm
    }))
  }




  return (
    <div className={`w-full my-3 text-base`}>

      <div className="w-full px-3 py-4 mb-2 text-sm 300px:text-base text-slate-300 bg-slate-800 flex flex-wrap items-center justify-between">
        <h2>{productName}</h2>
        <h2>{selectedProductDetails?.details?.price.toLocaleString()}</h2>
      </div>


      <div className="w-full flex flex-col gap-3 sm:flex-row">

        <div className='w-full h-full sm:max-w-[300px] bg-slate-800'>

          <div className="w-full 300px:h-[200px] flex flex-wrap justify-between p-2 gap-2">

            <div className="w-full 300px:w-fit 300px:h-full flex 300px:flex-col gap-2 overflow-x-scroll 300px:overflow-x-hidden 300px:overflow-y-scroll bg-slate-600 p-1">
              {
                selectedProductDetails?.img && selectedProductDetails.img.map((imageUrl, indx) => (
                  <img src={imageUrl} alt={`productImg_${indx}`} className='w-14 h-14 object-contain 300px:mx-auto flex-shrink-0 flex-grow-0' onClick={() => setSelectedProductImage(imageUrl)} />
                ))
              }
            </div>

            {selectedProductImage && <img src={selectedProductImage} alt="product_details_selected_image" className='w-full 300px:flex-1 h-full object-contain bg-slate-600 p-1 aspect-square flex-shrink-0 flex-grow-0' />}

          </div>

          <div className='flex flex-wrap items-center justify-center gap-3 p-2 mt-3'>
            {
              selectedProductDetails && <>
                <Link to={`/purchase/${productName}`} className='flex-1 text-center text-xs 300px:text-base cursor-pointer px-2 py-1 ring-2 ring-slate-300 text-slate-300 transition-colors hover:bg-blue-100 active:bg-blue-200 rounded-sm'>PURCHASE</Link>

                <button type='button' className='flex-1 px-2 py-1.5 text-xs 300px:text-base bg-slate-400 text-slate-800 font-semibold cursor-pointer transition-colors hover:bg-slate-500 hover:text-white whitespace-nowrap active:bg-slate-400 active:text-slate-800 rounded-sm' onClick={handleAddToCart}>
                  ADD TO CART
                </button>
              </>
            }
          </div>
        </div>

        <div className="w-full 300px:h-[265px] text-base flex-1 flex flex-col gap-2 bg-slate-800 p-2 sm:overflow-y-scroll">
          {selectedProductDetails?.details && <ProductDetailsList stockDetails={selectedProductDetails?.details} />}
        </div>

      </div>
    </div>
  )
}

