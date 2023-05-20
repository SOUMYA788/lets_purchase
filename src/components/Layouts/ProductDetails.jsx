import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { getProductDetails } from '../../Reducers/StockReducer';
import { ProductDetailsList } from "../"
import { useCurrentLocalStorageState } from '../../Context/LocalStorageDataContext';

export const ProductDetails = ({ ProductDetailsMainHeight }) => {
  const [, dispatch] = useCurrentLocalStorageState()
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);
  const [selectedProductImage, setSelectedProductImage] = useState(null);
  const { productName, catagory } = useParams();

  useEffect(() => {
    let productDetailsArr = getProductDetails(catagory, productName)
    setSelectedProductDetails(productDetailsArr[0])
  }, [catagory, productName])

  useEffect(() => {
    setSelectedProductImage(selectedProductDetails?.img[0]);
    console.log(selectedProductDetails, selectedProductImage);
  }, [selectedProductDetails, selectedProductImage])

  const setupImageGallery = () => {
    let imageArray = selectedProductDetails?.img;
    return (
      imageArray.map((imageUrl, indx) => (
        <div className="w-[95%] mx-auto">
          <img src={imageUrl} alt={`productImg_${indx}`} className='w-full h-fit object-contain' />
        </div>
      ))
    )
  }

  const setupCTABtn = () => {
    return (
      <>
        <Link to={`/purchase/${productName}`} className='px-2 py-1 bg-blue-200 transition-colors hover:bg-blue-100 active:bg-blue-200'>PURCHASE</Link>
        <p className='px-2 py-1 bg-blue-400 cursor-pointer transition-colors hover:bg-blue-500 hover:text-white active:bg-blue-400 active:text-black' onClick={(e) => {
          e.stopPropagation();
          let productImage = selectedProductDetails?.img[0];
          let productPrice = selectedProductDetails?.details?.price;
          let buildForm = selectedProductDetails?.buildForm;

          let productDetails = {
            productName,
            productImage,
            productPrice,
            buildForm
          }

          dispatch({
            type: "addItems",
            productDetails
          })

        }}>
          ADD TO CART
        </p>
      </>
    )
  }

  return (
    <div className={`w-full ${ProductDetailsMainHeight}`}>
      <div className="w-full h-[35px] p-2 mb-[10px] text-slate-200 bg-blue-600 flex flex-row items-center justify-between">
        <h2>{productName}</h2>
        <h2>{selectedProductDetails?.details?.price.toLocaleString()}</h2>
      </div>

      <div className="w-full h-[calc(100%-45px)] flex flex-col gap-3 overflow-y-scroll sm:overflow-y-hidden sm:flex-row">

        <div className='w-full h-full sm:h-full sm:max-w-[300px]'>

          <div className="w-full h-[200px] flex flex-row justify-between gap-2 bg-blue-600 p-2">

            <div className="w-[30%] h-full flex flex-col gap-2 overflow-y-scroll bg-blue-800 p-1">
              {selectedProductDetails?.img && setupImageGallery()}
            </div>

            <div className="w-[200px] h-full flex flex-col items-center bg-blue-800">
              {selectedProductImage && <img src={selectedProductImage} alt="product_details_selectedImage" className='w-full h-full object-contain bg-blue-800 p-1' />}
            </div>

          </div>

          <div className='flex flex-row items-center justify-between p-2 mt-3'>
            {selectedProductDetails && setupCTABtn()}
          </div>

        </div>

        <div className="w-full h-full flex-1 flex flex-col gap-2 bg-blue-600 p-2 sm:overflow-y-scroll">
          {selectedProductDetails?.details && <ProductDetailsList stockDetails={selectedProductDetails?.details} />}
        </div>

      </div>
    </div>
  )
}

