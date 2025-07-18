"use client";

import TitlePage from "@/app/components/TitlePage";
import InfoSection from "@/app/components/Text+Circles";
import MultiTextCircleSection from "@/app/components/MultiText+Circles";
import TextSection from "@/app/components/TextSection";
import ExpandableBulletListSection from "@/app/components/ExpandableBulletPointsSection";
import Navbar from "@/app/components/navbar";
import { Toaster } from "react-hot-toast";
import ContactForm from "@/app/components/ContactForm";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/navigation";
import ImageGallery from "./components/ImageGallery";
import Footer from "@/app/components/Footer";
import MapWithDetailsSection from "@/app/components/MapWithData";

import {
  whoweare,
  impactGoalsText,
  slides,
  titlePageData,
  aboutUsSection,
  sustainabilityPrinciples,
  locationSection,
  contactSection,
  footer,
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
      <Navbar />

      <TitlePage
        title={titlePageData.title}
        creators={titlePageData.creators}
        motto={titlePageData.motto}
        logos={titlePageData.logos}
      />

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
        <div className="p-6 md:p-12 space-y-8">
          <TextSection
            title={impactGoalsText.title}
            paragraphs={impactGoalsText.paragraphs}
            tagline={impactGoalsText.tagline}
          />
        </div>
      </section>

      <ExpandableBulletListSection {...sustainabilityPrinciples} />

      <section id="whatwedo" className="scroll-mt-10">
        <ImageGallery title="What We Do" slides={slides} />
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
      <Footer logoSrc={footer.logoSrc} bullets={footer.bullets} />
    </main>
  );
}
