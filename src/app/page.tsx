import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Slideshow } from '@/components/SlideShow';

export default function Home() {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <Slideshow />
        <Header />
        <Hero />
      </div>
    </>
  );
}