import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const reviews = [
  {
    id: 1,
    text: "La auténtica pizza italiana en Alicante. La masa es espectacular, fermentada a la perfección, y el ambiente inmejorable. Un pedazo de Nápoles en San Juan.",
    author: "María G.",
    role: "Local Guide"
  },
  {
    id: 2,
    text: "Un viaje de sabores sin salir de la ciudad. La pasta fresca y el tiramisú son de otro mundo. El servicio es impecable y la carta de vinos sorprendente.",
    author: "Carlos R.",
    role: "Food Critic"
  },
  {
    id: 3,
    text: "Elegancia, buen servicio y una calidad de producto excepcional. El lugar perfecto para una cena especial. La atención de Virginia y Adrián se nota en cada detalle.",
    author: "Elena V.",
    role: "Cliente Habitual"
  },
  {
    id: 4,
    text: "Increíble descubrimiento. La burrata es fresquísima y la pizza Diavola tiene el toque picante perfecto. Volveremos sin duda.",
    author: "Javier M.",
    role: "Local Guide"
  },
  {
    id: 5,
    text: "El mejor restaurante italiano de la zona. La decoración es preciosa, la música acompaña perfectamente y la comida es un 10 absoluto.",
    author: "Laura P.",
    role: "Food Blogger"
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[#111111] relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] mb-4 block">
            {t('reviews.subtitle')}
          </span>
          <div className="flex justify-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={16} className="text-[#c5a059] fill-[#c5a059]" />
            ))}
          </div>
        </motion.div>

        <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <p className="text-xl md:text-3xl font-serif font-light text-white/90 leading-relaxed mb-8 italic">
                "{reviews[currentIndex].text}"
              </p>
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium tracking-widest uppercase text-white">
                  {reviews[currentIndex].author}
                </span>
                <span className="text-xs text-white/40 mt-1">
                  {reviews[currentIndex].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'bg-[#c5a059] w-6' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
