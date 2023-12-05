"use client";

import Image from "next/image";
import Header from "@/components/header";
import HomeSwiper from "@/components/homeSwiper";
import News from "@/components/news";
import CourseBanner from "@/components/courseBanner";
import HomeLinks from "@/components/homeLinks";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSwiper />
      <News />
      <CourseBanner />
      <HomeLinks />
    </>
  );
}
