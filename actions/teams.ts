// src/actions/teams.ts

/* eslint-disable @typescript-eslint/no-explicit-any */
import { api, API_ROUTES } from "@/lib/api";
import handleError, { handleSuccess } from "@/lib/handleResponse";
import {
  CreateTeamForm,
  JoinTeamForm,
  HackerTeamInfo,
  TeamDetails,
} from "@/types/teams.types";

const HACKATHON_ID = "2";

export const createTeamForBlockathon2025 = async (
  payload: CreateTeamForm,
  token: string
) => {
  try {
    const { data } = await api.post<HackerTeamInfo>(
      API_ROUTES.teams.create(HACKATHON_ID),
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return handleSuccess(data, "Team created successfully");
  } catch (error: any) {
    return handleError(error);
  }
};

export const joinTeamForBlockathon2025 = async (
  payload: JoinTeamForm,
  token: string
) => {
  try {
    const { data } = await api.post<HackerTeamInfo>(
      API_ROUTES.teams.join(HACKATHON_ID),
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return handleSuccess(data, "Successfully joined team");
  } catch (error: any) {
    return handleError(error);
  }
};

export const getTeamForBlockathon2025 = async (token: string) => {
  try {
    const { data } = await api.get<TeamDetails>(
      API_ROUTES.teams.get(HACKATHON_ID),
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return handleSuccess(data, "");
  } catch (error: any) {
    return handleError(error);
  }
};

export const leaveTeamForBlockathon2025 = async (token: string) => {
  try {
    await api.delete(API_ROUTES.teams.leave(HACKATHON_ID), {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleSuccess(null, "Successfully left team");
  } catch (error: any) {
    return handleError(error);
  }
};
