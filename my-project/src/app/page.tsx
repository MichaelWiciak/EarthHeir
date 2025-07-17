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

export default function Home() {
  const MapWithDetailsSection = dynamic(
    () => import("./components/MapWithData"),
    {
      ssr: false,
      loading: () => <p>Loading map...</p>,
    }
  );

  const whoweare = {
    title: "WHO ARE WE?",
    paragraphs: [
      "The Sustain.ed Centre aims to Educate, Empower and Advocate for Sustainability and Social Impact in Malaysia for Systemic Change. ",
      "Stakeholders and partners will gain avenues and tools that facilitate community development, learning and inclusivity in doing good business, social entrepreneurship and promoting sustainability.",
      "Located in central KL, next to Central Market, Sustain.ed is jointly developed and championed by pioneers of sustainability,  Earth Heir and Sea Monkey Project, merging collective impact across Malaysia and the globe.",
    ],
    circles: [
      { text: "Urgency to address pressing environmental challenges" },
      { text: "Demand for sustainable & social impact practices education " },
    ],
  };

  const aboutUsText = [
    {
      title:
        "5 YEAR IMPACT:  140,000+ handmade upcycled products, 65,000+ hours employment and training to marginalised communities, 250+ upcycling machines sold globally.",
      paragraphs: [
        "Plastic pollution is everywhere, and going nowhere fast - except into our waterways, soil, food, air, and bodies. The Sea Monkey Project creates ocean plastic solutions and education for businesses, educational institutions and marginalised communities. SMP is a social enterprise which designs and builds mobile 3-in-1 plastic recycling machines (catering to the specific needs of the end user), and organizes interactive educational workshops focused on sustainability and plastic pollution. SMP was registered in 2020, and aims to grow and empower community project sites, and create positive social and environmental impact by collaborating with a wide range of stakeholders to reduce plastic pollution on Earth. ",
      ],
    },
    {
      title:
        "IMPACT: MYR 2.3M in income, training, mentoring and aid for artisans from 2013 to 2023.",
      paragraphs: [
        "EH is founded and owned by Malaysian women, focused on creating and preserving our collective cultural heritage whilst improving livelihoods, whilst bridging the craft, art and fashion worlds. EH's decade long experience has impacted and grown the social impact ecosystem in Malaysia. As a sustainability champion in Malaysia addressing SDG goals 1,8 & 12, Earth Heir focuses on education & training of micro entrepreneurs, creating customised gifts, conducting sustainability & artisan workshops & raising awareness globally on social entrepreneurship. All of Earth Heir's products are made with natural or recyclable materials, practising circular economy in their operations. ",
      ],
    },
  ];

  const aboutUscircles = [
    {
      text: "Reducing plastic waste & impacting communities with sustainability training",
    },
    {
      text: "1st B Corp social enterprise & only Fair Trade brand certified with WFTO, in Malaysia. Founded in 2013",
    },
  ];

  const impactGoalsText = {
    title: "OUR IMPACT GOALS",
    paragraphs: [
      "Growth in local entrepreneurs/artisans that prioritise quality, social & environmental impact and provide a marketplace for their products ",
      "SOCIAL PROCUREMENT - Larger employment creation through the ripple effect of engagement with other impact organisations, creating sustainable livelihoods for various communities supported ",
      "Awareness and Action creation among Corporates, Schools and Public communities on sustainability initiatives",
      "Making Kuala Lumpur a destination where people can get easy access to new and exciting activities that promote conscious living, sustainability, as well as Made in Malaysia products with positive impact ",
    ],
    tagline:
      "SUSTAIN.ED GOAL: 30,000 employment and training hours & impact the livelihoods of 3000 individuals by 2026",
  };

  const whatWeDoText = [
    {
      title: "A. EDUCATION HUB",
      paragraphs: [
        "Environmental & Sustainability Training",
        "Sustainable Entrepreneurship / Micro-Business Training",
        "Sustainability & ESG Education + Workshop tasters",
        "Upcycling, Cultural Heritage & Artist Workshops",
      ],
    },
    {
      title: "B. EARTHHEIR.COM SOCIAL IMPACT MARKETPLACE",
      paragraphs: [
        "The earthheir.com sustainability & social impact marketplace for MADE IN MALAYSIA impact brands and products",
      ],
    },
    {
      title: "C. MENTORING NEXT GENERATION LEADERS",
      paragraphs: [
        "Socio-entrepreneurship and sustainability mentorship programme for students",
      ],
    },
    {
      title: "D. KNOWLEDGE  TALK SERIES",
      paragraphs: ["Impact Leaders from Malaysia and around the world"],
    },
  ];

  return (
    <main>
      <Navbar />

      <TitlePage
        title="sustain;ed"
        creators={["The Sea Monkey Project", "Earth Heir"]}
        motto="Champtioning Sustainability & Social Impact for Systematic Change"
        logos={[
          { imageSrc: "/seamonkeylogo.png", alt: "Logo 1" },
          { imageSrc: "/earthheirlogo.png", alt: "Logo 2" },
        ]}
      />
      <InfoSection
        title={whoweare.title}
        paragraphs={whoweare.paragraphs}
        circles={whoweare.circles}
      />

      <MultiTextCircleSection
        sectionTitle="About Us"
        sections={aboutUsText}
        circles={aboutUscircles}
      />
      <div className="p-6 md:p-12 space-y-8">
        <TextSection
          title={impactGoalsText.title}
          paragraphs={impactGoalsText.paragraphs}
          tagline={impactGoalsText.tagline}
        />
      </div>
      <MultiTextCircleSection
        sectionTitle="SUSTAIN.ED : WHAT WE DO"
        sections={whatWeDoText}
      ></MultiTextCircleSection>
      <ExpandableBulletListSection
        title=""
        description="Click on a principle to learn more."
        items={[
          {
            bulletTitle:
              "A. SUSTAIN.ED SUSTAINABILITY & SOCIAL IMPACT EDUCATION HUB",
            content: {
              sectionTitle: "",
              sections: [
                {
                  title: "",
                  paragraphs: [
                    "Addressing an Urgent Global Challenge: climate change, resource depletion, and social inequality are among the most critical challenges of our time. ",
                    "Growing Demand for Sustainability Education: The global shift towards sustainability has created a significant demand for education and awareness.",
                  ],
                  tagline: "Growing the sustainability ECOSYSTEM in Malaysia",
                },
              ],
              circles: [
                {
                  text: "Sustainable Living & Plastic Waste Management Training",
                },
                {
                  text: "Sustainability & Business Training Programmes for Micro-business Entrepreneurs",
                },
                {
                  text: "Sustainability & ESG Education - Corporates & Educational Institutions",
                },
              ],
            },
          },
          {
            bulletTitle:
              "B. EARTHHEIR.COM -  SOCIAL IMPACT MARKETPLACE & PROCUREMENT",
            content: {
              sectionTitle: "'Developing a sustainability ecosystem'",
              sections: [
                {
                  title: "",
                  paragraphs: [
                    "EARTHHEIR.COM is a Social Impact Marketplace showcasing Social Entrepreneurship (SE), NGOs & Social IMPACT products MADE IN MALAYSIA.",
                    "EarthHeir.com will bring curated, high quality social impact products from across Malaysia under one roof - creating a powerful fusion of impact enterprises coming together and growing our collective impact in Malaysia. ",
                    "A central hub for SOCIAL PROCUREMENT to grow the ESG goals and SDG achievements for companies and organisations. ",
                  ],
                },
              ],
              circles: [
                {
                  text: "SOCIAL IMPACT PRODUCTS",
                },
                {
                  text: "MADE IN MALAYSIA",
                },
                {
                  text: "SOCIAL PROCUREMENT",
                },
              ],
            },
          },
          {
            bulletTitle: "C. SUSTAIN.ED MENTORING PROGRAMME",
            content: {
              sectionTitle: "Mentoring Programme Intensive",
              sections: [
                {
                  title: "",
                  paragraphs: [
                    "Each mentee will gain deep dive exposure into the world of social enterprises and sustainability. They will be mentored by the Earth Heir & Sea Monkey Project teams and experience the inner workings of social-entrepreneurship at Sustain.ed.",
                  ],
                },
              ],
              // No circles
            },
          },
          {
            bulletTitle: "D. SUSTAIN.ED KNOWLEDGE TALK SERIES",
            content: {
              sectionTitle: "",
              sections: [
                {
                  title: "",
                  paragraphs: [
                    "Impact leaders from Malaysia and around the world share their experience and knowledge on various topics surrounding Sustainability, ESG, Social Impact, Entrepreneurship, etc., in an intimate, open and approachable setting. ",
                  ],
                  tagline:
                    "Individual / Panel sessions with open conversations and networking opportunities for participants",
                },
              ],
              // No circles
            },
          },
        ]}
      />
      <MapWithDetailsSection
        coordinates={[3.145523, 101.695973]}
        title="Our Location"
        bulletpoints={[
          "Open 10AM - 6PM, Monday to Friday",
          "If driving, parking is available at Central Market...",
          "Accessible via public transport",
          "Kitchen Facilities available for events",
          "Toilet facilities available",
        ]}
      />

      <ContactForm
        title="Get in Touch"
        tagline="Alternatively, you can reach us at sustained@gmail.com"
        enquiryOptions={[
          "Partnership",
          "Renting the Venue",
          "Individual Enquiry",
          "Other",
        ]}
      />
      <Toaster position="top-center" />
    </main>
  );
}
