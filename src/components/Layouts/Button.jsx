import React from 'react'

const IconWrapperBtn = ({btnType, children, className, ...props}) => {
  return (
    <button type={btnType} className={`w-8 h-8 p-1.5 text-xl font-semibold bg-slate-800 text-slate-300 focus:bg-black focus:text-white hover:bg-black hover:text-white outline-none border-none rounded-full items-center justify-center overflow-hidden ${className}`} {...props} >
      {children}
    </button >
  )
}

export default IconWrapperBtn