import React from 'react'

const CustomButton = ({ type = "button", className = "", children, ...props }) => {
    return (
        <button type={type} className={`outline-none ${className}`} {...props}>
            {children}
        </button>
    )
}

export const UpdateButton = ({ type = "button", className = "", children = "Update", ...props }) => {
    return (
        <button type={type} className={`w-fit flex uppercase text-xs px-3 py-2 ring-2 ring-transparent ring-offset-1 rounded-full disabled:opacity-50 ${className}`} {...props}>
            {children}
        </button>
    )
}

export default CustomButton