import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import UseCases from "./components/UseCases";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <UseCases />
      <WhyUs />
      <CTA /> 
      <Footer />
    </>
  );
}