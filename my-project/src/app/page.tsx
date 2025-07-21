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
import InstagramFeed from "@/app/components/Instagram";
import StampRally from "@/app/components/StampRally";
import CompositeShowcase from "./components/Clients";

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

      <CompositeShowcase
        textSection={{
          title: "Clients & Partners",
          paragraphs: [
            "We're proud to collaborate with many amazing partners. Some of our recent clients include:",
          ],
          tagline: "",
        }}
        logos={[
          { src: "/cilisos_logo_retina.png", alt: "Logo 1" },
          { src: "/daridapur.jpg", alt: "Logo 2" },
          { src: "/fashionFidelity.jpg", alt: "Logo 3" },
          { src: "/kembara-logo-final.png", alt: "Logo 4" },
          { src: "/petronas.png", alt: "Logo 5" },
          { src: "/ThinkCity.png", alt: "Logo 6" },
        ]}
        gallery={{
          title: "",
          slides: [
            {
              imageUrl: "/Clients/dariDapur1.jpg",
              heading: "Dari Dapur X IOM",
              paragraph: "Context",
            },
            {
              imageUrl: "/Clients/cilisos.jpg",
              heading: "Cilisos X Think City",
              paragraph: "Context.",
            },
            {
              imageUrl: "/Clients/fashionFidelity.jpeg",
              heading: "Fashion Fidelity",
              paragraph: "Context.",
            },
            {
              imageUrl: "/Clients/kabyra.jpg",
              heading: "Kembara Stories X Food Trail",
              paragraph: "Context.",
            },
          ],
        }}
      />

      <InstagramFeed />
      <section id="stampRally" className="scroll-mt-10">
        <StampRally
          textSection={{
            title: "Downtown KL Stamp Rally",
            paragraphs: [
              "Explore downtown Kuala Lumpur through a fun, interactive stamp rally! Collect stamps as you visit vibrant local spots and discover hidden gems along the way.",
              "Join the rally, complete the journey, and receive a beautifully designed free postcard as a token of your adventure.",
            ],
            tagline: "Discover, stamp, and collect your way through KL!",
          }}
          imageWithTitle={{
            title: "Your Stamp Card",
            imageSrc: "/StampRally.jpeg",
            imageAlt: "Stamp Card",
            imageWidth: 300,
            imageHeight: 500,
            rotate: -5,
          }}
          logos={[
            { src: "/kreatifkl.jpg", alt: "" },
            { src: "/ThinkCity.png", alt: "" },
            { src: "/govMaybe.png", alt: "" },
            { src: "/puckscoffee.jpg", alt: "" },
            { src: "/urmu-logo.png", alt: "" },
          ]}
        />
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
