import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div></div>
      {/* Footer底部 */}
      <div className="flex justify-evenly items-center p-[1vw] text-[white] bg-[#860705]">
        {/* 版权 */}
        <h1 className="font-formal md:text-[1vw]">
          版权所有©海南志途教育科技有限公司
        </h1>
        <span className="text-white/50 hidden md:block">|</span>
        {/* 地址 */}
        <h1 className="font-formal md:text-[1vw]">
          地址: 北京市海淀区颐和园路2号未来科技大厦3层309室
        </h1>
        <span className="text-white/50 hidden md:block">|</span>
        {/* 邮编 */}
        <h1 className="font-formal md:text-[1vw]">邮编: 100080</h1>
        <span className="text-white/50 hidden md:block">|</span>
        {/* 邮箱 */}
        <h1 className="font-formal md:text-[1vw]">
          反馈意见: archiezhang97@gmail.com
        </h1>
        <span className="text-white/50 hidden md:block">|</span>
        {/* 备案号 */}
        <h1 className="font-formal md:text-[1vw]">琼ICP备2023011210号</h1>
      </div>
    </div>
  );
}
