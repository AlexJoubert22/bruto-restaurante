import React, { createContext, useState, useContext } from 'react';

type Language = 'ES' | 'EN';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ES: {
    // Navbar
    'nav.concept': 'Concepto',
    'nav.menu': 'Menú',
    'nav.essence': 'Esencia',
    'nav.contact': 'Contacto',
    'nav.back': 'Volver',
    'nav.fullMenu': 'Menú Completo',
    'nav.backHome': 'Volver al Inicio',
    // Hero
    'hero.subtitle': 'Ristorante Italiano',
    'hero.desc': 'La elegancia de la antigua Italia, redefinida para el paladar moderno. Una auténtica experiencia italiana en Alicante.',
    'hero.discover': 'Descubrir',
    // Concept
    'concept.subtitle': 'La Nostra Storia',
    'concept.title1': 'Más que un restaurante,',
    'concept.title2': 'Una rutina de vida.',
    'concept.p1': 'Nacimos en 2020 con una obsesión: redefinir la experiencia gastronómica italiana en Playa San Juan. No somos una trattoria convencional. Somos el resultado de más de tres décadas de viajes, investigación y una devoción absoluta por el producto de origen.',
    'concept.p2': 'En Bruto, el tiempo se detiene. La masa fermenta con paciencia durante 72 horas, el fuego de nuestro horno de leña acaricia cada ingrediente y nuestra bodega guarda secretos listos para ser descorchados. Es el lugar exacto donde la herencia de la antigua Italia abraza la luz y la energía vibrante del Mediterráneo.',
    'concept.p3': 'Cada detalle, desde la textura de nuestras pastas artesanales hasta la cuidada selección musical, ha sido orquestado para despertar los sentidos. Un espacio diseñado exclusivamente para aquellos que entienden que sentarse a la mesa no es solo comer, sino celebrar un ritual. Bienvenidos a nuestra casa.',
    // MenuPreview
    'menuPreview.subtitle': 'Il Menu',
    'menuPreview.title1': 'Sinfonía de',
    'menuPreview.title2': 'Sabores',
    'menuPreview.desc': 'Una selección minimalista y elegante de nuestros mejores platos, preparados con devoción absoluta a la tradición italiana.',
    'menuPreview.btn': 'Ver Menú Completo',
    // Wine
    'wine.subtitle': 'La Cantina',
    'wine.title1': 'El culto al',
    'wine.title2': 'Vino',
    'wine.p1': 'En Bruto, entendemos que una gran comida exige un gran vino. Nuestra bodega alberga una colección excepcional, cuidadosamente seleccionada para complementar cada matiz de nuestra cocina.',
    'wine.p2': 'Ofrecemos un menú extenso con una gran variedad de vinos importantes y de altísima calidad. Desde los clásicos Barolos y Amarones hasta joyas ocultas de pequeños productores.',
    'wine.btn': 'Explorar la Bodega',
    // Wine Features
    'wine.features.vip.title': 'Salón VIP',
    'wine.features.vip.desc': 'Ideal para cenas especiales y reuniones privadas.',
    'wine.features.pet.title': 'Pet Friendly',
    'wine.features.pet.desc': 'Tus perros son bienvenidos, no hay problema.',
    'wine.features.terrace.title': 'Terraza Única',
    'wine.features.terrace.desc': 'Cerrada con aire acondicionado para el verano y acogedora en invierno.',
    'wine.features.parking.title': 'Parking Propio',
    'wine.features.parking.desc': 'Disponemos de amplio parking para nuestros clientes.',
    // Team
    'team.subtitle': 'Los Creadores',
    'team.title1': 'Maestros de la',
    'team.title2': 'Tradición',
    'team.chef.desc': 'Con más de 15 años de inmersión en la cultura culinaria italiana, Virginia lidera nuestra cocina fusionando el respeto por la tradición y la innovación. Su maestría no solo brilla en los platos principales, sino que culmina en una repostería artesanal que redefine el concepto del postre casero.',
    'team.chef.quote': 'La cocina es el lenguaje del cuidado. Cada plato y cada postre que creamos es una invitación a sentir la verdadera hospitalidad italiana.',
    'team.pizza.desc': 'Tras perfeccionar su arte durante casi 15 años en Italia, Adrián es el alma detrás de nuestra aclamada masa. Su obsesión por la técnica y la fermentación da vida a lo que nuestros clientes describen como \'la auténtica pizza italiana\': una obra maestra horneada a la leña.',
    'team.pizza.quote': 'La pizza perfecta es un equilibrio entre tiempo, fuego y pasión. Es el alma de Italia servida en tu mesa.',
    // Reviews
    'reviews.subtitle': 'Testimonios',
    // Contact
    'contact.subtitle': 'Prenotazione',
    'contact.title1': 'Reserva tu',
    'contact.title2': 'Mesa',
    'contact.intro': 'Tienes varias formas de contactar con nosotros. No dudes en escribirnos o llamarnos para cualquier duda o reserva.',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.hours': 'Horario de Invierno',
    'contact.hours.days.wedSat': 'Mié - Sáb',
    'contact.hours.days.sun': 'Domingo',
    'contact.hours.days.monTue': 'Lun - Mar',
    'contact.hours.closed': 'Cerrado',
    'contact.contact': 'Contacto',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.date': 'Fecha',
    'contact.form.guests': 'Personas',
    'contact.form.message': 'Mensaje Especial',
    'contact.form.btn': 'Solicitar Reserva',
    // Footer
    'footer.desc': 'La elegancia de la antigua Italia, redefinida para el paladar moderno. Una auténtica experiencia italiana en Alicante.',
    'footer.explore': 'Explorar',
    'footer.legal': 'Legal',
    'footer.legal.privacy': 'Política de Privacidad',
    'footer.legal.cookies': 'Cookies',
    'footer.legal.terms': 'Aviso Legal',
    'footer.rights': 'Copyright © 2026 | Powered by Flavours',
    // FullMenu
    'fullmenu.subtitle': 'Il Menu Completo',
    'fullmenu.title1': 'La Nostra',
    'fullmenu.title2': 'Offerta',
    'category.entrantes': 'Entrantes',
    'category.principales': 'Platos Principales',
    'category.pizzas': 'Pizzas',
    'category.pastas': 'Pastas',
    'category.postres': 'Postres',
    'category.vinos': 'Carta de Vinos',
    'wineCategory.Vino Tinto': 'Vino Tinto',
    'wineCategory.Vino Blanco': 'Vino Blanco',
    'wineCategory.Vino Rosado': 'Vino Rosado',
    'wineCategory.Cava & Champagne': 'Cava & Champagne',
    'wineCategory.Lambrusco': 'Lambrusco',
    // Allergens
    'allergen.title': 'Información sobre Alérgenos',
    'allergen.disclaimer': 'Si tienes alguna alergia o intolerancia alimentaria, por favor infórmanos antes de hacer tu pedido. Podemos estar en contacto con alérgenos en nuestras instalaciones.',
    'allergen.legend': 'Alérgenos',
    'allergen.gluten': 'Gluten',
    'allergen.dairy': 'Lácteos',
    'allergen.fish': 'Pescado',
    'allergen.celery': 'Apio',
    'allergen.eggs': 'Huevos',
    'allergen.nuts': 'Frutos secos',
    'allergen.crustacean': 'Crustáceos',
    'allergen.sulfite': 'Sulfitos',
  },
  EN: {
    // Navbar
    'nav.concept': 'Concept',
    'nav.menu': 'Menu',
    'nav.essence': 'Essence',
    'nav.contact': 'Contact',
    'nav.back': 'Back',
    'nav.fullMenu': 'Full Menu',
    'nav.backHome': 'Back to Home',
    // Hero
    'hero.subtitle': 'Italian Restaurant',
    'hero.desc': 'The elegance of ancient Italy, redefined for the modern palate. An authentic Italian experience in Alicante.',
    'hero.discover': 'Discover',
    // Concept
    'concept.subtitle': 'Our Story',
    'concept.title1': 'More than a restaurant,',
    'concept.title2': 'A daily routine.',
    'concept.p1': 'We were born in 2020 with a single obsession: to redefine the Italian gastronomic experience in Playa San Juan. We are not a conventional trattoria. We are the culmination of over three decades of travel, research, and an absolute devotion to authentic ingredients.',
    'concept.p2': 'At Bruto, time stands still. Our dough ferments patiently for 72 hours, the fire of our wood-burning oven caresses every ingredient, and our cellar holds secrets waiting to be uncorked. It is the exact place where the heritage of ancient Italy embraces the vibrant light and energy of the Mediterranean.',
    'concept.p3': 'Every detail, from the texture of our artisanal pastas to the carefully curated musical selection, has been orchestrated to awaken the senses. A space designed exclusively for those who understand that sitting at the table is not just eating, but celebrating a ritual. Welcome to our home.',
    // MenuPreview
    'menuPreview.subtitle': 'The Menu',
    'menuPreview.title1': 'Symphony of',
    'menuPreview.title2': 'Flavors',
    'menuPreview.desc': 'A minimalist and elegant selection of our best dishes, prepared with absolute devotion to Italian tradition.',
    'menuPreview.btn': 'View Full Menu',
    // Wine
    'wine.subtitle': 'The Cellar',
    'wine.title1': 'The Cult of',
    'wine.title2': 'Wine',
    'wine.p1': 'At Bruto, we understand that a great meal demands a great wine. Our cellar houses an exceptional collection, carefully selected to complement every nuance of our cuisine.',
    'wine.p2': 'We offer an extensive menu with a wide variety of important and high-quality wines. From classic Barolos and Amarones to hidden gems from small producers.',
    'wine.btn': 'Explore the Cellar',
    // Wine Features
    'wine.features.vip.title': 'VIP Lounge',
    'wine.features.vip.desc': 'Ideal for special dinners and private meetings.',
    'wine.features.pet.title': 'Pet Friendly',
    'wine.features.pet.desc': 'Your dogs are welcome, no problem at all.',
    'wine.features.terrace.title': 'Unique Terrace',
    'wine.features.terrace.desc': 'Enclosed with air conditioning for summer and cozy in winter.',
    'wine.features.parking.title': 'Private Parking',
    'wine.features.parking.desc': 'Ample parking available for our guests.',
    // Team
    'team.subtitle': 'The Creators',
    'team.title1': 'Masters of',
    'team.title2': 'Tradition',
    'team.chef.desc': 'With over 15 years of immersion in Italian culinary culture, Virginia leads our kitchen by fusing respect for tradition and innovation. Her mastery not only shines in the main dishes but culminates in artisanal pastries that redefine the concept of homemade dessert.',
    'team.chef.quote': 'Cooking is the language of care. Every dish and dessert we create is an invitation to feel true Italian hospitality.',
    'team.pizza.desc': 'After perfecting his art for almost 15 years in Italy, Adrián is the soul behind our acclaimed dough. His obsession with technique and fermentation brings to life what our customers describe as \'the authentic Italian pizza\': a wood-fired masterpiece.',
    'team.pizza.quote': 'The perfect pizza is a balance between time, fire, and passion. It is the soul of Italy served at your table.',
    // Reviews
    'reviews.subtitle': 'Testimonials',
    // Contact
    'contact.subtitle': 'Reservation',
    'contact.title1': 'Book your',
    'contact.title2': 'Table',
    'contact.intro': 'You have several ways to contact us. Do not hesitate to write or call us for any questions or reservations.',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.hours': 'Winter Hours',
    'contact.hours.days.wedSat': 'Wed - Sat',
    'contact.hours.days.sun': 'Sunday',
    'contact.hours.days.monTue': 'Mon - Tue',
    'contact.hours.closed': 'Closed',
    'contact.contact': 'Contact',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.date': 'Date',
    'contact.form.guests': 'Guests',
    'contact.form.message': 'Special Request',
    'contact.form.btn': 'Request Reservation',
    // Footer
    'footer.desc': 'The elegance of ancient Italy, redefined for the modern palate. An authentic Italian experience in Alicante.',
    'footer.explore': 'Explore',
    'footer.legal': 'Legal',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.cookies': 'Cookies',
    'footer.legal.terms': 'Legal Notice',
    'footer.rights': 'Copyright © 2026 | Powered by Flavours',
    // FullMenu
    'fullmenu.subtitle': 'The Full Menu',
    'fullmenu.title1': 'Our',
    'fullmenu.title2': 'Offering',
    'category.entrantes': 'Starters',
    'category.principales': 'Main Courses',
    'category.pizzas': 'Pizzas',
    'category.pastas': 'Pastas',
    'category.postres': 'Desserts',
    'category.vinos': 'Wine List',
    'wineCategory.Vino Tinto': 'Red Wine',
    'wineCategory.Vino Blanco': 'White Wine',
    'wineCategory.Vino Rosado': 'Rosé Wine',
    'wineCategory.Cava & Champagne': 'Cava & Champagne',
    'wineCategory.Lambrusco': 'Lambrusco',
    // Allergens
    'allergen.title': 'Allergen Information',
    'allergen.disclaimer': 'If you have any food allergies or intolerances, please inform us before ordering. Our kitchen may come into contact with allergens.',
    'allergen.legend': 'Allergens',
    'allergen.gluten': 'Gluten',
    'allergen.dairy': 'Dairy',
    'allergen.fish': 'Fish',
    'allergen.celery': 'Celery',
    'allergen.eggs': 'Eggs',
    'allergen.nuts': 'Nuts',
    'allergen.crustacean': 'Crustacean',
    'allergen.sulfite': 'Sulphites',
  }
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('ES');

  const t = (key: string) => {
    return (translations[lang] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
