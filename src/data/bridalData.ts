// Import the generated high-resolution assets
import blushEleganceImg from '../assets/images/bridal_blush_elegance_1792147477538.jpg';
import royalCrimsonImg from '../assets/images/bridal_royal_crimson_1792147478749.jpg';
import eyeGlamCloseupImg from '../assets/images/bridal_eye_glam_closeup_1792147478970.jpg';
import floralBunProfileImg from '../assets/images/bridal_floral_bun_profile_1792147478864.jpg';
import jewelryKundanImg from '../assets/images/bridal_jewelry_kundan_set_1792147498220.jpg';
import atelierStudioImg from '../assets/images/bridal_atelier_studio_1792147498452.jpg';

export interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  category: 'Couture' | 'Beauty' | 'Jewelry' | 'Coiffure';
  description: string;
  detailSpecs: string[];
}

export interface BridalScreen {
  id: string;
  screenNumber: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  aspect: '4:3' | '3:4' | '1:1' | '16:9';
  tagline: string;
  description: string;
  palettes: string[];
  specs: {
    label: string;
    value: string;
  }[];
  hotspots: Hotspot[];
  makeupBreakdown: {
    skin: string;
    eyes: string;
    lips: string;
    brows: string;
  };
  coutureDetails: {
    fabric: string;
    embroidery: string;
    craftingTime: string;
    origin: string;
  };
}

export interface CoutureProduct {
  id: string;
  name: string;
  collection: string;
  price: number;
  image: string;
  category: 'Lehenga' | 'Jewelry' | 'Veil' | 'Bridal Package';
  leadTime: string;
  description: string;
  included: string[];
}

