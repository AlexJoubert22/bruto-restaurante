import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

// --- Allergen Icon System ---
type AllergenKey = 'gluten' | 'dairy' | 'fish' | 'celery' | 'eggs' | 'nuts' | 'crustacean' | 'sulfite';

const allergenData: { key: AllergenKey; icon: string }[] = [
  { key: 'gluten', icon: '🌾' },
  { key: 'dairy', icon: '🥛' },
  { key: 'fish', icon: '🐟' },
  { key: 'celery', icon: '🌿' },
  { key: 'eggs', icon: '🥚' },
  { key: 'nuts', icon: '🥜' },
  { key: 'crustacean', icon: '🦐' },
  { key: 'sulfite', icon: '🍷' },
];

// Small inline component to render allergen pills for a dish
function AllergenBadges({ allergens, t }: { allergens: AllergenKey[]; t: (k: string) => string }) {
  if (!allergens || allergens.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {allergens.map((a) => {
        const info = allergenData.find(d => d.key === a);
        if (!info) return null;
        const label = t(`allergen.${a}`);
        return (
          <span
            key={a}
            title={label}
            className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors duration-300 cursor-default"
          >
            <span className="text-sm leading-none" role="img" aria-label={label}>{info.icon}</span>
          </span>
        );
      })}
    </div>
  );
}

const categories = [
  { id: 'entrantes', name: 'Entrantes', image: '/plato_entrantes.png' },
  { id: 'principales', name: 'Platos Principales', image: '/pulpo.png' },
  { id: 'pizzas', name: 'Pizzas', image: '/pizza.png' },
  { id: 'pastas', name: 'Pastas', image: '/pasta_desde_arriba.png' },
  { id: 'postres', name: 'Postres', image: '/tiramisu.png' },
  { id: 'vinos', name: 'Carta de Vinos', image: '/vino.webp' },
];

