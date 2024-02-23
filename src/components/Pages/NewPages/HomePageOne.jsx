import React from 'react'

const HomePageOne = () => {
    return (
        <div className='bg-slate-200 flex flex-col font items-center justify-center'>
            <header className='flex items-center justify-center md:px-5 w-full'>
                <div className="bg-slate-200 flex flex-row items-center justify-center p-[17px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[87%]">
                        <img src="/images/img_volume.svg" alt="Volume" />
                    </div>

                    <div className='flex sm:flex-col'></div>
                </div>
            </header>
        </div>
    )
}

export default HomePageOne