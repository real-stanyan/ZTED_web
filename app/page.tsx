"use client";

import Header from "@/components/header";
import HomeSwiper from "@/components/homeSwiper";
import News from "@/components/news";
import CourseBanner from "@/components/courseBanner";
import HomeLinks from "@/components/homeLinks";

export default function Home() {
  return (
    <>
      <HomeSwiper />
      <News />
      <CourseBanner />
      <HomeLinks />
    </>
  );
}
