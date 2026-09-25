import type {
  AwardItem,
  BrandItem,
  FaqItem,
  NavLink,
  PortfolioItem,
  PricingPlan,
  ProcessStep,
  ServiceItem,
  StatItem,
  TimelineEvent,
  ValueItem,
  WorkCategory,
} from '@/types';

/* ------------------------------ Navigation ------------------------------ */
export const NAV_LINKS: NavLink[] = [
  { id: 'nav-home', label: 'الرئيسية', href: '/' },
  { id: 'nav-works', label: 'أعمالي', href: '/works' },
  { id: 'nav-services', label: 'خدماتي', href: '/services' },
  { id: 'nav-about', label: 'من أنا', href: '/about' },
  { id: 'nav-contact', label: 'تواصل', href: '/contact' },
];

/* ------------------------------- Stats --------------------------------- */
export const STATS: StatItem[] = [
  { id: 1, count: 250, label: 'جلسة تصوير' },
  { id: 2, count: 120, label: 'عميل سعيد' },
  { id: 3, count: 35, label: 'جائزة عالمية' },
];

export const EXTENDED_STATS: StatItem[] = [
  { id: 1, count: 10, suffix: '+', label: 'سنوات خبرة' },
  { id: 2, count: 250, label: 'جلسة تصوير' },
  { id: 3, count: 120, label: 'عميل سعيد' },
  { id: 4, count: 35, label: 'جائزة عالمية' },
];

/* --------------------------- Portfolio / Works -------------------------- */
export const WORK_CATEGORIES: WorkCategory[] = [
  { id: 'all', label: 'الكل' },
  { id: 'editorial', label: 'تحريري' },
  { id: 'runway', label: 'عروض أزياء' },
  { id: 'commercial', label: 'إعلانات' },
  { id: 'beauty', label: 'جمال' },
  { id: 'street', label: 'ستريت ستايل' },
  { id: 'couture', label: 'كوتور' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Vogue Arabia',
    category: 'editorial',
    image: 'https://images.unsplash.com/photo-1642886513448-6e6997b8de4a?w=800&q=80&fit=crop',
    alt: 'Male editorial model in tailored suit',
    featured: true,
  },
  {
    id: 2,
    title: 'Paris Fashion Week',
    category: 'runway',
    image: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=800&q=80&fit=crop',
    alt: 'Male model in black suit on runway',
  },
  {
    id: 3,
    title: 'Luxury Brand Campaign',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1552252059-9d77e4059ad1?w=800&q=80&fit=crop',
    alt: 'Male model in shirt and jeans for brand campaign',
    featured: true,
  },
  {
    id: 4,
    title: 'Beauty Campaign',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1581381685617-4dc270458aa6?w=800&q=80&fit=crop',
    alt: 'Male beauty model portrait',
  },
  {
    id: 5,
    title: 'Urban Fashion',
    category: 'street',
    image: 'https://images.unsplash.com/photo-1571119816306-c0c00469dc2f?w=800&q=80&fit=crop',
    alt: 'Male model in street style',
  },
  {
    id: 6,
    title: 'Haute Couture',
    category: 'couture',
    image: 'https://images.unsplash.com/photo-1566070143658-523a24797109?w=800&q=80&fit=crop',
    alt: 'Male couture editorial portrait',
    featured: true,
  },
  {
    id: 7,
    title: 'Golden Hour Editorial',
    category: 'editorial',
    image: 'https://images.unsplash.com/photo-1702898299811-34a9f87e3ee4?w=800&q=80&fit=crop',
    alt: 'Male models editorial in golden light',
  },
  {
    id: 8,
    title: 'Milan Showcase',
    category: 'runway',
    image: 'https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=800&q=80&fit=crop',
    alt: 'Male model walking during showcase',
  },
  {
    id: 9,
    title: 'Perfume Campaign',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80&fit=crop',
    alt: 'Male beauty campaign portrait',
  },
  {
    id: 10,
    title: 'Street Couture',
    category: 'street',
    image: 'https://images.unsplash.com/photo-1526887520775-4b14b8aed897?w=800&q=80&fit=crop',
    alt: 'Sunglasses styling detail',
  },
  {
    id: 11,
    title: 'Accessories Editorial',
    category: 'editorial',
    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&q=80&fit=crop',
    alt: 'Premium menswear accessory detail',
  },
  {
    id: 12,
    title: 'Global Brand Ad',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&q=80&fit=crop',
    alt: 'Leather goods brand advertisement',
  },
];

