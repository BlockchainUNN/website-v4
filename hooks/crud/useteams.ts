"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useHackathonState } from "../store/useHackathonState";
import useCustomQuery from "../custom/useCustomQuery";
import { getTeam, createTeam, joinTeam, leaveTeam } from "@/actions/teams";
import { QUERY_KEYS } from "@/lib/queryKey";

// Hook for getting team data
export const useTeams = () => {
  const { hackathonId } = useHackathonState();

  return useCustomQuery({
    queryKey: QUERY_KEYS.getTeamByHacker({ hackathonId }),
    queryFn: () => getTeam(hackathonId),
    enabled: !!hackathonId,
  });
};

// Mutation for creating a team
export const useCreateTeam = () => {
  const queryClient = useQueryClient();
  const { hackathonId } = useHackathonState();

  return useMutation({
    mutationFn: (teamData: { name: string }) => {
      return createTeam(hackathonId, teamData);
    },
    onSuccess: (data) => {
      if (!data.success) {
        return toast.error(data.message || "Failed to create team");
      }

      toast.success(data.message);

      // Invalidate team queries
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getTeamByHacker(),
        exact: false,
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getTeams(),
        exact: false,
      });
    },
    onError: (error: any) => {
      console.error(error);
      toast.error(error.message || "Failed to create team");
    },
  });
};

// Mutation for joining a team
export const useJoinTeam = () => {
  const queryClient = useQueryClient();
  const { hackathonId } = useHackathonState();

  return useMutation({
    mutationFn: (joinData: { inviteCode: string }) => {
      return joinTeam(hackathonId, joinData);
    },
    onSuccess: (data) => {
      if (!data.success) {
        return toast.error(data.message || "Failed to join team");
      }

      toast.success(data.message);

      // Invalidate team queries
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getTeamByHacker(),
        exact: false,
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getTeams(),
        exact: false,
      });
    },
    onError: (error: any) => {
      console.error(error);
      toast.error(error.message || "Failed to join team");
    },
  });
};

// Mutation for leaving a team
export const useLeaveTeam = () => {
  const queryClient = useQueryClient();
  const { hackathonId } = useHackathonState();

  return useMutation({
    mutationFn: () => {
      return leaveTeam(hackathonId);
    },
    onSuccess: (data) => {
      if (!data.success) {
        return toast.error(data.message || "Failed to leave team");
      }

      toast.success(data.message);

      // Invalidate team queries
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getTeamByHacker(),
        exact: false,
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getTeams(),
        exact: false,
      });
    },
    onError: (error: any) => {
      console.error(error);
      toast.error(error.message || "Failed to leave team");
    },
  });
};
