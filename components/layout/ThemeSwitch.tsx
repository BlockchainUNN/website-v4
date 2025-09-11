"use client";

import { useTheme } from "@/hooks/store/useTheme";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export function ThemeSwitch() {
  const { isDarkMode, toggleTheme } = useTheme();

  // Apply theme class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer transition-colors duration-300"
    >
      <div
        className={cn(
          "absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300",
          isDarkMode ? "translate-x-6" : "translate-x-0.5"
        )}
      />
      <div className="absolute inset-0 flex items-center justify-between px-1 text-xs">
        <span
          className={cn(
            "transition-opacity",
            isDarkMode ? "opacity-30" : "opacity-100"
          )}
        >
          ☀️
        </span>
        <span
          className={cn(
            "transition-opacity",
            isDarkMode ? "opacity-100" : "opacity-30"
          )}
        >
          🌙
        </span>
      </div>
    </div>
  );
}
