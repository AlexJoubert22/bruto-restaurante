import { Instagram, Facebook, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6 flex justify-center md:justify-start">
              <img
                src="/logosinfondo1.png"
                alt="Bruto"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/50 text-sm font-light max-w-sm mx-auto md:mx-0 leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#c5a059] mb-2">{t('footer.explore')}</h4>
            <a href="#concept" className="text-white/50 hover:text-white text-sm transition-colors">{t('nav.concept')}</a>
            <a href="#menu" className="text-white/50 hover:text-white text-sm transition-colors">{t('nav.menu')}</a>
            <a href="#wine" className="text-white/50 hover:text-white text-sm transition-colors">{t('wine.subtitle')}</a>
            <a href="#team" className="text-white/50 hover:text-white text-sm transition-colors">{t('team.subtitle')}</a>
          </div>

          {/* Socials & Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#c5a059] mb-2">{t('contact.contact')}</h4>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors flex items-center justify-center md:justify-start gap-2">
              <Instagram size={16} /> Instagram
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors flex items-center justify-center md:justify-start gap-2">
              <Facebook size={16} /> Facebook
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors flex items-center justify-center md:justify-start gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
              TikTok
            </a>
            <a href="#contact" className="text-white/50 hover:text-white text-sm transition-colors flex items-start justify-center md:justify-start gap-2 mt-2">
              <MapPin size={16} className="mt-1 shrink-0" />
              <span className="text-left">
                {t('contact.location')}<br />
                <span className="text-xs opacity-70">Cam. del Faro, 11, 03540 Alicante</span>
              </span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 font-light">
            {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-xs text-white/30 font-light">
            <a href="#" className="hover:text-white transition-colors">{t('footer.legal.terms')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.legal.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.legal.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
