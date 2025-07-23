"use client";

import TitlePage from "@/app/components/TitlePage";
import InfoSection from "@/app/components/Text+Circles";
import MultiTextCircleSection from "@/app/components/MultiText+Circles";
import TextSection from "@/app/components/TextSection";
import Navbar from "@/app/components/navbar";
import { Toaster } from "react-hot-toast";
import ContactForm from "@/app/components/ContactForm";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/navigation";
import Footer from "@/app/components/Footer";
import InstagramFeed from "@/app/components/Instagram";
import StampRally from "@/app/components/StampRally";
import CompositeShowcase from "./components/Clients";
import ImageParagraphGroup from "./components/ImageParagraphGroup";
import ContentBlockGroupSection from "./components/WhatWeDo";

import {
  whoweare,
  impactGoalsText,
  titlePageData,
  aboutUsSection,
  locationSection,
  contactSection,
  footer,
  venueData,
  whatWeDoSection,
  clientsAndPartnersShowcase,
  stampRallyData,
  venueSectionData,
} from "@/app/data/homePageData";

export default function Home() {
  const MapWithDetailsSection = dynamic(
    () => import("./components/MapWithData"),
    {
      ssr: false,
      loading: () => <p>Loading map...</p>,
    }
  );

  return (
    <main>
      <div className="container-custom mx-auto">
        <Navbar />
        <section id="home" className="scroll-mt-10">
          <TitlePage
            title={titlePageData.title}
            creators={titlePageData.creators}
            motto={titlePageData.motto}
            logos={titlePageData.logos}
          />
        </section>

        <section id="whoweare" className="scroll-mt-10">
          <InfoSection
            title={whoweare.title}
            paragraphs={whoweare.paragraphs}
            circles={whoweare.circles}
          />
        </section>
        <MultiTextCircleSection
          sectionTitle={aboutUsSection.sectionTitle}
          sections={aboutUsSection.sections}
          circles={aboutUsSection.circles}
        />
        <section id="impact" className="scroll-mt-10">
          <div className="space-y-8 text-center">
            <TextSection
              title={impactGoalsText.title}
              paragraphs={impactGoalsText.paragraphs}
              tagline={impactGoalsText.tagline}
            />
          </div>
        </section>
        <section id="whatwedo" className="scroll-mt-10">
          <div className="">
            <ContentBlockGroupSection
              textSection={whatWeDoSection.textSection}
              items={whatWeDoSection.items}
            />
          </div>
        </section>
        <section id="venues" className="scroll-mt-10">
          <div className="">
            <ImageParagraphGroup
              title={venueSectionData.title}
              sections={venueData}
              taglineItems={venueSectionData.taglineItems}
            />
          </div>
        </section>

        <CompositeShowcase {...clientsAndPartnersShowcase} />

        <InstagramFeed />

        <section id="stampRally" className="scroll-mt-10">
          <div className="space-y-8">
            <StampRally {...stampRallyData} />
          </div>
        </section>

        <section id="location" className="scroll-mt-10">
          <MapWithDetailsSection
            coordinates={locationSection.coordinates}
            title={locationSection.title}
            bulletpoints={locationSection.bulletpoints}
          />
        </section>

        <section id="contact" className="scroll-mt-10">
          <ContactForm
            title={contactSection.title}
            tagline={contactSection.tagline}
            enquiryOptions={contactSection.enquiryOptions}
          />
          <Toaster position="top-center" />
        </section>
      </div>
      <Footer logoSrc={footer.logoSrc} bullets={footer.bullets} />
    </main>
  );
}
