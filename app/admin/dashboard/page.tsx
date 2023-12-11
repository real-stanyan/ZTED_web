"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// import from zustand
import useAdmin from "@/stores/useAdmin";

// import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const adminName = useAdmin((state) => state.admin.username);

  // 判断admin是否登陆
  useEffect(() => {
    if (adminName === "") {
      router.push("/admin");
    }
  });
  return (
    <div className="w-full h-[90vh] flex flex-col items-center text-[white]">
      <h1 className="font-formal text-[black] text-center text-[3vw] my-[2vw]">
        管理员👷‍♂️后台
      </h1>
      {/* 后代功能列表 */}
      <div className="flex w-[60%] flex-wrap">
        <Link
          href={"dashboard/registerForm"}
          className="w-[33%] h-[100px] bg-[#890a05] hover:bg-[#bb0007] rounded-tl-3xl border text-center leading-[100px] text-[2vw] font-formal hover:border-8 hover:leading-[84px] hover:border-white cursor-pointer"
        >
          查看报名表
        </Link>
        <Link
          href={"dashboard/userForm"}
          className="w-[33%] h-[100px] bg-[#890a05] hover:bg-[#bb0007] border text-center leading-[100px] text-[2vw] font-formal hover:border-8 hover:leading-[84px] hover:border-white cursor-pointer"
        >
          会员管理
        </Link>
        <Link
          href={"dashboard/adminForm"}
          className="w-[33%] h-[100px] bg-[#890a05] hover:bg-[#bb0007]  rounded-tr-3xl border text-center leading-[100px] text-[2vw] font-formal hover:border-8 hover:leading-[84px] hover:border-white cursor-pointer"
        >
          员工管理
        </Link>
        <div className="w-[33%] h-[100px] bg-[#890a05] hover:bg-[#bb0007] rounded-bl-3xl border text-center leading-[100px] text-[2vw] font-formal hover:border-8 hover:leading-[84px] hover:border-white cursor-pointer">
          敬请期待🙈🛠️
        </div>
        <div className="w-[33%] h-[100px] bg-[#890a05] hover:bg-[#bb0007] border text-center leading-[100px] text-[2vw] font-formal hover:border-8 hover:leading-[84px] hover:border-white cursor-pointer">
          敬请期待🙈🛠️
        </div>
        <div className="w-[33%] h-[100px] bg-[#890a05] hover:bg-[#bb0007] rounded-br-3xl border text-center leading-[100px] text-[2vw] font-formal hover:border-8 hover:leading-[84px] hover:border-white cursor-pointer">
          敬请期待🙈🛠️
        </div>
      </div>
      {/* 联系技术员 */}
      {/* <div className="flex flex-col items-center">
        <h1 className="my-[3vw] text-black font-formal md:text-[3vw]">
          如果遇到问题，请联系:
        </h1>
        <div className="flex flex-col items-center">
          <Image
            src="/images/stan_qr.JPG"
            alt="严文尧二维码"
            width={150}
            height={150}
            className="w-[30vw] md:w-[15vw] rounded mb-[2vw]"
          />
          <p className="font-formal text-black">微信号: yan1464729020</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/images/ricks_qr.JPG"
            alt="张铭轩二维码"
            width={150}
            height={150}
            className="w-[30vw] md:w-[15vw] rounded mb-[2vw]"
          />
          <p className="font-formal text-black">微信号: ZCXMX0302</p>
        </div>
      </div> */}
    </div>
  );
}
