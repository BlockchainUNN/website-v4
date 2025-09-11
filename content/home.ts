import { FeedbackData, EventData } from "@/types/common.types";

export const homeContent = {
  hero: {
    title: "BlockchainUNN",
    subtitle: "The Leading Blockchain Community at the University of Nigeria",
    description:
      "Empowering students through blockchain education, innovation, and real-world applications.",
    stats: {
      members: "2000+",
      events: "50+",
      partners: "20+",
      communities: "4",
    },
    communities: [
      { name: "Designers", icon: "FaPenNib" },
      { name: "Developers", icon: "FaCode" },
      { name: "Writers", icon: "FaPencilAlt" },
      { name: "AirdropEdu", icon: "FaGift" },
    ],
  },

  skills: {
    title: "What We Teach",
    subtitle: "Comprehensive Blockchain Education",
    skills: [
      "Blockchain Fundamentals",
      "Smart Contract Development",
      "DeFi Protocols",
      "NFT Creation & Trading",
      "Cryptocurrency Trading",
      "Web3 Development",
      "Blockchain Security",
      "Tokenomics",
    ],
  },

  feedback: {
    title: "Community Feedbacks",
    testimonials: [
      {
        name: "Chinecherem",
        username: "@china_mere",
        message:
          "Thank you BlockchainUNN for the opportunity to learn from your community and I'm so excited, I landed my first job in the web3 space.",
        image: "/images/feedback/feedback1.png",
      },
      {
        name: "Chinaemerem",
        username: "@china_mere",
        message:
          "Thank you BlockchainUNN for the opportunity to learn from your community and I'm so excited, I landed my first job in the web3 space.",
        image: "/images/feedback/feedback2.png",
      },
      {
        name: "Chinenyenwa",
        username: "@china_mere",
        message:
          "Thank you BlockchainUNN for the opportunity to learn from your community and I'm so excited, I landed my first job in the web3 space.",
        image: "/images/feedback/feedback3.png",
      },
    ] as FeedbackData[],
  },

  upcomingEvents: {
    title: "Upcoming Events",
    eventDate: "2024-11-01T10:00:00",
    events: [
      {
        title: "Blockathon 2024",
        date: "November 1-3, 2024",
        description: "Annual blockchain hackathon and conference",
        image: "/images/events/blockathon.png",
      },
    ],
  },

  pastEvents: {
    title: "Past Events",
    events: [
      {
        imageSrc: "/images/events/sportsFiesta.png",
        date: "SAT. 29TH || JUN, 2024",
        title: "SPORTS FIESTA",
      },
      {
        imageSrc: "/images/events/sportsFiesta.png",
        date: "SAT. 30TH || JUN, 2024",
        title: "SPORTS FIESTA 2",
      },
      {
        imageSrc: "/images/events/sportsFiesta.png",
        date: "SAT. 31ST || JUN, 2024",
        title: "SPORTS FIESTA 3",
      },
    ] as EventData[],
  },

  partners: {
    title: "Our Partners",
    subtitle: "Trusted by leading blockchain organizations",
    partners: [
      { name: "Arbitrum", logo: "/images/partners/arbitrum.png" },
      { name: "HackerX", logo: "/images/partners/hackerx.png" },
      { name: "Web3 Lagos", logo: "/images/partners/web3lagos.png" },
    ],
  },

  newsletter: {
    title: "Stay Updated",
    subtitle: "Subscribe to our newsletter for the latest updates",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
  },
};
