"use server";

import { apiClient, API_ROUTES, setToken, clearToken } from "@/lib/api";
import {
  HackerRegistrationRequest,
  HackerLoginRequest,
} from "@/types/hacker.types";
import { ApiResponse } from "@/types/common.types";

export async function registerHacker(
  hackathonId: string,
  requestBody: HackerRegistrationRequest
): Promise<ApiResponse> {
  try {
    const response = await apiClient(API_ROUTES.hackers.create + hackathonId, {
      method: "POST",
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    return {
      success: response.ok,
      message: data.message || "Hacker registered successfully",
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

export async function loginHacker(
  hackathonId: string,
  requestBody: HackerLoginRequest
): Promise<ApiResponse> {
  try {
    const response = await apiClient(API_ROUTES.hackers.login + hackathonId, {
      method: "POST",
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (response.ok && data.data?.tokens) {
      // Store tokens in localStorage (this won't work in server actions,
      // so we'll handle this in the client-side hook)
      return {
        success: true,
        message: data.message || "Login successful",
        data: data.data,
      };
    }

    return {
      success: false,
      message: data.message || "Login failed",
      error: data.error,
    };
  } catch (error: any) {
    return {
      success: false,
      message: "Login failed",
      error: error.message,
    };
  }
}

export async function getHackerByEmail(
  hackathonId: string,
  email: string
): Promise<ApiResponse> {
  try {
    const response = await apiClient(
      `${API_ROUTES.hackers.get}${hackathonId}/${email}`
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
      message: "Failed to fetch hacker",
      error: error.message,
    };
  }
}

export async function getHackerCount(
  hackathonId: string
): Promise<ApiResponse> {
  try {
    const response = await apiClient(API_ROUTES.hackers.count + hackathonId);

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
      message: "Failed to fetch hacker count",
      error: error.message,
    };
  }
}
