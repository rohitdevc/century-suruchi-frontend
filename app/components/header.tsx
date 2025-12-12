"use client"

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Header({
    mobileMenuStatus,
    setMobileMenuStatus,
    scrollToAbout,
    scrollToKeyManagement,
    scrollToInvestorRelation,
    scrollToContactUs
}: any) {
    const navRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to("li", {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out"
            })
        }, navRef);

        return () => ctx.revert();
    }, [])

    return (
        <header className={`container max-w-full flex flex-col justify-center bg-gradient-to-b from-[#2e4f84] to-[#a86882] md:px-5 md:pr-20 fixed z-5 top-0 overflow-hidden transition-all duration-300 ${mobileMenuStatus === true ? 'h-[100vh]' : 'h-10 md:h-20 lg:items-end'}`}>
            <ul className={`flex flex-row gap-3 md:gap-10 lg:gap-15 justify-center items-center text-white text-[10px] md:text-sm lg:text-lg`} ref={navRef}>
                <li className="cursor-pointer w-fit group opacity-0" onClick={scrollToAbout}>
                    <span className="relative">
                        ABOUT US
                        <span className={`absolute left-1/2 -translate-x-1/2 bottom-[-2px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full`}></span>
                    </span>
                </li>
                <li className="cursor-pointer w-fit group opacity-0" onClick={scrollToKeyManagement}>
                    <span className="relative">
                        KEY MANAGEMENT PERSONNEL
                        <span className={`absolute left-1/2 -translate-x-1/2 bottom-[-2px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full`}></span>
                    </span>
                </li>
                <li className="cursor-pointer w-fit group opacity-0" onClick={scrollToInvestorRelation}>
                    <span className="relative">
                        INVESTOR RELATION
                        <span className={`absolute left-1/2 -translate-x-1/2 bottom-[-2px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full`}></span>
                    </span>
                </li>
                <li className="cursor-pointer w-fit group opacity-0" onClick={scrollToContactUs}>
                    <span className="relative">
                        CONTACT US
                        <span className={`absolute left-1/2 -translate-x-1/2 bottom-[-2px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full`}></span>
                    </span>
                </li>
            </ul>
            <GiHamburgerMenu className={`${mobileMenuStatus === true ? 'hidden' : 'hidden md:hidden'} cursor-pointer absolute right-4 top-3`} color="white" onClick={() => setMobileMenuStatus(true)} />

            <MdClose className={`${mobileMenuStatus === true ? 'block' : 'hidden'} cursor-pointer font-bold absolute right-4 top-3 text-white`} size={20} onClick={() => setMobileMenuStatus(false)} />

            <ul className={`flex flex-col gap-5 justify-center items-center text-white text-lg h-[100vh] ${mobileMenuStatus === true ? 'block' : 'hidden'}`}>
                <li className="cursor-pointer" onClick={scrollToAbout}>
                    <span>ABOUT US</span>
                </li>
                <li className="cursor-pointer" onClick={scrollToKeyManagement}>
                    <span>KEY MANAGEMENT PERSONNEL</span>
                </li>
                <li className="cursor-pointer" onClick={scrollToInvestorRelation}>
                    <span>INVESTOR RELATION</span>
                </li>
                <li className="cursor-pointer" onClick={scrollToContactUs}>
                    <span>CONTACT US</span>
                </li>
            </ul>
        </header>
    )
}