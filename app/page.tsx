import { getMetaData, getBanner, getMasterSlider, getAboutIntro, getCompanyObjectives, getManagement, getInvestorRelations } from "@/lib/home";

import type { Metadata } from "next";
import HomeComponent from "./components/HomeComponent";

const [ meta, banner ] = await Promise.all([ getMetaData(), getBanner() ]);

export const metadata: Metadata = {
  metadataBase: "/century-suruchi",
  title: meta.meta_title,
  description: meta.meta_description,
  openGraph: {
      title: meta.meta_title,
      description: meta.meta_description,
      type: "website",
      url: process.env.canonical_tag,
      siteName: "Century Suruchi",
      images: [
        {
          url: banner.banner_image,
          width: 1200,
          height: 630,
          alt: meta.meta_title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.meta_title,
      description: meta.meta_description,
      images: [banner.banner_image],
    },
};

export default async function Home() {
  const [ slider, about, objectives, management, investors] = await Promise.all([ getMasterSlider(), getAboutIntro(), getCompanyObjectives(), getManagement(), getInvestorRelations() ]);

  return (
    <HomeComponent
      slider={slider}
      about={about}
      objectives={objectives}
      management={management}
      investors={investors} />
  )
}
