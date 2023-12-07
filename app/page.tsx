"use client";

import { useEffect, useState } from "react";
import HomeSwiper from "@/components/homeSwiper";
import News from "@/components/news";
import CourseBanner from "@/components/courseBanner";
import HomeLinks from "@/components/homeLinks";
import { BackToTop } from "@/components/ui/backToTop-button";

import { GoMoveToTop } from "react-icons/go";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScrollBottom = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        setShowBackToTop(true); // 到达底部
      } else {
        setShowBackToTop(false); // 未到达底部
      }
    };

    window.addEventListener("scroll", checkScrollBottom);

    return () => {
      window.removeEventListener("scroll", checkScrollBottom);
    };
  }, []);

  return (
    <>
      {/* back to top button */}
      {showBackToTop && (
        <div className="fixed bottom-2 right-2 md:bottom-8 md:right-8 z-50">
          <BackToTop
            variant="outline"
            className="group w-[15vw] h-[15vw] md:w-[5vw] md:h-[5vw] bg-red-600 rounded-full"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <GoMoveToTop className="text-[8vw] md:text-[3vw] font-bold text-[white] group-hover:text-black" />
          </BackToTop>
        </div>
      )}
      {/* components */}
      <HomeSwiper />
      <News />
      <CourseBanner />
      <HomeLinks />
    </>
  );
}
