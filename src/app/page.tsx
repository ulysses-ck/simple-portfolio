import Hero from "@/components/hero";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="px-44 flex flex-col">
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  );
}