export const BRIDAL_SCREENS: BridalScreen[] = [
  {
    id: 'blush-elegance',
    screenNumber: 'Look 01',
    title: 'Gulabi Noor — The Rose Gold Empress',
    subtitle: 'Contemporary Romance & Pastel Zardozi',
    category: 'Vows & Day Wedding',
    image: blushEleganceImg,
    aspect: '4:3',
    tagline: 'Delicate blush silk imbued with antique copper dabka, Basra pearls, and morning light glow.',
    description: 'Designed for daytime Anand Karaj and palace vows, this signature ensemble pairs an ethereal dusty rose lehenga with feathered French knot embroidery and incandescent dewy skin makeup.',
    palettes: ['#E8B4B8', '#D4AF37', '#F5EBE6', '#A67B7E'],
    specs: [
      { label: 'Crafting Hours', value: '460 hours' },
      { label: 'Embroidery Base', value: 'Pure mulberry silk & micro-tulle' },
      { label: 'Jewelry Curation', value: 'Uncut Polki & Basra pearl choker' },
      { label: 'Makeover Style', value: 'Luminous soft-glam & velvet peach lip' }
    ],
    hotspots: [
      {
        id: 'hs-1-1',
        x: 48,
        y: 16,
        title: 'Heirloom Kundan Matha Patti',
        category: 'Jewelry',
        description: 'Multi-tiered 22K gold headpiece set with uncut syndical diamonds and suspended natural seed pearls.',
        detailSpecs: ['22 Karat Yellow Gold', 'Uncut Polki Diamonds', 'Basra Pearl Cascades']
      },
      {
        id: 'hs-1-2',
        x: 49,
        y: 43,
        title: 'Gulabi Choker & Pearl Collar',
        category: 'Jewelry',
        description: 'Graduated collar necklace with bezel-set polki gemstones and micro-pearl mesh backing for supreme comfort.',
        detailSpecs: ['Artisanal Meenakari reverse', 'Hallmarked Gold', 'Custom neckline contouring']
      },
      {
        id: 'hs-1-3',
        x: 42,
        y: 62,
        title: 'Hand-Embroidered Zardozi Blouse',
        category: 'Couture',
        description: 'Intricately worked with antique dabka, micro-sequins, and tone-on-tone rose gold threads on handloom silk.',
        detailSpecs: ['Pure Mulberry Silk', 'French Knot Florals', 'Hand-stitched edging']
      },
      {
        id: 'hs-1-4',
        x: 39,
        y: 22,
        title: 'Fresh Jasmine Gajra Adornment',
        category: 'Coiffure',
        description: 'Traditional double-stringed Madurai mogra buds framing the low bridal textured chignon.',
        detailSpecs: ['Fragrant Natural Jasmine', 'Secure invisible hairpins', 'All-day freshness seal']
      }
    ],
    makeupBreakdown: {
      skin: 'Hydra-glow dewy base with micro-fine champagne highlighter on high points of cheekbones',
      eyes: 'Soft neutral cut-crease with rose gold metallic foil and softly blended brown wing',
      lips: 'Hydrating satin rosewood nude with subtle ombre center contour',
      brows: 'Feathered micro-stroked natural arch with tinted botanical brow gel'
    },
    coutureDetails: {
      fabric: 'Hand-woven Raw Silk & Sheer French Tulle Dupatta',
      embroidery: 'Rose Gold Zardozi, Copper Dabka & Cut-dana Work',
      craftingTime: '6 Artisans · 12 Weeks Handcrafting',
      origin: 'Atelier Old Delhi & Jaipur Heritage Karkhana'
    }
  },
  {
    id: 'royal-crimson',
    screenNumber: 'Look 02',
    title: 'Maharani Virasat — Royal Crimson Legacy',
    subtitle: 'Heritage Velvet & Imperial Mughal Motifs',
    category: 'Pheras & Night Wedding',
    image: royalCrimsonImg,
    aspect: '3:4',
    tagline: 'Timeless vermilion & crimson velvet crowned with royal kundan and antique golden jali embroidery.',
    description: 'A tribute to the majestic darbars of Rajasthan. The grand crimson velvet skirt is layered with sacred elephant and paisley zardozi medallions, styled with royal tiered chokers and traditional chooda.',
    palettes: ['#6B1724', '#851C2C', '#C9A356', '#1E0D10'],
    specs: [
      { label: 'Crafting Hours', value: '780 hours' },
      { label: 'Embroidery Base', value: 'Heritage velvet & beaten gold wire' },
      { label: 'Jewelry Curation', value: 'Layered Jadau Haar & Mughal Jhumkas' },
      { label: 'Makeover Style', value: 'Sculpted royal matte with kohl-rimmed eyes' }
    ],
    hotspots: [
      {
        id: 'hs-2-1',
        x: 48,
        y: 19,
        title: 'Mughal Arch Polki Matha Patti',
        category: 'Jewelry',
        description: 'Architectural forehead centerpiece reflecting Mughal arch silhouettes with emerald and ruby cabochons.',
        detailSpecs: ['Bespoke temple setting', 'Colombian Emerald accents', 'Custom forehead drape']
      },
      {
        id: 'hs-2-2',
        x: 52,
        y: 52,
        title: 'Triple-Layered Imperial Jadau Collar',
        category: 'Jewelry',
        description: 'A show-stopping 3-tier polki necklace featuring graduated diamond clusters with antique green enameling.',
        detailSpecs: ['24K Beaten Gold Foil', 'Natural Uncut Diamonds', 'Jaipur Royal Court Design']
      },
      {
        id: 'hs-2-3',
        x: 48,
        y: 84,
        title: 'Gota-Patti Velvet Kalidar Skirt',
        category: 'Couture',
        description: 'Sixteen-panel flaring lehenga skirt laden with hand-beaten gold tilla and zardozi architectural arches.',
        detailSpecs: ['180 Gram Micro Velvet', 'Gold Bullion Wire', 'Hand-stitched Can-can underskirt']
      },
      {
        id: 'hs-2-4',
        x: 23,
        y: 88,
        title: 'Traditional Chooda & Gold Kaleere',
        category: 'Jewelry',
        description: 'Auspicious deep crimson bangles interspersed with uncut diamond studded kadas and tiered hanging kaleere.',
        detailSpecs: ['Authentic Sealing Lac', 'Chime dome tassels', 'Hand-painted blessings']
      }
    ],
    makeupBreakdown: {
      skin: 'Velvety porcelain finish with subtle warm bronzed contouring and matte setting veil',
      eyes: 'Smoky almond kohl waterlines with burnished gold eyelid topper and feathered lashes',
      lips: 'Iconic deep spiced rose-terracotta with long-wear transfer-proof comfort',
      brows: 'Sculpted high-definition regal arch framing the traditional forehead bindi'
    },
    coutureDetails: {
      fabric: 'Pure Silk Velvet & Double Tissue Dupattas',
      embroidery: 'Antique Marodi, Zardozi, Gota-Patti & Sequins',
      craftingTime: '8 Master Zardoz Artisans · 18 Weeks',
      origin: 'Varanasi Weaving Guild & Noor Atelier'
    }
  },
  {
    id: 'eye-glam-closeup',
    screenNumber: 'Look 03',
    title: 'Nazaakat Glamour — The Art of the Bridal Gaze',
    subtitle: 'Precision Macro Artistry & Luminous Skin',
    category: 'Haute Beauty Atelier',
    image: eyeGlamCloseupImg,
    aspect: '1:1',
    tagline: 'Sculpted cut-crease artistry, liquid diamond champagne sheen, and micro-pearl forehead adornment.',
    description: 'An intimate study of master bridal makeup artistry. Every stroke is calibrated for 8K cinematography and tear-proof ceremonial wear, showcasing delicate gold pearl detailing along the brow bone.',
    palettes: ['#D9A74A', '#8C5642', '#221915', '#F2ECE4'],
    specs: [
      { label: 'Eye Technique', value: 'Champagne Cut-Crease & Dual Wing' },
      { label: 'Skin Formulation', value: 'Micro-pigment breathable waterproof base' },
      { label: 'Forehead Detail', value: 'Hand-placed gilded micro-bindis & pearls' },
      { label: 'Longevity', value: '18-Hour Humidity & Tear-Resistant Seal' }
    ],
    hotspots: [
      {
        id: 'hs-3-1',
        x: 48,
        y: 47,
        title: 'Precision Winged Liner & Champagne Foil',
        category: 'Beauty',
        description: 'Multi-dimensional champagne shimmer pigment pressed over waterproof matte chocolate contour.',
        detailSpecs: ['Smudge-proof carbon liner', 'Ultra-fine diamond micro-mica', 'Individually layered lash clusters']
      },
      {
        id: 'hs-3-2',
        x: 43,
        y: 28,
        title: 'Gilded Brow-Line Bindi Art',
        category: 'Beauty',
        description: 'Bespoke ceremonial dots handcrafted with liquid gold pigment and genuine freshwater micro-pearls.',
        detailSpecs: ['Non-comedogenic medical adhesive', '24K gold foil tint', 'Traditional Vedic bridal motif']
      },
      {
        id: 'hs-3-3',
        x: 72,
        y: 58,
        title: 'Luminous Candlelit Cheek Glow',
        category: 'Beauty',
        description: 'Skin-prep with botanical saffron elixir followed by seamless cream contour and peach-nectar flush.',
        detailSpecs: ['Cashmere texture blend', 'Poreless soft focus finish', 'No flashback under studio flashes']
      },
      {
        id: 'hs-3-4',
        x: 18,
        y: 11,
        title: 'Bridal Kundan Forehead Crest',
        category: 'Jewelry',
        description: 'Ruby and polki drop centerpiece sitting seamlessly against the brow bridge with micro-pearl links.',
        detailSpecs: ['Natural Burmese Rubies', 'Hand-twisted gold cord', 'Symmetrical temple alignment']
      }
    ],
    makeupBreakdown: {
      skin: 'Skin-prep with cold-pressed rosehip oil and hydro-plumping peptide base before velvet coverage',
      eyes: 'Seamless transitional crease with warm hazelnut, crisp cut-crease in crushed gold mica',
      lips: 'Satin nude beige with warm caramel liner and high-shine gloss kiss at the cupid’s bow',
      brows: 'Hair-by-hair precision strokes replicating natural brow density with zero harshness'
    },
    coutureDetails: {
      fabric: 'Ceremonial Draping Veil in Crimson French Net',
      embroidery: 'Hand-turned Gilded Scalloped Borders (Kiran)',
      craftingTime: '45 Hours Makeup Prep & Application Protocol',
      origin: 'Noor Master Beauty Academy & Private Suite'
    }
  },
  {
    id: 'floral-bun-profile',
    screenNumber: 'Look 04',
    title: 'Gulaab Kesari — Flora & Form Bridal Coiffure',
    subtitle: 'Artisanal Fresh Blossom Updo & Profile Grace',
    category: 'Haute Bridal Hair & Draping',
    image: floralBunProfileImg,
    aspect: '3:4',
    tagline: 'Hand-clustered ivory garden roses, baby’s breath clouds, and cascading diamond matha patti.',
    description: 'An architectural hair sculpture celebrating natural blooms. Over 60 individual miniature garden roses and gypsophila sprigs are woven into a weighted, voluminous textured chignon built for ceremonial dupattas.',
    palettes: ['#F7D8BA', '#C17C74', '#4A5B45', '#EFE3D5'],
    specs: [
      { label: 'Blossom Palette', value: 'Ivory spray roses, blush buds & baby’s breath' },
      { label: 'Hair Architecture', value: 'Weight-balanced reinforced bridal chignon' },
      { label: 'Dupatta Support', value: 'Double-pin anchor grid for heavy zardozi veils' },
      { label: 'Hold Duration', value: 'Up to 24 hours without slipping or drooping' }
    ],
    hotspots: [
      {
        id: 'hs-4-1',
        x: 69,
        y: 35,
        title: 'Botanical Chignon Cluster',
        category: 'Coiffure',
        description: 'Bespoke floral garland anchored with hand-wired stems of spray roses and delicate baby’s breath.',
        detailSpecs: ['Fresh morning-picked blossoms', 'Water-capsule micro stems', 'Zero-sag bridal anchor']
      },
      {
        id: 'hs-4-2',
        x: 44,
        y: 26,
        title: 'Tiered Matha Patti Framing',
        category: 'Jewelry',
        description: 'Multi-stranded pearl chains holding a delicate crescent polki pendant across the natural hair parting.',
        detailSpecs: ['Custom scalp balance clips', 'Untangled pearl rows', '22K yellow gold bezel']
      },
      {
        id: 'hs-4-3',
        x: 55,
        y: 53,
        title: 'Cascading Polki Choker Necklace',
        category: 'Jewelry',
        description: 'Broad collar necklace with inverted drop polki stones hugging the collarbone in radiant unison.',
        detailSpecs: ['Flexible linked plates', 'Micro-pearl fringe border', 'Purity Hallmarked']
      },
      {
        id: 'hs-4-4',
        x: 33,
        y: 81,
        title: 'Artisanal Rajasthani Henna Hands',
        category: 'Beauty',
        description: 'Organic dark mahogany mehndi featuring intricate jharokha arches, peacock feathers, and floral creepers.',
        detailSpecs: ['100% Organic Sojat henna', 'Essential clove and tea-tree infusion', 'Deep rich natural stain']
      }
    ],
    makeupBreakdown: {
      skin: 'Luminous satin skin with soft peach blush draping up toward the temples',
      eyes: 'Subtle brown smoked outer corners with natural wispy lashes for soft romantic profile',
      lips: 'Soft nude coral cream lipstick with moisture-lock barrier',
      brows: 'Natural brushed arch seamlessly aligned with the curve of the matha patti'
    },
    coutureDetails: {
      fabric: 'Tissue Organza Dupatta with Pearl Drops (Moti Jhalar)',
      embroidery: 'Hand-guided Resham Silk & Muted Zardozi Border',
      craftingTime: '3.5 Hours Hairstyle Sculpting & Floral Threading',
      origin: 'Noor Master Hair Design Studio'
    }
  },
  {
    id: 'kundan-vault',
    screenNumber: 'Look 05',
    title: 'Nizam-e-Kundan — Heirloom Bridal Vault',
    subtitle: 'Imperial Polki, Emerald Drops & Filigree Bangles',
    category: 'Fine Heirloom Jewelry',
    image: jewelryKundanImg,
    aspect: '4:3',
    tagline: 'Museum-grade uncut polki diamonds, Zambian emerald drops, and 22K antique temple filigree.',
    description: 'Each piece in this collection is handcrafted by 4th-generation royal goldsmiths. Set with natural uncut diamonds encased in 24K beaten gold foil with vibrant green meenakari craftsmanship.',
    palettes: ['#C59B4B', '#1D5A40', '#E5DACB', '#4A3423'],
    specs: [
      { label: 'Gold Purity', value: '22K Hallmarked Gold Base' },
      { label: 'Stones', value: 'Syndicate Polki & Zambian Emeralds' },
      { label: 'Backing', value: 'Traditional Jaipur Meenakari Enamel' },
      { label: 'Certification', value: 'IGI Gemological Certificate Included' }
    ],
    hotspots: [
      {
        id: 'hs-5-1',
        x: 52,
        y: 38,
        title: 'Master Kundan Hasli Collar',
        category: 'Jewelry',
        description: 'Continuous floral band set with table-cut polki gems and faceted emerald cabochons.',
        detailSpecs: ['Over 45 carats Polki', 'Natural untreated emeralds', 'Artisanal hand-strung gold cord']
      },
      {
        id: 'hs-5-2',
        x: 82,
        y: 48,
        title: 'Royal Jadau Temple Kada Bangles',
        category: 'Jewelry',
        description: 'Pair of screw-lock heavy antique gold bangles with embossed sacred motifs and emerald inlays.',
        detailSpecs: ['Solid 22K Gold Core', 'Antique matte patina', 'Comfort round inner rim']
      },
      {
        id: 'hs-5-3',
        x: 41,
        y: 81,
        title: 'Chandbali Emerald Drops Earrings',
        category: 'Jewelry',
        description: 'Matching earrings with delicate weight distribution support hooks to protect bridal earlobes.',
        detailSpecs: ['Integrated support chain (Sahara)', 'Pear-cut emerald pendants', 'Meenakari reverse']
      }
    ],
    makeupBreakdown: {
      skin: 'Warm golden shimmer oil recommended for decolletage and shoulders',
      eyes: 'Smoky emerald undertone or warm antique gold lid topper',
      lips: 'Neutral nude to let the emerald accents dominate the bridal canvas',
      brows: 'Full defined royal arch'
    },
    coutureDetails: {
      fabric: 'Raw Champagne Tussar Silk Display Base',
      embroidery: 'Hand-sewn Gold Thread Accent Stitching',
      craftingTime: '3 Goldsmiths · 8 Weeks Setting & Polishing',
      origin: 'Jaipur Johari Bazaar Atelier'
    }
  },
  {
    id: 'atelier-studio',
    screenNumber: 'Look 06',
    title: 'The Noor Atelier — Bespoke Fitting Sanctuary',
    subtitle: 'Private Bridal Suites, Fabric Archives & Trials',
    category: 'Private Couture Lounge',
    image: atelierStudioImg,
    aspect: '16:9',
    tagline: 'An architectural haven of carved stone arches, crystal chandeliers, and curated bridal heirlooms.',
    description: 'Step into our sanctuary for one-on-one appointments with master couturiers, colorists, and bridal stylists. From your preliminary sketch to final dupatta draping trials.',
    palettes: ['#C59B4B', '#571D23', '#EDE4DA', '#231815'],
    specs: [
      { label: 'Private Suites', value: '4 High-Ceiling VIP Bridal Fitting Salons' },
      { label: 'Trial Services', value: 'Full Hair & Makeup Trial with Lighting Simulator' },
      { label: 'Couture Consult', value: 'Direct collaboration with Head Designer' },
      { label: 'Locations', value: 'Delhi, Mumbai, London, Dubai & NYC' }
    ],
    hotspots: [
      {
        id: 'hs-6-1',
        x: 16,
        y: 64,
        title: 'Imperial Bridal Mannequin Gallery',
        category: 'Couture',
        description: 'Curated display of hand-embroidered royal red and maroon zardozi master lehengas.',
        detailSpecs: ['Exclusive bespoke pieces', 'Handloom zardozi fabrics', 'Custom sizing trials']
      },
      {
        id: 'hs-6-2',
        x: 52,
        y: 78,
        title: 'Trousseau Consultation Island',
        category: 'Couture',
        description: 'Hand-finished silk swatches, gold thread spools, and stone selection boxes for custom brides.',
        detailSpecs: ['500+ fabric swatches', 'Real gold & silver zari tests', 'Custom color dye matching']
      },
      {
        id: 'hs-6-3',
        x: 82,
        y: 65,
        title: 'Rose Gold & Pastel Salon',
        category: 'Couture',
        description: 'Dedicated salon for pastel, champagne, and day-wedding bridal wear.',
        detailSpecs: ['Daylight simulation mirrors', 'Full-length 3-way viewing', 'Private dressing suite']
      }
    ],
    makeupBreakdown: {
      skin: 'Studio lighting mirror checks under 3000K (Candlelit), 4000K (Mandap fire), and 5500K (Daylight)',
      eyes: 'Trial swatches tested against specific lehenga dupattas',
      lips: 'Custom lip pigment formulation matched to the bride’s natural skin tone',
      brows: 'Facial proportion mapping'
    },
    coutureDetails: {
      fabric: 'Carved Teakwood, Italian Botticino Marble & Rose Gold Brass',
      embroidery: 'Heritage Jali Walls & Custom Handloom Upholstery',
      craftingTime: 'Continuous Concierge Bridal Care',
      origin: 'Flagship Design Sanctuary'
    }
  }
];

