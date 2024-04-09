import React from 'react'

const CustomInput = ({ title, type="text", label, name, className, ...props }) => {
    return (
        <div className='w-full text-slate-800 dark:text-slate-400 flex flex-col justify-center items-center'>
            {label && <label htmlFor={name} className='text-sm text-inherit mb-2 font-medium text-gray-900 dark:text-slate-400 py-1 capitalize mr-auto'>{label}</label>}
            <input type={type} id={name} name={name} value={title || ""} className={`w-full text-sm outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-slate-300 rounded-lg ring-2 ring-transparent focus:ring-slate-500 dark:focus:ring-slate-300 border border-gray-300 focus:border-gray-500 dark:border-gray-600 dark:placeholder-gray-400 focus:text-black dark:focus:text-white  p-2.5 ${className}`} {...props}/>
        </div>
    )
}

export default CustomInput