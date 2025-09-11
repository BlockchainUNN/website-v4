"use client";

import { useState } from "react";
import { useTheme } from "@/hooks/store/useTheme";
import { commonContent } from "@/content/common";
import { Text } from "@/components/common/Text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";

export function Newsletter() {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error(commonContent.forms.validation.email);
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Implement newsletter subscription API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-2 md:px-8 py-4 mt-12 mb-12">
      <div
        className={cn(
          "flex flex-col items-center justify-center p-[1rem] md:p-[3rem] w-full border border-gradient rounded-xl",
          isDarkMode ? "bg-gradient-to-r to-[#000] from-[#575757]" : "bg-white"
        )}
      >
        <div
          className={cn(
            "w-full flex flex-col items-center gap-2 justify-center bg-black rounded-xl py-6 md:py-12",
            isDarkMode ? "border-gradient" : "border-none"
          )}
        >
          <Text
            size="5xl"
            weight="semibold"
            color="white"
            className="text-[22px] md:text-[50px] text-center"
          >
            Subscribe to our Newsletter
          </Text>

          <Text
            size="lg"
            color="white"
            className="text-[12px] md:text-[25px] w-[85%] md:w-[75%] text-center"
          >
            Stay connected with the latest tech and blockchain trends and news
            and discover how we are shaping the future.
          </Text>

          {/* Newsletter Form */}
          <div className="my-2 md:my-8 w-[85%] md:w-[60%]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 items-center p-4 rounded-full relative bg-blockchain-white h-[60px] md:h-[75px]"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email us now to get updated"
                className={cn(
                  "text-[14px] md:text-[18px] text-black w-[60%] md:w-[63%] py-2 px-3 md:px-6 absolute left-2 bottom-2 z-50 h-[45px] md:h-[60px]",
                  "border-none rounded-full bg-transparent focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                  isDarkMode ? "bg-blockchain-white" : "bg-transparent"
                )}
                disabled={isSubmitting}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "text-white text-[14px] font-medium md:text-[18px] w-1/3 py-2 px-4 rounded-full absolute right-2 bottom-2 h-[45px] md:h-[60px]",
                  "bg-gradient-to-r from-[#02641c] to-[#04ca39] hover:from-[#02641c]/90 hover:to-[#04ca39]/90"
                )}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>

          {/* Additional Info */}
          <Text
            size="sm"
            color="white"
            className="text-[10px] md:text-[14px] text-center opacity-80 mt-4"
          >
            Join 2000+ subscribers and never miss an update!
          </Text>
        </div>
      </div>
    </div>
  );
}
