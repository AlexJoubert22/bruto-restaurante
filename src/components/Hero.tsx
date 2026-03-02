import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/fondo_hero.webp"
          alt="Bruto Restaurant Interior"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-xs md:text-sm uppercase tracking-[0.3em] text-white/70 mb-6">
            {t('hero.subtitle')}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8"
        >
          <img 
            src="/logosinfondo1.png" 
            alt="Bruto" 
            className="h-32 md:h-48 lg:h-64 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-sm md:text-base font-light tracking-wider text-white/80 max-w-lg mx-auto leading-relaxed"
        >
          {t('hero.desc')}
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4">
          {t('hero.discover')}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
