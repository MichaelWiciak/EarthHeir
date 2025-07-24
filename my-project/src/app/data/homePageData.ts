import { image, s } from "framer-motion/client";

export const footer = {
  logoSrc: "/sustainedLogo.png",
  bullets: [
    "Copyright © 2025 Sustain.ed",
    "Deployed on Vercel",
    "© 2025 Michael Wiciak & TimetableX in partnership with Sustain;ed",
  ],
};

export const whoweare = {
  title: "Who Are We?",
  paragraphs: [
    "The Sustain.ed Centre aims to Educate, Empower and Advocate for Sustainability and Social Impact in Malaysia for Systemic Change. ",
    "Stakeholders and partners will gain avenues and tools that facilitate community development, learning and inclusivity in doing good business, social entrepreneurship and promoting sustainability.",
    "Located in central KL, next to Central Market, Sustain.ed is jointly developed and championed by pioneers of sustainability,  Earth Heir and Sea Monkey Project, merging collective impact across Malaysia and the globe.",
  ],
  circles: [
    { text: "Urgency to address pressing environmental challenges" },
    { text: "Demand for sustainable & social impact practices education" },
  ],
};

// data/homepageContent.ts

export const aboutUsSection = {
  sectionTitle: "About Us",
  sections: [
    {
      title:
        "5 Year Impact: 140,000+ handmade upcycled products, 65,000+ hours employment and training to marginalised communities, 250+ upcycling machines sold globally.",
      paragraphs: [
        "Plastic pollution is everywhere, and going nowhere fast - except into our waterways, soil, food, air, and bodies. The Sea Monkey Project creates ocean plastic solutions and education for businesses, educational institutions and marginalised communities. SMP is a social enterprise which designs and builds mobile 3-in-1 plastic recycling machines (catering to the specific needs of the end user), and organizes interactive educational workshops focused on sustainability and plastic pollution. SMP was registered in 2020, and aims to grow and empower community project sites, and create positive social and environmental impact by collaborating with a wide range of stakeholders to reduce plastic pollution on Earth.",
      ],
    },
    {
      title:
        "Impact: MYR 2.3M in income, training, mentoring and aid for artisans from 2013 to 2023.",
      paragraphs: [
        "Earth Heir is founded and owned by Malaysian women, focused on creating and preserving our collective cultural heritage whilst improving livelihoods, whilst bridging the craft, art and fashion worlds. EH's decade long experience has impacted and grown the social impact ecosystem in Malaysia. As a sustainability champion in Malaysia addressing SDG goals 1,8 & 12, Earth Heir focuses on education & training of micro entrepreneurs, creating customised gifts, conducting sustainability & artisan workshops & raising awareness globally on social entrepreneurship. All of Earth Heir's products are made with natural or recyclable materials, practising circular economy in their operations.",
      ],
    },
  ],
  circles: [
    {
      text: "Reducing plastic waste & impacting communities with sustainability training",
    },
    {
      text: "1st B Corp social enterprise & only Fair Trade brand certified with WFTO, in Malaysia. Founded in 2013",
    },
  ],
};

export const aboutUsSectionProjectSeaMonkey = {
  title:
    "5 Year Impact: 140,000+ handmade upcycled products, 65,000+ hours employment and training to marginalised communities, 250+ upcycling machines sold globally.",
  paragraphs: [
    "Plastic pollution is everywhere, and going nowhere fast - except into our waterways, soil, food, air, and bodies. The Sea Monkey Project creates ocean plastic solutions and education for businesses, educational institutions and marginalised communities. SMP is a social enterprise which designs and builds mobile 3-in-1 plastic recycling machines (catering to the specific needs of the end user), and organizes interactive educational workshops focused on sustainability and plastic pollution. SMP was registered in 2020, and aims to grow and empower community project sites, and create positive social and environmental impact by collaborating with a wide range of stakeholders to reduce plastic pollution on Earth.",
  ],
  circles: [
    {
      text: "Reducing plastic waste & impacting communities with sustainability training",
    },
    {
      imageSrc: "/seamonkeylogo.png",
      alt: "Sea Monkey Project Logo",
      url: "https://seamonkeyprojects.com/",
    },
  ],
};

