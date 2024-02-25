import React, { useEffect, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';



const SliderButton = ({ buttonName, className, ...props }) => {
    return <div className={`w-[10%] h-full hidden z-[1] 400px:flex items-center justify-center text-3xl p-2 text-white bg-black bg-opacity-60 border-white ${className}`} {...props}>
        {buttonName === "left" ? <BsArrowLeft /> : <BsArrowRight />}
    </div>
}




const Slider = ({ slideName, imagesList, slideInterval }) => {
    const [slideCount, setSlideCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setSlideCount((value) => {
                if (value === (imagesList.length - 1)) return 0
                return (value + 1)
            })
        }, slideInterval);

    }, [])

    
    return (
        <div className="w-full 300px:h-[40vw] mb-5 flex bg-blue-500 flex-row items-center justify-center 400px:justify-between">

            <SliderButton buttonName="left" className="border-r" />

            <div className={`w-full 300px:h-full 300px:w-4/5 flex items-center overflow-hidden bg-red-500`} >
                {
                    imagesList?.length > 0 && imagesList.map((url, indx) => <img key={`slide_image_${slideName}_${indx}`} src={url} alt={`banner_${slideName}_${indx}`} className='w-full h-full object-cover flex-grow-0 flex-shrink-0 mx-auto transition-transform duration-200' style={{ transform: `translateX(${-100 * slideCount}%)` }} />)
                }
            </div>

            <SliderButton buttonName="right" className="border-l" />

        </div>
    )
}

export default Slider