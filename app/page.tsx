import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import Satisfaction from "@/components/Satisfaction";
import GlobalService from "@/components/GlobalService";

const HomePage = () => {
  return (
    <>
      <Hero />

      <Logos />
      <Container>
        <Benefits />
        <Satisfaction />
        <GlobalService />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
