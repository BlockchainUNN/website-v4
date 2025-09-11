export interface EventRegistrationRequest {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: "male" | "female" | "other";
  level: string;
  department: string;
  whatsappNumber: string;
  telegramUsername?: string;
  portfolio?: string;
  experience: "beginner" | "intermediate" | "advanced";
  reasons: string;
}

export interface EventAttendee {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  level: string;
  department: string;
  whatsappNumber: string;
  telegramUsername?: string;
  portfolio?: string;
  experience: string;
  reasons: string;
  createdAt: string;
  updatedAt: string;
}

export interface EventStats {
  attendeeCount: number;
  registrationCount: number;
  totalEvents: number;
}
