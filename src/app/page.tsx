import Hero from "@/components/Hero";
import AboutLuxor from "@/components/AboutLuxor";
import WindowCleaning from "@/components/WindowCleaning";
import Faq from "@/components/Faq";
import ServiceMarquee from "@/components/ServiceMarquee";
import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutLuxor />
      <ServiceMarquee />
      <WindowCleaning />
      <Faq />
      <GetStarted />
    </main>
  );
}
