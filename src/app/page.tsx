import { Navbar } from "@/components/Navbar";
import { Toc } from "@/components/Toc";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Chapter1 } from "@/components/sections/Chapter1";
import { Chapter2 } from "@/components/sections/Chapter2";
import { Chapter3 } from "@/components/sections/Chapter3";
import { Chapter4 } from "@/components/sections/Chapter4";
import { Chapter5 } from "@/components/sections/Chapter5";
import { Chapter6 } from "@/components/sections/Chapter6";
import { ConclusionLong } from "@/components/sections/ConclusionLong";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Toc />
      <Hero />
      <Intro />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
      <Chapter5 />
      <Chapter6 />
      <ConclusionLong />
    </main>
  );
}
