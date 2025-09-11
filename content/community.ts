// content/community.ts
export interface CommunityContent {
  hero: {
    title: string;
  };
  socials: {
    title: string;
    description: string;
  };
  events: {
    title: string;
    description: string;
  };
}

export const communityContent: CommunityContent = {
  hero: {
    title: "The Community",
  },
  socials: {
    title: "Stay Connected Across Our Socials",
    description:
      "Join our growing community across multiple platforms to stay updated with the latest blockchain news, events, and opportunities.",
  },
  events: {
    title: "Recent Events",
    description: "Check out our latest community events and activities.",
  },
};