const menuData = {
  entrantes: [
    { name: "Ceviche de Gambas Blancas", desc: "", price: "18.50", allergens: ['crustacean'] as AllergenKey[] },
    { name: "Salmón Marinado casero", desc: "Con aguacate y wasabi", price: "15.50", allergens: ['fish'] as AllergenKey[] },
    { name: "Carpaccio de Solomillo de Ternera", desc: "Con rúcula, parmigiano rallado y aceite de oliva virgen trufado", price: "19.50", allergens: ['dairy'] as AllergenKey[] },
    { name: "Burrata Italiana Fresca", desc: "Con tomates raff y albahaca", price: "15.00", allergens: ['dairy'] as AllergenKey[] },
    { name: "Ensalada de Aguacate y Quinoa", desc: "Con tomates cherry, hojas verdes frescas y lima", price: "12.50", allergens: [] as AllergenKey[] },
    { name: "Calamar de Bahía a la Andaluza", desc: "", price: "21.00", allergens: ['gluten', 'fish'] as AllergenKey[] },
    { name: "Boquerones Fritos", desc: "", price: "12.50", allergens: ['gluten', 'fish'] as AllergenKey[] },
    { name: "Provolone Italiano Ahumado", desc: "Derretido al horno de leña", price: "9.50", allergens: ['dairy'] as AllergenKey[] },
    { name: "Bruschettas Italianas Caseras", desc: "Con tomate fresco, albahaca y anchoas", price: "7.00", allergens: ['gluten', 'fish'] as AllergenKey[] },
  ],
  pastas: [
    { name: "Espaguetis Negros de Sepia", desc: "Con ceviche de gambas blancas frescas", price: "21.50", allergens: ['gluten', 'fish', 'crustacean', 'celery'] as AllergenKey[] },
    { name: "Ravioli Rabo de Toro", desc: "Salvia y miso butter", price: "19.00", allergens: ['gluten', 'dairy', 'eggs'] as AllergenKey[] },
    { name: "Auténtica Spaghetti Carbonara", desc: "Italiana con Guanciale", price: "17.00", allergens: ['gluten', 'dairy', 'eggs'] as AllergenKey[] },
    { name: "Lasaña", desc: "Con ragú de ternera, bechamel y parmigiano", price: "17.00", allergens: ['gluten', 'dairy', 'celery', 'eggs'] as AllergenKey[] },
    { name: "Spaghetti AOP con Gambas", desc: "", price: "17.00", allergens: ['gluten', 'celery', 'crustacean'] as AllergenKey[] },
    { name: "Linguini con Almejas", desc: "", price: "16.50", allergens: ['gluten', 'crustacean', 'sulfite'] as AllergenKey[] },
    { name: "Risotto con Funghi Porcini", desc: "", price: "16.00", allergens: ['dairy'] as AllergenKey[] },
    { name: "Pappardelle con Ragú de Ternera", desc: "Y parmigiano", price: "15.50", allergens: ['gluten', 'dairy', 'celery', 'eggs'] as AllergenKey[] },
    { name: "Casarecce alla Norma", desc: "Con tomate fresco, berenjenas y ricotta salata", price: "15.00", allergens: ['gluten', 'dairy'] as AllergenKey[] },
    { name: "Gnocchi con Burrata", desc: "Y tomate fresco", price: "15.00", allergens: ['gluten', 'dairy'] as AllergenKey[] },
    { name: "Penne Arrabiata", desc: "(¡Muy picantes!)", price: "12.50", allergens: ['gluten'] as AllergenKey[] },
  ],
  pizzas: [
    { name: "Pizza Salmón", desc: "", price: "17.90", allergens: ['gluten', 'dairy', 'fish'] as AllergenKey[] },
    { name: "Pizza Capricciosa", desc: "", price: "16.50", allergens: ['gluten', 'dairy'] as AllergenKey[] },
    { name: "Pizza 4 Formaggi", desc: "", price: "16.50", allergens: ['gluten', 'dairy'] as AllergenKey[] },
    { name: "Pizza Tuna", desc: "", price: "16.00", allergens: ['gluten', 'dairy', 'fish'] as AllergenKey[] },
    { name: "Pizza con Anchoas", desc: "", price: "16.00", allergens: ['gluten', 'fish', 'dairy'] as AllergenKey[] },
    { name: "Pizza Prosciutto Cotto", desc: "", price: "15.50", allergens: ['gluten', 'dairy'] as AllergenKey[] },
    { name: "Pizza Vegetariana", desc: "", price: "15.00", allergens: ['gluten', 'dairy'] as AllergenKey[] },
    { name: "Pizza Diavola", desc: "", price: "15.00", allergens: ['gluten', 'dairy'] as AllergenKey[] },
    { name: "Pizza Margherita", desc: "", price: "12.00", allergens: ['gluten', 'dairy'] as AllergenKey[] },
  ],
  principales: [
    { name: "Solomillo a la Plancha", desc: "Con puré de patata morada y asparagus", price: "34.50", allergens: ['dairy', 'gluten'] as AllergenKey[] },
    { name: "Straccetti de Solomillo", desc: "Con setas, parmesano y rúcula", price: "32.00", allergens: ['dairy', 'nuts'] as AllergenKey[] },
    { name: "Cotoletta Milanese Crujiente", desc: "Frita en aceite de oliva y mantequilla", price: "28.00", allergens: ['gluten', 'dairy', 'eggs'] as AllergenKey[] },
    { name: "Pulpo a la Plancha", desc: "Con puré de patata al cúrcuma, tomates secos y alcaparras, olive taggiasche", price: "23.00", allergens: ['dairy', 'gluten', 'fish'] as AllergenKey[] },
    { name: "Osso Bucco", desc: "Cocinado a fuego lento en horno de leña", price: "22.50", allergens: ['gluten', 'celery'] as AllergenKey[] },
    { name: "Calamar Fresco de Arrecife a la Parilla", desc: "Con salsa de cilantro, chili y ajo", price: "21.00", allergens: ['fish'] as AllergenKey[] },
    { name: "Verduras a la Brasa", desc: "Guarnición", price: "7.50", allergens: [] as AllergenKey[] },
    { name: "Patatas Fritas Doradas Caseras", desc: "Guarnición", price: "6.00", allergens: ['gluten', 'dairy'] as AllergenKey[] },
    { name: "Puré de Patatas", desc: "Con espinacas tiernas frescas (Guarnición)", price: "6.00", allergens: ['gluten', 'dairy'] as AllergenKey[] },
    { name: "Ensalada Verde Mixta", desc: "Lechuga, espinacas, rúcula (Guarnición)", price: "6.00", allergens: [] as AllergenKey[] },
  ],
  postres: [
    { name: "Merengue con Crema de Yuzu", desc: "", price: "8.50", allergens: ['eggs', 'gluten', 'dairy'] as AllergenKey[] },
    { name: "Semifreddo de Chocolate Belgica", desc: "", price: "8.00", allergens: ['gluten', 'dairy'] as AllergenKey[] },
    { name: "Tarta de Queso", desc: "Cremosa y ligera con mango y maracuyá", price: "7.50", allergens: ['gluten', 'dairy', 'eggs'] as AllergenKey[] },
    { name: "Tiramisu", desc: "Con auténtico queso mascarpone", price: "7.00", allergens: ['gluten', 'dairy', 'eggs'] as AllergenKey[] },
    { name: "Cannolo Siciliano Relleno", desc: "Con crema de ricotta", price: "7.00", allergens: ['gluten', 'nuts', 'eggs', 'dairy'] as AllergenKey[] },
  ],
  vinos: [
    {
      category: "Vino Tinto", items: [
        { name: "Aalto", desc: "Tempranillo, Ribera del Duero", price: "53.00", allergens: ['sulfite'] as AllergenKey[] },
        { name: "Triga", desc: "Cabernet Sauvignon, Monastrell, Alicante", price: "49.00", allergens: ['sulfite'] as AllergenKey[] },
        { name: "San Román", desc: "Tempranillo, Toro", price: "37.50", allergens: ['sulfite'] as AllergenKey[] },
        { name: "Vina Ardanza Reserva", desc: "Tempranillo / Garnacha, Rioja", price: "33.00", allergens: ['sulfite'] as AllergenKey[] },
        { name: "Arzuaga Crianza", desc: "Tempranillo / Cabernet, Ribera del Duero", price: "29.00", allergens: ['sulfite'] as AllergenKey[] },
        { name: "LUIS CAÑAS", desc: "Garnacha, Tempranillo, Rioja", price: "19.50", glass: "4.00", allergens: ['sulfite'] as AllergenKey[] },
        { name: "Finca Resalso", desc: "Tempranillo, Ribera del Duero", price: "18.50", glass: "4.00", allergens: ['sulfite'] as AllergenKey[] },
      ]
    },
    {
      category: "Vino Blanco", items: [
        { name: "Finca la Colina", desc: "Sauvignon blanc, Rueda", price: "23.50", allergens: ['sulfite'] as AllergenKey[] },
        { name: "Terras Gauda", desc: "Albariño, Rias Baixas", price: "23.00", allergens: ['sulfite'] as AllergenKey[] },
        { name: "O Luar do Sil", desc: "Godello, Valdeorras", price: "21.00", allergens: ['sulfite'] as AllergenKey[] },
        { name: "José Pariente", desc: "Verdejo, Rueda", price: "19.00", allergens: ['sulfite'] as AllergenKey[] },
      ]
    },
    {
      category: "Vino Rosado", items: [
        { name: "Muga Rosado", desc: "Garnacha, Viura, Rioja", price: "19.00", allergens: ['sulfite'] as AllergenKey[] },
        { name: "Naranjas Azules", desc: "Garnacha, Sotomayor", price: "18.00", glass: "3.50", allergens: ['sulfite'] as AllergenKey[] },
      ]
    },
    {
      category: "Cava & Champagne", items: [
        { name: "Veuve Clicquot", desc: "Pinot Noir, Chardonnay, Pinot Meunier", price: "95.00", allergens: ['sulfite'] as AllergenKey[] },
        { name: "Henri de Verlaine 75cl", desc: "Chardonnay, Pinot Noir, Champagne", price: "40.00", allergens: ['sulfite'] as AllergenKey[] },
        { name: "Finca in a Bubble", desc: "Macabeo, Chardonnay, Valencia", price: "25.00", glass: "5.50", allergens: ['sulfite'] as AllergenKey[] },
      ]
    },
    {
      category: "Lambrusco", items: [
        { name: "Lambrusco Rose di Bacco", desc: "Lambrusco, Emilia-Romagna", price: "14.50", allergens: ['sulfite'] as AllergenKey[] },
      ]
    }
  ]
};

