// content/about.ts
export interface AboutContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  cards: {
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    values: {
      title: string;
      description: string;
    };
  };
}

export const aboutContent: AboutContent = {
  hero: {
    title: "about us",
    subtitle: "Expanding the blockchainunn community and introducing web3.",
    description:
      "BlockchainUNN is a Tech community established with the aim of educating members of the University Community with both basic and advanced practical knowledge of cryptocurrency, Blockchain technology, its development, and its opportunities. Though we are focused on the University of Nigeria, we have a diverse community made up of people from diverse fields, institutions and campuses who are blockchain enthusiasts.",
  },
  cards: {
    mission: {
      title: "Our Mission",
      description:
        "To educate and develop community members ( students and lecturers) of the University of Nigeria, on different facets and applications of Blockchain technology.",
    },
    vision: {
      title: "Our Vision",
      description: "Our vision is to build tomorrow's technology today.",
    },
    values: {
      title: "Our Values",
      description:
        "We believe in innovation, education, collaboration, and building a decentralized future for everyone.",
    },
  },
};
