"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { setToken } from "@/lib/api";

import {
  HackerRegistrationRequest,
  HackerLoginRequest,
} from "@/types/hacker.types";
import { useHackathonState } from "../store/useHackathonState";
import useCustomQuery from "../custom/useCustomQuery";
import {
  registerHacker,
  loginHacker,
  getHackerCount,
  getHackerByEmail,
} from "@/actions/hackers";
import { QUERY_KEYS } from "@/lib/queryKey";

// Mutation for hacker registration
export const useHackerRegistration = () => {
  return useMutation({
    mutationFn: ({
      hackathonId,
      data,
    }: {
      hackathonId: string;
      data: HackerRegistrationRequest;
    }) => {
      return registerHacker(hackathonId, data);
    },
    onSuccess: (data) => {
      if (!data.success) {
        return toast.error(data.message || "Failed to register as hacker");
      }

      toast.success(data.message);
    },
    onError: (error: any) => {
      console.error(error);
      toast.error(error.message || "Registration failed");
    },
  });
};

// Mutation for hacker login
export const useHackerLogin = () => {
  const router = useRouter();
  const { setCurrentHacker } = useHackathonState();

  return useMutation({
    mutationFn: ({
      hackathonId,
      data,
    }: {
      hackathonId: string;
      data: HackerLoginRequest;
    }) => {
      return loginHacker(hackathonId, data);
    },
    onSuccess: (data) => {
      if (!data.success) {
        return toast.error(data.message || "Login failed");
      }

      // Store tokens and hacker data
      if (data.data?.tokens) {
        setToken(data.data.tokens);
      }

      if (data.data?.hacker) {
        setCurrentHacker(data.data.hacker);
      }

      toast.success(data.message);

      // Navigate to hackathon dashboard
      setTimeout(() => {
        router.push("/hackathon/dashboard");
      }, 500);
    },
    onError: (error: any) => {
      console.error(error);
      toast.error(error.message || "Login failed");
    },
  });
};

// Query for hacker count
export const useHackerCount = (hackathonId: string) => {
  return useCustomQuery({
    queryKey: QUERY_KEYS.getHackerCount({ hackathonId }),
    queryFn: () => getHackerCount(hackathonId),
    enabled: !!hackathonId,
  });
};

// Query for checking hacker by email
export const useHackerByEmail = (
  hackathonId: string,
  email: string,
  enabled: boolean = false
) => {
  return useCustomQuery({
    queryKey: QUERY_KEYS.getHackerByEmail({ hackathonId, email }),
    queryFn: () => getHackerByEmail(hackathonId, email),
    enabled: enabled && !!hackathonId && !!email,
  });
};
