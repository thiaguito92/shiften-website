import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Services from "./components/Services";
import Process from "./components/Process";
import FreeDemo from "./components/FreeDemo";
import Principles from "./components/Principles";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Journey />
      <Services />
      <Process />
      <FreeDemo />
      <Principles />
      <Contact />
    </main>
  );
}
