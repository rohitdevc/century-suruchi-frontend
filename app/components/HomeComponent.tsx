"use client"

import Image from "next/image";
import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Header from "./header";
import Footer from "./footer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

import {
    MasterSlider,
    AboutIntro,
    CompanyObjective,
    Management,
    InvestorRelation
} from "@/types/api";

interface HomeComponentProps {
    slider: MasterSlider[];
    about: AboutIntro;
    objectives: CompanyObjective[];
    management: Management[];
    investors: InvestorRelation[];
}

export default function HomeComponent({
    slider,
    about,
    objectives,
    management,
    investors
}: HomeComponentProps) {
    const aboutRef = useRef<HTMLDivElement | null>(null);
  const keyManagementRef = useRef<HTMLDivElement | null>(null);
  const investorRelationRef = useRef<HTMLDivElement | null>(null);
  const contactUsRef = useRef<HTMLDivElement | null>(null);

  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  const scrollWithOffset = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    
    const offset = 125;
    
    const top = ref.current.getBoundingClientRect().top + window.pageYOffset - offset;
    
    window.scrollTo({ top, behavior: "smooth" });

    setMobileMenuStatus(false);
  };

  const [openInvestorRelation, setOpenInvestorRelation] = useState(0);
  const [activeInvestorRelation, setActiveInvestorRelation] = useState(0);

  const toggleInvestorRelationAccordian = (index: number) => {
      setOpenInvestorRelation(index);
  }

  const toggleInvestorRelationCategory = (index: number) => {
      setActiveInvestorRelation(index);
      setOpenInvestorRelation(0)
  }

  return (
    <>
    <Header
    mobileMenuStatus={mobileMenuStatus}
    setMobileMenuStatus={setMobileMenuStatus}
    scrollToAbout={() => scrollWithOffset(aboutRef)}
    scrollToKeyManagement={() => scrollWithOffset(keyManagementRef)}
    scrollToInvestorRelation={() => scrollWithOffset(investorRelationRef)}
    scrollToContactUs={() => scrollWithOffset(contactUsRef)}
    />
    {
      slider && slider.length > 0 && (
        <section className="container relative h-screen master_slider bg-[black] text-white">
          <Swiper modules={[Pagination, Navigation]} navigation={{nextEl: '.swiper-button-next-master-slider', prevEl: '.swiper-button-prev-master-slider'}} pagination={{clickable: true}} loop={true} className="w-full h-full">
            {
              slider.map((slider_row, key) => (
                <SwiperSlide key={key}>
                  <div className="w-full h-screen relative">
                    <Image src={slider_row.master_slider_image} alt={slider_row.master_slider_caption} width={1920} height={900} className="object-cover w-full h-full" />
                    <div className='w-full h-full absolute top-0 bg-[black] opacity-50'></div>
                    <h2 className="text-white text-2xl md:text-4xl lg:text-6xl absolute top-2/3 left-[40%] xl:left-1/2 -translate-x-1/2 -translate-y-2/2">{slider_row.master_slider_caption}</h2>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="flex flex-row justify-end p-5 gap-3">
            <span className="cursor-pointer swiper-button-prev-master-slider">
              <Image src="/images/icons/left-arrow.svg" alt="Left Arrow" width={25} height={25} />
            </span>
            <span className="cursor-pointer swiper-button-next-master-slider">
              <Image src="/images/icons/right-arrow.svg" alt="Right Arrow" width={25} height={25} />
            </span>
          </div>
        </section>
      )
    }
    
    <section className="container flex flex-col md:flex-row gap-10 mt-15 bg-white text-black" ref={aboutRef}>
      <div className="flex flex-col justify-center gap-5 w-full md:w-1/2 px-5 md:py-5 xl:pl-22">
        <h2 className="text-4xl font-medium font-corporate-regular">ABOUT</h2>
        <div className="flex flex-col gap-5 text-lg lg:text-[21px] font-corporate-light leading-tight xl:leading-normal">
          <p>Suruchi Properties Private Limited  is a Real Estate Company primarily headquartered in Bangalore and is a Wholly-owned Subsidiary Company of Century Joint Developments Private Limited. Century Joint Developments Pvt. Ltd. is a Subsidiary of Century Real Estate Holdings Private Limited, a leading real estate developer and one of the largest land bank owners of the Industry with over 3000 acres of land and a Grade-A pipeline of over 20 Mn. Sq. Ft. under development</p>
          <p>Century has come to be recognized in the industry, as one of the oldest, most trusted and reliable brands for partners, investors, and homeowners alike. Over the years, the growth of Century has come to mirror the growth of Bengaluru as one of Asia's fastest-growing global metro hubs.</p>
        </div>
      </div>
      <Image src="/images/about-image.jpg" alt="Century Suruchi" width={750} height={750} className="w-full md:w-1/2" />
    </section>
    <section className="container h-[300px] lg:h-[60vh] xl:h-[85vh] relative bg-white text-black">
      <Image src="/images/vision.jpg" alt="Century Suruchi Vision" width={1920} height={900} className="w-full h-full" />
      <div className='w-full absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent'></div>

      <div className="absolute inset-0 flex justify-end top-10 left-5 md:left-20 text-white">
        <div className="group relative flex flex-col justify-end pr-5 py-5 md:py-20 gap-5 lg:gap-10">
          <input type="checkbox" className="peer absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer transition-all duration-200 checked:inset-auto checked:left-0 checked:top-[4.5rem] checked:w-[220px] checked:h-[50px]" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium font-corporate-regular mb-10 group-hover:mb-0 peer-checked:mb-0">VISION</h2>
          <span className="absolute left-0 mt-16 flex gap-5 items-center font-corporate-light text-lg md:text-xl lg:text-[25px] transition-opacity duration-100 opacity-100 group-hover:opacity-0 peer-checked:opacity-0">
            <Image src='/images/icons/right-arrow-button.svg' alt="Right Arrow" width={40} height={40} className="w-5 md:w-10" /> Learn More
          </span>
          <p className="w-full md:w-1/2 text-lg max-h-0 opacity-0 overflow-y-auto overflow-hidden transition-all duration-1000 ease-out group-hover:max-h-[fit-content] peer-checked:max-h-[fit-content] group-hover:opacity-100 peer-checked:opacity-100">To be the most respected and progressive real estate brand that will catalyze the industry and play a significant role in the building of a new and a better India, suited for the evolving life and lifestyle of its people.</p>
        </div>
      </div>

    </section>
    <section className="container flex flex-col md:flex-row bg-white text-black">
      <div className="w-full md:w-1/2 relative">
        <div className='w-full h-full absolute top-0 bg-[black] opacity-45'></div>
        <Image src="/images/mission.jpg" alt="Century Suruchi Mission" width={900} height={900} className="w-full h-full" />
        <div className="absolute inset-0 flex justify-end top-3 left-5 md:left-20 text-white">
          <div className="group relative flex flex-col justify-end pr-5 py-5 gap-5 lg:gap-10">
          <input type="checkbox" className="peer absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer transition-all duration-200 checked:inset-auto checked:left-0 checked:top-[4.5rem] checked:w-[220px] checked:h-[50px]" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium font-corporate-regular mb-10 group-hover:mb-0 peer-checked:mb-0">MISSION</h2>
          <span className="absolute left-0 mt-16 flex gap-5 items-center font-corporate-light text-lg md:text-xl lg:text-[25px] transition-opacity duration-100 opacity-100 group-hover:opacity-0 peer-checked:opacity-0">
            <Image src='/images/icons/right-arrow-button.svg' alt="Right Arrow" width={40} height={40} className="w-5 md:w-10" /> Learn More
          </span>
          <p className="text-lg max-h-0 opacity-0 overflow-y-auto overflow-hidden transition-all duration-1000 ease-out group-hover:max-h-[fit-content] peer-checked:max-h-[fit-content] group-hover:opacity-100 peer-checked:opacity-100">We will be a model real estate organization: institutionalized and adopting best practises in every sphere.
            <br />
            We will aim to successfully leverage significant opportunities across the real estate spectrum, by being fully integrated and present in all verticals and horizontals that demonstrate potential. We will follow utmost professionalism, in management and in structure, and build the best team and workplace in the industry.
            <br />
            We will build the Century brand to make it widely known and highly regarded, by continually striving to earn and maintain the respect of our peers and stakeholders. We will abide by the tenets of the Century brand which have helped us win market success over the past three decades, and continue to build and nurture bonds of lasting value with all our stakeholders.
            <br />
            We will constantly think ahead and establish the Century brand in the long term, by anticipating, innovating and delivering to tomorrow's opportunities, trends and needs.
          </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative">
        <div className='w-full h-full absolute top-0 bg-[black] opacity-45'></div>
        <Image src="/images/values.jpg" alt="Century Suruchi Values" width={900} height={900} className="w-full h-full" />
        <div className="absolute inset-0 flex justify-end top-3 left-5 md:left-20 text-white">
          <div className="group relative flex flex-col justify-end pr-5 py-5 gap-5 lg:gap-10">
          <input type="checkbox" className="peer absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer transition-all duration-200 checked:inset-auto checked:left-0 checked:top-[4.5rem] checked:w-[220px] checked:h-[50px]" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium font-corporate-regular mb-10 group-hover:mb-0 peer-checked:mb-0">VALUES</h2>
          <span className="absolute left-0 mt-16 flex gap-5 items-center font-corporate-light text-lg md:text-xl lg:text-[25px] transition-opacity duration-100 opacity-100 group-hover:opacity-0 peer-checked:opacity-0">
            <Image src='/images/icons/right-arrow-button.svg' alt="Right Arrow" width={40} height={40} className="w-5 md:w-10" /> Learn More
          </span>
          <p className="text-lg max-h-0 opacity-0 overflow-y-auto overflow-hidden transition-all duration-1000 ease-out group-hover:max-h-[fit-content] peer-checked:max-h-[fit-content] group-hover:opacity-100 peer-checked:opacity-100">Aim beyond what is easy to see: Always target far and high, aim to look and go beyond what's in easy sight. Dream twice, not once: Dream in our mind, Dream in our action.
            <br />
            Believe in self-first: We must believe we can do it, only if there's success in the head, can we achieve success in the real world.
            <br />
            Enjoy the adventure: We must enjoy our work, be adventurous, we have nothing to lose, everything to gain.
            <br />
            Innovate to secure: We must keep in touch with the latest developments in our field and keep bringing new ideas to our customers, to continually surprise and delight them.
            <br />
            No Substitute to hard work: To achieve success, we must welcome hard work and hardships.
            <br />
            Win with pleasantness and humility: Arrogance may help us succeed once or twice, but will drive people off in the long term. We never lose anything with humility and pleasantness though, but always win in the long term.
            <br />
            Never compromise our name: Our name is our badge of honor. We must always protect it by honoring every commitment we make under its name.
          </p>
        </div>
        </div>
      </div>
    </section>
    <section className="container flex flex-col gap-10 md:gap-20 py-15 px-5 lg:px-10 xl:px-25 font-corporate-regular bg-white text-black" ref={keyManagementRef}>
      <div className="flex flex-col gap-5 justify-center items-center text-center">
        <h2 className="text-lg">KEY MANAGEMENT PERSONNEL</h2>
        <p className="text-2xl md:text-4xl">Experience is a crucial element of our success.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 text-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-3xl lg:text-4xl xl:text-5xl">P. Ravindra Pai</p>
          <span className="text-md md:text-2xl lg:text-3xl xl:text-4xl">(Director)</span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-3xl lg:text-4xl xl:text-5xl">P. Ravindra Pai</p>
          <span className="text-md md:text-2xl lg:text-3xl xl:text-4xl">(Director)</span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-3xl lg:text-4xl xl:text-5xl">P. Ravindra Pai</p>
          <span className="text-md md:text-2xl lg:text-3xl xl:text-4xl">(Director)</span>
        </div>
      </div>
    </section>
    <section className="container flex flex-col gap-10 pb-15 font-corporate-regular bg-white text-black" ref={investorRelationRef}>
      <div className="flex flex-col gap-5 justify-center items-center">
        <h2 className="text-lg">INVESTOR RELATIONS</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 px-5 lg:px-10 xl:px-25">
        <div className="md:w-[35%] lg:w-[40%] border-b-3 md:border-b-0 md:border-r-3 border-[#ede3e5] pb-5 md:py-0">
          <ul className="flex flex-col gap-5 text-xl lg:text-2xl">
            <li className="cursor-pointer w-fit group" onClick={() => toggleInvestorRelationCategory(0)}>
              <span className={`relative hover:opacity-90 ${activeInvestorRelation === 0 ? 'opacity-90' : ''}`}>
                  Disclosures under the Companies Act, 2013
                  <span className={`absolute left-1/2 -translate-x-1/2 bottom-[-2px] h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full ${activeInvestorRelation === 0 ? 'w-full' : ''}`}></span>
              </span>
            </li>
            <li className="cursor-pointer w-fit group" onClick={() => toggleInvestorRelationCategory(1)}>
              <span className={`relative hover:opacity-90 ${activeInvestorRelation === 1 ? 'opacity-90' : ''}`}>
                Disclosures under SEBI
                <span className={`absolute left-1/2 -translate-x-1/2 bottom-[-2px] h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full ${activeInvestorRelation === 1 ? 'w-full' : ''}`}></span>
              </span>
            </li>
            <li className="cursor-pointer w-fit group" onClick={() => toggleInvestorRelationCategory(2)}>
              <span className={`relative hover:opacity-90 ${activeInvestorRelation === 2 ? 'opacity-90' : ''}`}>
              Contact Details
              <span className={`absolute left-1/2 -translate-x-1/2 bottom-[-2px] h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full ${activeInvestorRelation === 2 ? 'w-full' : ''}`}></span>
              </span>
            </li>
            <li className="cursor-pointer w-fit group" onClick={() => toggleInvestorRelationCategory(3)}>
              <span className={`relative hover:opacity-90 ${activeInvestorRelation === 3 ? 'opacity-90' : ''}`}>
              Grievance Redressal
              <span className={`absolute left-1/2 -translate-x-1/2 bottom-[-2px] h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full ${activeInvestorRelation === 3 ? 'w-full' : ''}`}></span>
              </span>
            </li>
          </ul>
        </div>
        <div className="md:w-[65%]">
          <div className={`w-full ${activeInvestorRelation === 0 ? '' : 'hidden'}`}>
            <div className="w-full border-b-3 border-[#ede3e5]" key={0}>
              <div className="flex flex-col gap-3 px-5 pb-5">
                <div className="flex flex-row justify-between gap-5 text-2xl md:text-xl lg:text-2xl w-full cursor-pointer" onClick={() => toggleInvestorRelationAccordian(0)}>
                  <h2>Annual Return</h2>
                  <Image src="/images/icons/down-arrow.svg" alt="Down Arrow" width={20} height={20} className={`transition-all duration-300 ${openInvestorRelation === 0 ? "rotate-180" : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openInvestorRelation === 0 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="flex flex-col gap-5 text-xl md:text-lg lg:text-xl font-corporate-light list-disc list-inside">
                    <li>
                      <Link href="">Annual Report 2020-21</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2021-22</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2022-23</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full border-[#ede3e5]" key={1}>
              <div className="flex flex-col gap-3 px-5 pb-5 pt-5">
                <div className="flex flex-row justify-between gap-5 text-2xl md:text-xl lg:text-2xl w-full cursor-pointer" onClick={() => toggleInvestorRelationAccordian(1)}>
                  <h2>Annual Return</h2>
                  <Image src="/images/icons/down-arrow.svg" alt="Down Arrow" width={20} height={20} className={`transition-all duration-300 ${openInvestorRelation === 1 ? "rotate-180" : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openInvestorRelation === 1 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="flex flex-col gap-5 text-xl md:text-lg lg:text-xl font-corporate-light list-disc list-inside">
                    <li>
                      <Link href="">Annual Report 2020-21</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2021-22</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2022-23</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={`w-full ${activeInvestorRelation === 1 ? '' : 'hidden'}`}>
            <div className="w-full border-b-3 border-[#ede3e5]" key={0}>
              <div className="flex flex-col gap-3 px-5 pb-5">
                <div className="flex flex-row justify-between gap-5 text-2xl w-full cursor-pointer" onClick={() => toggleInvestorRelationAccordian(0)}>
                  <h2>Annual Return</h2>
                  <Image src="/images/icons/down-arrow.svg" alt="Down Arrow" width={20} height={20} className={`transition-all duration-300 ${openInvestorRelation === 0 ? "rotate-180" : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openInvestorRelation === 0 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="flex flex-col gap-5 text-xl font-corporate-light list-disc list-inside">
                    <li>
                      <Link href="">Annual Report 2020-21</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2021-22</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2022-23</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full border-[#ede3e5]" key={1}>
              <div className="flex flex-col gap-3 px-5 pb-5 pt-5">
                <div className="flex flex-row justify-between gap-5 text-2xl w-full cursor-pointer" onClick={() => toggleInvestorRelationAccordian(1)}>
                  <h2>Annual Return</h2>
                  <Image src="/images/icons/down-arrow.svg" alt="Down Arrow" width={20} height={20} className={`transition-all duration-300 ${openInvestorRelation === 1 ? "rotate-180" : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openInvestorRelation === 1 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="flex flex-col gap-5 text-xl font-corporate-light list-disc list-inside">
                    <li>
                      <Link href="">Annual Report 2020-21</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2021-22</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2022-23</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={`w-full ${activeInvestorRelation === 2 ? '' : 'hidden'}`}>
            <div className="w-full border-b-3 border-[#ede3e5]" key={0}>
              <div className="flex flex-col gap-3 px-5 pb-5">
                <div className="flex flex-row justify-between gap-5 text-2xl w-full cursor-pointer" onClick={() => toggleInvestorRelationAccordian(0)}>
                  <h2>Annual Return</h2>
                  <Image src="/images/icons/down-arrow.svg" alt="Down Arrow" width={20} height={20} className={`transition-all duration-300 ${openInvestorRelation === 0 ? "rotate-180" : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openInvestorRelation === 0 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="flex flex-col gap-5 text-xl font-corporate-light list-disc list-inside">
                    <li>
                      <Link href="">Annual Report 2020-21</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2021-22</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2022-23</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full border-[#ede3e5]" key={1}>
              <div className="flex flex-col gap-3 px-5 pb-5 pt-5">
                <div className="flex flex-row justify-between gap-5 text-2xl w-full cursor-pointer" onClick={() => toggleInvestorRelationAccordian(1)}>
                  <h2>Annual Return</h2>
                  <Image src="/images/icons/down-arrow.svg" alt="Down Arrow" width={20} height={20} className={`transition-all duration-300 ${openInvestorRelation === 1 ? "rotate-180" : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openInvestorRelation === 1 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="flex flex-col gap-5 text-xl font-corporate-light list-disc list-inside">
                    <li>
                      <Link href="">Annual Report 2020-21</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2021-22</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2022-23</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={`w-full ${activeInvestorRelation === 3 ? '' : 'hidden'}`}>
            <div className="w-full border-b-3 border-[#ede3e5]" key={0}>
              <div className="flex flex-col gap-3 px-5 pb-5">
                <div className="flex flex-row justify-between gap-5 text-2xl w-full cursor-pointer" onClick={() => toggleInvestorRelationAccordian(0)}>
                  <h2>Annual Return</h2>
                  <Image src="/images/icons/down-arrow.svg" alt="Down Arrow" width={20} height={20} className={`transition-all duration-300 ${openInvestorRelation === 0 ? "rotate-180" : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openInvestorRelation === 0 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="flex flex-col gap-5 text-xl font-corporate-light list-disc list-inside">
                    <li>
                      <Link href="">Annual Report 2020-21</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2021-22</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2022-23</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full border-[#ede3e5]" key={1}>
              <div className="flex flex-col gap-3 px-5 pb-5 pt-5">
                <div className="flex flex-row justify-between gap-5 text-2xl w-full cursor-pointer" onClick={() => toggleInvestorRelationAccordian(1)}>
                  <h2>Annual Return</h2>
                  <Image src="/images/icons/down-arrow.svg" alt="Down Arrow" width={20} height={20} className={`transition-all duration-300 ${openInvestorRelation === 1 ? "rotate-180" : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openInvestorRelation === 1 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="flex flex-col gap-5 text-xl font-corporate-light list-disc list-inside">
                    <li>
                      <Link href="">Annual Report 2020-21</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2021-22</Link>
                    </li>
                    <li>
                      <Link href="">Annual Report 2022-23</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer contactUsRef={contactUsRef} />
    </>
  );
}