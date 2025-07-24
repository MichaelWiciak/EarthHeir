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
import titleBackground from "../../public/titleBackground.jpg";

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
    <div>
      <header>
        <div>
          <h1 className="sr-only">Sustain;ed</h1>

          <Navbar />
        </div>
      </header>

      <main>
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url(${titleBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        <header id="home" className="scroll-mt-14 container-custom mx-auto">
          <TitlePage
            title={titlePageData.title}
            creators={titlePageData.creators}
            motto={titlePageData.motto}
            logos={titlePageData.logos}
          />
        </header>
        <div className="container-custom mx-auto">
          <section id="whoweare" className="scroll-mt-14">
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

          <section id="impact" className="scroll-mt-14">
            <TextSection
              title={impactGoalsText.title}
              paragraphs={impactGoalsText.paragraphs}
              tagline={impactGoalsText.tagline}
            />
          </section>

          <section id="whatwedo" className="scroll-mt-14">
            <ContentBlockGroupSection
              textSection={whatWeDoSection.textSection}
              items={whatWeDoSection.items}
            />
          </section>

          <section id="venues" className="scroll-mt-14">
            <ImageParagraphGroup
              title={venueSectionData.title}
              sections={venueData}
              taglineItems={venueSectionData.taglineItems}
            />
          </section>

          <CompositeShowcase {...clientsAndPartnersShowcase} />

          <InstagramFeed />

          <section id="stampRally" className="scroll-mt-14">
            <StampRally {...stampRallyData} />
          </section>

          <section id="location" className="scroll-mt-14">
            <MapWithDetailsSection
              coordinates={locationSection.coordinates}
              title={locationSection.title}
              bulletpoints={locationSection.bulletpoints}
            />
          </section>

          <section id="contact" className="scroll-mt-14">
            <ContactForm
              title={contactSection.title}
              tagline={contactSection.tagline}
              enquiryOptions={contactSection.enquiryOptions}
            />
            <Toaster position="top-center" />
          </section>
        </div>
      </main>

      <footer>
        <div className="container-custom mx-auto">
          <Footer logoSrc={footer.logoSrc} bullets={footer.bullets} />
        </div>
      </footer>
    </div>
  );
}
