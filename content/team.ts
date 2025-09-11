// content/team.ts
export interface TeamContent {
  hero: {
    title: string;
    description: string;
  };
  tags: {
    all: string;
    leadership: string;
    development: string;
    designs: string;
    content: string;
    socials: string;
  };
}

export const teamContent: TeamContent = {
  hero: {
    title: "Meet the Team",
    description:
      "We're a student-run organization that promotes innovation in the blockchain industry through education, consulting, design, and research. We aren't purely professional, we're a team of friends, collaborators, and students of likeminded peers who ideate, and adventure together.",
  },
  tags: {
    all: "all",
    leadership: "leadership",
    development: "development",
    designs: "designs",
    content: "content",
    socials: "socials",
  },
};