export const aboutUsSectionProjectEarthHeir = {
  title:
    "Impact: MYR 2.3M in income, training, mentoring and aid for artisans from 2013 to 2023.",
  paragraphs: [
    "Earth Heir is founded and owned by Malaysian women, focused on creating and preserving our collective cultural heritage whilst improving livelihoods, whilst bridging the craft, art and fashion worlds. EH's decade long experience has impacted and grown the social impact ecosystem in Malaysia. As a sustainability champion in Malaysia addressing SDG goals 1,8 & 12, Earth Heir focuses on education & training of micro entrepreneurs, creating customised gifts, conducting sustainability & artisan workshops & raising awareness globally on social entrepreneurship. All of Earth Heir's products are made with natural or recyclable materials, practising circular economy in their operations.",
  ],
  circles: [
    {
      text: "1st B Corp social enterprise & only Fair Trade brand certified with WFTO, in Malaysia. Founded in 2013",
    },
    {
      imageSrc: "/earthheirlogo.png",
      alt: "Earth Heir Logo",
      url: "https://earthheir.com/",
    },
  ],
};

export const impactGoalsText = {
  title: "Our Impact Goals",
  paragraphs: [
    "Growth in local entrepreneurs/artisans that prioritise quality, social & environmental impact and provide a marketplace for their products ",
    "Social Procurement - Larger employment creation through the ripple effect of engagement with other impact organisations, creating sustainable livelihoods for various communities supported ",
    "Awareness and Action creation among Corporates, Schools and Public communities on sustainability initiatives",
    "Making Kuala Lumpur a destination where people can get easy access to new and exciting activities that promote conscious living, sustainability, as well as Made in Malaysia products with positive impact ",
  ],
  tagline:
    "Sustain;ed Goal: 30,000 employment and training hours & impact the livelihoods of 3000 individuals by 2026",
};

// data/homepageContent.ts

export const titlePageData = {
  title: "sustain;ed",
  creators: [
    {
      name: "The Sea Monkey Project",
      url: "https://seamonkeyprojects.com/",
    },
    {
      name: "Earth Heir",
      url: "https://earthheir.com/",
    },
  ],
  motto: "Championing Sustainability & Social Impact for Systematic Change",
  logos: [
    {
      imageSrc: "/seamonkeylogo.png",
      alt: "Logo 1",
      url: "https://seamonkeyprojects.com/",
      circleDiameter: 200,
    },
    {
      imageSrc: "/earthheirlogo.png",
      alt: "Logo 2",
      url: "https://earthheir.com/",
      circleDiameter: 200,
    },
  ],
};

export const locationSection = {
  coordinates: [3.1454487, 101.6958594] as [number, number],
  title: "Our Location",
  bulletpoints: [
    "We're located in a prime spot along Kasturi Walk (look out for the big WAU), on the First Floor of Central Market (Pasar Seni), Kuala Lumpur.",
    "Find us at 30, First Floor, Jalan Hang Kasturi, Kuala Lumpur City Centre, 50050 Kuala Lumpur, Malaysia.",
    "Look for the brightly lit entrance next to Nala Kasturi / Mixue. We're one floor above Nala Kasturi, reachable via lift or stairs.",
    "Watch our directions video",
    "Open Monday to Saturday, 10am to 6pm.",
    "Easily accessible via public transport – Pasar Seni LRT/MRT/Bus stops are right across Kasturi Walk. KL KTM station is also nearby (8 min walk).",
    "If driving, parking at Central Market is available (note: it may be closed before 10am).",
    "Best alternative parking: POS Malaysia / Dayabumi Complex (before Central Market – exit left early).",
    "Other nearby parking: Jalan HS Lee (6 min walk), Jalan Sultan opposite Mee Tarik (10 min walk), KTM Kuala Lumpur (10 min walk).",
    "Kitchen facilities available for events.",
    "Toilet facilities available.",
    "Call us: +603 2022 3502 / +6013 211 7994",
  ],
};

