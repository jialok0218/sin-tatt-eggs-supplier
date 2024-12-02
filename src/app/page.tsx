import { Hero } from '@/sections/Hero';
import { Slideshow } from '@/components/SlideShow';
import { AboutSection } from '@/sections/About';
import { ServiceHighlights } from '@/sections/ServiceHighlights';
import { Testimonials } from '@/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Slideshow />
      <Hero />
      <AboutSection />
      <ServiceHighlights />
      <Testimonials />
    </>
  );
}