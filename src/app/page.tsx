import { Hero } from '@/sections/Hero';
import { Slideshow } from '@/components/SlideShow';
import { AboutSection } from '@/sections/About';
import { ServiceHighlights } from '@/sections/ServiceHighlights';
import { Testimonials } from '@/sections/Testimonials';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sintat Eggs",
            "url": "https://www.sintatteggs.com",
            "description": "Premium egg supplier in Malaysia",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "MY",
              "addressLocality": "Malaysia"
            }
          })
        }}
      />
      <Slideshow />
      <Hero />
      <AboutSection />
      <ServiceHighlights />
      <Testimonials />
    </>
  );
}