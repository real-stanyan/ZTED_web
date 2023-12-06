import Image from "next/image";

export default function Guoxue() {
  return (
    <div>
      <Image
        src={"/courseintro/guoxue/1.jpeg"}
        alt="guoxue1"
        width={2000}
        height={2000}
      />
      <Image
        src={"/courseintro/guoxue/2.jpeg"}
        alt="guoxue2"
        width={2000}
        height={2000}
      />
    </div>
  );
}
