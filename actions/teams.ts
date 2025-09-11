"use server";

import { apiClient, API_ROUTES } from "@/lib/api";
import { ApiResponse } from "@/types/common.types";

export async function createTeam(
  hackathonId: string,
  teamData: { name: string }
): Promise<ApiResponse> {
  try {
    const response = await apiClient(API_ROUTES.teams.create + hackathonId, {
      method: "POST",
      body: JSON.stringify(teamData),
      auth: true,
    });

    const data = await response.json();
    return {
      success: response.ok,
      message: data.message || "Team created successfully",
      data: data.data,
      error: data.error,
    };
  } catch (error: any) {
    return {
      success: false,
      message: "Failed to create team",
      error: error.message,
    };
  }
}

export async function joinTeam(
  hackathonId: string,
  joinData: { inviteCode: string }
): Promise<ApiResponse> {
  try {
    const response = await apiClient(API_ROUTES.teams.join + hackathonId, {
      method: "POST",
      body: JSON.stringify(joinData),
      auth: true,
    });

    const data = await response.json();
    return {
      success: response.ok,
      message: data.message || "Successfully joined team",
      data: data.data,
      error: data.error,
    };
  } catch (error: any) {
    return {
      success: false,
      message: "Failed to join team",
      error: error.message,
    };
  }
}

export async function leaveTeam(hackathonId: string): Promise<ApiResponse> {
  try {
    const response = await apiClient(API_ROUTES.teams.leave + hackathonId, {
      method: "DELETE",
      auth: true,
    });

    const data = await response.json();
    return {
      success: response.ok,
      message: data.message || "Successfully left team",
      data: data.data,
      error: data.error,
    };
  } catch (error: any) {
    return {
      success: false,
      message: "Failed to leave team",
      error: error.message,
    };
  }
}

export async function getTeam(hackathonId: string): Promise<ApiResponse> {
  try {
    const response = await apiClient(API_ROUTES.teams.get + hackathonId, {
      auth: true,
    });

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
      message: "Failed to fetch team",
      error: error.message,
    };
  }
}
