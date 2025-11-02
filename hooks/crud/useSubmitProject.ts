/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { uploadImageToCloudinary } from "@/lib/cloudinary";
import { toast } from "react-toastify";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwib8zKyBRVcpOcn_JiRQotZ2Q7qNAwa0nT64uktAQiqo9_U1jodEwbjP2Bq0DHh8uE/exec";

export const useSubmitProject = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      try {
        // Step 1 — Upload images to Cloudinary
        let imageUrls: string[] = [];

        if (data.uploadImages && data.uploadImages.length > 0) {
          const uploads = await Promise.all(
            Array.from<File>(data.uploadImages as FileList).map((file: File) =>
              uploadImageToCloudinary(file)
            )
          );
          imageUrls = uploads;
        }

        // Step 2 — Prepare payload
        const payload = {
          projectName: data.projectName,
          category: data.category,
          description: data.description,
          liveLink: data.liveLink,
          githubLink: data.githubLink,
          shortDescription: data.shortDescription,
          documentationLink: data.documentationLink,
          uploadImages: imageUrls,
        };

        // Step 3 — Submit to Google Apps Script (minimal headers to avoid preflight)
        const res = await fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();

        if (result.result !== "success") {
          throw new Error(result.message || "Submission failed");
        }

        return result;
      } catch (error) {
        console.error("Submission error:", error);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("✅ Project submitted successfully!");
    },
    onError: (error: any) => {
      console.error("Mutation error:", error);
      toast.error("❌ Failed to submit project. Please try again.");
    },
  });
};
