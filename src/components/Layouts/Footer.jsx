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
        <div className='w-full bg-[rgba(255,255,255,0.2)] backdrop-blur border border-slate-50 rounded-sm px-2 py-5 mx-auto flex flex-col gap-5 sm:w-[620px]'>
            <div className='footerDiv w-full flex flex-col gap-[10px] text-white sm:flex-row'>
                {
                    footerLinks && footerLinks.map((footerLink, indx) => (
                        <FooterLinksSet footerLinkHeadding={footerLink?.linkHeadding} footerLinks={footerLink?.links} />
                    ))
                }
            </div>

            <div className="watermark w-full ">
                <p className="text-blue-100 text-center tracking-[2px]">© 2023 letspurchase.com or or its afffiliates</p>
            </div>

        </div>
    )
}
