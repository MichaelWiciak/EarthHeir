"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/navigation";
import { AnimatePresence, motion } from "framer-motion";

import TitlePage from "@/app/components/TitlePage";
import InfoSection from "@/app/components/Text+Circles";
import TextSection from "@/app/components/TextSection";
import Navbar from "@/app/components/navbar";
import { Toaster } from "react-hot-toast";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import InstagramFeed from "@/app/components/Instagram";
import StampRally from "@/app/components/StampRally";
import CompositeShowcase from "./components/Clients";
import ImageParagraphGroup from "./components/ImageParagraphGroup";
import ContentBlockGroupSection from "./components/WhatWeDo";
import ErrorBoundary from "./components/ErrorBoundry";
import LoadingSpinner from "./components/LoadingSpinners";
import SplashLoader from "./components/SplashLoader";

import Image from "next/image";

import titleBackground from "../../public/backgroundImage.png";
import {
  whoweare,
  impactGoalsText,
  titlePageData,
  locationSection,
  contactSection,
  footer,
  venueData,
  whatWeDoSection,
  clientsAndPartnersShowcase,
  stampRallyData,
  venueSectionData,
  aboutUsSectionProjectSeaMonkey,
  aboutUsSectionProjectEarthHeir,
  locationAccordionItems,
} from "@/app/data/homePageData";

export default function Home() {
  const MapWithDetailsSection = dynamic(
    () => import("./components/MapWithData"),
    {
      ssr: false,
      loading: () => <LoadingSpinner />,
    }
  );

  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);

  useEffect(() => {
    const logos = [
      // "/LogosToAlternate/Logo_PACK-01.png",
      // "/LogosToAlternate/Logo_PACK-02.png", // idk whats special aboutthese logos but they mess up the logo selection
      "/LogosToAlternate/Logo_PACK-03.png",
      "/LogosToAlternate/Logo_PACK-04.png",
      "/LogosToAlternate/Logo_PACK-05.png",
      "/LogosToAlternate/Logo_PACK-06.png",
      "/LogosToAlternate/Logo_PACK-07.png",
      "/LogosToAlternate/Logo_PACK-08.png",
      "/LogosToAlternate/Logo_PACK-09.png",
    ];
    const randomIndex = Math.floor(Math.random() * logos.length);
    const logoSrc = logos[randomIndex];
    setSelectedLogo(logoSrc);
  }, []);

  if (!selectedLogo) {
    return <SplashLoader />;
  }

  return (
    <ErrorBoundary>
      <div>
        <header>
          <div>
            <h1 className="sr-only">Sustain;ed</h1>

            <Navbar logoSrc={selectedLogo} />
          </div>
        </header>

        <main>
          <header
            id="home"
            className="scroll-mt-8 container-custom mx-auto relative"
          >
            {/* <div
              className="absolute inset-0 w-screen h-full z-0 left-1/2 -translate-x-1/2"
              style={{
                backgroundImage: `url(${titleBackground.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                opacity: 0.8,
                pointerEvents: "none",
              }}
              aria-hidden="true"
            /> */}
            <div className="absolute inset-0 w-screen h-full z-0 left-1/2 -translate-x-1/2">
              <Image
                src={titleBackground.src}
                alt="Background"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: -1,
                  pointerEvents: "none",
                  // opacity: 0.8,
                }}
                width={1920}
                height={1080}
              />
            </div>
            <div className="relative z-10, py-50">
              <AnimatePresence>
                {selectedLogo && (
                  <motion.div
                    key="title-page"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  >
                    <TitlePage
                      title={titlePageData.title}
                      creators={titlePageData.creators}
                      motto={titlePageData.motto}
                      logos={titlePageData.logos}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </header>
          <div className="container-custom mx-auto">
            <section id="whoweare" className="scroll-mt-8 py-15">
              <div className="rounded-2xl shadow-md bg-[#896fff1a] p-6 md:p-10 backdrop-blur-sm">
                <InfoSection
                  title={whoweare.title}
                  paragraphs={whoweare.paragraphs}
                  circles={whoweare.circles}
                />
              </div>
            </section>

            <div className="py-15">
              <div className="rounded-2xl shadow-md bg-[#896fff1a] p-6 md:p-10 backdrop-blur-sm">
                <h2 className="text-center pb-4">About Us</h2>
                <div className="rounded-2xl shadow-md bg-[#0000ff1a] p-6 md:p-10 backdrop-blur-sm">
                  <div className="pb-16">
                    <InfoSection
                      title={aboutUsSectionProjectSeaMonkey.title}
                      paragraphs={aboutUsSectionProjectSeaMonkey.paragraphs}
                      circles={aboutUsSectionProjectSeaMonkey.circles}
                    />
                  </div>
                </div>
                <div className="rounded-2xl shadow-md bg-[#ff63001a] p-6 md:p-10 backdrop-blur-sm">
                  <InfoSection
                    title={aboutUsSectionProjectEarthHeir.title}
                    paragraphs={aboutUsSectionProjectEarthHeir.paragraphs}
                    circles={aboutUsSectionProjectEarthHeir.circles}
                  />
                </div>
              </div>
            </div>

            <section id="impact" className="scroll-mt-8 py-15">
              <TextSection
                title={impactGoalsText.title}
                paragraphs={impactGoalsText.paragraphs}
                tagline={impactGoalsText.tagline}
                size="h2"
                type="highlighted"
                imgSrc={"/longImage.jpg"}
              />
            </section>

            <section id="whatwedo" className="scroll-mt-8 py-15">
              <ContentBlockGroupSection
                textSection={whatWeDoSection.textSection}
                items={whatWeDoSection.items}
              />
            </section>

            <section id="venues" className="scroll-mt-8 py-15">
              <div className="rounded-2xl shadow-md bg-[#896fff1a] p-6 md:p-10 backdrop-blur-sm">
                <ImageParagraphGroup
                  title={venueSectionData.title}
                  sections={venueData}
                  taglineItems={venueSectionData.taglineItems}
                />
              </div>
            </section>

            <div className="py-15">
              <CompositeShowcase {...clientsAndPartnersShowcase} />
            </div>

            <div className="py-15">
              <div className="rounded-2xl shadow-md bg-[#00e5001a] p-6 md:p-10 backdrop-blur-sm">
                <InstagramFeed />
              </div>
            </div>

            <section id="stampRally" className="scroll-mt-8 py-15">
              <div className="rounded-2xl shadow-md bg-[#0000ff1a] p-6 md:p-10 backdrop-blur-sm">
                <StampRally {...stampRallyData} />
              </div>
            </section>

            <section id="location" className="scroll-mt-8 py-15">
              <div className="rounded-2xl shadow-md bg-[#ff42821a] p-6 md:p-10 backdrop-blur-sm">
                <MapWithDetailsSection
                  coordinates={locationSection.coordinates}
                  title={locationSection.title}
                  bulletpoints={locationSection.bulletpoints}
                />
              </div>
            </section>

            <section id="contact" className="scroll-mt-8 py-15">
              <ContactForm
                title={contactSection.title}
                tagline={contactSection.tagline}
                enquiryOptions={contactSection.enquiryOptions}
                contactEmail={contactSection.contactEmail}
              />
              <Toaster position="top-center" />
            </section>
          </div>
        </main>

        <footer>
          <div>
            <Footer
              logoSrc={selectedLogo}
              copyright={footer.copyright}
              deployedOn={footer.deployedOn}
              deployedOnLink={footer.deployedOnLink}
              createdBy={footer.createdBy}
              createdByLink1={footer.createdByLink1}
              createdByLink2={footer.createdByLink2}
            />
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}
