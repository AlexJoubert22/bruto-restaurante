import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Users, Dog, Sun, Car } from 'lucide-react';

export default function Wine() {
  const { t } = useLanguage();

  const features = [
    {
      id: 'vip',
      icon: <Users className="w-5 h-5" />,
      title: t('wine.features.vip.title'),
      desc: t('wine.features.vip.desc')
    },
    {
      id: 'pet',
      icon: <Dog className="w-5 h-5" />,
      title: t('wine.features.pet.title'),
      desc: t('wine.features.pet.desc')
    },
    {
      id: 'terrace',
      icon: <Sun className="w-5 h-5" />,
      title: t('wine.features.terrace.title'),
      desc: t('wine.features.terrace.desc')
    },
    {
      id: 'parking',
      icon: <Car className="w-5 h-5" />,
      title: t('wine.features.parking.title'),
      desc: t('wine.features.parking.desc')
    }
  ];

  return (
    <section id="wine" className="flex flex-col lg:flex-row w-full min-h-[80vh] overflow-hidden border-y border-white/5">

      {/* Left Column: LA CANTINA */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center py-24 px-8 md:px-16 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40 scale-105"
            style={{ backgroundImage: 'url(/vino.webp)' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-xl w-full"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs uppercase tracking-[0.4em] text-[#c5a059] font-medium">
              {t('wine.subtitle')}
            </span>
            <div className="w-12 h-[1px] bg-[#c5a059]/50"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif font-light mb-10 leading-tight">
            {t('wine.title1')} <br />
            <span className="italic text-white/80 ">{t('wine.title2')}</span>
          </h2>

          <div className="text-white/60 font-light leading-relaxed text-sm md:text-base space-y-6 mb-12 max-w-lg">
            <p>{t('wine.p1')}</p>
            <p>{t('wine.p2')}</p>
          </div>

          <Link
            to="/menu#vinos"
            className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white hover:text-[#c5a059] transition-all"
          >
            <span className="border-b border-white/30 group-hover:border-[#c5a059] pb-1 transition-colors">
              {t('wine.btn')}
            </span>
            <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-[#c5a059] transition-all duration-500"></div>
          </Link>
        </motion.div>
      </div>

      {/* Right Column: L'ESSENZA */}
      <div id="essence" className="w-full lg:w-1/2 relative flex items-center justify-center py-24 px-8 md:px-16 overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/barrabruto.webp"
            alt="Bruto Bar"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative z-10 max-w-xl w-full"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs uppercase tracking-[0.4em] text-[#c5a059] font-medium">
              {t('nav.essence')}
            </span>
            <div className="w-12 h-[1px] bg-[#c5a059]/50"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif font-light mb-12 leading-tight">
            L' <span className="italic text-[#c5a059]">Essenza</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + (idx * 0.1) }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#c5a059]/30 hover:bg-black/60 transition-all duration-500 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-white/[0.05] border border-white/10 text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-black transition-all duration-500">
                      {feature.icon}
                    </div>
                    <h4 className="text-white text-xs uppercase tracking-widest font-medium group-hover:text-[#c5a059] transition-colors duration-300">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-white/50 text-xs font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-white/10">
            <div className="flex flex-col gap-6">
              <blockquote className="italic text-white/60 text-sm font-light border-l-2 border-[#c5a059] pl-6 py-2 bg-black/20 backdrop-blur-sm rounded-r-lg">
                "Bruto es un ritual, un espacio diseñado para celebrar la vida a través de los sentidos."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
