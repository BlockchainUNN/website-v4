/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { registerForBlockathon2025Hack } from "@/actions/hackers";
import { QUERY_KEYS } from "@/lib/queryKey";
import { HackathonRegistrationForm } from "@/types/hacker.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

// Mutation for event registration
export const useHackathonRegistration = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data }: { data: HackathonRegistrationForm }) => {
      return registerForBlockathon2025Hack(data);
    },
    onSuccess: (data) => {
      if (!data.success) {
        return toast.error(data.message || "Failed to register for hackathon");
      }

      toast.success(data.message);

      // Invalidate related queries
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getHackerCount(),
        exact: false,
      });
    },
    onError: (error: any) => {
      console.error(error);
      toast.error(error.message || "Registration failed");
    },
  });
};
