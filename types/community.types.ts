// types/community.ts
export interface SocialPlatform {
  id: string;
  icon: string;
  name: string;
  to?: string;
  content: string;
}

export interface CommunityEvent {
  id: string;
  flyer: string;
  imageLinks?: string;
  title?: string;
  date?: string;
}