export const COUTURE_COLLECTION: CoutureProduct[] = [
  {
    id: 'prod-1',
    name: 'The Gulabi Noor Lehenga Ensemble',
    collection: 'Rose Gold & Pastel Heritage',
    price: 3850,
    image: blushEleganceImg,
    category: 'Lehenga',
    leadTime: '10 - 12 Weeks',
    description: 'Blush pink pure raw silk lehenga with rose-gold dabka, cut-dana, and hand-embroidered floral buttis with layered can-can and two dupattas.',
    included: ['Custom-tailored Blouse', '16-Kali Flared Skirt', 'Main Heavy Zardozi Dupatta', 'Head-veil Featherweight Dupatta', 'Silk Latkan Tassels']
  },
  {
    id: 'prod-2',
    name: 'The Maharani Virasat Royal Crimson Lehenga',
    collection: 'Imperial Mughal Velvet',
    price: 4950,
    image: royalCrimsonImg,
    category: 'Lehenga',
    leadTime: '14 - 16 Weeks',
    description: 'Masterwork royal crimson micro-velvet lehenga with 24K beaten gold tilla, marodi embroidery, antique sequins, and silk brocade lining.',
    included: ['Bespoke Sweetheart Blouse', 'Embroidered Kalidar Skirt', 'Scalloped Velvet Shawl Dupatta', 'Sheer Net Head Dupatta with Kiran', 'Matching Potli Bag']
  },
  {
    id: 'prod-3',
    name: 'Nizam-e-Kundan Polki Choker Suite',
    collection: 'Heirloom Fine Jewelry',
    price: 5800,
    image: jewelryKundanImg,
    category: 'Jewelry',
    leadTime: 'Immediate / In Vault',
    description: 'Uncut syndicate polki diamond choker set in 22K yellow gold with Zambian emerald drops, accompanied by matching chandbali earrings.',
    included: ['22K Gold Polki Choker', 'Emerald Drop Chandbalis', 'IGI Certificate & Authenticity Ledger', 'Handmade Velvet Display Case']
  },
  {
    id: 'prod-4',
    name: 'The Complete Bridal Royal Makeover Package',
    collection: 'Haute Beauty Atelier',
    price: 1850,
    image: eyeGlamCloseupImg,
    category: 'Bridal Package',
    leadTime: 'Advance Reservation',
    description: 'Full bridal makeover by Senior Master Artist: 18-hour waterproof dewy airbrush, cut-crease eye artistry, dupatta draping, and styling.',
    included: ['Senior Master Artist & Assistant', 'Pre-wedding Makeup & Hair Trial', 'Floral Bun Coiffure & Jewelry Pinning', 'Luxury Touch-up Kit', 'Decolletage & Body Glow']
  },
  {
    id: 'prod-5',
    name: 'Gulaab Kesari Floral Bun & Hairstyle Session',
    collection: 'Haute Coiffure',
    price: 650,
    image: floralBunProfileImg,
    category: 'Bridal Package',
    leadTime: 'Wedding Day Booking',
    description: 'Architectural bridal updo incorporating fresh seasonal miniature roses, baby’s breath, and precision dupatta anchor engineering.',
    included: ['Exotic Fresh Floral Selection', 'Hair Architecture & Volumizing Padding', 'Matha Patti & Passa Pinning', 'All-weather hold finish']
  },
  {
    id: 'prod-6',
    name: 'The Atelier Private Bridal Consultation & Trial',
    collection: 'Bespoke Experience',
    price: 250,
    image: atelierStudioImg,
    category: 'Bridal Package',
    leadTime: 'Flexible Dates',
    description: '3-hour private suite access with champagne high-tea, custom couture sketches, fabric swatches, and complete skin/makeup trial.',
    included: ['3 Hours Private VIP Lounge', 'Head Designer Consultation', 'Half-face Makeup Trial', 'Custom Moodboard & Swatch Kit', 'Complimentary Champagne']
  }
];

