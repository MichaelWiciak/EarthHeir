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
import HeroBottomDivider from "./components/hero-bottom-divider";
import EarthHeirLogo from "../../public/Earth Heir Logo 1.svg";
import ProjectSeaMonkeyLogo from "../../public/SMP Logo Vector Color 1.svg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/accordion-card";

import Image from "next/image";

import titleBackground from "../../public/realBackGround.png";
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

type AccordionSection = {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  images: string[];
};

const accordionData: AccordionSection[] = [
  {
    id: "01",
    title: "01",
    subtitle: "KNOWLEDGE HUB",
    content: `We are addressing some of the most urgent global challenges of our time — including climate change, resource depletion, and social inequality — by creating local solutions with real impact. As the world shifts towards more sustainable ways of living and working, the demand for sustainability education and awareness continues to grow. Sustain;ed KL responds to this need by actively growing Malaysia’s sustainability ecosystem through collaboration, innovation, and community engagement.`,
    images: ["realBackGround.png", "realBackGround.png", "realBackGround.png"],
  },
  {
    id: "02",
    title: "02",
    subtitle: "EARTHHEIR.COM SOCIAL IMPACT MARKETPLACE",
    content: `A curated sustainability and social impact marketplace for Made in Malaysia brands and products. At earthheir.com, we champion local artisans, ethical producers, and impact-driven businesses creating positive change for people and the planet. Every purchase supports fair trade, responsible production, and a more conscious way of living.`,
    images: ["realBackGround.png", "realBackGround.png", "realBackGround.png"],
  },
  {
    id: "03",
    title: "03",
    subtitle: "MENTORING NEXT GENERATION LEADERS",
    content: `A socio-entrepreneurship and sustainability mentorship programme designed to equip students with the mindset, skills, and guidance to become future changemakers. Through hands-on learning and real-world exposure, we empower young leaders to drive positive impact in their communities and beyond. `,
    images: ["realBackGround.png", "realBackGround.png", "realBackGround.png"],
  },
  {
    id: "04",
    title: "04",
    subtitle: "KNOWLEDGE  TALK SERIES",
    content: `A dynamic platform featuring impact leaders, students, and changemakers from Malaysia and around the world. These sessions spark dialogue, share real-world insights, and inspire action across sustainability, social enterprise, and innovation.`,
    images: ["realBackGround.png", "realBackGround.png", "realBackGround.png"],
  },
];

