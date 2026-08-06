# ActStudio — Project Structure

استوديو تطوير منتجات «أنشطة». جميع الأسماء إنجليزية، بلا مسافات، بلا أحرف عربية.

---

## الشجرة

```
ActStudio/
├── PROJECT_STRUCTURE.md        هذا الملف
├── README.md                   شرح المجلدات
│
├── assets/                     الأصول الثابتة — لا كود
│   ├── logos/                  شعار أنشطة بصيغه المختلفة
│   ├── fonts/                  woff2: Tajawal, IBM Plex Sans Arabic
│   ├── icons/                  أيقونات SVG
│   ├── sounds/                 مؤثرات صوتية
│   ├── images/                 صور وخلفيات وأغلفة
│   └── themes/                 ثيمات بديلة
│
├── shared/                     الكود المشترك بين كل الأنشطة
│   ├── css/
│   │   ├── base.css            تصفير، @font-face، طباعة، RTL
│   │   ├── components.css      أزرار، بطاقات، ويزارد، مؤقت
│   │   └── theme.css           المصدر الوحيد للألوان والخطوط
│   └── js/
│       ├── helpers.js          خلط، تطبيع عربي، تنسيق وقت، escape
│       ├── audio.js            محرك الصوت — كل شيء داخل try
│       ├── storage.js          التخزين المحلي — كل شيء داخل try
│       └── ui.js               ويزارد، بطاقات فرق، قصاصات، شاشات
│
├── questions/                  بنوك الأسئلة — مفصولة عن الكود
│   ├── primary_1_3/            12 ملف JSON
│   ├── primary_4_6/            12 ملف JSON
│   ├── middle/                 12 ملف JSON
│   └── secondary/              12 ملف JSON
│
├── activities/                 كل نشاط مستقل بنفس التركيبة الخمسية
│   ├── letters/
│   ├── escape-room/
│   ├── mystery-box/
│   └── template/               القالب الذي يُنسخ لأي نشاط جديد
│
└── docs/
    └── project-structure.md    الوثيقة المعمارية التفصيلية
```

---

## المجالات في كل مرحلة

`sports` · `history` · `science` · `islamic` · `geography` · `technology` ·
`brands` · `riddles` · `capitals` · `animals` · `plants` · `mixed`

---

## تركيبة النشاط الواحد

| الملف | الوظيفة |
|---|---|
| `index.html` | الهيكل فقط، ويربط shared ثم ملفات النشاط |
| `style.css` | أنماط النشاط فقط، فوق shared/css |
| `app.js` | منطق النشاط |
| `config.json` | الإعدادات والمسارات |
| `README.md` | شرح النشاط |

### صيغة config.json

```json
{
  "id": "letters",
  "name": "تحدي الحروف",
  "version": "1.0.0",
  "theme": "activities-teacher",
  "questionsBasePath": "../../questions",
  "assetsBasePath": "../../assets",
  "teacherMode": true
}
```

---

## المسارات النسبية

من داخل `activities/<name>/`:

| الوجهة | المسار |
|---|---|
| المشترك | `../../shared/` |
| الأصول | `../../assets/` |
| الأسئلة | `../../questions/` |

جميع المسارات نسبية بالكامل. لا يوجد أي مسار مطلق ولا أي اسم عربي
داخل أي ملف برمجي.

---

## قواعد ملزمة

1. لا يُكتب لون صريح خارج `theme.css` — كل لون عبر متغيّر.
2. لا يُكرَّر في `activities/*/style.css` أي مكوّن موجود في `components.css`.
3. المرحلة تُحدَّد من اسم مجلد الأسئلة، والمجال من اسم الملف — لا من حقول داخل السؤال.
4. لا خطوط من الإنترنت. التضمين محلي من `assets/fonts/`.
5. النشاط الجديد يبدأ بنسخ `template/` لا من الصفر.
6. أسماء إنجليزية فقط، بلا مسافات.

---

## التشغيل

المتصفحات تمنع `fetch` للملفات المجاورة عبر `file://`، لذا لا يُفتح المشروع
بنقرة مزدوجة. من جذر `ActStudio`:

```
python -m http.server 8080
```

ثم `http://localhost:8080/activities/letters/`

---

## النشر

بعد رفع محتويات `ActStudio` إلى جذر مستودع باسم `actstudio`:

```
https://<الحساب>.github.io/actstudio/activities/letters/
```

جميع الأسماء إنجليزية، فلا يحدث ترميز في الروابط.
