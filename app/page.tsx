import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing/Pricing';
import FAQ from '@/components/FAQ';
import Logos from '@/components/Logos';
import Benefits from '@/components/Benefits/Benefits';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Satisfaction from '@/components/Satisfaction';
import GlobalService from '@/components/GlobalService';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      <Logos />
      <Container>
        <Benefits />
        <Satisfaction />
        <GlobalService />

        {/* <Section
          id="pricing"
          title="Pricing"
          description="Simple, Transparent Pricing. No Surprises."
        >
          <Pricing />
        </Section> */}

        {/* <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section> */}

        {/* <FAQ /> */}

        {/* <Stats /> */}

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
