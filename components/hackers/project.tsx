import { useState } from "react";
import Image from "next/image";
import StackGridButton from "@/components/event/stack-grid-button";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Combined schema for both steps
const projectSchema = z.object({
  // Step 1
  projectName: z.string().min(1, "Project name is required"),
  category: z.string().min(1, "Select a category"),
  description: z.string().min(1, "Enter details of your project"),
  liveLink: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  // Step 2
  githubLink: z.string().url("Enter a valid URL"),
  shortDescription: z.string().min(1, "Short description is required"),
  documentationLink: z.string().url("Enter a valid URL"),
  uploadImages: z.any().optional(),
});

const categories = [
  "DeFi",
  "NFT",
  "Gaming",
  "Social",
  "Infrastructure",
  "Other",
];

export default function HackerProjects() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectName: "",
      category: "",
      description: "",
      liveLink: "",
      githubLink: "",
      shortDescription: "",
      documentationLink: "",
      uploadImages: undefined,
    },
    mode: "onBlur",
  });

  
  const handleFinalSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log("Submitted project:", data);
    reset();
    setStep(1);
    
  };

  // Render step 1 fields
  const Step1Fields = (
    <>
      <div>
        <input
          {...register("projectName")}
          placeholder="Project 1"
          className={cn(
            "w-full border border-gray-300 rounded px-4 py-2 text-xl focus:outline-none",
            errors.projectName && "border-red-500"
          )}
        />
        {errors.projectName && (
          <p className="text-sm text-red-600 mt-1">
            {errors.projectName.message as string}
          </p>
        )}
      </div>
      <div>
        <select
          {...register("category")}
          className={cn(
            "w-full border border-gray-300 rounded px-4 py-2 text-xl focus:outline-none",
            errors.category && "border-red-500"
          )}
          defaultValue=""
        >
          <option value="" disabled>
            Select A Category
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-sm text-red-600 mt-1">
            {errors.category.message as string}
          </p>
        )}
      </div>
      <div>
        <textarea
          {...register("description")}
          placeholder="Brief details of your project"
          className={cn(
            "w-full border border-gray-300 rounded px-4 py-2 text-xl focus:outline-none resize-none",
            errors.description && "border-red-500"
          )}
          rows={3}
        />
        {errors.description && (
          <p className="text-sm text-red-600 mt-1">
            {errors.description.message as string}
          </p>
        )}
      </div>
      <div>
        <input
          {...register("liveLink")}
          placeholder="Live Link"
          className={cn(
            "w-full border border-gray-300 rounded px-4 py-2 text-xl focus:outline-none",
            errors.liveLink && "border-red-500"
          )}
        />
        {errors.liveLink && (
          <p className="text-sm text-red-600 mt-1">
            {errors.liveLink.message as string}
          </p>
        )}
      </div>
    </>
  );

  // Render step 2 fields
  const Step2Fields = (
    <>
      <div>
        <input
          {...register("githubLink")}
          placeholder="GitHub Link"
          className={cn(
            "w-full border border-gray-300 rounded px-4 py-2 text-xl focus:outline-none",
            errors.githubLink && "border-red-500"
          )}
        />
        {errors.githubLink && (
          <p className="text-sm text-red-600 mt-1">
            {errors.githubLink.message as string}
          </p>
        )}
      </div>
      <div>
        <input
          {...register("shortDescription")}
          placeholder="Short description"
          className={cn(
            "w-full border border-gray-300 rounded px-4 py-2 text-xl focus:outline-none",
            errors.shortDescription && "border-red-500"
          )}
        />
        {errors.shortDescription && (
          <p className="text-sm text-red-600 mt-1">
            {errors.shortDescription.message as string}
          </p>
        )}
      </div>
      <div>
        <input
          {...register("documentationLink")}
          placeholder="Docs/website link"
          className={cn(
            "w-full border border-gray-300 rounded px-4 py-2 text-xl focus:outline-none",
            errors.documentationLink && "border-red-500"
          )}
        />
        {errors.documentationLink && (
          <p className="text-sm text-red-600 mt-1">
            {errors.documentationLink.message as string}
          </p>
        )}
      </div>
      <div>
        <input
          type="file"
          {...register("uploadImages")}
          className="w-full border border-gray-300 rounded px-4 py-2 text-xl focus:outline-none"
          accept="image/*"
          multiple
        />
        {/* No validation for images */}
        {errors.uploadImages && (
          <p className="text-sm text-red-600 mt-1">
            {errors.uploadImages.message as string}
          </p>
        )}
      </div>
    </>
  );

  return (
    <div className="bg-[url('/assets/events/hero_bg.jpg')] bg-cover bg-center w-full h-full pt-16 space-y-12 ">
      <section className="w-1/2 mx-auto flex items-center justify-center gap-5">
        <div className="w-full md:max-w-md">
          <Image
            src="/assets/events/buildathon.png"
            alt="Buildathon Hero"
            width={240}
            height={135}
            className="object-contain"
          />
        </div>
        <p
          className="text-3xl lg:text-5xl md:text-6xl text-[#008b37] font-extrabold relative inline-block"
          style={{
            textShadow:
              "-4px 4px 0 #014736, -8px 8px 0 #014736, 0px 2px 12px rgba(0,0,0,0.25)",
          }}
        >
          Project
        </p>
      </section>
      <section className="w-full flex justify-center">
        <div className="w-10/12 bg-white h-[43vh] lg:h-[40vh] shadow-lg p-8 border-3 border-black text-black">
            <form
              onSubmit={handleSubmit(handleFinalSubmit)}
              className="space-y-10"
              autoComplete="off"
            >
              <div className="space-y-4">{step === 1 ? Step1Fields : Step2Fields}</div>
              {step === 1  ?  <div className="flex justify-center mt-auto">
                <StackGridButton
                  text="Next"
                  variant="navigation"
                  bgColor="linear-gradient(180deg, #02641C 0%, #02641C 100%)"
                  borderColor="#024539"
                  size="large"
                  shadowOffset={{ x: -3, y: 4 }}
                  hasArrow
                 onClick={() => setStep(2)}
                 
                />
              </div>
              : (
              <div className="flex justify-center gap-4 mt-auto">
                <StackGridButton
                  text="Back"
                  variant="navigation"
                  bgColor="#FFB636"
                  borderColor="#024539"
                  size="large"
                  shadowOffset={{ x: -3, y: 4 }}
                  hasArrow={false}
                  onClick={() => setStep(1)}
                />
                <StackGridButton
                  text="Submit"
                  variant="navigation"
                  bgColor="linear-gradient(180deg, #02641C 0%, #02641C 100%)"
                  borderColor="#024539"
                  size="large"
                  shadowOffset={{ x: -3, y: 4 }}
                  hasArrow
                />
              </div>
          
          )}
             
            </form>
         
         
        </div>
      </section>
    </div>
  );
}