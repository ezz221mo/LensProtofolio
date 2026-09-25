# Ahmed Lens — Fashion Photographer Website

موقع احترافي متعدد الصفحات لمصور أزياء، مبني بهيكلية React كاملة مع TypeScript و Framer Motion و GSAP وخلفية Three.js ثلاثية الأبعاد ونظام تصميم موحّد.

## 🛠️ التقنيات

| التقنية | الاستخدام |
|---------|-----------|
| **React 18** | مكونات الواجهة |
| **TypeScript** | نوعية آمنة للكود |
| **Vite** | أداة البناء والتطوير |
| **React Router** | التنقل بين الصفحات المتعددة |
| **Framer Motion** | أنيميشن الواجهة والانتقالات والتأثيرات التفاعلية |
| **GSAP + ScrollTrigger** | حركات التمرير المعقدة (خط زمني لعملية العمل) |
| **React Three Fiber** | خلفية 3D تفاعلية مع Three.js |
| **CSS Modules** | تنسيق معزول لكل مكوّن |
| **Font Awesome** | أيقونات احترافية موحّدة |

## 📁 البنية

```
fashion-photographer-landing/
├── public/favicon.svg             # أيقونة الموقع المخصصة (كاميرا)
├── index.html                     # Fonts + Font Awesome CDN, RTL
├── src/
│   ├── pages/
│   │   ├── HomePage.tsx           # الصفحة الرئيسية (اللاندينج)
│   │   ├── WorksPage.tsx          # معرض الأعمال (فلترة + Lightbox)
│   │   ├── ServicesPage.tsx       # الخدمات + الأسعار + خط العملية
│   │   ├── AboutPage.tsx          # من أنا (قيم + مسيرة + جوائز)
│   │   └── ContactPage.tsx        # تواصل + أسئلة شائعة
│   ├── components/
│   │   ├── layout/                # SiteLayout, ScrollToTop, PageTransition
│   │   ├── ui/                    # Button, Reveal, StatCard, PageHero, CTABanner
│   │   ├── three/ThreeBackground  # خلفية 3D (قابلة للتكيّف)
│   │   ├── Loader, Cursor, Navbar, Footer ...
│   │   └── ProcessTimeline.tsx    # خط زمني بـ GSAP
│   ├── data/index.ts              # كل المحتوى (نصوص، صور، أسعار، أسئلة...)
│   ├── hooks/useCounter.ts
│   ├── types/index.ts
│   ├── App.tsx                    # التوجيه + الانتقالات
│   └── main.tsx                   # BrowserRouter
├── package.json
├── tsconfig.json / tsconfig.node.json
└── vite.config.ts
```

## 🚀 التشغيل

> **مهم:** تمت إضافة `react-router-dom` و `gsap`. شغّل `npm install` مرة أخرى لتثبيتها إن لم تكن مثبتة بعد.

```bash
# تثبيت المكتبات (مرة واحدة)
npm install

# تشغيل بيئة التطوير (localhost:5173)
npm run dev

# بناء نسخة الإنتاج
npm run build

# معاينة نسخة الإنتاج
npm run preview
```

## 📄 الصفحات

| المسار | الصفحة |
|--------|--------|
| `/` | الصفحة الرئيسية (اللاندينج) |
| `/works` | معرض الأعمال مع فلترة و Lightbox |
| `/services` | الخدمات، خط العملية، باقات الأسعار |
| `/about` | نبذة، قيم، مسيرة مهنية، جوائز |
| `/contact` | نموذج تواصل + أسئلة شائعة |

## ✨ المميزات

- نظام تصميم موحّد (ألوان، خطوط، بطاقات، أزرار) عبر كل الصفحات
- خلفية 3D تفاعلية تستجيب للفأرة (قابلة للتكيّف بين الصفحات)
- انتقالات سلسة بين الصفحات (Framer Motion)
- حركات ظهور عند التمرير
- تأثيرات Tilt ثلاثية الأبعاد على الصور والبطاقات
- خط زمني تفاعلي بـ GSAP
- مؤشر فأرة مخصص
- شاشة تحميل أنيميشن
- سلايدر آراء العملاء
- عدّادات أرقام متحركة
- أيقونة Favicon مخصصة
- تصميم متجاوب بالكامل + RTL

## 🎨 التخصيص

- الألوان/الخطوط: متغيرات CSS في `src/index.css`
- كل المحتوى (نصوص، صور، أسعار، أسئلة): `src/data/index.ts`
- الأنواع: `src/types/index.ts`
