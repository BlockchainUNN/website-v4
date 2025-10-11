// src/hooks/crud/useTeams.ts

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  createTeamForBlockathon2025,
  joinTeamForBlockathon2025,
  getTeamForBlockathon2025,
  leaveTeamForBlockathon2025,
} from "@/actions/teams";
import { QUERY_KEYS } from "@/lib/queryKey";
import { CreateTeamForm, JoinTeamForm } from "@/types/teams.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/useHackathonState";

export const useCreateTeam = () => {
  const queryClient = useQueryClient();
  const token = useAuthStore((state) => state.getAccessToken());
  const updateUser = useAuthStore((state) => state.updateUser);

  return useMutation({
    mutationFn: (data: CreateTeamForm) => {
      if (!token) throw new Error("Authentication required");
      return createTeamForBlockathon2025(data, token);
    },
    onSuccess: (res: any) => {
      if (!res.success) {
        return toast.error(res.message || "Failed to create team");
      }
      toast.success(res.message);
      updateUser({ team: res.data.team });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getTeamByHacker(),
        exact: false,
      });
    },
    onError: (error: any) => {
      console.error(error);
      toast.error(error.message || "Team creation failed");
    },
  });
};

export const useJoinTeam = () => {
  const queryClient = useQueryClient();
  const token = useAuthStore((state) => state.getAccessToken());
  const updateUser = useAuthStore((state) => state.updateUser);

  return useMutation({
    mutationFn: (data: JoinTeamForm) => {
      if (!token) throw new Error("Authentication required");
      return joinTeamForBlockathon2025(data, token);
    },
    onSuccess: (res: any) => {
      if (!res.success) {
        return toast.error(res.message || "Failed to join team");
      }
      toast.success(res.message);
      updateUser({ team: res.data.team });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getTeamByHacker(),
        exact: false,
      });
    },
    onError: (error: any) => {
      console.error(error);
      toast.error(error.message || "Team join failed");
    },
  });
};

export const useGetTeam = () => {
  const token = useAuthStore((state) => state.getAccessToken());

  return useQuery({
    queryKey: QUERY_KEYS.getTeamByHacker(),
    queryFn: async () => {
      if (!token) throw new Error("Authentication required");
      const res = await getTeamForBlockathon2025(token);
      if (!res.success) throw new Error(res.message || "Failed to fetch team");
      return res.data;
    },
    enabled: !!token,
  });
};

export const useLeaveTeam = () => {
  const queryClient = useQueryClient();
  const token = useAuthStore((state) => state.getAccessToken());
  const updateUser = useAuthStore((state) => state.updateUser);

  return useMutation({
    mutationFn: () => {
      if (!token) throw new Error("Authentication required");
      return leaveTeamForBlockathon2025(token);
    },
    onSuccess: (res: any) => {
      if (!res.success) {
        return toast.error(res.message || "Failed to leave team");
      }
      toast.success(res.message);
      updateUser({ team: null });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getTeamByHacker(),
        exact: false,
      });
    },
    onError: (error: any) => {
      console.error(error);
      toast.error(error.message || "Leave team failed");
    },
  });
};