export const ATELIER_LOCATIONS = [
  {
    city: 'New Delhi Flagship',
    address: 'Noor Haveli, The Claridges Enclave, Dr APJ Abdul Kalam Rd',
    country: 'India',
    phone: '+91 11 4890 2200',
    hours: 'Mon - Sun: 10:30 AM – 8:00 PM'
  },
  {
    city: 'Mumbai Atelier',
    address: 'Kala Ghoda Heritage Arts Precinct, Fort',
    country: 'India',
    phone: '+91 22 2288 4400',
    hours: 'Mon - Sun: 11:00 AM – 8:30 PM'
  },
  {
    city: 'London Mayfair Salon',
    address: '18 Old Bond Street, Mayfair, London W1S 4PT',
    country: 'United Kingdom',
    phone: '+44 20 7499 8820',
    hours: 'Tue - Sat: 10:00 AM – 6:30 PM'
  },
  {
    city: 'Dubai Downtown Suite',
    address: 'Fashion Avenue VIP Suite, The Dubai Mall',
    country: 'UAE',
    phone: '+971 4 362 7500',
    hours: 'Daily: 10:00 AM – 10:00 PM'
  },
  {
    city: 'New York Madison Avenue',
    address: '760 Madison Avenue, Upper East Side, New York, NY 10065',
    country: 'United States',
    phone: '+1 212 585 3000',
    hours: 'Mon - Sat: 10:00 AM – 7:00 PM'
  }
];

