import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsFromCatagory } from '../../Reducers/StockReducer';
import { ProductCard } from "../";

export const Products = () => {
  const [AllProducts, setAllProducts] = useState(null);
  const { catagory } = useParams();

  useEffect(() => {
    setAllProducts(getProductsFromCatagory(catagory))
  }, [catagory, AllProducts]);

  return (
    <div className="w-full h-full flex flex-wrap gap-3 flex-row items-center overflow-y-scroll mx-auto sm:w-[650px] sm:gap-3 sm:justify-center">
      {
        AllProducts && AllProducts.map((productsInfo) => (
          <ProductCard
            name={productsInfo?.name}
            image={productsInfo?.img[0]}
            price={productsInfo?.details?.price} 
            buildForm={productsInfo?.buildForm}
            key={`product_card_${productsInfo?.name}`}/> 
        ))
      }
    </div>
  )
}
