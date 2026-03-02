import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Concept() {
  const { t } = useLanguage();

  return (
    <section id="concept" className="relative py-32 md:py-48 bg-[#111111] overflow-hidden">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: 'url(/comedor_pro.png)', backgroundAttachment: 'fixed' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]/80"></div>
      <div className="absolute inset-0 z-0 bg-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Title & Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#c5a059]"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059]">
                {t('concept.subtitle')}
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] mb-12">
              {t('concept.title1')} <br />
              <span className="font-handwriting text-[#c5a059] text-6xl md:text-7xl lg:text-8xl mt-4 inline-block font-semibold tracking-wide" style={{ transform: 'rotate(-2deg)' }}>
                {t('concept.title2')}
              </span>
            </h2>

            <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-sm shadow-2xl hidden md:block">
               <img 
                 src="/foto_locla.png" 
                 alt="Concept" 
                 className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                 referrerPolicy="no-referrer"
               />
            </div>
          </motion.div>

          {/* Right Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="space-y-10 text-white/60 font-light leading-relaxed text-base md:text-lg">
              <p className="text-xl md:text-2xl text-white/90 font-serif italic leading-snug">
                "{t('concept.p1')}"
              </p>
              
              <div className="w-12 h-[1px] bg-white/20"></div>
              
              <p>
                {t('concept.p2')}
              </p>
              
              <p className="text-sm md:text-base text-white/50 uppercase tracking-widest leading-loose">
                {t('concept.p3')}
              </p>

              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm shadow-2xl md:hidden mt-12">
                 <img 
                   src="/foto_locla.png" 
                   alt="Concept" 
                   className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                   referrerPolicy="no-referrer"
                 />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
