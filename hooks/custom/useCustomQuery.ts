"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useQueryError } from "../store/useQueryError";
import { ApiResponse } from "@/types/common.types";

interface CustomQueryOptions<TData = any, TParams = any> {
  queryKey: string | string[];
  queryFn: (params?: TParams) => Promise<ApiResponse<TData>>;
  params?: TParams;
  enabled?: boolean;
  select?: (data: ApiResponse<TData>) => any;
}

export default function useCustomQuery<TData = any, TParams = any>({
  queryKey,
  queryFn,
  params,
  enabled = true,
  select,
}: CustomQueryOptions<TData, TParams>) {
  const router = useRouter();
  const { addError, errors } = useQueryError();

  const query = useQuery({
    queryKey: Array.isArray(queryKey)
      ? [...queryKey, params]
      : [queryKey, params],
    queryFn: () => queryFn(params),
    retry: (failureCount, error: any) => {
      // Don't retry on authentication errors
      if (error?.message?.includes?.("expired token")) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    enabled,
    // select: select || ((data: unknown) => {
    //   if (
    //     data &&
    //     typeof data === "object" &&
    //     data !== null &&
    //     "data" in data
    //   ) {
    //     const apiResponse = data as ApiResponse<TData>;
    //     return apiResponse.data;
    //   }
    //   return undefined;
    // }),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  } satisfies UseQueryOptions);

  // Handle success/error states with useEffect
  useEffect(() => {
    if (query.data && !query.data.success) {
      const errorMessage = query.data.errorDescription || query.data.message;
      if (errorMessage && !errors.includes(errorMessage)) {
        addError(errorMessage);
      }

      if (
        typeof errorMessage === "string" &&
        errorMessage.includes("expired token")
      ) {
        toast.error("Session expired. Please login again.");
        router.push("/hackathon/login");
      }
    }
  }, [query.data, addError, errors, router]);

  useEffect(() => {
    if (query.error) {
      console.error("Query error", query.error);

      // Handle specific error types
      const error = query.error as any;
      if (error?.message?.includes?.("expired token")) {
        toast.error("Session expired. Please login again.");
        router.push("/hackathon/login");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  }, [query.error, router]);

  return {
    ...query,
    data: query.data?.data,
  };
}
