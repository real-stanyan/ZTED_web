import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import NewsData from "../data/news-data.json";
import NewsSwiper from "@/components/newsSwiper";

export default function News() {
  return (
    <>
      {/* news for Desktop */}
      <div
        id="news"
        className="w-[100vw] h-[50vh] md:h-[100vh] p-[8vw] md:p-[10vw] hidden md:flex justify-center items-center"
      >
        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-12 w-[80vw] h-[80%] md:h-[80vh]">
          {/* 第一行的轮播图 */}
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-lg"
          >
            <NewsSwiper />
          </motion.div>
          {/* 第一行的新闻 */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 grid-rows-2 gap-4 p-4"
          >
            {NewsData.filter((news) => news.id >= 1 && news.id <= 4).map(
              (news, index) => (
                <div
                  key={index}
                  className="border-b-4 border-[#A92428] bg-white shadow-lg p-[20px] relative overflow-hidden"
                >
                  <h1>{news.content}</h1>
                  <span className="absolute bottom-1 right-1">{news.time}</span>
                </div>
              )
            )}
          </motion.div>
          {/* 第二行的新闻 */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 grid-rows-2 gap-4 p-4"
          >
            {NewsData.filter((news) => news.id > 4).map((news, index) => (
              <div
                key={index}
                className="border-b-4 border-[#A92428] bg-white shadow-lg p-[20px] relative"
              >
                <h1>{news.content}</h1>
                <span className="absolute bottom-1 right-1">{news.time}</span>
              </div>
            ))}
          </motion.div>
          {/* 第二行的图片 */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-lg object-bottom"
          >
            <Image
              src={"/news_img.jpg"}
              alt="news_img"
              width={1000}
              height={1000}
            />
          </motion.div>
        </div>
      </div>
      {/* news for Mobile */}
      <div className="flex md:hidden flex-col px-[10vw]">
        {NewsData.map((news, index) => (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
            key={index}
            className="border-b-4 border-[#A92428] bg-white shadow-lg p-[20px] mb-[5vw] relative"
          >
            <h1>{news.content}</h1>
            <span className="absolute bottom-1 right-1">{news.time}</span>
          </motion.div>
        ))}
      </div>
    </>
  );
}
