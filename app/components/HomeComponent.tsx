"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Header from "./header";
import Footer from "./footer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import nl2br from 'nl2br';
import parse from 'html-react-parser';

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
    const basePath = process.env.NEXT_PUBLIC_IMG_URL;

    const sliderRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const visionRef = useRef<HTMLDivElement | null>(null);
    const objectivesRef = useRef<HTMLDivElement | null>(null);
    const keyManagementRef = useRef<HTMLDivElement | null>(null);
    const investorRelationRef = useRef<HTMLDivElement | null>(null);
    const investorRelationContent = useRef<HTMLDivElement | null>(null);
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
      setOpenInvestorRelation(0);
      scrollWithOffset(investorRelationContent)
  }

  useEffect(() => {
      if (!aboutRef.current) return;
      if (!objectivesRef.current) return;

      const aboutBlocks = aboutRef.current.querySelectorAll(".obj-block");
      const objectiveBlocks = objectivesRef.current.querySelectorAll(".obj-block");

      let ctx = gsap.context(() => {
          gsap.to(sliderRef.current, {
              opacity: 1,
              y: 30,
              duration: 0.8,
              ease: "power2.out"
          })

          gsap.fromTo(aboutRef.current, {
              opacity: 0,
              y: 30
          }, {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top: 75%",
              end: "top: 20%",
              scrub: true
            }
          })

          gsap.from(aboutBlocks[0], {
            opacity: 0,
            x: -60,
            ease: "power2.out",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          });
          
          gsap.from(aboutBlocks[1], {
            opacity: 0,
            x: 60,
            ease: "power2.out",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          });

          gsap.fromTo(visionRef.current, {
              opacity: 0,
              y: 30
          }, {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: visionRef.current,
              start: "top: 75%",
              end: "top: 20%",
              scrub: true
            }
          })

          gsap.fromTo(objectivesRef.current, {
              opacity: 0,
              y: 30
          }, {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: objectivesRef.current,
              start: "top: 75%",
              end: "top: 20%",
              scrub: true
            }
          })

          gsap.from(objectiveBlocks[0], {
            opacity: 0,
            x: -60,
            ease: "power2.out",
            scrollTrigger: {
              trigger: objectivesRef.current,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          });
          
          gsap.from(objectiveBlocks[1], {
            opacity: 0,
            x: 60,
            ease: "power2.out",
            scrollTrigger: {
              trigger: objectivesRef.current,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          });

          gsap.fromTo(keyManagementRef.current, {
              opacity: 0,
              y: 30
          }, {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: keyManagementRef.current,
              start: "top: 75%",
              end: "top: 20%",
              scrub: true
            }
          })

          gsap.fromTo(investorRelationRef.current, {
              opacity: 0,
              y: 30
          }, {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: investorRelationRef.current,
              start: "top: 95%",
              end: "top: 20%",
              scrub: true
            }
          })

          gsap.fromTo(contactUsRef.current, {
              opacity: 0,
              y: 10
          }, {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contactUsRef.current,
              start: "top: 99%",
              end: "top: 20%",
              scrub: true
            }
          })
      }, [sliderRef, aboutRef, visionRef, objectivesRef, keyManagementRef, investorRelationRef, contactUsRef]);

      return () => ctx.revert();
  }, [])

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
        <section className="container max-w-full relative h-screen master_slider bg-[black] text-white opacity-0 translate-y-10" ref={sliderRef}>
          <Swiper modules={[Pagination, Navigation, Autoplay]} navigation={{nextEl: '.swiper-button-next-master-slider', prevEl: '.swiper-button-prev-master-slider'}} autoplay={{delay: 4000, disableOnInteraction: false}} pagination={{clickable: true}} loop={true} className="w-full h-full">
            {
              slider.map((slider_row, key) => (
                <SwiperSlide key={key}>
                  <div className="w-full h-screen relative">
                    <Image src={slider_row.master_slider_image} alt={slider_row.master_slider_caption} width={1920} height={900} className="object-cover w-full h-full" loading={key === 0 ? 'eager' : 'lazy'} />
                    <div className='w-full h-full absolute top-0 bg-[black] opacity-50'></div>
                    <h2 className="text-white text-2xl md:text-4xl lg:text-6xl absolute top-2/3 left-[40%] xl:left-1/2 -translate-x-1/2 -translate-y-2/2">{slider_row.master_slider_caption}</h2>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="flex flex-row justify-end p-5 gap-3">
            <span className="cursor-pointer swiper-button-prev-master-slider">
              <Image src={`${basePath}images/icons/left-arrow.svg`} alt="Left Arrow" width={25} height={25} />
            </span>
            <span className="cursor-pointer swiper-button-next-master-slider">
              <Image src={`${basePath}images/icons/right-arrow.svg`} alt="Right Arrow" width={25} height={25} />
            </span>
          </div>
        </section>
      )
    }
    {
      about && (
      <section className="container max-w-full overflow-hidden flex flex-col md:flex-row gap-10 mt-20 bg-white text-black opacity-0 translate-y-10" ref={aboutRef}>
        <div className="flex flex-col justify-center gap-5 w-full md:w-1/2 px-5 md:py-5 xl:pl-22 obj-block">
          <h2 className="text-4xl font-medium font-corporate-regular">{about.about_intro_heading}</h2>
          <div className="flex flex-col gap-5 text-lg lg:text-[21px] font-corporate-light leading-tight xl:leading-normal">
            <p>{parse(nl2br(about.about_intro_description))}</p>
          </div>
        </div>
        <Image src={about.about_intro_image} alt="Century Suruchi" width={750} height={750} className="w-full md:w-1/2 obj-block" />
      </section>
      )
    }
    {
      objectives && objectives.length > 0 && (
        <section className="container max-w-full h-[300px] lg:h-[60vh] xl:h-[85vh] relative bg-white text-black opacity-0 translate-y-10" ref={visionRef}>
          <Image src={objectives[0].company_objective_image} alt="Century Suruchi {objectives[0].company_objective_caption}" width={1920} height={900} className="w-full h-full" />
          <div className='w-full absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent'></div>

          <div className="absolute inset-0 flex justify-end top-10 left-5 md:left-20 text-white">
            <div className="group relative flex flex-col justify-end pr-5 py-5 md:py-20 gap-5 lg:gap-10">
              <input type="checkbox" className="peer absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer transition-all duration-200 checked:inset-auto checked:left-0 checked:top-[4.5rem] checked:w-[220px] checked:h-[50px] [@media(hover:hover)]:hidden hidden" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium font-corporate-regular mb-0 group-hover:mb-0 peer-checked:mb-0">{objectives[0].company_objective_caption}</h2>
              <span className="absolute left-0 mt-16 flex gap-5 items-center font-corporate-light text-lg md:text-xl lg:text-[25px] transition-opacity duration-1000 opacity-100 group-hover:opacity-0 peer-checked:opacity-0 hidden">
                <Image src={`${basePath}images/icons/right-arrow-button.svg`} alt="Right Arrow" width={40} height={40} className="w-5 md:w-10" /> Learn More
              </span>
              <p className="w-full md:w-1/2 text-lg max-h-[800px] opacity-100 overflow-y-auto overflow-hidden transition-all duration-1000 ease-in-out group-hover:max-h-[800px] peer-checked:max-h-[800px] group-hover:opacity-100 peer-checked:opacity-100 transform translate-y-0 group-hover:translate-y-0 peer-checked:translate-y-0">{parse(nl2br(objectives[0].company_objective_description))}</p>
            </div>
          </div>
        </section>
      )
    }
    {
      objectives && objectives.length > 1 && (
        <section className="container max-w-full overflow-hidden flex flex-col md:flex-row bg-white text-black opacity-0 translate-y-10" ref={objectivesRef}>
          {
            objectives.map((objective, key) => {
              if (key === 0) return null;

              return (
              <div className="w-full md:w-1/2 relative obj-block" key={key}>
                <div className='w-full h-full absolute top-0 bg-[black] opacity-45'></div>
                <Image src={objective.company_objective_image} alt="Century Suruchi {objective.company_objective_caption}" width={900} height={900} className="w-full h-full" />
                <div className="absolute inset-0 flex justify-end top-3 left-5 md:left-20 text-white">
                  <div className="group relative flex flex-col justify-end pr-5 py-5 gap-5 lg:gap-10">
                  <input type="checkbox" className="peer absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer transition-all duration-200 checked:inset-auto checked:left-0 checked:top-[4.5rem] checked:w-[220px] checked:h-[50px] [@media(hover:hover)]:hidden hidden" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium font-corporate-regular mb-0 group-hover:mb-0 peer-checked:mb-0">{objective.company_objective_caption}</h2>
                  <span className="absolute left-0 mt-16 flex gap-5 items-center font-corporate-light text-lg md:text-xl lg:text-[25px] transition-opacity duration-1000 opacity-100 group-hover:opacity-0 peer-checked:opacity-0 hidden">
                    <Image src={`${basePath}images/icons/right-arrow-button.svg`} alt="Right Arrow" width={40} height={40} className="w-5 md:w-10" /> Learn More
                  </span>
                  <p className="text-lg max-h-[800px] opacity-100 overflow-y-auto overflow-hidden transition-all duration-1000 ease-in-out group-hover:max-h-[800px] peer-checked:max-h-[800px] group-hover:opacity-100 peer-checked:opacity-100 transform translate-y-0 group-hover:translate-y-0 peer-checked:translate-y-0">{parse(nl2br(objective.company_objective_description))}</p>
                  </div>
                </div>
              </div>
            )}
          )}
        </section>
    )}
    {
      management && management.length > 0 && (
        <section className="container max-w-full flex flex-col gap-10 md:gap-20 py-20 px-5 lg:px-10 xl:px-25 font-corporate-regular bg-white text-black opacity-0 translate-y-10" ref={keyManagementRef}>
          <div className="flex flex-col gap-5 justify-center items-center text-center">
            <h2 className="text-2xl">KEY MANAGEMENT PERSONNEL</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-5 text-center justify-between">
            {
              management.map((management_row, key) => (
                <div className="flex flex-col gap-2" key={key}>
                  <p className="text-3xl lg:text-4xl">{management_row.management_name}</p>
                  <span className="text-xl md:text-2xl lg:text-3xl">({management_row.management_designation})</span>
                </div>
              ))
            }
          </div>
        </section>
      )
    }
    {
      investors && investors.length > 0 && (
        <section className="container max-w-full flex flex-col gap-10 pb-15 font-corporate-regular bg-white text-black opacity-0 translate-y-10" ref={investorRelationRef}>
          <div className="flex flex-col gap-5 justify-center items-center">
            <h2 className="text-2xl">INVESTOR RELATIONS</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-0 px-5 lg:px-10 xl:px-25">
            <div className="md:w-[35%] lg:w-[40%] border-b-3 md:border-b-0 md:border-r-3 border-[#ede3e5] pb-5 md:py-0">
              <ul className="flex flex-col gap-5 text-xl lg:text-2xl">
                {
                  investors.map((investor_relation, key) => (
                  <li className="cursor-pointer w-fit group" key={key} onClick={() => toggleInvestorRelationCategory(key)}>
                    <span className={`relative hover:opacity-90 ${activeInvestorRelation === key ? 'opacity-90' : ''}`}>
                        {investor_relation.investor_relation_tab_title}
                        <span className={`absolute left-1/2 -translate-x-1/2 bottom-[-2px] h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full ${activeInvestorRelation === key ? 'w-full' : ''}`}></span>
                    </span>
                  </li>
                  ))
                }
              </ul>
            </div>
            <div className="md:w-[65%]" ref={investorRelationContent}>
              {
                  investors.map((investor_relation, key) => (
                  <div className={`w-full ${activeInvestorRelation === key ? '' : 'hidden'}`} key={key}>
                    {
                      investor_relation.investor_relation_categories && investor_relation.investor_relation_categories.length > 0 && investor_relation.investor_relation_categories.map((investor_relation_category, category_key) => (
                        <div className={`w-full border-[#ede3e5] ${(category_key + 1) === investor_relation.investor_relation_categories.length ? '' : 'border-b-3' } ${category_key !== 0 ? 'mt-5' : '' } `} key={category_key}>
                          <div className="flex flex-col gap-3 px-5 pb-5">
                            <div className="flex flex-row justify-between gap-5 text-xl lg:text-2xl w-full cursor-pointer" onClick={() => toggleInvestorRelationAccordian(category_key)}>
                              <h2>{investor_relation_category.investor_relation_category_title}</h2>
                              <Image src={`${basePath}images/icons/down-arrow.svg`} alt="Down Arrow" width={20} height={20} className={`transition-all duration-300 ${openInvestorRelation === category_key ? "rotate-180" : ''}`} />
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 ${openInvestorRelation === category_key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                              {
                                investor_relation_category.investor_relation_reports && investor_relation_category.investor_relation_reports.length > 0 && (
                                  <ul className="flex flex-col gap-2 text-lg lg:text-xl font-corporate-light list-disc list-inside">
                                    {
                                      investor_relation_category.investor_relation_reports.map((investor_relation_report, investor_relation_report_key) => (
                                        <li className="w-fit group" key={investor_relation_report_key}>
                                          <span className={`relative`}>
                                            <Link href={investor_relation_report.investor_relation_report_file} target="_blank">{investor_relation_report.investor_relation_report_title}</Link>
                                            <span className={`absolute left-1/2 -translate-x-1/2 bottom-[-2px] h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full`}></span>
                                          </span>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                )
                              }
                            </div>
                          </div>
                        </div>
                      ))
                    }

                    {
                      investor_relation.investor_relation_categories && investor_relation.investor_relation_categories.length === 0 && (
                        <div className={`w-full `}>
                          <div className="flex flex-col gap-3 px-5 pb-5">
                            <div className="flex flex-row justify-between gap-5 text-2xl md:text-xl lg:text-2xl w-full cursor-pointer">
                              <h2>{investor_relation.investor_relation_tab_title}</h2>
                              <Image src={`${basePath}images/icons/down-arrow.svg`} alt="Down Arrow" width={20} height={20} className={`transition-all duration-300 rotate-180}`} />
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 max-h-[fit-content] opacity-100}`}>
                              { (investor_relation.investor_relation_tab_content) ? parse(investor_relation.investor_relation_tab_content) : ''}
                            </div>
                          </div>
                        </div>
                      )
                    }

                  </div>
                ))
                }
            </div>
          </div>
        </section>
      )
    }
    
    <Footer contactUsRef={contactUsRef} />
    </>
  );
}