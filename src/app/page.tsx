import Image from "next/image";
import NextLogo from "../../public/next-js-seeklogo.svg";

export default function Home() {
  return (
    <main className="flex flex-col text-center justify-center items-center">
      <Image 
        src={NextLogo}
        alt="Next"
        className="my-5"
      />
      <h1 className="text-4xl md:text-5xl font-bold">Welcome to my NextJS App!</h1>
    </main>
  );
}
