import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      {/* <Projects /> */}
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      {/* <Blog /> */}
      <div className="section-divider" />
      {/* <Contact /> */}
    </>
  );
}