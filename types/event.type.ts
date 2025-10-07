export interface RegistrationPayload {
  email: string;
  gender: string;
  student: string;
  lastName: string;
  firstName: string;
  techCareer: string;
  phoneNumber: string;
  attendingFrom: string;
  experienceLevel: string;
  willParticipateInHackathon: string;
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
