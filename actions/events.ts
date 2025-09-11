"use server";

import { apiClient, API_ROUTES } from "@/lib/api";

import { ApiResponse } from "@/types/common.types";
import { EventRegistrationRequest } from "@/types/event.type";

export async function registerForEvent(
  eventId: string,
  requestBody: EventRegistrationRequest
): Promise<ApiResponse> {
  try {
    const response = await apiClient(API_ROUTES.events.registration + eventId, {
      method: "POST",
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    return {
      success: response.ok,
      message: data.message || "Registration successful",
      data: data.data,
      error: data.error,
    };
  } catch (error: any) {
    return {
      success: false,
      message: "Registration failed",
      error: error.message,
    };
  }
}

export async function getEventAttendees(
  eventId: string,
  params?: { page?: number; limit?: number }
): Promise<ApiResponse> {
  try {
    const queryParams = new URLSearchParams({
      ...(params?.page && { page: params.page.toString() }),
      ...(params?.limit && { limit: params.limit.toString() }),
    });

    const response = await apiClient(
      `${API_ROUTES.events.attendee}${eventId}?${queryParams}`
    );

    const data = await response.json();
    return {
      success: response.ok,
      data: data.data,
      message: data.message,
      error: data.error,
    };
  } catch (error: any) {
    return {
      success: false,
      message: "Failed to fetch attendees",
      error: error.message,
    };
  }
}

export async function getAttendeeCount(eventId: string): Promise<ApiResponse> {
  try {
    const response = await apiClient(API_ROUTES.events.attendeeCount + eventId);

    const data = await response.json();
    return {
      success: response.ok,
      data: data.data,
      message: data.message,
      error: data.error,
    };
  } catch (error: any) {
    return {
      success: false,
      message: "Failed to fetch attendee count",
      error: error.message,
    };
  }
}

export async function getAttendeeByEmail(
  eventId: string,
  email: string
): Promise<ApiResponse> {
  try {
    const response = await apiClient(
      `${API_ROUTES.events.attendee}${eventId}`,
      {
        method: "POST",
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();
    return {
      success: response.ok,
      data: data.data,
      message: data.message,
      error: data.error,
    };
  } catch (error: any) {
    return {
      success: false,
      message: "Failed to fetch attendee",
      error: error.message,
    };
  }
}