export default function Home() {
  const MapWithDetailsSection = dynamic(
    () => import("./components/MapWithData"),
    {
      ssr: false,
      loading: () => <LoadingSpinner />,
    }
  );

  const ImpactDataThings = [
    {
      title: "Showcasing Local Entrepreneurs & Artisans",
      logo: (
        // <Image
        //   src={ProjectSeaMonkeyLogo}
        //   alt="The Sea Monkey Project Logo"
        // ></Image>
        <div className="">{`🌼`}</div>
      ),
      text: "Grow a vibrant ecosystem of heritage & sustainability artisans who prioritise quality, and social impact — while providing a marketplace for their products.",
    },
    {
      title: "Drive Social Procurement",
      logo: <div className="">{`🌼`}</div>,
      text: "Enable sustainable livelihoods through collaborative efforts with impact-driven organisations, creating employment opportunities that ripple across communities.",
    },
    {
      title: "Build Awareness & Inspire Action",
      logo: <div className="">{`🌼`}</div>,
      text: "Engage corporates, schools, and the public through accessible ESG and sustainability focused experiences that turn awareness into action.",
    },
    {
      title: "Sustainability Hub for Tourists in KL",
      logo: <div className="">{`🌼`}</div>,
      text: "Position Kuala Lumpur as a destination for tourists to explore exciting, conscious activities and proudly Made in Malaysia products that make a difference.",
    },
    {
      title: "Creating Systematic Change",
      logo: <div className="">{`🌼`}</div>,
      text: "Measurable Impact; by 2026, Sustain;ed KL aims to create 30,000 employment and training hours, positively impacting the livelihoods of 3,000 individuals.",
    },
  ];

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
          <header id="home" className="relative">
            <div className="absolute -z-10 inset-0">
              <Image
                className="h-full w-full object-cover brightness-50"
                src={titleBackground.src}
                alt="Background"
                width={1170}
                height={781}
                unoptimized
              />
            </div>
            <div className="container-custom z-10">
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
          <div className="w-full h-32 -translate-y-1/2">
            <HeroBottomDivider className="w-full" preserveAspectRatio="none" />
          </div>
          <div className="container-custom mx-auto">
            <h2 className="text-3xl font-bold uppercase mb-5 text-center">
              About Us
            </h2>
            <p className="my-3">
              Sustain;ed KL is a{" "}
              <span
                className="text-primary font-playful"
                style={{ color: "oklch(0.6088 0.2007 351.16)" }}
              >
                creative community space
              </span>{" "}
              reimagining Kuala Lumpur’s heritage through the lens of
              sustainability. Rooted in the rich cultural tapestry of the city,
              we blend traditional values with modern circular practices to
              inspire conscious living, inclusive collaboration, and meaningful
              dialogue.
            </p>
            <p className="my-3">
              We host workshops, exhibitions, and events that{" "}
              <span
                className="text-primary font-playful"
                style={{ color: "oklch(0.6088 0.2007 351.16)" }}
              >
                empower
              </span>{" "}
              individuals and communities to explore sustainable alternatives—
              through design, storytelling, and action. Whether you’re a curious
              learner, a creative changemaker, or an organization seeking
              impact, Sustain;ed KL is a space to learn, create, and connect.
            </p>
            <section id="whoweare" className="scroll-mt-8 py-15">
              <h2 className="text-3xl font-bold uppercase mb-5 text-center">
                Who are we?
              </h2>
              <p className="my-3">
                Sustain;ed KL is a collaboration between{" "}
                <span className="text-primary font-playful">
                  The Sea Monkey Project
                </span>{" "}
                and{" "}
                <span className="text-primary font-playful">Earth Heir</span> ,
                two purpose-driven organisations with a shared goal: to bridge
                environmental sustainability with social impact. Together, we’ve
                created a space where community, education, and enterprise
                converge — offering hands-on learning and conscious commerce
                under one roof.
              </p>
              <div className="grid lg:grid-cols-2 gap-16 mt-8">
                <div className="border-[#9B4994] border-8 rounded-[4rem] pb-8 shadow-[4px_8px_0px_0px_#D9DF50,-4px_8px_0px_0px_#D9DF50] flex flex-col items-center">
                  <div className="px-16 py-8 flex justify-center">
                    <Image
                      src={ProjectSeaMonkeyLogo}
                      unoptimized
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="p-4">
                    The Sea Monkey Project tackles the global plastic pollution
                    crisis by combining education, engineering, and community
                    empowerment. The Sea Monkey Project designs and builds
                    mobile 3-in-1 plastic recycling machines tailored to local
                    needs, while running interactive sustainability workshops
                    for schools, businesses, and marginalised communities. Since
                    its founding in 2020, The Sea Monkey Project has enabled the
                    creation of over 140,000 handmade upcycled products,
                    provided 65,000+ hours of employment and training, and
                    distributed more than 250 recycling machines worldwide — all
                    aimed at reducing plastic waste and building community
                    resilience.
                  </div>
                </div>
                <div
                  className="border-[#9B4994] border-8 rounded-[4rem] pb-8 shadow-[4px_8px_0px_0px_#D9DF50,-4px_8px_0px_0px_#D9DF50]
"
                >
                  <div className="px-16 py-8">
                    <Image
                      src={EarthHeirLogo}
                      unoptimized
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="p-4">
                    Earth Heir is a women-led social enterprise dedicated to
                    empowering artisan communities and preserving traditional
                    craftsmanship through sustainable design. With a decade of
                    experience, Earth Heir bridges the craft, art, and fashion
                    worlds while focusing on education, training, and
                    sustainable production. A certified B Corp and Fair Trade
                    brand (WFTO), Earth Heir has delivered MYR 2.8 million in
                    income, mentorship, and aid to artisans across Malaysia
                    since 2013 — all while championing circular economy
                    practices and the UN Sustainable Development Goals (SDGs 1,
                    8 & 12).
                  </div>
                </div>
              </div>
            </section>

            <section id="impact" className="scroll-mt-8 py-15">
              <h2 className="text-3xl font-bold uppercase mb-5 text-center">
                Impact Goals
              </h2>
              <p className="my-3">
                At Sustain;ed KL, we aim to create deep,{" "}
                <span className="text-primary font-playful">
                  long-lasting impact{" "}
                </span>
                through meaningful collaboration, conscious business practices,
                and inclusive community building.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-8">
                {ImpactDataThings.map((item, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-[28rem] max-w-full border-[#D63F91] border-6 shadow-[0px_4px_0px_0px_#70C1CA] rounded-3xl p-6 flex-1"
                  >
                    <div className="flex gap-2 items-center">
                      <div style={{ fontSize: "3rem" }}>{item.logo}</div>
                      <h3 className="font-light">{item.title}</h3>
                    </div>
                    <hr className="border-1 border-gray-300 my-2 font-light" />
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="whatwedo" className="scroll-mt-8 py-15">
              <div className="container">
                <h2 className="text-3xl font-bold uppercase mb-5 text-center">
                  What we do
                </h2>
                <p className="my-3">
                  Our mission is to grow a{" "}
                  <span className="text-primary font-playful">
                    thriving sustainability & social impact ecosystem
                  </span>{" "}
                  in Malaysia. We work at the intersection of education,
                  enterprise, and impact to build a better future.{" "}
                </p>
                <div className="mt-8">
                  <Accordion type="single" collapsible defaultValue="01">
                    {accordionData.map(
                      ({ id, title, subtitle, content, images }) => (
                        <AccordionItem key={id} value={id}>
                          <AccordionTrigger>
                            <div className="flex items-center gap-4">
                              <div className="font-medium text-4xl">
                                {title}
                              </div>
                              <div className="text-2xl font-normal uppercase">
                                {subtitle}
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p>{content}</p>
                            <div className="grid grid-cols-3 gap-16 px-1 mt-6">
                              {images.map((url, index) => (
                                <div
                                  key={index}
                                  className="aspect-[4/5] rounded-full overflow-hidden ring-3 ring-[#D64290]"
                                >
                                  <Image
                                    className="h-full w-full object-cover object-center"
                                    unoptimized
                                    src={url}
                                    alt={`Image ${index + 1}`}
                                    height={720}
                                    width={1280}
                                  />
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      )
                    )}
                  </Accordion>
                </div>
              </div>
            </section>

            <section id="venues" className="scroll-mt-8 py-15">
              {/* <div className="rounded-2xl shadow-md bg-[#896fff1a] p-6 md:p-10 backdrop-blur-sm">
                <ImageParagraphGroup
                  title={venueSectionData.title}
                  sections={venueData}
                  taglineItems={venueSectionData.taglineItems}
                />
              </div> */}
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
