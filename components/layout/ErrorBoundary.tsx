"use client";

import { useQueryError } from "@/hooks/store/useQueryError";
import React, { useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const { errors, removeError } = useQueryError();
  const handledErrors = useRef<Set<string>>(new Set());
  const timeoutRefs = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const handleError = useCallback(
    (error: string) => {
      // Only show toast if error hasn't been handled yet
      if (!handledErrors.current.has(error)) {
        handledErrors.current.add(error);
        console.log("Showing error toast:", error);

        // Show the toast
        toast.error(error, {
          toastId: error, // Prevent duplicate toasts for same error
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Clear any existing timeout for this error
        const existingTimeout = timeoutRefs.current.get(error);
        if (existingTimeout) {
          clearTimeout(existingTimeout);
        }

        // Set timeout to remove error after 30 seconds
        const timeoutId = setTimeout(() => {
          removeError(error);
          handledErrors.current.delete(error);
          timeoutRefs.current.delete(error);
        }, 30000);

        timeoutRefs.current.set(error, timeoutId);
      }
    },
    [removeError]
  );

  useEffect(() => {
    console.log("ErrorBoundary: Current errors:", errors);
    if (errors && errors.length > 0) {
      errors.forEach(handleError);
    }
  }, [errors, handleError]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
      timeoutRefs.current.clear();
    };
  }, []);

  return <>{children}</>;
}
