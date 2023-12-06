import Image from "next/image";

export default function Gaojiyanxui() {
  return (
    <div>
      <Image
        src={"/courseintro/yushang/1.jpeg"}
        alt="guoxue1"
        width={2000}
        height={2000}
      />
      <Image
        src={"/courseintro/yushang/2.jpeg"}
        alt="guoxue2"
        width={2000}
        height={2000}
      />
    </div>
  );
}
