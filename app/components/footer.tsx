import { RefObject } from "react";

import Image from "next/image";
import Link from "next/link";

export default function Footer({
        contactUsRef
    }: {
        contactUsRef: RefObject<HTMLDivElement | null>
    }) {
    return (
        <footer ref={contactUsRef}>
            <div className="container flex flex-col md:flex-row gap-10 md:gap-0 lg:gap-10 xl:gap-5 px-5 lg:px-10 xl:px-25 py-10 bg-[#f6f6f6] text-black">
                <div className="md:w-[40%] xl:w-[30%] flex flex-col gap-5 md:pr-15 xl:pr-10">
                    <Image src="/images/icons/century-50-years.svg" alt="Century 50 Years" width={300} height={100} />
                    <p className="text-lg xl:text-[20px] font-corporate-light leading-[1.2]">Suruchi Properties Private Limited  is a Real Estate Company primarily headquartered in Bangalore and is a Wholly-owned Subsidiary Company of Century Joint Developments Private Limited.</p>
                </div>
                <div className="md:w-[60%] xl:w-[70%] flex flex-col gap-10 font-corporate-regular font-medium">
                    <div className="flex flex-col md:flex-row text-center md:text-left justify-between gap-5 md:gap-0">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-xl lg:text-2xl">Registered Office</h2>
                            <p className="text-lg lg:text-xl leading-tight lg:leading-normal">10/1, Ground Floor, <br/>
                            Lakshmi Narayana Complex, <br/>
                            Palace Road, Bangalore - 560001
                            </p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="text-xl lg:text-2xl">Corporate Office</h2>
                            <p className="text-lg lg:text-xl leading-tight lg:leading-normal">JP Techno Park, 4th Floor, <br/>
                            3/1 Millers' Road, Bangalore - 560001</p>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-5 md:gap-2 lg:gap-5 items-center md:items-left md:justify-between text-xl md:text-lg lg:text-xl">
                        <div className="flex gap-2">
                            <Image src="/images/icons/call-icon.svg" alt="Call Icon" width={25} height={25} />
                            <Link href="tel:+918040453453">080-40453453</Link>
                        </div>
                        <div className="flex gap-2">
                            <Image src="/images/icons/mail-icon.svg" alt="Mail Icon" width={25} height={25} />
                            <Link href="mailto:suruchi@centuryrealestate.in">suruchi@centuryrealestate.in</Link>
                        </div>
                        <div>
                            <p><span className="font-semibold">CIN</span> U45201KA2003PTC064723</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container bg-[#9f1634] flex flex-col justify-center items-center md:items-end h-15 px-20">
                <ul className="flex gap-10">
                    <li>
                        <Link href="https://www.facebook.com/centuryrealestatebangalore/" target="_blank"><Image src="/images/icons/facebook.svg" alt="Facebook" width={20} height={20} /></Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/centuryrealestate/" target="_blank"><Image src="/images/icons/instagra.svg" alt="Instagram" width={20} height={20} /></Link>
                    </li>
                    <li>
                        <Link href="https://x.com/centuryblr" target="_blank"><Image src="/images/icons/x.svg" alt="X" width={20} height={20} /></Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/company/century-real-estate-holdings-pvt-ltd" target="_blank"><Image src="/images/icons/linkedin.svg" alt="Linked IN" width={20} height={20} /></Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}