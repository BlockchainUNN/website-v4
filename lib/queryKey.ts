/* eslint-disable @typescript-eslint/no-explicit-any */
const makeQueryKey = (key: string) => (params?: any) =>
  [key, JSON.stringify(params || {})];

export const QUERY_KEYS = {
  // Auth
  login: makeQueryKey("login"),

  // Events
  getEvents: makeQueryKey("get_events"),
  getEventAttendees: makeQueryKey("get_event_attendees"),
  getEventStats: makeQueryKey("get_event_stats"),
  getAttendeeCount: makeQueryKey("get_attendee_count"),

  // Hackers
  getHackers: makeQueryKey("get_hackers"),
  getHackerById: makeQueryKey("get_hacker_by_id"),
  getHackerByEmail: makeQueryKey("get_hacker_by_email"),
  getHackerStats: makeQueryKey("get_hacker_stats"),
  getHackerCount: makeQueryKey("get_hacker_count"),

  // Teams
  getTeams: makeQueryKey("get_teams"),
  getTeamById: makeQueryKey("get_team_by_id"),
  getTeamByHacker: makeQueryKey("get_team_by_hacker"),
  getTeamStats: makeQueryKey("get_team_stats"),

  // Users
  getUsers: makeQueryKey("get_users"),
  getUserByEmail: makeQueryKey("get_user_by_email"),
};
