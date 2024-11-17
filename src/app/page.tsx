import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Slideshow } from '@/components/SlideShow';
import { LogoTicker } from '@/sections/LogoTicker'; 
import { AboutSection } from '@/sections/About';
import { ServiceHighlights } from '@/sections/ServiceHighlights';
import { Testimonials } from '@/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
        <Slideshow />
        <Hero />
      <LogoTicker />
      <AboutSection />
      <ServiceHighlights />
      <Testimonials />
    </>
  );
}