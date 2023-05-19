import React from 'react'
import { Link } from 'react-router-dom'

export const FooterLinksSet = ({ footerLinkHeadding, footerLinks }) => {
    return (
        <div className="w-full flex flex-col gap-2 sm:w-[200px]">
            <h1 className='text-blue-200 py-2'>{footerLinkHeadding}</h1>
            {
                footerLinks && footerLinks.map((links, indx) => (
                    <Link to={links?.link} key={`footerLink_${links?.displayLink}_${indx}`}>
                         {links?.displayLink}
                    </Link>
                ))
            }
        </div>
    )
}
