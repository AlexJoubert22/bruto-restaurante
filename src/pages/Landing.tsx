import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import MenuPreview from '../components/MenuPreview';
import Wine from '../components/Wine';
import Team from '../components/Team';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Landing() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main className="bg-black min-h-screen text-white selection:bg-[#c5a059] selection:text-black">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-black">
        <Concept />
        <MenuPreview />
        <Wine />
        <Team />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
