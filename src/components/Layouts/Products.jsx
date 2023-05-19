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
    <div className="w-full min-h-full flex flex-row flex-wrap gap-[10px] items-center mx-auto sm:w-[630px]">
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