export const contactSection = {
  title: "Get In Touch",
  tagline: "Alternatively, you can reach us at sustainedkl@gmail.com",
  enquiryOptions: [
    "Partnership",
    "Renting the Venue",
    "Individual Enquiry",
    "Other",
  ],
};

export const venueData = [
  {
    sectionTitle: "Education Hub",
    imageSrc: "/Venues/bigroom.jpg",
    imageAlt: "First image",
    paragraphs: [
      "A bright and open space, ideal for workshops, exhibitions and mixers.",
      "3 x Tables",
      "40 x Chairs",
      "*80-100 pax with chair set up only (theatre seating)",
      "Visual Projection & Audio equipment available (clip mic & speakers)",
    ],
    imageOn: "left",
  },
  {
    sectionTitle: "Screening Room",
    imageSrc: "/Venues/cinemaroom.jpg",
    imageAlt: "Second image",
    paragraphs: [
      "Perfect for those who need a private area for training sessions, movie screenings, etc.",
      "2 x Tables + 30 x Chairs",
      "*Up to 50 pax with chair set up only (theatre seating)",
      "Visual Projection & Audio equipment available (clip mic & speakers)",
    ],
    imageOn: "right",
  },
  {
    sectionTitle: "Meeting Room",
    imageSrc: "/Venues/conference.jpg",
    imageAlt: "Third image",
    paragraphs: [
      "An out-of-the-box discussion room where the creative and big ideas get formed",
      "1 x Table + 10-15 x Chairs",
      'Visual Projection available (SHARP40" TV)',
    ],
    imageOn: "left",
  },
] as const;

