import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <section id="home" className="h-screen flex justify-center items-center bgImage">
        <div>
        <HeroSection/>
        </div>
      </section>
      <section id="about" className="h-screen flex items-center justify-center bg-white">
        <About/>
      </section>
      <section id="techstack" className="h-screen flex bg-white">
        <TechStack/>
      </section>
      <section id="projects" className="h-screen flex items-center justify-center bg-white">
        <Projects/>
      </section>
      <section id="experience" className="h-screen flex items-center justify-center bg-white mt-10">
        <Experience/>
      </section>
      <section id="contact" className="h-screen bg-white">
        <Contact/>
      </section>
      <section>
      <Footer/>
      </section>
    </main>
  );
}
