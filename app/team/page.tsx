// app/team/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Redirect /team to /about#team
export default function TeamPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/about#team");
  }, [router]);

  return null;
}
