// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import InformationSection from "./information-section";
import Testimonial from "./testimonial";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero /> <br/> <br/> <br/> 
      <InformationSection />
      <Testimonial />
      <Footer />
    </>
  );
}
