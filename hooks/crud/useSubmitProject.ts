/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { uploadImageToCloudinary } from "@/lib/cloudinary";
import { toast } from "react-toastify";

export const useSubmitProject = () => {
  return useMutation({
    mutationFn: async (data: any) => {
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

      // Step 3 — Submit to Google Apps Script
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxaII0BmIv-ldB9W06nKHizPyN3rkSW_VhdEUsHVF4cwM8seI-41Fudn0J79KTdmuj9/exec",
        {
          method: "POST",
          redirect: "follow",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "text/plain;charset=utf-8", // ✅ Prevents CORS preflight
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to submit project");
      }

      const result = await res.json();

      if (result.result !== "success") {
        throw new Error(result.message || "Submission failed");
      }

      return result;
    },
    onSuccess: () => {
      toast.success("✅ Project submitted successfully!");
    },
    onError: (error: any) => {
      console.error("Submission error:", error);
      toast.error("❌ Failed to submit project. Please try again.");
    },
  });
};