export default function FullMenu() {
  const [activeSection, setActiveSection] = useState('entrantes');
  const [direction, setDirection] = useState(0);
  const location = useLocation();
  const { t, lang } = useLanguage();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && categories.some(c => c.id === hash)) {
      setActiveSection(hash);
      // Scroll down a bit so the hero isn't taking up the whole screen
      setTimeout(() => {
        window.scrollTo({ top: window.innerHeight * 0.5, behavior: 'smooth' });
      }, 500);
    }
  }, [location]);

  const handleCategoryChange = (newId: string) => {
    if (newId === activeSection) return;
    const currentIndex = categories.findIndex(c => c.id === activeSection);
    const newIndex = categories.findIndex(c => c.id === newId);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveSection(newId);
  };

  const activeCategory = categories.find(c => c.id === activeSection);

  // Elegant 3D "Page Turn" animation variants
  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      rotateY: direction > 0 ? 15 : -15,
      transformPerspective: 1200,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      transformPerspective: 1200,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      rotateY: direction < 0 ? 15 : -15,
      transformPerspective: 1200,
    })
  };

  const renderMenuItems = (items: any[]) => (
    <div className="flex flex-col gap-y-8">
      {items.map((item, idx) => (
        <div key={idx} className="group">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-base md:text-lg font-medium tracking-wide group-hover:text-[#c5a059] transition-colors duration-300">
              {item.name}
            </h3>
            <div className="flex-grow border-b border-dotted border-white/20 mx-4 relative top-[-6px]"></div>
            <div className="text-right shrink-0">
              <span className="text-sm text-white/80 font-mono">€{item.price}</span>
              {item.glass && (
                <span className="text-xs text-white/40 font-mono block mt-1">/ €{item.glass} {lang === 'ES' ? 'copa' : 'glass'}</span>
              )}
            </div>
          </div>
          {item.desc && (
            <p className="text-sm text-white/40 font-light leading-relaxed max-w-[85%]">
              {item.desc}
            </p>
          )}
          <AllergenBadges allergens={item.allergens || []} t={t} />
        </div>
      ))}
    </div>
  );

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[#c5a059] selection:text-black relative">
      {/* Fixed Background Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <img
          src="/fondo_hero.webp"
          alt="Texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Visual Hero */}
        <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/mesa_completa.png"
              alt="Bruto Menu"
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-black/80"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center px-6 mt-20"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] mb-4 block">
              {t('fullmenu.subtitle')}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-6">
              {t('fullmenu.title1')} <span className="italic text-white/70">{t('fullmenu.title2')}</span>
            </h1>
          </motion.div>
        </section>

        {/* Allergen Legend Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-[#0a0a0a] border-b border-white/5 py-5 px-6 md:px-12"
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">{t('allergen.legend')}</span>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {allergenData.map(({ key, icon }) => (
                <div key={key} className="flex flex-col items-center gap-1 group cursor-default">
                  <span className="text-lg leading-none grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" role="img" aria-label={t(`allergen.${key}`)}>{icon}</span>
                  <span className="text-[8px] uppercase tracking-widest text-white/25 group-hover:text-white/50 transition-colors duration-300">{t(`allergen.${key}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sticky Sub-Navbar */}
        <div className="sticky top-[72px] z-40 bg-[#050505]/95 backdrop-blur-md border-y border-white/10 py-4 overflow-x-auto no-scrollbar shadow-2xl shadow-black">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center space-x-8 md:justify-center min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`text-xs uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap pb-1 border-b-2 ${activeSection === cat.id ? 'text-[#c5a059] border-[#c5a059] font-medium' : 'text-white/50 border-transparent hover:text-white'
                  }`}
              >
                {t(`category.${cat.id}`) || cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Content with Page Turn Animation */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 min-h-[60vh] overflow-hidden relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.section
              key={activeSection}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full relative"
            >
              {/* Decorative Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[15rem] font-serif italic text-white/[0.02] pointer-events-none whitespace-nowrap z-0">
                {activeCategory ? (t(`category.${activeCategory.id}`) || activeCategory.name) : ''}
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Left Side: Category Image (Sticky on Desktop) — hidden for vinos */}
                {activeSection !== 'vinos' && (
                  <div className="w-full lg:w-5/12">
                    <div className="sticky top-[160px] h-[400px] lg:h-[600px] w-full rounded-sm overflow-hidden group">
                      <img
                        src={activeCategory?.image}
                        alt={activeCategory ? (t(`category.${activeCategory.id}`) || activeCategory.name) : ''}
                        className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
                      <div className="absolute bottom-8 left-8 right-8 text-center">
                        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-2">
                          {activeCategory ? (t(`category.${activeCategory.id}`) || activeCategory.name) : ''}
                        </h2>
                        <div className="w-12 h-[1px] bg-[#c5a059] mx-auto"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Right Side: Menu Items */}
                <div className={`w-full ${activeSection !== 'vinos' ? 'lg:w-7/12' : ''} pt-8 lg:pt-0 relative`}>
                  {activeSection === 'vinos' ? (
                    /* ── WINE: full-width magazine layout ── */
                    <div className="max-w-4xl mx-auto">

                      {/* Intro line */}
                      <div className="text-center mb-16">
                        <p className="text-xs uppercase tracking-[0.4em] text-white/20 mb-3">{t('wine.subtitle')}</p>
                        <div className="flex items-center gap-4 justify-center">
                          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#c5a059]/40"></div>
                          <span className="text-[#c5a059]/60 text-lg">✦</span>
                          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#c5a059]/40"></div>
                        </div>
                      </div>

                      {/* All wine categories stacked */}
                      <div className="divide-y divide-white/[0.06]">
                        {(menuData.vinos as any[]).map((wineCategory, catIdx) => (
                          <div key={catIdx} className="py-14 first:pt-0">
                            {/* Category Header */}
                            <div className="flex items-center gap-6 mb-10">
                              <h3 className="text-2xl md:text-3xl font-serif italic text-[#c5a059] shrink-0">
                                {t(`wineCategory.${wineCategory.category}`) || wineCategory.category}
                              </h3>
                              <div className="flex-1 h-[1px] bg-gradient-to-r from-[#c5a059]/30 to-transparent"></div>
                            </div>

                            {/* Wine Items Grid — 2 columns for Tinto (many items), 1 for others */}
                            <div className={`${wineCategory.items.length > 4 ? 'grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-7' : 'flex flex-col gap-y-7'}`}>
                              {wineCategory.items.map((item: any, idx: number) => (
                                <div key={idx} className="group flex flex-col">
                                  <div className="flex justify-between items-baseline gap-4">
                                    <span className="text-base md:text-lg font-medium tracking-wide group-hover:text-[#c5a059] transition-colors duration-300">
                                      {item.name}
                                    </span>
                                    <div className="flex flex-col items-end shrink-0">
                                      <span className="text-sm text-white/70 font-mono">€{item.price}</span>
                                      {item.glass && (
                                        <span className="text-[11px] text-white/30 font-mono mt-0.5">/ €{item.glass} {lang === 'ES' ? 'copa' : 'glass'}</span>
                                      )}
                                    </div>
                                  </div>
                                  {item.desc && (
                                    <p className="text-xs text-white/35 font-light tracking-wide mt-1 italic">
                                      {item.desc}
                                    </p>
                                  )}
                                  {/* Sulfite allergen badge */}
                                  {item.allergens?.length > 0 && (
                                    <div className="flex gap-1 mt-2">
                                      {item.allergens.map((a: string) => {
                                        const info = allergenData.find(d => d.key === a);
                                        return info ? (
                                          <span key={a} title={t(`allergen.${a}`)} className="text-xs opacity-20 hover:opacity-60 transition-opacity cursor-default" role="img" aria-label={t(`allergen.${a}`)}>
                                            {info.icon}
                                          </span>
                                        ) : null;
                                      })}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Footer note */}
                      <div className="mt-12 pt-8 border-t border-white/[0.06] text-center">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-white/15">
                          {lang === 'ES' ? 'Precios con IVA incluido · Carta sujeta a disponibilidad' : 'Prices include VAT · Menu subject to availability'}
                        </p>
                      </div>
                    </div>
                  ) : (
                    renderMenuItems(menuData[activeSection as keyof typeof menuData] as any[])
                  )}
                </div>

              </div>
            </motion.section>
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </main>
  );
}
