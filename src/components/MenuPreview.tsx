import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function MenuPreview() {
  const { t } = useLanguage();

  const categories = [
    {
      title: "Pizza",
      subtitle: "La Napoletana",
      video: "/HORNO2LOOP.mp4",
      desc: "Masa madre de 72h, horno de leña.",
      link: "/menu#pizzas"
    },
    {
      title: "Pasta",
      subtitle: "Fatta a Mano",
      video: "/PASTALOOP.mp4",
      desc: "Elaboración diaria, receta tradicional.",
      link: "/menu#pastas"
    },
    {
      title: "Dolci",
      subtitle: "I Classici",
      video: "/CANOLILOOP.mp4",
      desc: "El final perfecto y vanguardista.",
      link: "/menu#postres"
    }
  ];

  return (
    <section id="menu" className="pt-32 md:pt-48 pb-16 md:pb-24 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] mb-4 block">
            {t('menuPreview.subtitle')}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6">
            {t('menuPreview.title1')} <span className="italic text-white/70">{t('menuPreview.title2')}</span>
          </h2>
          <p className="text-white/50 font-light max-w-2xl mx-auto text-sm md:text-base">
            {t('menuPreview.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.2 }}
            >
              <Link to={cat.link} className="block group relative h-[500px] md:h-[600px] overflow-hidden cursor-pointer">
                {/* Full card video background */}
                <video
                  src={cat.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] mb-2 block">{cat.subtitle}</span>
                  <h3 className="text-3xl font-serif text-white mb-3">{cat.title}</h3>
                  <p className="text-sm text-white/60 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {cat.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Link
            to="/menu"
            onClick={() => window.scrollTo(0, 0)}
            className="group relative inline-flex items-center justify-center px-12 py-5 text-sm uppercase tracking-[0.2em] font-medium text-black bg-white overflow-hidden transition-all duration-500 hover:scale-105"
          >
            <span className="absolute inset-0 w-full h-full bg-[#c5a059] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">{t('menuPreview.btn')}</span>
          </Link>
        </motion.div>

        {/* Allergen Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 pt-12 border-t border-white/5"
        >
          <p className="text-[9px] uppercase tracking-[0.5em] text-white/25 text-center mb-8">{t('allergen.title')}</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-5">
            {([
              { icon: '🌾', key: 'gluten' },
              { icon: '🥛', key: 'dairy' },
              { icon: '🐟', key: 'fish' },
              { icon: '🌿', key: 'celery' },
              { icon: '🥚', key: 'eggs' },
              { icon: '🥜', key: 'nuts' },
              { icon: '🦐', key: 'crustacean' },
              { icon: '🍷', key: 'sulfite' },
            ] as { icon: string; key: string }[]).map((a) => (
              <div key={a.key} className="flex flex-col items-center gap-1.5 group cursor-default">
                <span className="text-xl leading-none grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" role="img" aria-label={t(`allergen.${a.key}`)}>{a.icon}</span>
                <span className="text-[8px] uppercase tracking-widest text-white/25 group-hover:text-white/60 transition-colors duration-300">{t(`allergen.${a.key}`)}</span>
              </div>
            ))}
          </div>
          <p className="text-[8px] text-white/15 text-center mt-8 max-w-xl mx-auto leading-relaxed">
            {t('allergen.disclaimer')}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
