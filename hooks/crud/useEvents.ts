/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { registerForBlockathon2025 } from "@/actions/events";
import { QUERY_KEYS } from "@/lib/queryKey";
import { RegistrationPayload } from "@/types/event.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

// Mutation for event registration
export const useBlockathon2025Registration = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data }: { data: RegistrationPayload }) => {
      return registerForBlockathon2025(data);
    },
    onSuccess: (data) => {
      if (!data.success) {
        return toast.error(data.message || "Failed to register for event");
      }

      toast.success(data.message);

      // Invalidate related queries
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getEventAttendees(),
        exact: false,
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getAttendeeCount(),
        exact: false,
      });
    },
    onError: (error: any) => {
      console.error(error);
      toast.error(error.message || "Registration failed");
    },
  });
};