export const whatWeDoSection = {
  textSection: {
    title: "What We Do",
    paragraphs: [
      "Our mission is to grow a thriving sustainability ecosystem in Malaysia. We work at the intersection of education, enterprise, and impact to build a better future.",
      "Explore our work through the hubs below — each designed to deliver long-term value through education, economic empowerment, and knowledge sharing.",
    ],
    tagline: "Click on a principle to learn more.",
  },
  items: [
    {
      gallery: {
        slides: [
          {
            imageUrl: "/GalleriesPhotos/KTRN.jpg",
            heading: "A. Education Hub",
            paragraph: "Environmental & Sustainability Training",
          },
          {
            imageUrl: "/GalleriesPhotos/Leaders.jpg",
            heading: "A. Education Hub",
            paragraph: "Sustainable Entrepreneurship / Micro-Business Training",
          },
          {
            imageUrl: "/GalleriesPhotos/trainingProject.jpg",
            heading: "A. Education Hub",
            paragraph: "Sustainability & ESG Education + Workshop tasters",
          },
          {
            imageUrl: "/GalleriesPhotos/ArtisticTraining.jpg",
            heading: "A. Education Hub",
            paragraph: "Upcycling, Cultural Heritage & Artist Workshops",
          },
        ],
      },
      expandableItem: {
        bulletTitle:
          "A. Sustain.ED Sustainability & Social Impact Education Hub",
        content: {
          sectionTitle: "",
          sections: [
            {
              title: "",
              paragraphs: [
                "Addressing an Urgent Global Challenge: climate change, resource depletion, and social inequality are among the most critical challenges of our time.",
                "Growing Demand for Sustainability Education: The global shift towards sustainability has created a significant demand for education and awareness.",
              ],
              tagline: "Growing the sustainability ecosystem in Malaysia",
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
    },
    {
      gallery: {
        slides: [
          {
            imageUrl: "/GalleriesPhotos/earthheirshop.jpg",
            heading: "B. Earthheir.com Social Impact Marketplace",
            paragraph:
              "The earthheir.com sustainability & social impact marketplace for MADE IN MALAYSIA impact brands and products",
          },
          {
            imageUrl: "/GalleriesPhotos/earthheirshop.jpg",
            heading: "B. Earthheir.com Social Impact Marketplace",
            paragraph:
              "The earthheir.com sustainability & social impact marketplace for MADE IN MALAYSIA impact brands and products",
          },
        ],
      },
      expandableItem: {
        bulletTitle:
          "B. Earthheir.com - Social Impact Marketplace & Procurement",
        content: {
          sectionTitle: "‘Developing a sustainability ecosystem’",
          sections: [
            {
              title: "",
              paragraphs: [
                "Earthheir.com is a Social Impact Marketplace showcasing Social Entrepreneurship (SE), NGOs & Social Impact products MADE IN MALAYSIA.",
                "EarthHeir.com will bring curated, high quality social impact products from across Malaysia under one roof - creating a powerful fusion of impact enterprises coming together and growing our collective impact in Malaysia.",
                "A central hub for social procurement to grow the ESG goals and SDG achievements for companies and organisations.",
              ],
            },
          ],
          circles: [
            {
              text: "Social Impact Products",
            },
            {
              text: "Made In Malaysia",
            },
            {
              text: "Social Procurement",
            },
          ],
        },
      },
    },
    {
      gallery: {
        slides: [
          {
            imageUrl: "/GalleriesPhotos/csection.jpg",
            heading: "C. Knowledge Talk Series",
            paragraph: "Impact Leaders from Malaysia and around the world.",
          },
          {
            imageUrl: "/GalleriesPhotos/csection.jpg",
            heading: "C. Knowledge Talk Series",
            paragraph: "Impact Leaders from Malaysia and around the world.",
          },
        ],
      },
      expandableItem: {
        bulletTitle: "C. Sustain.ED Knowledge Talk Series",
        content: {
          sectionTitle: "",
          sections: [
            {
              title: "",
              paragraphs: [
                "Impact leaders from Malaysia and around the world share their experience and knowledge on various topics surrounding Sustainability, ESG, Social Impact, Entrepreneurship, etc., in an intimate, open and approachable setting.",
              ],
              tagline:
                "Individual / Panel sessions with open conversations and networking opportunities for participants",
            },
          ],
        },
      },
    },
  ],
};

export const clientsAndPartnersShowcase = {
  textSection: {
    title: "Clients & Partners",
    paragraphs: [
      "We're proud to collaborate with many amazing partners. Some of our recent clients include:",
    ],
    tagline: "Building a sustainable future together!",
  },
  logos: [
    { imageSrc: "/cilisos_logo_retina.png", alt: "Logo 1" },
    { imageSrc: "/daridapur.jpg", alt: "Logo 2" },
    { imageSrc: "/fashionFidelity.jpg", alt: "Logo 3" },
    { imageSrc: "/kembara-logo-final.png", alt: "Logo 4" },
    { imageSrc: "/petronas.png", alt: "Logo 5" },
    { imageSrc: "/ThinkCity.png", alt: "Logo 6" },
  ],
  gallery: {
    title: "", // Optional or blank title
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
  },
};

export const stampRallyData = {
  textSection: {
    title: "Downtown KL Stamp Rally",
    paragraphs: [
      "Explore downtown Kuala Lumpur through a fun, interactive stamp rally! Collect stamps as you visit vibrant local spots and discover hidden gems along the way.",
      "Join the rally, complete the journey, and receive a beautifully designed free postcard as a token of your adventure.",
    ],
    tagline: "Discover, stamp, and collect your way through KL!",
  },
  imageWithTitle: {
    title: "Your Stamp Card",
    imageSrc: "/StampRally.jpeg",
    imageAlt: "Stamp Card",
    imageWidth: 300,
    imageHeight: 500,
    rotate: -5,
  },
  logos: [
    { imageSrc: "/kreatifkl.jpg", alt: "" },
    { imageSrc: "/ThinkCity.png", alt: "" },
    { imageSrc: "/govMaybe.png", alt: "" },
    { imageSrc: "/puckscoffee.jpg", alt: "" },
    { imageSrc: "/urmu-logo.png", alt: "" },
  ],
};

export const venueSectionData = {
  title: "Our Venue & Facilities",
  taglineItems: ["Space Rental Rate Card is available upon request"],
};
