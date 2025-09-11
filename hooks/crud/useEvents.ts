"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useCustomQuery from "../custom/useCustomQuery";
import {
  registerForEvent,
  getAttendeeCount,
  getAttendeeByEmail,
} from "@/actions/events";
import { QUERY_KEYS } from "@/lib/queryKey";
import { EventRegistrationRequest } from "@/types/event.type";

// Mutation for event registration
export const useEventRegistration = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      eventId,
      data,
    }: {
      eventId: string;
      data: EventRegistrationRequest;
    }) => {
      return registerForEvent(eventId, data);
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

// Query for attendee count
export const useAttendeeCount = (eventId: string) => {
  return useCustomQuery({
    queryKey: QUERY_KEYS.getAttendeeCount({ eventId }),
    queryFn: () => getAttendeeCount(eventId),
    enabled: !!eventId,
  });
};

// Query for checking attendee by email
export const useAttendeeByEmail = (
  eventId: string,
  email: string,
  enabled: boolean = false
) => {
  return useCustomQuery({
    queryKey: QUERY_KEYS.getEventAttendees({ eventId, email }),
    queryFn: () => getAttendeeByEmail(eventId, email),
    enabled: enabled && !!eventId && !!email,
  });
};
