// types/team.ts

/**
 * Available team role categories for filtering
 */
export type TeamTag =
  | "leadership"
  | "development"
  | "designs"
  | "content"
  | "socials";

/**
 * Social media links for team members
 */
export interface TeamMemberSocials {
  linkedIn?: string;
  twitter?: string;
  instagram?: string;
  github?: string;
  portfolio?: string;
  email?: string;
}

/**
 * Complete team member data structure
 */
export interface TeamMember {
  /** Unique identifier for the team member */
  id: string;

  /** Profile image path or URL */
  image: string;

  /** Full name of the team member */
  name: string;

  /** Job title or role description */
  role: string;

  /** Category tag for filtering (leadership, development, etc.) */
  tag: TeamTag;

  /** Social media and contact links */
  socials: TeamMemberSocials;

  /** Optional bio or description */
  bio?: string;

  /** Optional skills or specializations */
  skills?: string[];

  /** Whether the member is currently active */
  isActive?: boolean;

  /** Join date */
  joinedDate?: Date | string;

  /** Display order for sorting */
  order?: number;
}

/**
 * Team section configuration
 */
export interface TeamConfig {
  /** Available filter tags */
  availableTags: TeamTag[];

  /** Default selected tag */
  defaultTag: string;

  /** Grid layout configuration */
  gridCols: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

/**
 * Team filter state
 */
export interface TeamFilterState {
  selectedTag: string;
  searchQuery?: string;
  sortBy?: "name" | "role" | "joinedDate" | "order";
  sortOrder?: "asc" | "desc";
}

/**
 * Team data with metadata
 */
export interface TeamData {
  members: TeamMember[];
  config: TeamConfig;
  lastUpdated: Date | string;
  totalCount: number;
}

// Type guards and utility types

/**
 * Type guard to check if a tag is valid
 */
export const isValidTeamTag = (tag: string): tag is TeamTag => {
  return [
    "leadership",
    "development",
    "designs",
    "content",
    "socials",
  ].includes(tag);
};

/**
 * Utility type for team member creation (without id)
 */
export type CreateTeamMember = Omit<TeamMember, "id"> & {
  id?: string;
};

/**
 * Utility type for team member updates (partial except id)
 */
export type UpdateTeamMember = Partial<TeamMember> & {
  id: string;
};

/**
 * Team member with computed properties
 */
export interface TeamMemberWithComputed extends TeamMember {
  /** Computed full name for search */
  searchableText: string;

  /** Whether member has social links */
  hasSocialLinks: boolean;

  /** Primary social link for display */
  primarySocialLink?: string;
}

// Constants and enums

/**
 * Team role display names
 */
export const TEAM_TAG_LABELS: Record<TeamTag, string> = {
  leadership: "Leadership",
  development: "Development",
  designs: "Design",
  content: "Content",
  socials: "Social Media",
} as const;

/**
 * Team role descriptions
 */
export const TEAM_TAG_DESCRIPTIONS: Record<TeamTag, string> = {
  leadership: "Core leadership team and founders",
  development: "Developers and technical contributors",
  designs: "UI/UX designers and creative team",
  content: "Content creators and writers",
  socials: "Social media managers and community leads",
} as const;

/**
 * Default team member values
 */
export const DEFAULT_TEAM_MEMBER: Partial<TeamMember> = {
  isActive: true,
  socials: {},
  skills: [],
  order: 999,
} as const;
