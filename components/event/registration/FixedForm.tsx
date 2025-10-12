"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  Phone,
  User,
} from "lucide-react";
import StackGridButton from "../stack-grid-button";
import { BsBalloon, BsEmojiSmile } from "react-icons/bs";
import { useBlockathon2025Registration } from "@/hooks/crud/useEvents";
import { RegistrationPayload } from "@/types/event.type";
import { useRouter } from "next/navigation";
import { showSuccessAlert } from "@/lib/alert";

const formSchema = z.object({
  firstName: z.string().min(2, "Enter your first name"),
  lastName: z.string().min(2, "Enter your last name"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(7, "Enter a valid phone")
    .regex(/^[0-9+\-()\s]+$/, "Invalid phone"),
  gender: z.enum(["male", "female", "other"], {
    message: "Select your gender",
  }),
  isStudent: z.enum(["yes", "no"], {
    message: "Select an option",
  }),
  skill: z.enum(
    ["programming", "design", "product", "marketing", "community"],
    {
      message: "Select a skill of interest",
    }
  ),
  experience: z.enum(["beginner", "intermediate", "advanced"], {
    message: "Select experience level",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function FixedRegistrationForm({
  className,
}: {
  className?: string;
}) {
  const router = useRouter();
  const { mutate: registerForEvent, isPending } =
    useBlockathon2025Registration();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: undefined as unknown as FormValues["gender"],
      isStudent: undefined as unknown as FormValues["isStudent"],
      skill: undefined as unknown as FormValues["skill"],
      experience: undefined as unknown as FormValues["experience"],
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: FormValues) => {
    const payload: RegistrationPayload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phone,
      gender: data.gender,
      student: data.isStudent,
      techCareer: data.skill,
      experienceLevel: data.experience,
      attendingFrom: "", // Add appropriate value or field
      willParticipateInHackathon: "", // Add appropriate value or field
    };

    registerForEvent(
      { data: payload },
      {
        onSuccess: async () => {
          reset();
          await showSuccessAlert();
          setTimeout(() => {
            router.push("/event");
          }, 2000);
        },
      }
    );
  };

  return (
    <section
      className={cn(
        "w-full flex items-center justify-center px-4 md:px-6 py-10 min-h-screen h-auto",
        className
      )}
      style={{
        backgroundImage: "url('/assets/events/hero_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        fontFamily: "var(--font-hanken)",
      }}
    >
      <div className="w-full max-w-2xl rounded-2xl overflow-hidden bg-white grid grid-rows-5 h-[85vh]">
        {/* Form side (scrollable) */}
        <div
          className="overflow-y-auto bg-white row-span-3"
          style={{
            scrollbarWidth: "none",
          }}
        >
          <div className="p-5 sm:p-8 relative">
            <div className="sticky top-0 z-10 bg-white pt-16 mb-4 pb-4 border-b border-[#7a7a7a]">
              <h2 className="text-2xl sm:text-40px font-semibold text-center mb-2 leading-[120%]">
                Register for Buildathon <br />
                (Conference 4.0)
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-1 rounded-xl border-2 border-[#02270C] py-3 px-2">
                  <div>
                    <User className="text-[#7A7A7A] size-5" />
                  </div>
                  <input
                    {...register("firstName")}
                    placeholder="First name"
                    className="w-full focus:outline-none font-medium text-base"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-1 rounded-xl border-2 border-[#02270C] py-3 px-2">
                  <div>
                    <User className="text-[#7A7A7A] size-5" />
                  </div>
                  <input
                    {...register("lastName")}
                    placeholder="Last name"
                    className="w-full focus:outline-none font-medium text-base"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 rounded-xl border-2 border-[#02270C] py-3 px-2">
                <div>
                  <Mail className="text-[#7A7A7A] size-5" />
                </div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email address"
                  className="w-full focus:outline-none font-medium text-base"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-1 rounded-xl border-2 border-[#02270C] py-3 px-2">
                <div>
                  <Phone className="text-[#7A7A7A] size-5" />
                </div>
                <input
                  {...register("phone")}
                  placeholder="Phone number"
                  className="w-full focus:outline-none font-medium text-base"
                />
                {errors.phone && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <div className="flex items-center gap-1 rounded-xl border-2 border-[#02270C] py-3 px-2">
                    <div>
                      <BsEmojiSmile className="text-[#7A7A7A] size-5" />
                    </div>

                    <select
                      {...register("gender")}
                      className="w-full focus:outline-none font-medium text-base cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select your gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {errors.gender && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.gender.message}
                    </p>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-1 rounded-xl border-2 border-[#02270C] py-3 px-2">
                    <div>
                      <GraduationCap className="text-[#7A7A7A] size-5" />
                    </div>
                    <select
                      {...register("isStudent")}
                      className="w-full focus:outline-none font-medium text-base cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Are you a student?
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    {errors.isStudent && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.isStudent.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <div className="flex items-center gap-1 rounded-xl border-2 border-[#02270C] py-3 px-2">
                    <div>
                      <BriefcaseBusiness className="text-[#7A7A7A] size-5" />
                    </div>
                    <select
                      {...register("skill")}
                      className="w-full focus:outline-none font-medium text-base cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Tech skill of interest
                      </option>
                      <option value="programming">Programming</option>
                      <option value="design">Design</option>
                      <option value="product">Product</option>
                      <option value="marketing">Marketing</option>
                      <option value="community">Community</option>
                    </select>
                  </div>

                  {errors.skill && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.skill.message}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-1 rounded-xl border-2 border-[#02270C] py-3 px-2">
                    <div>
                      <BsBalloon className="text-[#7A7A7A] size-5" />
                    </div>
                    <select
                      {...register("experience")}
                      className="w-full focus:outline-none font-medium text-base cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Experience in chosen skillset
                      </option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  {errors.experience && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.experience.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <StackGridButton
                  text={isPending ? "Registering..." : "Register Now"}
                  variant="button"
                  shape="rounded"
                  size="large"
                  bgColor="#02641C"
                  borderColor="#024539"
                  shadowColor="#024539"
                  shadowOffset={{ x: -3, y: 4 }}
                  disabled={isPending}
                  hasArrow
                  arrowIcon={<ArrowRight className="text-[#024539]" />}
                />
              </div>
            </form>
          </div>
        </div>

        {/* Graphic side */}
        <div className="relative p-4 row-span-2">
          <div className="relative h-full w-full rounded-2xl overflow-hidden">
            <div className="absolute w-full h-full inset-0 bg-black/50 z-50 flex items-center justify-center">
              <Image
                src="/assets/events/buildathon.png"
                alt="Buildathon graphic"
                width={2000}
                height={1500}
                className="object-contain w-70 md:w-96"
                priority
              />
            </div>
            <Image
              src="/assets/events/stats_bg.jpg"
              alt="Buildathon image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
