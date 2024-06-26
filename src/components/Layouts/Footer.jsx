import React from 'react'
import { FooterLinksSet } from '../'

export const Footer = () => {

    const footerLinks = [
        {
            linkHeadding: "Get to know us",
            links: [
                {
                    useLink: "/about",
                    displayLink: "About Us"
                }, {
                    link: "/careers",
                    displayLink: "Careers"
                }
            ]
        }, {
            linkHeadding: "Connect with us",
            links: [
                {
                    useLink: "/",
                    displayLink: "Facebook"
                }, {
                    link: "/",
                    displayLink: "Twitter"
                }, {
                    link: "/",
                    displayLink: "Instagram"
                }
            ]
        }, {
            linkHeadding: "Help",
            links: [
                {
                    useLink: "/",
                    displayLink: "Customer Care"
                },{
                    useLink: "/",
                    displayLink: "Contact Us"
                }
            ]
        }
    ]

    return (
        <div className='w-full border-2 bg-slate-50 bg-opacity-50 rounded-sm px-2 py-5 mx-auto flex flex-col gap-5'>
            <div className='footerDiv w-full flex flex-col justify-evenly gap-[10px] text-slate-800 sm:flex-row'>
                {
                    footerLinks && footerLinks.map((footerLink, indx) => (
                        <FooterLinksSet footerLinkHeadding={footerLink?.linkHeadding} footerLinks={footerLink?.links} key={`footer_link_set_${indx}`}/>
                    ))
                }
            </div>

            <div className="watermark w-full ">
                <p className="text-black text-center tracking-[2px]">© 2023 letspurchase.com or or its afffiliates</p>
            </div>

        </div>
    )
}
