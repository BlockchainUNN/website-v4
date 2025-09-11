import { isValidTeamTag, TeamMember, TeamTag } from "@/types/about.types";

/**
 * Filter team members by tag/role
 * @param teamData - Array of team members
 * @param tag - Tag to filter by (empty string returns all)
 * @returns Filtered array of team members
 */
export function getTeamByTag(
  teamData: TeamMember[],
  tag: string = ""
): TeamMember[] {
  // Return all members if no tag specified or tag is empty
  if (!tag || tag.trim() === "") {
    return teamData.filter((member) => member.isActive !== false);
  }

  // Validate tag
  if (!isValidTeamTag(tag)) {
    console.warn(`Invalid team tag: ${tag}. Returning all members.`);
    return teamData.filter((member) => member.isActive !== false);
  }

  // Filter by tag and only include active members
  return teamData.filter(
    (member) => member.tag === tag && member.isActive !== false
  );
}

/**
 * Get team members by multiple tags
 * @param teamData - Array of team members
 * @param tags - Array of tags to filter by
 * @returns Filtered array of team members
 */
export function getTeamByTags(
  teamData: TeamMember[],
  tags: TeamTag[]
): TeamMember[] {
  if (!tags || tags.length === 0) {
    return teamData.filter((member) => member.isActive !== false);
  }

  return teamData.filter(
    (member) => tags.includes(member.tag) && member.isActive !== false
  );
}

/**
 * Get team members count by tag
 * @param teamData - Array of team members
 * @param tag - Tag to count (empty string counts all)
 * @returns Number of team members with the specified tag
 */
export function getTeamCountByTag(
  teamData: TeamMember[],
  tag: string = ""
): number {
  return getTeamByTag(teamData, tag).length;
}

/**
 * Get all unique tags from team data
 * @param teamData - Array of team members
 * @returns Array of unique tags present in the team data
 */
export function getAvailableTags(teamData: TeamMember[]): TeamTag[] {
  const tags = new Set<TeamTag>();
  teamData.forEach((member) => {
    if (member.isActive !== false) {
      tags.add(member.tag);
    }
  });
  return Array.from(tags).sort();
}

/**
 * Get team statistics by tag
 * @param teamData - Array of team members
 * @returns Object with count for each tag
 */
export function getTeamStatsByTag(
  teamData: TeamMember[]
): Record<TeamTag | "total", number> {
  const stats = {
    leadership: 0,
    development: 0,
    designs: 0,
    content: 0,
    socials: 0,
    total: 0,
  } as Record<TeamTag | "total", number>;

  teamData.forEach((member) => {
    if (member.isActive !== false) {
      stats[member.tag]++;
      stats.total++;
    }
  });

  return stats;
}

/**
 * Search team members by name or role
 * @param teamData - Array of team members
 * @param searchQuery - Search term
 * @param tag - Optional tag filter
 * @returns Filtered array of team members matching search
 */
export function searchTeamMembers(
  teamData: TeamMember[],
  searchQuery: string,
  tag?: string
): TeamMember[] {
  let filteredData = tag ? getTeamByTag(teamData, tag) : teamData;

  if (!searchQuery || searchQuery.trim() === "") {
    return filteredData;
  }

  const query = searchQuery.toLowerCase().trim();

  return filteredData.filter(
    (member) =>
      member.name.toLowerCase().includes(query) ||
      member.role.toLowerCase().includes(query) ||
      (member.bio && member.bio.toLowerCase().includes(query)) ||
      (member.skills &&
        member.skills.some((skill) => skill.toLowerCase().includes(query)))
  );
}

/**
 * Sort team members by specified criteria
 * @param teamData - Array of team members
 * @param sortBy - Field to sort by
 * @param sortOrder - Sort direction
 * @returns Sorted array of team members
 */
export function sortTeamMembers(
  teamData: TeamMember[],
  sortBy: "name" | "role" | "joinedDate" | "order" = "order",
  sortOrder: "asc" | "desc" = "asc"
): TeamMember[] {
  return [...teamData].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case "name":
        comparison = a.name.localeCompare(b.name);
        break;
      case "role":
        comparison = a.role.localeCompare(b.role);
        break;
      case "joinedDate":
        const dateA = a.joinedDate ? new Date(a.joinedDate).getTime() : 0;
        const dateB = b.joinedDate ? new Date(b.joinedDate).getTime() : 0;
        comparison = dateA - dateB;
        break;
      case "order":
        comparison = (a.order || 999) - (b.order || 999);
        break;
      default:
        comparison = 0;
    }

    return sortOrder === "desc" ? -comparison : comparison;
  });
}

/**
 * Get team member by ID
 * @param teamData - Array of team members
 * @param id - Member ID to find
 * @returns Team member or undefined if not found
 */
export function getTeamMemberById(
  teamData: TeamMember[],
  id: string
): TeamMember | undefined {
  return teamData.find((member) => member.id === id);
}

/**
 * Check if team member has social links
 * @param member - Team member to check
 * @returns Boolean indicating if member has any social links
 */
export function hasSocialLinks(member: TeamMember): boolean {
  return Object.values(member.socials).some(
    (link) => link && link.trim() !== ""
  );
}

/**
 * Get primary social link for display
 * @param member - Team member
 * @returns Primary social link or undefined
 */
export function getPrimarySocialLink(member: TeamMember): string | undefined {
  const { socials } = member;

  // Priority order: LinkedIn, Twitter, GitHub, Portfolio, Instagram
  return (
    socials.linkedIn ||
    socials.twitter ||
    socials.github ||
    socials.portfolio ||
    socials.instagram
  );
}

/**
 * Enhanced getTeamByTag with additional options
 * @param teamData - Array of team members
 * @param options - Filter and sort options
 * @returns Filtered and sorted team members
 */
export function getTeamByTagAdvanced(
  teamData: TeamMember[],
  options: {
    tag?: string;
    searchQuery?: string;
    sortBy?: "name" | "role" | "joinedDate" | "order";
    sortOrder?: "asc" | "desc";
    includeInactive?: boolean;
  } = {}
): TeamMember[] {
  const {
    tag = "",
    searchQuery = "",
    sortBy = "order",
    sortOrder = "asc",
    includeInactive = false,
  } = options;

  let result = teamData;

  // Filter by active status
  if (!includeInactive) {
    result = result.filter((member) => member.isActive !== false);
  }

  // Filter by tag
  if (tag && isValidTeamTag(tag)) {
    result = result.filter((member) => member.tag === tag);
  }

  // Search filter
  if (searchQuery && searchQuery.trim() !== "") {
    result = searchTeamMembers(result, searchQuery);
  }

  // Sort
  result = sortTeamMembers(result, sortBy, sortOrder);

  return result;
}
