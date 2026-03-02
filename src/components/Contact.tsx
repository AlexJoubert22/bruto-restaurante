import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative bg-[#111111] pt-32 pb-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] mb-4 block">
            {t('contact.subtitle')}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">
            {t('contact.title1')} <span className="italic text-white/70">{t('contact.title2')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Contact Options - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:pr-12 lg:border-r border-white/10 flex flex-col justify-center h-full"
          >
            <p className="text-white/70 font-light leading-relaxed mb-10 text-lg">
              {t('contact.intro')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-start">
                <MapPin className="text-[#c5a059] mb-3" size={20} />
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">{t('contact.location')}</h3>
                <p className="text-sm font-light text-white/80 leading-relaxed">
                  Cam. del Faro, 11<br />
                  03540 Alicante
                </p>
              </div>

              <div className="flex flex-col items-start w-full">
                <Clock className="text-[#c5a059] mb-3" size={20} />
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4">{t('contact.hours')}</h3>
                <div className="w-full space-y-3 text-sm font-light text-white/80">
                  <div className="flex justify-between items-start border-b border-white/10 pb-2">
                    <span className="text-white/60">{t('contact.hours.days.wedSat')}</span>
                    <div className="text-right">
                      <span>13:00 - 17:00</span><br />
                      <span>20:00 - 23:30</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start border-b border-white/10 pb-2">
                    <span className="text-white/60">{t('contact.hours.days.sun')}</span>
                    <div className="text-right">
                      <span>13:00 - 17:00</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-white/60">{t('contact.hours.days.monTue')}</span>
                    <span className="text-[#c5a059] italic">{t('contact.hours.closed')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* WhatsApp Bubble */}
              <a
                href="https://wa.me/34642106726"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/50 hover:shadow-[0_0_40px_rgba(37,211,102,0.3)] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/0 via-[#25D366]/5 to-[#25D366]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366] group-hover:shadow-[0_0_20px_rgba(37,211,102,0.8)] transition-all duration-500">
                    <MessageCircle size={20} className="text-[#25D366] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-white mb-1">{t('contact.whatsapp')}</h4>
                    <p className="text-xs text-white/50 font-mono">+34 642 106 726</p>
                  </div>
                </div>
                <span className="text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-500 relative z-10">→</span>
              </a>

              {/* Phone Bubble */}
              <a
                href="tel:+34865551291"
                className="group flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-[#c5a059]/10 hover:border-[#c5a059]/50 hover:shadow-[0_0_40px_rgba(197,160,89,0.3)] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#c5a059]/0 via-[#c5a059]/5 to-[#c5a059]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#c5a059]/20 flex items-center justify-center group-hover:bg-[#c5a059] group-hover:shadow-[0_0_20px_rgba(197,160,89,0.8)] transition-all duration-500">
                    <Phone size={20} className="text-[#c5a059] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-white mb-1">{t('contact.phone')}</h4>
                    <p className="text-xs text-white/50 font-mono">+34 865 551 291</p>
                  </div>
                </div>
                <span className="text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500 relative z-10">→</span>
              </a>

              {/* Email Bubble */}
              <a
                href="mailto:contacto@brutofood.es"
                className="group flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-500">
                    <Mail size={20} className="text-white/70 group-hover:text-black transition-colors duration-500" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-white mb-1">{t('contact.email')}</h4>
                    <p className="text-xs text-white/50 font-mono">contacto@brutofood.es</p>
                  </div>
                </div>
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 relative z-10">→</span>
              </a>

              {/* Social Media Boxes */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/brutoalicante/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center py-5 px-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/0 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000"></div>
                  <Instagram size={22} className="text-white/70 group-hover:text-white transition-colors duration-500 mb-3 relative z-10" />
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-500 relative z-10">Instagram</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/BrutoAlicante/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center py-5 px-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/0 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000"></div>
                  <Facebook size={22} className="text-white/70 group-hover:text-white transition-colors duration-500 mb-3 relative z-10" />
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-500 relative z-10">Facebook</span>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@bruto.alicante"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center py-5 px-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/0 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000"></div>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover:text-white transition-colors duration-500 mb-3 relative z-10">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-500 relative z-10">TikTok</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map & Info - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col h-full"
          >
            {/* Map */}
            <div className="w-full h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden transition-all duration-1000 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10"></div>
              <iframe
                src="https://maps.google.com/maps?q=Cam.+del+Faro,+11,+03540+Alicante&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(120%)' }}
                className="group-hover:filter-none transition-all duration-1000"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bruto Restaurant Location"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
