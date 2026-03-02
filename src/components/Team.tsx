import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Team() {
  const { t } = useLanguage();

  const masters = [
    {
      role: "Executive Chef",
      name: "Virginia",
      image: "/gina_pro.png",
      desc: t('team.chef.desc'),
      quote: t('team.chef.quote')
    },
    {
      role: "Maestro Pizzaiolo",
      name: "Adrián",
      image: "/adi_pro.png",
      desc: t('team.pizza.desc'),
      quote: t('team.pizza.quote')
    }
  ];

  return (
    <section id="team" className="py-32 md:py-48 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4 block">
            {t('team.subtitle')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight">
            {t('team.title1')} <br />
            <span className="italic text-white/70">{t('team.title2')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {masters.map((master, idx) => (
            <motion.div 
              key={master.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className="flex flex-col"
            >
              {/* Image */}
              <div className="relative h-[500px] md:h-[600px] mb-10 overflow-hidden group">
                <img
                  src={master.image}
                  alt={master.name}
                  className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                
                {/* Name overlay */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-serif mb-1 text-white">{master.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-[#c5a059]">{master.role}</p>
                </div>
              </div>

              {/* Text */}
              <div className="space-y-6 text-white/60 font-light leading-relaxed text-sm md:text-base">
                <p>{master.desc}</p>
                <p className="font-serif italic text-white/80 text-lg border-l-2 border-[#c5a059] pl-4 py-1">
                  "{master.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