export const ARTISTRY_STEPS = [
  {
    step: '01',
    title: 'Kashmiri Saffron Skin Prep',
    duration: '25 Mins',
    description: 'Infusion of pure cold-pressed saffron nectar, peptide barrier serum, and lymphatic drainage contour massage to awaken natural radiance without oiliness.'
  },
  {
    step: '02',
    title: 'Breathable Velvet Canvas',
    duration: '30 Mins',
    description: 'Custom micro-pigment foundation formulation tailored to your exact undertone, micro-milled loose powder bake, and zero flashback flash testing.'
  },
  {
    step: '03',
    title: 'Architectural Cut-Crease & Liner',
    duration: '40 Mins',
    description: 'Precision mapping of lid geometry. Layering champagne chrome mica over warm cocoa shadows, finished with waterproof dual-wing gel liner.'
  },
  {
    step: '04',
    title: 'Gilded Bindi & Forehead Art',
    duration: '15 Mins',
    description: 'Delicate application of 24K gold foil micro-bindis and genuine freshwater seed pearls along the eyebrow contour for timeless Vedic elegance.'
  },
  {
    step: '05',
    title: 'Weightless Floral Bun Architecture',
    duration: '45 Mins',
    description: 'Textured chignon built on a lightweight cushion base, woven with fresh hand-wired spray roses and reinforced to bear heavy ceremonial dupattas.'
  },
  {
    step: '06',
    title: 'The Royal Veil & Trousseau Draping',
    duration: '25 Mins',
    description: 'Master draping of the pleated shoulder palla and featherweight head dupatta with invisible safety anchors, allowing effortless gliding down the aisle.'
  }
];
