"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useHackathonLogin } from "@/hooks/crud/useHacker";
import StackGridButton from "../stack-grid-button";
import { HackerLoginRequest } from "@/types/hacker.types";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function FixedHackathonLoginForm({
  className,
}: {
  className?: string;
}) {
  const router = useRouter();
  const { mutate: loginToHackathon, isPending } = useHackathonLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: FormValues) => {
    const payload: HackerLoginRequest = {
      email: data.email,
      password: data.password,
    };

    loginToHackathon(
      { data: payload },
      {
        onSuccess: () => {
          reset();
          setTimeout(() => {
            router.push("/hackathon/dashboard");
          }, 3000);
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
                Login to Hackathon <br />
                (Conference 4.0)
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                  <Lock className="text-[#7A7A7A] size-5" />
                </div>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                  className="w-full focus:outline-none font-medium text-base"
                />
                {errors.password && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex justify-center mt-6">
                <StackGridButton
                  text={isPending ? "Logging in..." : "Login Now"}
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
          <div className="mx-auto w-full flex gap-1">
            <span className="mx-auto text-center">
              Have not registered yet?{" "}
              <Link href={"/hackathon/registration"} className="underline">
                Click Here
              </Link>
            </span>
          </div>
        </div>

        {/* Graphic side */}
        <div className="relative p-4 row-span-2">
          <div className="relative h-full w-full rounded-2xl overflow-hidden ">
            <div className="absolute w-full h-full inset-0 bg-black/50 z-50 flex items-center justify-center">
              <Image
                src="/assets/events/buildathon.png"
                alt="Hackathon graphic"
                width={2000}
                height={1500}
                className="object-contain w-70 md:w-96"
                priority
              />
            </div>
            <Image
              src="/assets/events/stats_bg.jpg"
              alt="Hackathon image"
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
