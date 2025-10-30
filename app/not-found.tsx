"use client";
import StackGridButton from "@/components/event/stack-grid-button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <Image src="/assets/404.svg" alt="404" fill />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full flex items-center justify-center">
        <StackGridButton
          text="Let's take you back"
          onClick={() => router.back()}
        />
      </div>
    </div>
  );
}
