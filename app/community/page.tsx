"use client";
import Header from "@/components/community/CommunityHeader";
import CommunityImages from "@/components/community/CommunityImages";
import Socials from "@/components/community/CommunitySocials";
import RecentEvents from "@/components/community/RecentEvents";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/NavBar";
import { useTheme } from "@/hooks/store/useTheme";

export default function Community() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;

  return (
    <div
      className={
        (theme
          ? `App bg-gradient-to-b from-black1 to-black text-ash`
          : `App bg-gradient-to-b from-grey to-white`) + " max-md:gap-20 gap-60"
      }
    >
      <div className="flex flex-col w-full justify-center max-lg:gap-4 max-sm:gap-0 gap-8">
        <div className="flex w-full py-14 justify-center">
          <Navbar />
        </div>
        <div className="flex w-full flex-col max-lg:gap-20 max-sm:gap-12 gap-32">
          <Header />
          <CommunityImages />
          <Socials />
          <RecentEvents />
        </div>
      </div>
      <Footer />
    </div>
  );
}
