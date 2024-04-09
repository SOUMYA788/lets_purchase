import React from 'react'
import { Link } from 'react-router-dom'

export const FooterLinksSet = ({ footerLinkHeadding, footerLinks }) => {
    return (
        <div className="w-full flex flex-col gap-2 sm:w-[200px] text-slate-500">
            <h1 className='text-black mb-1 my-2'>{footerLinkHeadding}</h1>
            {
                footerLinks && footerLinks.map((links, indx) => (
                    <Link to={links?.link} key={`footerLink_${links?.displayLink}_${indx}`} className='outline-none border-none focus:underline hover:underline'>
                         {links?.displayLink}
                    </Link>
                ))
            }
        </div>
    )
}
