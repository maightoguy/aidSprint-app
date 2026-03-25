import "./App.css";
import { Header } from "./landing/Header";
import { Hero } from "./landing/Hero";
import { Services } from "./landing/Services";
import { HowItWorks } from "./landing/HowItWorks";
import { OurStory } from "./landing/OurStory";
import { FAQ } from "./landing/FAQ";
import { ContactUs } from "./landing/ContactUs";
import { Review } from "./landing/Review";
import { Footer } from "./landing/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <OurStory />
      <FAQ />
      <ContactUs />
      <Review />
      <Footer />
    </>
  );
}