/* ------------------------------ Services -------------------------------- */
export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    icon: 'fa-camera',
    title: 'تصوير الأزياء',
    description:
      'جلسات تصوير احترافية للمجموعات والموديلز بإضاءة وتكوين يبرزان جمال القطع.',
    features: ['تصوير الاستوديو', 'تصوير موقع خارجي', 'إخراج عالي الدقة'],
  },
  {
    id: 2,
    icon: 'fa-video',
    title: 'إعلانات تجارية',
    description:
      'إنتاج صور إعلانية عالية الجودة للماركات والمنتجات الفاخرة.',
    features: ['حملات كاملة', 'تصوير منتجات', 'إخراج تجاري احترافي'],
  },
  {
    id: 3,
    icon: 'fa-magic',
    title: 'الريتوش الاحترافي',
    description:
      'معالجة الصور بأعلى معايير الجودة مع الحفاظ على الطبيعية والأناقة.',
    features: ['تصحيح الألوان', 'معالجة البشرة', 'تنقية الخلفيات'],
  },
  {
    id: 4,
    icon: 'fa-users',
    title: 'توجيه الموديلز',
    description:
      'توجيه احترافي للموديلز لإبراز أفضل الزوايا والتعبيرات أمام الكاميرا.',
    features: ['جلسات كاستينج', 'توجيه التعبيرات', 'تحضير للإخراج'],
  },
  {
    id: 5,
    icon: 'fa-palette',
    title: 'تصميم المفاهيم',
    description:
      'ابتكار أفكار إبداعية ومفاهيم بصرية متكاملة للمشاريع الخاصة.',
    features: ['مولبوردات', 'قصص بصرية', 'تنسيق ستايلينغ'],
  },
  {
    id: 6,
    icon: 'fa-globe',
    title: 'محتوى السوشال ميديا',
    description:
      'إنشاء محتوى بصري متناسق وجذاب لمنصات التواصل الاجتماعي.',
    features: ['محتوى شهر كامل', 'قوالب ثابتة', 'جدولة ونشر'],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 1,
    name: 'جلسة أساسية',
    price: '1,200',
    period: 'ريال / جلسة',
    description: 'مثالية للتصوير الشخصي والموديلز الفردي.',
    features: ['ساعتين عمل', '10 صور معدّلة', 'استوديو احترافي', 'حتى 2 موديل'],
  },
  {
    id: 2,
    name: 'جلسة احترافية',
    price: '3,500',
    period: 'ريال / جلسة',
    description: 'الخيار الأكثر طلباً للماركات والحملات المتوسطة.',
    featured: true,
    features: [
      'نصف يوم كامل',
      '25 صورة معدّلة',
      'استوديو + موقع خارجي',
      'توجيه موديلز',
      'حقوق استخدام تجارية',
    ],
  },
  {
    id: 3,
    name: 'حملة متكاملة',
    price: 'مخصص',
    period: 'حسب المشروع',
    description: 'حلول شاملة للماركات والعلامات التجارية الكبرى.',
    features: [
      'أيام تصوير متعددة',
      'صور + فيديو',
      'فريق كامل (ستايلست، مكياج)',
      'حقوق استخدام ممتدة',
      'استشارة ما بعد الإنتاج',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'الاستكشاف والاستشارة',
    description:
      'نلتقي لفهم رؤيتك وأهدافك، ونتحدد معاً مفهوم الجلسة والرسالة البصرية.',
    icon: 'fa-comments',
  },
  {
    id: 2,
    title: 'تصميم المفهوم',
    description:
      'نصمم المولبورد والإعدادات، ونختار الإضاءة والخلفيات والستايلينغ.',
    icon: 'fa-palette',
  },
  {
    id: 3,
    title: 'التصوير',
    description:
      'ننفذ الجلسة بعناية مع توجيه احترافي للموديلز وضبط كل تفصيلة.',
    icon: 'fa-camera',
  },
  {
    id: 4,
    title: 'الاختيار والريتوش',
    description:
      'نختار أفضل اللقطات ونعالجها بأعلى جودة مع الحفاظ على الطبيعية.',
    icon: 'fa-magic',
  },
  {
    id: 5,
    title: 'التسليم النهائي',
    description:
      'نسلّمك الملفات بجودة عالية وبتنسيق جاهز للاستخدام والنشر.',
    icon: 'fa-box-open',
  },
];

