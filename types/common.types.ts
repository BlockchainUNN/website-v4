export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  errorDescription?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface QueryParams {
  page?: number;
  limit?: number;
  [key: string]: any;
}

export interface TokenPair {
  access: string;
  refresh: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface FeedbackData {
  name: string;
  username: string;
  message: string;
  image: string;
}

export interface EventData {
  imageSrc: string;
  date: string;
  title: string;
}
