import { Background } from "@/components/layout/Background";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Works } from "@/components/sections/Works";
import { Experience } from "@/components/sections/Experience";
import { Research } from "@/components/sections/Research";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Resume } from "@/components/sections/Resume";
import { Labs } from "@/components/sections/Labs";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Works />
        <Experience />
        <Research />
        <GitHubActivity />
        <Resume />
        <Labs />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