/* ------------------------------- About ---------------------------------- */
export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 1,
    period: '2015',
    title: 'البداية',
    description:
      'بدأت رحلتي في عالم التصوير بشغف كبير بالضوء والتفاصيل وقصص الأشخاص.',
  },
  {
    id: 2,
    period: '2018',
    title: 'التخصص في الأزياء',
    description:
      'قررت التفرغ لتصوير الأزياء والموضة، وطوّرت أسلوباً بصرياً مميزاً.',
  },
  {
    id: 3,
    period: '2021',
    title: 'أول حملة عالمية',
    description:
      'تعاونت مع علامات عالمية في حملات إعلانية نالت إعجاباً واسعاً.',
  },
  {
    id: 4,
    period: '2024',
    title: 'افتتاح الاستوديو',
    description:
      'أطلقت استوديو متكاملاً مجهزاً بأحدث التقنيات وأقوى فريق عمل.',
  },
];

export const AWARDS: AwardItem[] = [
  {
    id: 1,
    title: 'جائزة المصور المتميز',
    year: '2023',
    description: 'عن أفضل حملة أزياء في المهرجان العربي للتصوير.',
  },
  {
    id: 2,
    title: 'جائزة الإبداع البصري',
    year: '2022',
    description: 'تقديراً لمجموعة تحريرية في مجلة موضة عربية.',
  },
  {
    id: 3,
    title: 'أفضل صورة إعلانية',
    year: '2021',
    description: 'ضمن مسابقة دولية لتصوير الأزياء والإعلانات.',
  },
];

export const VALUES_ITEMS: ValueItem[] = [
  {
    id: 1,
    icon: 'fa-gem',
    title: 'الجودة أولاً',
    description:
      'لا نساوم على الاحترافية أبداً، كل لقطة تستحق أفضل معالجة ممكنة.',
  },
  {
    id: 2,
    icon: 'fa-lightbulb',
    title: 'الإبداع',
    description:
      'نبحث دائماً عن أفكار جديدة وجرأة في التكوين وأسلوب سرد بصري.',
  },
  {
    id: 3,
    icon: 'fa-handshake',
    title: 'الثقة والتعاون',
    description:
      'نعمل بشراكة حقيقية مع عملائنا وندرك أن الراحة أهم أسرار الإخراج.',
  },
  {
    id: 4,
    icon: 'fa-clock',
    title: 'الالتزام بالوقت',
    description:
      'نحترم مواعيدنا ومواعيدك، والتسليم في وقته جزء من احترافيتنا.',
  },
];

export const BRANDS: BrandItem[] = [
  { id: 1, name: 'VOGUE' },
  { id: 2, name: 'ELLE' },
  { id: 3, name: 'DIOR' },
  { id: 4, name: 'CHANEL' },
  { id: 5, name: 'GUCCI' },
  { id: 6, name: 'ZARA' },
];

/* ------------------------------- Contact -------------------------------- */
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: 'كيف أحجز جلسة تصوير؟',
    answer:
      'ببساطة عبر نموذج التواصل أو مراسلتنا مباشرة، وسنحدد معاً موعد الجلسة ونفاصيلها خلال يوم عمل.',
  },
  {
    id: 2,
    question: 'كم تستغرق الجلسة؟',
    answer:
      'تختلف حسب الخدمة، من ساعتين للجلسة الأساسية حتى عدة أيام للحملات المتكاملة.',
  },
  {
    id: 3,
    question: 'متى استلم صوري؟',
    answer:
      'بعد الاختيار والريتوش، نسلّم الملفات خلال 5-10 أيام عمل من تاريخ الجلسة.',
  },
  {
    id: 4,
    question: 'هل تشمل الخدمة حقوق الاستخدام التجاري؟',
    answer:
      'نعم، الباقات الاحترافية والمتكاملة تتضمن حقوق استخدام تجاري مرنة حسب الاتفاق.',
  },
  {
    id: 5,
    question: 'هل تتوفر خدمة تصوير خارجي؟',
    answer:
      'نعم، نوفر تصوير الاستوديو والمواقع الخارجية وفق متطلبات المشروع.',
  },
];
