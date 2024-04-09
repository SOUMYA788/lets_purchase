import React from 'react'

export const ProductDetailsList = ({ stockDetails }) => {
    return (
        <>
            {
                Object.entries(stockDetails).map(([key, value], indx) => {
                    if ((indx % 2) === 0) {
                        return (
                            <div key={`productDetails_${key}_${indx}`} className='w-full text-xs flex flex-row justify-between gap-2 bg-slate-700 p-2'>
                                <p className='w-2/5 text-slate-400'>{key.toUpperCase()}</p>
                                <p className='w-2/5 text-slate-300'>{value}</p>
                            </div>
                        )
                    } else {
                        return (
                            <div key={`productDetails_${key}_${indx}`} className='w-full text-xs flex flex-row justify-between gap-2 bg-slate-600 p-2'>
                                <p className='w-2/5 text-slate-300'>{key.toUpperCase()}</p>
                                <p className='w-2/5 text-slate-100'>{value}</p>
                            </div>
                        )
                    }
                })
            }
        </>
    )
}
