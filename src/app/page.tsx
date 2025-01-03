import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="px-44 flex flex-col">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
