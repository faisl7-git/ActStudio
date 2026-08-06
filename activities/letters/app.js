/* ============================================================
   تحدي الحروف — منطق النشاط
   منقول كما هو من النسخة النهائية v3 دون أي تغيير في المنطق.
   ============================================================ */
(function(){
"use strict";

/* ================= البيانات ================= */
/* يمكن لأي سؤال أن يحتوي على:
   image:"assets/brands/logo-name.png",
   imageAlt:"وصف الصورة"
   وعندها تظهر الصورة فوق السؤال. استخدم ملفات محلية داخل مستودع GitHub لضمان الثبات. */

/* ⚠️ مطلوب لصق بنك الأسئلة هنا ⚠️
   ------------------------------------------------------------
   افتح النسخة الأصلية:
     جاهز\تحدي الحروف\تحدي-الحروف-أنشطة-نسخة-المعلم-محدث-v3.html
   واذهب إلى السطر 418 — وهو سطر واحد طويل يبدأ بـ:
     var QUESTIONS = [
   انسخ السطر كاملًا والصقه مكان هذا التعليق تمامًا.
   لم أستطع نقله تلقائيًا لأن حجمه 28,608 رمزًا ويتجاوز حدّ القراءة لدي.
   ------------------------------------------------------------ */
var QUESTIONS = [{"id":"LTR-001","stage":"primary_lower","category":"رياضة","letter":"أ","question":"ما الحيوان الذي يُلقّب بملك الغابة؟","answer":"الأسد","difficulty":1},{"id":"LTR-002","stage":"primary_upper","category":"رياضة","letter":"أ","question":"ما الحيوان الذي يُلقّب بملك الغابة؟","answer":"الأسد","difficulty":2},{"id":"LTR-003","stage":"middle","category":"رياضة","letter":"أ","question":"حيوان مفترس اجتماعي يُعرف بلقب ملك الغابة، ما اسمه؟","answer":"الأسد","difficulty":3},{"id":"LTR-004","stage":"secondary","category":"رياضة","letter":"أ","question":"تحدٍ معرفي: حيوان مفترس اجتماعي يُعرف بلقب ملك الغابة، ما اسمه؟","answer":"الأسد","difficulty":4},{"id":"LTR-005","stage":"primary_lower","category":"رياضة","letter":"ت","question":"ما الرياضة التي تُلعب بمضرب وكرة صفراء؟","answer":"التنس","difficulty":1},{"id":"LTR-006","stage":"primary_upper","category":"رياضة","letter":"ت","question":"ما الرياضة التي تُلعب بمضرب وكرة صفراء؟","answer":"التنس","difficulty":2},{"id":"LTR-007","stage":"middle","category":"رياضة","letter":"ت","question":"رياضة فردية أو زوجية يفصل بين لاعبيها شبك وتستخدم مضربًا، ما هي؟","answer":"التنس","difficulty":3},{"id":"LTR-008","stage":"secondary","category":"رياضة","letter":"ت","question":"تحدٍ معرفي: رياضة فردية أو زوجية يفصل بين لاعبيها شبك وتستخدم مضربًا، ما هي؟","answer":"التنس","difficulty":4},{"id":"LTR-009","stage":"primary_lower","category":"رياضة","letter":"ج","question":"ما الرياضة القتالية اليابانية التي تعتمد على الرمي والتثبيت؟","answer":"الجودو","difficulty":1},{"id":"LTR-010","stage":"primary_upper","category":"رياضة","letter":"ج","question":"ما الرياضة القتالية اليابانية التي تعتمد على الرمي والتثبيت؟","answer":"الجودو","difficulty":2},{"id":"LTR-011","stage":"middle","category":"رياضة","letter":"ج","question":"فن قتالي أولمبي ياباني يعني اسمه «الطريق اللطيف»، ما هو؟","answer":"الجودو","difficulty":3},{"id":"LTR-012","stage":"secondary","category":"رياضة","letter":"ج","question":"تحدٍ معرفي: فن قتالي أولمبي ياباني يعني اسمه «الطريق اللطيف»، ما هو؟","answer":"الجودو","difficulty":4},{"id":"LTR-013","stage":"primary_lower","category":"رياضة","letter":"ر","question":"ما الرياضة التي تعتمد على إصابة هدف من مسافة؟","answer":"الرماية","difficulty":1},{"id":"LTR-014","stage":"primary_upper","category":"رياضة","letter":"ر","question":"ما الرياضة التي تعتمد على إصابة هدف من مسافة؟","answer":"الرماية","difficulty":2},{"id":"LTR-015","stage":"middle","category":"رياضة","letter":"ر","question":"رياضة دقة تستخدم القوس أو السلاح الهوائي لإصابة هدف، ما هي؟","answer":"الرماية","difficulty":3},{"id":"LTR-016","stage":"secondary","category":"رياضة","letter":"ر","question":"تحدٍ معرفي: رياضة دقة تستخدم القوس أو السلاح الهوائي لإصابة هدف، ما هي؟","answer":"الرماية","difficulty":4},{"id":"LTR-017","stage":"primary_lower","category":"رياضة","letter":"س","question":"ما الرياضة التي تُمارس في الماء؟","answer":"السباحة","difficulty":1},{"id":"LTR-018","stage":"primary_upper","category":"رياضة","letter":"س","question":"ما الرياضة التي تُمارس في الماء؟","answer":"السباحة","difficulty":2},{"id":"LTR-019","stage":"middle","category":"رياضة","letter":"س","question":"رياضة مائية أولمبية تتنوع أساليبها بين الحرة والظهر والصدر، ما هي؟","answer":"السباحة","difficulty":3},{"id":"LTR-020","stage":"secondary","category":"رياضة","letter":"س","question":"تحدٍ معرفي: رياضة مائية أولمبية تتنوع أساليبها بين الحرة والظهر والصدر، ما هي؟","answer":"السباحة","difficulty":4},{"id":"LTR-021","stage":"primary_lower","category":"رياضة","letter":"ف","question":"ما الرياضة التي تعتمد على ركوب الخيل؟","answer":"الفروسية","difficulty":1},{"id":"LTR-022","stage":"primary_upper","category":"رياضة","letter":"ف","question":"ما الرياضة التي تعتمد على ركوب الخيل؟","answer":"الفروسية","difficulty":2},{"id":"LTR-023","stage":"middle","category":"رياضة","letter":"ف","question":"رياضة أولمبية تشمل القفز والترويض وركوب الخيل، ما هي؟","answer":"الفروسية","difficulty":3},{"id":"LTR-024","stage":"secondary","category":"رياضة","letter":"ف","question":"تحدٍ معرفي: رياضة أولمبية تشمل القفز والترويض وركوب الخيل، ما هي؟","answer":"الفروسية","difficulty":4},{"id":"LTR-025","stage":"primary_lower","category":"رياضة","letter":"ك","question":"ما الرياضة الأكثر شهرة التي يلعب فيها كل فريق بأحد عشر لاعبًا؟","answer":"كرة القدم","difficulty":1},{"id":"LTR-026","stage":"primary_upper","category":"رياضة","letter":"ك","question":"ما الرياضة الأكثر شهرة التي يلعب فيها كل فريق بأحد عشر لاعبًا؟","answer":"كرة القدم","difficulty":2},{"id":"LTR-027","stage":"middle","category":"رياضة","letter":"ك","question":"رياضة جماعية هدفها إدخال الكرة في مرمى الخصم غالبًا بالقدم، ما هي؟","answer":"كرة القدم","difficulty":3},{"id":"LTR-028","stage":"secondary","category":"رياضة","letter":"ك","question":"تحدٍ معرفي: رياضة جماعية هدفها إدخال الكرة في مرمى الخصم غالبًا بالقدم، ما هي؟","answer":"كرة القدم","difficulty":4},{"id":"LTR-029","stage":"primary_lower","category":"تاريخ","letter":"أ","question":"ما الاسم التاريخي للمناطق الإسلامية في شبه الجزيرة الإيبيرية؟","answer":"الأندلس","difficulty":1},{"id":"LTR-030","stage":"primary_upper","category":"تاريخ","letter":"أ","question":"ما الاسم التاريخي للمناطق الإسلامية في شبه الجزيرة الإيبيرية؟","answer":"الأندلس","difficulty":2},{"id":"LTR-031","stage":"middle","category":"تاريخ","letter":"أ","question":"اسم حضاري أطلق على أجزاء من إسبانيا والبرتغال حكمها المسلمون قرونًا، ما هو؟","answer":"الأندلس","difficulty":3},{"id":"LTR-032","stage":"secondary","category":"تاريخ","letter":"أ","question":"تحدٍ معرفي: اسم حضاري أطلق على أجزاء من إسبانيا والبرتغال حكمها المسلمون قرونًا، ما هو؟","answer":"الأندلس","difficulty":4},{"id":"LTR-033","stage":"primary_lower","category":"تاريخ","letter":"ب","question":"ما اسم أول غزوة كبرى في الإسلام؟","answer":"بدر","difficulty":1},{"id":"LTR-034","stage":"primary_upper","category":"تاريخ","letter":"ب","question":"ما اسم أول غزوة كبرى في الإسلام؟","answer":"بدر","difficulty":2},{"id":"LTR-035","stage":"middle","category":"تاريخ","letter":"ب","question":"وقعت في السنة الثانية للهجرة وكانت أول معركة كبرى للمسلمين، ما اسمها؟","answer":"بدر","difficulty":3},{"id":"LTR-036","stage":"secondary","category":"تاريخ","letter":"ب","question":"تحدٍ معرفي: وقعت في السنة الثانية للهجرة وكانت أول معركة كبرى للمسلمين، ما اسمها؟","answer":"بدر","difficulty":4},{"id":"LTR-037","stage":"primary_lower","category":"تاريخ","letter":"ت","question":"ما اسم المدينة الأثرية السورية الشهيرة بالملكة زنوبيا؟","answer":"تدمر","difficulty":1},{"id":"LTR-038","stage":"primary_upper","category":"تاريخ","letter":"ت","question":"ما اسم المدينة الأثرية السورية الشهيرة بالملكة زنوبيا؟","answer":"تدمر","difficulty":2},{"id":"LTR-039","stage":"middle","category":"تاريخ","letter":"ت","question":"مدينة أثرية ازدهرت على طرق التجارة في بادية الشام وارتبطت بزنوبيا، ما هي؟","answer":"تدمر","difficulty":3},{"id":"LTR-040","stage":"secondary","category":"تاريخ","letter":"ت","question":"تحدٍ معرفي: مدينة أثرية ازدهرت على طرق التجارة في بادية الشام وارتبطت بزنوبيا، ما هي؟","answer":"تدمر","difficulty":4},{"id":"LTR-041","stage":"primary_lower","category":"تاريخ","letter":"ح","question":"ما الاسم التاريخي لموقع مدائن صالح؟","answer":"الحجر","difficulty":1},{"id":"LTR-042","stage":"primary_upper","category":"تاريخ","letter":"ح","question":"ما الاسم التاريخي لموقع مدائن صالح؟","answer":"الحجر","difficulty":2},{"id":"LTR-043","stage":"middle","category":"تاريخ","letter":"ح","question":"موقع نبطي سعودي مسجل عالميًا ويعرف بمدائن صالح، ما اسمه القديم؟","answer":"الحجر","difficulty":3},{"id":"LTR-044","stage":"secondary","category":"تاريخ","letter":"ح","question":"تحدٍ معرفي: موقع نبطي سعودي مسجل عالميًا ويعرف بمدائن صالح، ما اسمه القديم؟","answer":"الحجر","difficulty":4},{"id":"LTR-045","stage":"primary_lower","category":"تاريخ","letter":"د","question":"ما الدولة الإسلامية التي اتخذت بغداد عاصمة لها؟","answer":"الدولة العباسية","difficulty":1},{"id":"LTR-046","stage":"primary_upper","category":"تاريخ","letter":"د","question":"ما الدولة الإسلامية التي اتخذت بغداد عاصمة لها؟","answer":"الدولة العباسية","difficulty":2},{"id":"LTR-047","stage":"middle","category":"تاريخ","letter":"د","question":"خلافة إسلامية بدأت عام 750م واتخذت بغداد مركزًا لها، ما هي؟","answer":"الدولة العباسية","difficulty":3},{"id":"LTR-048","stage":"secondary","category":"تاريخ","letter":"د","question":"تحدٍ معرفي: خلافة إسلامية بدأت عام 750م واتخذت بغداد مركزًا لها، ما هي؟","answer":"الدولة العباسية","difficulty":4},{"id":"LTR-049","stage":"primary_lower","category":"تاريخ","letter":"ص","question":"من القائد المسلم الذي استعاد القدس بعد معركة حطين؟","answer":"صلاح الدين","difficulty":1},{"id":"LTR-050","stage":"primary_upper","category":"تاريخ","letter":"ص","question":"من القائد المسلم الذي استعاد القدس بعد معركة حطين؟","answer":"صلاح الدين","difficulty":2},{"id":"LTR-051","stage":"middle","category":"تاريخ","letter":"ص","question":"قائد أيوبي ارتبط بحطين واستعادة القدس، من هو؟","answer":"صلاح الدين","difficulty":3},{"id":"LTR-052","stage":"secondary","category":"تاريخ","letter":"ص","question":"تحدٍ معرفي: قائد أيوبي ارتبط بحطين واستعادة القدس، من هو؟","answer":"صلاح الدين","difficulty":4},{"id":"LTR-053","stage":"primary_lower","category":"تاريخ","letter":"ق","question":"ما المدينة الأندلسية التي اشتهرت بجامعها الكبير؟","answer":"قرطبة","difficulty":1},{"id":"LTR-054","stage":"primary_upper","category":"تاريخ","letter":"ق","question":"ما المدينة الأندلسية التي اشتهرت بجامعها الكبير؟","answer":"قرطبة","difficulty":2},{"id":"LTR-055","stage":"middle","category":"تاريخ","letter":"ق","question":"مدينة أندلسية كانت عاصمة للخلافة الأموية في الأندلس، ما هي؟","answer":"قرطبة","difficulty":3},{"id":"LTR-056","stage":"secondary","category":"تاريخ","letter":"ق","question":"تحدٍ معرفي: مدينة أندلسية كانت عاصمة للخلافة الأموية في الأندلس، ما هي؟","answer":"قرطبة","difficulty":4},{"id":"LTR-057","stage":"primary_lower","category":"علامات تجارية","letter":"أ","question":"ما العلامة الرياضية التي يشتهر شعارها بثلاثة خطوط؟","answer":"أديداس","difficulty":1},{"id":"LTR-058","stage":"primary_upper","category":"علامات تجارية","letter":"أ","question":"ما العلامة الرياضية التي يشتهر شعارها بثلاثة خطوط؟","answer":"أديداس","difficulty":2},{"id":"LTR-059","stage":"middle","category":"علامات تجارية","letter":"أ","question":"علامة رياضية ألمانية ارتبطت بثلاثة خطوط متوازية، ما هي؟","answer":"أديداس","difficulty":3},{"id":"LTR-060","stage":"secondary","category":"علامات تجارية","letter":"أ","question":"تحدٍ معرفي: علامة رياضية ألمانية ارتبطت بثلاثة خطوط متوازية، ما هي؟","answer":"أديداس","difficulty":4},{"id":"LTR-061","stage":"primary_lower","category":"علامات تجارية","letter":"ب","question":"ما المشروب الغازي الذي يحمل شعارًا دائريًا أحمر وأبيض وأزرق؟","answer":"بيبسي","difficulty":1},{"id":"LTR-062","stage":"primary_upper","category":"علامات تجارية","letter":"ب","question":"ما المشروب الغازي الذي يحمل شعارًا دائريًا أحمر وأبيض وأزرق؟","answer":"بيبسي","difficulty":2},{"id":"LTR-063","stage":"middle","category":"علامات تجارية","letter":"ب","question":"علامة مشروبات غازية عالمية منافسة لكوكاكولا وشعارها دائري، ما هي؟","answer":"بيبسي","difficulty":3},{"id":"LTR-064","stage":"secondary","category":"علامات تجارية","letter":"ب","question":"تحدٍ معرفي: علامة مشروبات غازية عالمية منافسة لكوكاكولا وشعارها دائري، ما هي؟","answer":"بيبسي","difficulty":4},{"id":"LTR-065","stage":"primary_lower","category":"علامات تجارية","letter":"ت","question":"ما شركة السيارات الكهربائية التي تحمل اسم عالم كهرباء شهير؟","answer":"تسلا","difficulty":1},{"id":"LTR-066","stage":"primary_upper","category":"علامات تجارية","letter":"ت","question":"ما شركة السيارات الكهربائية التي تحمل اسم عالم كهرباء شهير؟","answer":"تسلا","difficulty":2},{"id":"LTR-067","stage":"middle","category":"علامات تجارية","letter":"ت","question":"شركة سيارات كهربائية أمريكية تحمل اسم مخترع مشهور في الكهرباء، ما هي؟","answer":"تسلا","difficulty":3},{"id":"LTR-068","stage":"secondary","category":"علامات تجارية","letter":"ت","question":"تحدٍ معرفي: شركة سيارات كهربائية أمريكية تحمل اسم مخترع مشهور في الكهرباء، ما هي؟","answer":"تسلا","difficulty":4},{"id":"LTR-069","stage":"primary_lower","category":"علامات تجارية","letter":"س","question":"ما الشركة الكورية الشهيرة بالهواتف والتلفزيونات؟","answer":"سامسونج","difficulty":1},{"id":"LTR-070","stage":"primary_upper","category":"علامات تجارية","letter":"س","question":"ما الشركة الكورية الشهيرة بالهواتف والتلفزيونات؟","answer":"سامسونج","difficulty":2},{"id":"LTR-071","stage":"middle","category":"علامات تجارية","letter":"س","question":"مجموعة تقنية كورية جنوبية من أبرز مصنعي الهواتف والشاشات، ما هي؟","answer":"سامسونج","difficulty":3},{"id":"LTR-072","stage":"secondary","category":"علامات تجارية","letter":"س","question":"تحدٍ معرفي: مجموعة تقنية كورية جنوبية من أبرز مصنعي الهواتف والشاشات، ما هي؟","answer":"سامسونج","difficulty":4},{"id":"LTR-073","stage":"primary_lower","category":"علامات تجارية","letter":"ف","question":"ما شركة السيارات الأمريكية التي أسسها هنري فورد؟","answer":"فورد","difficulty":1},{"id":"LTR-074","stage":"primary_upper","category":"علامات تجارية","letter":"ف","question":"ما شركة السيارات الأمريكية التي أسسها هنري فورد؟","answer":"فورد","difficulty":2},{"id":"LTR-075","stage":"middle","category":"علامات تجارية","letter":"ف","question":"شركة أمريكية ارتبطت بخط الإنتاج الشامل والسيارة Model T، ما هي؟","answer":"فورد","difficulty":3},{"id":"LTR-076","stage":"secondary","category":"علامات تجارية","letter":"ف","question":"تحدٍ معرفي: شركة أمريكية ارتبطت بخط الإنتاج الشامل والسيارة Model T، ما هي؟","answer":"فورد","difficulty":4},{"id":"LTR-077","stage":"primary_lower","category":"علامات تجارية","letter":"ك","question":"ما العلامة الشهيرة للمشروبات الغازية ذات الشعار الأحمر؟","answer":"كوكاكولا","difficulty":1},{"id":"LTR-078","stage":"primary_upper","category":"علامات تجارية","letter":"ك","question":"ما العلامة الشهيرة للمشروبات الغازية ذات الشعار الأحمر؟","answer":"كوكاكولا","difficulty":2},{"id":"LTR-079","stage":"middle","category":"علامات تجارية","letter":"ك","question":"علامة مشروبات أمريكية عالمية ارتبطت باللون الأحمر وخط أبيض مميز، ما هي؟","answer":"كوكاكولا","difficulty":3},{"id":"LTR-080","stage":"secondary","category":"علامات تجارية","letter":"ك","question":"تحدٍ معرفي: علامة مشروبات أمريكية عالمية ارتبطت باللون الأحمر وخط أبيض مميز، ما هي؟","answer":"كوكاكولا","difficulty":4},{"id":"LTR-081","stage":"primary_lower","category":"علامات تجارية","letter":"م","question":"ما الشركة التي طورت نظام ويندوز؟","answer":"مايكروسوفت","difficulty":1},{"id":"LTR-082","stage":"primary_upper","category":"علامات تجارية","letter":"م","question":"ما الشركة التي طورت نظام ويندوز؟","answer":"مايكروسوفت","difficulty":2},{"id":"LTR-083","stage":"middle","category":"علامات تجارية","letter":"م","question":"شركة تقنية أسسها بيل غيتس وبول ألين وطورت Windows، ما هي؟","answer":"مايكروسوفت","difficulty":3},{"id":"LTR-084","stage":"secondary","category":"علامات تجارية","letter":"م","question":"تحدٍ معرفي: شركة تقنية أسسها بيل غيتس وبول ألين وطورت Windows، ما هي؟","answer":"مايكروسوفت","difficulty":4},{"id":"LTR-085","stage":"primary_lower","category":"دول وعواصم","letter":"أ","question":"ما عاصمة دولة الإمارات العربية المتحدة؟","answer":"أبوظبي","difficulty":1},{"id":"LTR-086","stage":"primary_upper","category":"دول وعواصم","letter":"أ","question":"ما عاصمة دولة الإمارات العربية المتحدة؟","answer":"أبوظبي","difficulty":2},{"id":"LTR-087","stage":"middle","category":"دول وعواصم","letter":"أ","question":"عاصمة اتحادية خليجية تقع على جزيرة وتحمل اسم إمارتها، ما هي؟","answer":"أبوظبي","difficulty":3},{"id":"LTR-088","stage":"secondary","category":"دول وعواصم","letter":"أ","question":"تحدٍ معرفي: عاصمة اتحادية خليجية تقع على جزيرة وتحمل اسم إمارتها، ما هي؟","answer":"أبوظبي","difficulty":4},{"id":"LTR-089","stage":"primary_lower","category":"دول وعواصم","letter":"ب","question":"ما عاصمة لبنان؟","answer":"بيروت","difficulty":1},{"id":"LTR-090","stage":"primary_upper","category":"دول وعواصم","letter":"ب","question":"ما عاصمة لبنان؟","answer":"بيروت","difficulty":2},{"id":"LTR-091","stage":"middle","category":"دول وعواصم","letter":"ب","question":"عاصمة عربية متوسطية تُعرف بتاريخها الثقافي، ما هي؟","answer":"بيروت","difficulty":3},{"id":"LTR-092","stage":"secondary","category":"دول وعواصم","letter":"ب","question":"تحدٍ معرفي: عاصمة عربية متوسطية تُعرف بتاريخها الثقافي، ما هي؟","answer":"بيروت","difficulty":4},{"id":"LTR-093","stage":"primary_lower","category":"دول وعواصم","letter":"ت","question":"ما عاصمة الجمهورية التونسية؟","answer":"تونس","difficulty":1},{"id":"LTR-094","stage":"primary_upper","category":"دول وعواصم","letter":"ت","question":"ما عاصمة الجمهورية التونسية؟","answer":"تونس","difficulty":2},{"id":"LTR-095","stage":"middle","category":"دول وعواصم","letter":"ت","question":"عاصمة دولة مغاربية تحمل الاسم نفسه تقريبًا، ما هي؟","answer":"تونس","difficulty":3},{"id":"LTR-096","stage":"secondary","category":"دول وعواصم","letter":"ت","question":"تحدٍ معرفي: عاصمة دولة مغاربية تحمل الاسم نفسه تقريبًا، ما هي؟","answer":"تونس","difficulty":4},{"id":"LTR-097","stage":"primary_lower","category":"دول وعواصم","letter":"د","question":"ما عاصمة دولة قطر؟","answer":"الدوحة","difficulty":1},{"id":"LTR-098","stage":"primary_upper","category":"دول وعواصم","letter":"د","question":"ما عاصمة دولة قطر؟","answer":"الدوحة","difficulty":2},{"id":"LTR-099","stage":"middle","category":"دول وعواصم","letter":"د","question":"عاصمة خليجية استضافت نهائي كأس العالم 2022، ما هي؟","answer":"الدوحة","difficulty":3},{"id":"LTR-100","stage":"secondary","category":"دول وعواصم","letter":"د","question":"تحدٍ معرفي: عاصمة خليجية استضافت نهائي كأس العالم 2022، ما هي؟","answer":"الدوحة","difficulty":4},{"id":"LTR-101","stage":"primary_lower","category":"دول وعواصم","letter":"ر","question":"ما عاصمة المملكة العربية السعودية؟","answer":"الرياض","difficulty":1},{"id":"LTR-102","stage":"primary_upper","category":"دول وعواصم","letter":"ر","question":"ما عاصمة المملكة العربية السعودية؟","answer":"الرياض","difficulty":2},{"id":"LTR-103","stage":"middle","category":"دول وعواصم","letter":"ر","question":"عاصمة المملكة وأكبر مدنها ومقر الحكومة، ما هي؟","answer":"الرياض","difficulty":3},{"id":"LTR-104","stage":"secondary","category":"دول وعواصم","letter":"ر","question":"تحدٍ معرفي: عاصمة المملكة وأكبر مدنها ومقر الحكومة، ما هي؟","answer":"الرياض","difficulty":4},{"id":"LTR-105","stage":"primary_lower","category":"دول وعواصم","letter":"س","question":"ما عاصمة كوريا الجنوبية؟","answer":"سيول","difficulty":1},{"id":"LTR-106","stage":"primary_upper","category":"دول وعواصم","letter":"س","question":"ما عاصمة كوريا الجنوبية؟","answer":"سيول","difficulty":2},{"id":"LTR-107","stage":"middle","category":"دول وعواصم","letter":"س","question":"عاصمة آسيوية على نهر الهان وتعد مركزًا تقنيًا عالميًا، ما هي؟","answer":"سيول","difficulty":3},{"id":"LTR-108","stage":"secondary","category":"دول وعواصم","letter":"س","question":"تحدٍ معرفي: عاصمة آسيوية على نهر الهان وتعد مركزًا تقنيًا عالميًا، ما هي؟","answer":"سيول","difficulty":4},{"id":"LTR-109","stage":"primary_lower","category":"دول وعواصم","letter":"م","question":"ما عاصمة سلطنة عُمان؟","answer":"مسقط","difficulty":1},{"id":"LTR-110","stage":"primary_upper","category":"دول وعواصم","letter":"م","question":"ما عاصمة سلطنة عُمان؟","answer":"مسقط","difficulty":2},{"id":"LTR-111","stage":"middle","category":"دول وعواصم","letter":"م","question":"عاصمة خليجية تقع بين جبال الحجر وبحر عُمان، ما هي؟","answer":"مسقط","difficulty":3},{"id":"LTR-112","stage":"secondary","category":"دول وعواصم","letter":"م","question":"تحدٍ معرفي: عاصمة خليجية تقع بين جبال الحجر وبحر عُمان، ما هي؟","answer":"مسقط","difficulty":4},{"id":"LTR-113","stage":"primary_lower","category":"علوم","letter":"أ","question":"ما الغاز الضروري لتنفس الإنسان؟","answer":"الأكسجين","difficulty":1},{"id":"LTR-114","stage":"primary_upper","category":"علوم","letter":"أ","question":"ما الغاز الضروري لتنفس الإنسان؟","answer":"الأكسجين","difficulty":2},{"id":"LTR-115","stage":"middle","category":"علوم","letter":"أ","question":"عنصر كيميائي رمزه O ويسهم في التنفس والاحتراق، ما هو؟","answer":"الأكسجين","difficulty":3},{"id":"LTR-116","stage":"secondary","category":"علوم","letter":"أ","question":"تحدٍ معرفي: عنصر كيميائي رمزه O ويسهم في التنفس والاحتراق، ما هو؟","answer":"الأكسجين","difficulty":4},{"id":"LTR-117","stage":"primary_lower","category":"علوم","letter":"ب","question":"ما الجسيم موجب الشحنة داخل نواة الذرة؟","answer":"البروتون","difficulty":1},{"id":"LTR-118","stage":"primary_upper","category":"علوم","letter":"ب","question":"ما الجسيم موجب الشحنة داخل نواة الذرة؟","answer":"البروتون","difficulty":2},{"id":"LTR-119","stage":"middle","category":"علوم","letter":"ب","question":"جسيم نووي موجب يحدد عدده العدد الذري للعنصر، ما هو؟","answer":"البروتون","difficulty":3},{"id":"LTR-120","stage":"secondary","category":"علوم","letter":"ب","question":"تحدٍ معرفي: جسيم نووي موجب يحدد عدده العدد الذري للعنصر، ما هو؟","answer":"البروتون","difficulty":4},{"id":"LTR-121","stage":"primary_lower","category":"علوم","letter":"ت","question":"ما تحول الماء من الحالة السائلة إلى الغازية؟","answer":"التبخر","difficulty":1},{"id":"LTR-122","stage":"primary_upper","category":"علوم","letter":"ت","question":"ما تحول الماء من الحالة السائلة إلى الغازية؟","answer":"التبخر","difficulty":2},{"id":"LTR-123","stage":"middle","category":"علوم","letter":"ت","question":"عملية فيزيائية تنتقل فيها الجزيئات من السائل إلى الغاز عند السطح، ما هي؟","answer":"التبخر","difficulty":3},{"id":"LTR-124","stage":"secondary","category":"علوم","letter":"ت","question":"تحدٍ معرفي: عملية فيزيائية تنتقل فيها الجزيئات من السائل إلى الغاز عند السطح، ما هي؟","answer":"التبخر","difficulty":4},{"id":"LTR-125","stage":"primary_lower","category":"علوم","letter":"ج","question":"ما القوة التي تجذب الأجسام نحو الأرض؟","answer":"الجاذبية","difficulty":1},{"id":"LTR-126","stage":"primary_upper","category":"علوم","letter":"ج","question":"ما القوة التي تجذب الأجسام نحو الأرض؟","answer":"الجاذبية","difficulty":2},{"id":"LTR-127","stage":"middle","category":"علوم","letter":"ج","question":"قوة أساسية تفسر سقوط الأجسام ودوران الكواكب، ما هي؟","answer":"الجاذبية","difficulty":3},{"id":"LTR-128","stage":"secondary","category":"علوم","letter":"ج","question":"تحدٍ معرفي: قوة أساسية تفسر سقوط الأجسام ودوران الكواكب، ما هي؟","answer":"الجاذبية","difficulty":4},{"id":"LTR-129","stage":"primary_lower","category":"علوم","letter":"ح","question":"ما المادة التي تحمل المعلومات الوراثية في الخلايا؟","answer":"الحمض النووي","difficulty":1},{"id":"LTR-130","stage":"primary_upper","category":"علوم","letter":"ح","question":"ما المادة التي تحمل المعلومات الوراثية في الخلايا؟","answer":"الحمض النووي","difficulty":2},{"id":"LTR-131","stage":"middle","category":"علوم","letter":"ح","question":"جزيء مزدوج اللولب يختصر بالإنجليزية DNA، ما اسمه العربي؟","answer":"الحمض النووي","difficulty":3},{"id":"LTR-132","stage":"secondary","category":"علوم","letter":"ح","question":"تحدٍ معرفي: جزيء مزدوج اللولب يختصر بالإنجليزية DNA، ما اسمه العربي؟","answer":"الحمض النووي","difficulty":4},{"id":"LTR-133","stage":"primary_lower","category":"علوم","letter":"ض","question":"ما الكمية الفيزيائية الناتجة عن القوة المؤثرة على وحدة المساحة؟","answer":"الضغط","difficulty":1},{"id":"LTR-134","stage":"primary_upper","category":"علوم","letter":"ض","question":"ما الكمية الفيزيائية الناتجة عن القوة المؤثرة على وحدة المساحة؟","answer":"الضغط","difficulty":2},{"id":"LTR-135","stage":"middle","category":"علوم","letter":"ض","question":"كمية تساوي القوة مقسومة على المساحة وتقاس بالباسكال، ما هي؟","answer":"الضغط","difficulty":3},{"id":"LTR-136","stage":"secondary","category":"علوم","letter":"ض","question":"تحدٍ معرفي: كمية تساوي القوة مقسومة على المساحة وتقاس بالباسكال، ما هي؟","answer":"الضغط","difficulty":4},{"id":"LTR-137","stage":"primary_lower","category":"علوم","letter":"م","question":"ما الجسم الذي يجذب الحديد وله قطبان؟","answer":"المغناطيس","difficulty":1},{"id":"LTR-138","stage":"primary_upper","category":"علوم","letter":"م","question":"ما الجسم الذي يجذب الحديد وله قطبان؟","answer":"المغناطيس","difficulty":2},{"id":"LTR-139","stage":"middle","category":"علوم","letter":"م","question":"جسم يولد مجالًا له قطبان شمالي وجنوبي، ما هو؟","answer":"المغناطيس","difficulty":3},{"id":"LTR-140","stage":"secondary","category":"علوم","letter":"م","question":"تحدٍ معرفي: جسم يولد مجالًا له قطبان شمالي وجنوبي، ما هو؟","answer":"المغناطيس","difficulty":4},{"id":"LTR-141","stage":"primary_lower","category":"ألغاز","letter":"أ","question":"ما الشيء الذي له عين ولا يرى؟","answer":"الإبرة","difficulty":1},{"id":"LTR-142","stage":"primary_upper","category":"ألغاز","letter":"أ","question":"ما الشيء الذي له عين ولا يرى؟","answer":"الإبرة","difficulty":2},{"id":"LTR-143","stage":"middle","category":"ألغاز","letter":"أ","question":"له عين يمر فيها الخيط لكنه لا يبصر، ما هو؟","answer":"الإبرة","difficulty":3},{"id":"LTR-144","stage":"secondary","category":"ألغاز","letter":"أ","question":"تحدٍ معرفي: له عين يمر فيها الخيط لكنه لا يبصر، ما هو؟","answer":"الإبرة","difficulty":4},{"id":"LTR-145","stage":"primary_lower","category":"ألغاز","letter":"ب","question":"ما الشيء المليء بالماء لكنه لا يشرب؟","answer":"البحر","difficulty":1},{"id":"LTR-146","stage":"primary_upper","category":"ألغاز","letter":"ب","question":"ما الشيء المليء بالماء لكنه لا يشرب؟","answer":"البحر","difficulty":2},{"id":"LTR-147","stage":"middle","category":"ألغاز","letter":"ب","question":"مسطح واسع يحمل الماء ولا يشرب منه، ما هو؟","answer":"البحر","difficulty":3},{"id":"LTR-148","stage":"secondary","category":"ألغاز","letter":"ب","question":"تحدٍ معرفي: مسطح واسع يحمل الماء ولا يشرب منه، ما هو؟","answer":"البحر","difficulty":4},{"id":"LTR-149","stage":"primary_lower","category":"ألغاز","letter":"ث","question":"ما الشيء الذي كلما أخذت منه كبر؟","answer":"الثقب","difficulty":1},{"id":"LTR-150","stage":"primary_upper","category":"ألغاز","letter":"ث","question":"ما الشيء الذي كلما أخذت منه كبر؟","answer":"الثقب","difficulty":2},{"id":"LTR-151","stage":"middle","category":"ألغاز","letter":"ث","question":"يزداد اتساعه كلما أزلت منه مادة، ما هو؟","answer":"الثقب","difficulty":3},{"id":"LTR-152","stage":"secondary","category":"ألغاز","letter":"ث","question":"تحدٍ معرفي: يزداد اتساعه كلما أزلت منه مادة، ما هو؟","answer":"الثقب","difficulty":4},{"id":"LTR-153","stage":"primary_lower","category":"ألغاز","letter":"د","question":"ما الشيء الذي يصعد ولا ينزل غالبًا؟","answer":"الدخان","difficulty":1},{"id":"LTR-154","stage":"primary_upper","category":"ألغاز","letter":"د","question":"ما الشيء الذي يصعد ولا ينزل غالبًا؟","answer":"الدخان","difficulty":2},{"id":"LTR-155","stage":"middle","category":"ألغاز","letter":"د","question":"ينتج عن الاحتراق ويتجه إلى أعلى بسبب الهواء الساخن، ما هو؟","answer":"الدخان","difficulty":3},{"id":"LTR-156","stage":"secondary","category":"ألغاز","letter":"د","question":"تحدٍ معرفي: ينتج عن الاحتراق ويتجه إلى أعلى بسبب الهواء الساخن، ما هو؟","answer":"الدخان","difficulty":4},{"id":"LTR-157","stage":"primary_lower","category":"ألغاز","letter":"س","question":"ما الشيء الذي له عقارب ولا يلدغ؟","answer":"الساعة","difficulty":1},{"id":"LTR-158","stage":"primary_upper","category":"ألغاز","letter":"س","question":"ما الشيء الذي له عقارب ولا يلدغ؟","answer":"الساعة","difficulty":2},{"id":"LTR-159","stage":"middle","category":"ألغاز","letter":"س","question":"لها عقربان أو ثلاثة لكنها ليست حيوانًا، ما هي؟","answer":"الساعة","difficulty":3},{"id":"LTR-160","stage":"secondary","category":"ألغاز","letter":"س","question":"تحدٍ معرفي: لها عقربان أو ثلاثة لكنها ليست حيوانًا، ما هي؟","answer":"الساعة","difficulty":4},{"id":"LTR-161","stage":"primary_lower","category":"ألغاز","letter":"ظ","question":"ما الشيء الذي يتبعك نهارًا ويختفي في الظلام؟","answer":"الظل","difficulty":1},{"id":"LTR-162","stage":"primary_upper","category":"ألغاز","letter":"ظ","question":"ما الشيء الذي يتبعك نهارًا ويختفي في الظلام؟","answer":"الظل","difficulty":2},{"id":"LTR-163","stage":"middle","category":"ألغاز","letter":"ظ","question":"ينتج عندما يحجب جسم الضوء ويتحرك معه، ما هو؟","answer":"الظل","difficulty":3},{"id":"LTR-164","stage":"secondary","category":"ألغاز","letter":"ظ","question":"تحدٍ معرفي: ينتج عندما يحجب جسم الضوء ويتحرك معه، ما هو؟","answer":"الظل","difficulty":4},{"id":"LTR-165","stage":"primary_lower","category":"ألغاز","letter":"م","question":"ما الشيء الذي له أسنان ولا يعض؟","answer":"المشط","difficulty":1},{"id":"LTR-166","stage":"primary_upper","category":"ألغاز","letter":"م","question":"ما الشيء الذي له أسنان ولا يعض؟","answer":"المشط","difficulty":2},{"id":"LTR-167","stage":"middle","category":"ألغاز","letter":"م","question":"أداة ترتيب الشعر ولها أسنان كثيرة، ما هي؟","answer":"المشط","difficulty":3},{"id":"LTR-168","stage":"secondary","category":"ألغاز","letter":"م","question":"تحدٍ معرفي: أداة ترتيب الشعر ولها أسنان كثيرة، ما هي؟","answer":"المشط","difficulty":4},{"id":"LTR-169","stage":"primary_lower","category":"تقنية","letter":"أ","question":"ما الشبكة العالمية التي تربط الأجهزة والمعلومات؟","answer":"الإنترنت","difficulty":1},{"id":"LTR-170","stage":"primary_upper","category":"تقنية","letter":"أ","question":"ما الشبكة العالمية التي تربط الأجهزة والمعلومات؟","answer":"الإنترنت","difficulty":2},{"id":"LTR-171","stage":"middle","category":"تقنية","letter":"أ","question":"بنية عالمية تعتمد بروتوكولات TCP/IP لربط الشبكات، ما هي؟","answer":"الإنترنت","difficulty":3},{"id":"LTR-172","stage":"secondary","category":"تقنية","letter":"أ","question":"تحدٍ معرفي: بنية عالمية تعتمد بروتوكولات TCP/IP لربط الشبكات، ما هي؟","answer":"الإنترنت","difficulty":4},{"id":"LTR-173","stage":"primary_lower","category":"تقنية","letter":"ب","question":"ما تقنية الاتصال اللاسلكي القصير بين الأجهزة؟","answer":"البلوتوث","difficulty":1},{"id":"LTR-174","stage":"primary_upper","category":"تقنية","letter":"ب","question":"ما تقنية الاتصال اللاسلكي القصير بين الأجهزة؟","answer":"البلوتوث","difficulty":2},{"id":"LTR-175","stage":"middle","category":"تقنية","letter":"ب","question":"معيار لاسلكي قصير المدى يعمل غالبًا في نطاق 2.4 غيغاهرتز، ما هو؟","answer":"البلوتوث","difficulty":3},{"id":"LTR-176","stage":"secondary","category":"تقنية","letter":"ب","question":"تحدٍ معرفي: معيار لاسلكي قصير المدى يعمل غالبًا في نطاق 2.4 غيغاهرتز، ما هو؟","answer":"البلوتوث","difficulty":4},{"id":"LTR-177","stage":"primary_lower","category":"تقنية","letter":"ت","question":"ما العملية التي تحول البيانات إلى صيغة غير مقروءة لحمايتها؟","answer":"التشفير","difficulty":1},{"id":"LTR-178","stage":"primary_upper","category":"تقنية","letter":"ت","question":"ما العملية التي تحول البيانات إلى صيغة غير مقروءة لحمايتها؟","answer":"التشفير","difficulty":2},{"id":"LTR-179","stage":"middle","category":"تقنية","letter":"ت","question":"أسلوب أمني يستخدم خوارزميات ومفاتيح لحماية سرية البيانات، ما هو؟","answer":"التشفير","difficulty":3},{"id":"LTR-180","stage":"secondary","category":"تقنية","letter":"ت","question":"تحدٍ معرفي: أسلوب أمني يستخدم خوارزميات ومفاتيح لحماية سرية البيانات، ما هو؟","answer":"التشفير","difficulty":4},{"id":"LTR-181","stage":"primary_lower","category":"تقنية","letter":"خ","question":"ما الحاسوب الذي يقدم خدمات وبيانات لأجهزة أخرى على الشبكة؟","answer":"الخادم","difficulty":1},{"id":"LTR-182","stage":"primary_upper","category":"تقنية","letter":"خ","question":"ما الحاسوب الذي يقدم خدمات وبيانات لأجهزة أخرى على الشبكة؟","answer":"الخادم","difficulty":2},{"id":"LTR-183","stage":"middle","category":"تقنية","letter":"خ","question":"جهاز أو برنامج يستجيب لطلبات العملاء في بنية الشبكات، ما هو؟","answer":"الخادم","difficulty":3},{"id":"LTR-184","stage":"secondary","category":"تقنية","letter":"خ","question":"تحدٍ معرفي: جهاز أو برنامج يستجيب لطلبات العملاء في بنية الشبكات، ما هو؟","answer":"الخادم","difficulty":4},{"id":"LTR-185","stage":"primary_lower","category":"تقنية","letter":"ر","question":"ما الآلة القابلة للبرمجة لتنفيذ مهام تلقائية؟","answer":"الروبوت","difficulty":1},{"id":"LTR-186","stage":"primary_upper","category":"تقنية","letter":"ر","question":"ما الآلة القابلة للبرمجة لتنفيذ مهام تلقائية؟","answer":"الروبوت","difficulty":2},{"id":"LTR-187","stage":"middle","category":"تقنية","letter":"ر","question":"نظام كهروميكانيكي يستشعر وينفذ أوامر مبرمجة، ما هو؟","answer":"الروبوت","difficulty":3},{"id":"LTR-188","stage":"secondary","category":"تقنية","letter":"ر","question":"تحدٍ معرفي: نظام كهروميكانيكي يستشعر وينفذ أوامر مبرمجة، ما هو؟","answer":"الروبوت","difficulty":4},{"id":"LTR-189","stage":"primary_lower","category":"تقنية","letter":"س","question":"ما الاسم الشائع لتشغيل الخدمات والتخزين عبر الإنترنت؟","answer":"السحابة","difficulty":1},{"id":"LTR-190","stage":"primary_upper","category":"تقنية","letter":"س","question":"ما الاسم الشائع لتشغيل الخدمات والتخزين عبر الإنترنت؟","answer":"السحابة","difficulty":2},{"id":"LTR-191","stage":"middle","category":"تقنية","letter":"س","question":"نموذج حوسبة يوفر موارد عند الطلب عبر الشبكة، ما اسمه المختصر؟","answer":"السحابة","difficulty":3},{"id":"LTR-192","stage":"secondary","category":"تقنية","letter":"س","question":"تحدٍ معرفي: نموذج حوسبة يوفر موارد عند الطلب عبر الشبكة، ما اسمه المختصر؟","answer":"السحابة","difficulty":4},{"id":"LTR-193","stage":"primary_lower","category":"تقنية","letter":"ك","question":"ما العبارة السرية المستخدمة لحماية الحساب؟","answer":"كلمة المرور","difficulty":1},{"id":"LTR-194","stage":"primary_upper","category":"تقنية","letter":"ك","question":"ما العبارة السرية المستخدمة لحماية الحساب؟","answer":"كلمة المرور","difficulty":2},{"id":"LTR-195","stage":"middle","category":"تقنية","letter":"ك","question":"وسيلة مصادقة نصية يجب أن تكون قوية وفريدة، ما هي؟","answer":"كلمة المرور","difficulty":3},{"id":"LTR-196","stage":"secondary","category":"تقنية","letter":"ك","question":"تحدٍ معرفي: وسيلة مصادقة نصية يجب أن تكون قوية وفريدة، ما هي؟","answer":"كلمة المرور","difficulty":4},{"id":"LTR-197","stage":"primary_lower","category":"أسئلة دينية","letter":"أ","question":"ما السورة التي تبدأ بقول الله تعالى: قل هو الله أحد؟","answer":"الإخلاص","difficulty":1},{"id":"LTR-198","stage":"primary_upper","category":"أسئلة دينية","letter":"أ","question":"ما السورة التي تبدأ بقول الله تعالى: قل هو الله أحد؟","answer":"الإخلاص","difficulty":2},{"id":"LTR-199","stage":"middle","category":"أسئلة دينية","letter":"أ","question":"سورة مكية قصيرة تعدل ثلث القرآن في الفضل، ما اسمها؟","answer":"الإخلاص","difficulty":3},{"id":"LTR-200","stage":"secondary","category":"أسئلة دينية","letter":"أ","question":"تحدٍ معرفي: سورة مكية قصيرة تعدل ثلث القرآن في الفضل، ما اسمها؟","answer":"الإخلاص","difficulty":4},{"id":"LTR-201","stage":"primary_lower","category":"أسئلة دينية","letter":"ب","question":"ما الغزوة التي وقعت في السابع عشر من رمضان في السنة الثانية للهجرة؟","answer":"بدر","difficulty":1},{"id":"LTR-202","stage":"primary_upper","category":"أسئلة دينية","letter":"ب","question":"ما الغزوة التي وقعت في السابع عشر من رمضان في السنة الثانية للهجرة؟","answer":"بدر","difficulty":2},{"id":"LTR-203","stage":"middle","category":"أسئلة دينية","letter":"ب","question":"أول انتصار عسكري كبير للمسلمين بقيادة النبي ﷺ، ما اسم الغزوة؟","answer":"بدر","difficulty":3},{"id":"LTR-204","stage":"secondary","category":"أسئلة دينية","letter":"ب","question":"تحدٍ معرفي: أول انتصار عسكري كبير للمسلمين بقيادة النبي ﷺ، ما اسم الغزوة؟","answer":"بدر","difficulty":4},{"id":"LTR-205","stage":"primary_lower","category":"أسئلة دينية","letter":"ت","question":"ما الذكر الذي نقول فيه: الله أكبر؟","answer":"التكبير","difficulty":1},{"id":"LTR-206","stage":"primary_upper","category":"أسئلة دينية","letter":"ت","question":"ما الذكر الذي نقول فيه: الله أكبر؟","answer":"التكبير","difficulty":2},{"id":"LTR-207","stage":"middle","category":"أسئلة دينية","letter":"ت","question":"ذكر مشروع في الصلاة والأعياد وصيغته «الله أكبر»، ما اسمه؟","answer":"التكبير","difficulty":3},{"id":"LTR-208","stage":"secondary","category":"أسئلة دينية","letter":"ت","question":"تحدٍ معرفي: ذكر مشروع في الصلاة والأعياد وصيغته «الله أكبر»، ما اسمه؟","answer":"التكبير","difficulty":4},{"id":"LTR-209","stage":"primary_lower","category":"أسئلة دينية","letter":"ح","question":"ما الركن الخامس من أركان الإسلام لمن استطاع إليه سبيلًا؟","answer":"الحج","difficulty":1},{"id":"LTR-210","stage":"primary_upper","category":"أسئلة دينية","letter":"ح","question":"ما الركن الخامس من أركان الإسلام لمن استطاع إليه سبيلًا؟","answer":"الحج","difficulty":2},{"id":"LTR-211","stage":"middle","category":"أسئلة دينية","letter":"ح","question":"عبادة سنوية تؤدى في مكة والمشاعر في وقت معلوم، ما هي؟","answer":"الحج","difficulty":3},{"id":"LTR-212","stage":"secondary","category":"أسئلة دينية","letter":"ح","question":"تحدٍ معرفي: عبادة سنوية تؤدى في مكة والمشاعر في وقت معلوم، ما هي؟","answer":"الحج","difficulty":4},{"id":"LTR-213","stage":"primary_lower","category":"أسئلة دينية","letter":"ز","question":"ما الركن المالي الذي يخرج فيه المسلم جزءًا واجبًا من ماله؟","answer":"الزكاة","difficulty":1},{"id":"LTR-214","stage":"primary_upper","category":"أسئلة دينية","letter":"ز","question":"ما الركن المالي الذي يخرج فيه المسلم جزءًا واجبًا من ماله؟","answer":"الزكاة","difficulty":2},{"id":"LTR-215","stage":"middle","category":"أسئلة دينية","letter":"ز","question":"حق واجب في أموال مخصوصة لمصارف محددة، ما هو؟","answer":"الزكاة","difficulty":3},{"id":"LTR-216","stage":"secondary","category":"أسئلة دينية","letter":"ز","question":"تحدٍ معرفي: حق واجب في أموال مخصوصة لمصارف محددة، ما هو؟","answer":"الزكاة","difficulty":4},{"id":"LTR-217","stage":"primary_lower","category":"أسئلة دينية","letter":"ص","question":"ما العبادة التي فرضت خمس مرات في اليوم والليلة؟","answer":"الصلاة","difficulty":1},{"id":"LTR-218","stage":"primary_upper","category":"أسئلة دينية","letter":"ص","question":"ما العبادة التي فرضت خمس مرات في اليوم والليلة؟","answer":"الصلاة","difficulty":2},{"id":"LTR-219","stage":"middle","category":"أسئلة دينية","letter":"ص","question":"ركن الإسلام العملي المتكرر الذي يبدأ بالتكبير وينتهي بالتسليم، ما هو؟","answer":"الصلاة","difficulty":3},{"id":"LTR-220","stage":"secondary","category":"أسئلة دينية","letter":"ص","question":"تحدٍ معرفي: ركن الإسلام العملي المتكرر الذي يبدأ بالتكبير وينتهي بالتسليم، ما هو؟","answer":"الصلاة","difficulty":4},{"id":"LTR-221","stage":"primary_lower","category":"أسئلة دينية","letter":"م","question":"من خاتم الأنبياء والمرسلين؟","answer":"محمد","difficulty":1},{"id":"LTR-222","stage":"primary_upper","category":"أسئلة دينية","letter":"م","question":"من خاتم الأنبياء والمرسلين؟","answer":"محمد","difficulty":2},{"id":"LTR-223","stage":"middle","category":"أسئلة دينية","letter":"م","question":"النبي العربي القرشي الذي نزل عليه القرآن، من هو ﷺ؟","answer":"محمد","difficulty":3},{"id":"LTR-224","stage":"secondary","category":"أسئلة دينية","letter":"م","question":"تحدٍ معرفي: النبي العربي القرشي الذي نزل عليه القرآن، من هو ﷺ؟","answer":"محمد","difficulty":4},{"id":"LTR-225","stage":"primary_lower","category":"جغرافيا ومعالم","letter":"أ","question":"ما المعلم المصري القديم الشهير قرب الجيزة؟","answer":"الأهرامات","difficulty":1},{"id":"LTR-226","stage":"primary_upper","category":"جغرافيا ومعالم","letter":"أ","question":"ما المعلم المصري القديم الشهير قرب الجيزة؟","answer":"الأهرامات","difficulty":2},{"id":"LTR-227","stage":"middle","category":"جغرافيا ومعالم","letter":"أ","question":"مقابر ملكية ضخمة بُنيت في مصر القديمة وأشهرها خوفو، ما هي؟","answer":"الأهرامات","difficulty":3},{"id":"LTR-228","stage":"secondary","category":"جغرافيا ومعالم","letter":"أ","question":"تحدٍ معرفي: مقابر ملكية ضخمة بُنيت في مصر القديمة وأشهرها خوفو، ما هي؟","answer":"الأهرامات","difficulty":4},{"id":"LTR-229","stage":"primary_lower","category":"جغرافيا ومعالم","letter":"ب","question":"ما المعلم الحديدي الشهير في باريس؟","answer":"برج إيفل","difficulty":1},{"id":"LTR-230","stage":"primary_upper","category":"جغرافيا ومعالم","letter":"ب","question":"ما المعلم الحديدي الشهير في باريس؟","answer":"برج إيفل","difficulty":2},{"id":"LTR-231","stage":"middle","category":"جغرافيا ومعالم","letter":"ب","question":"برج أنشئ لمعرض 1889 وأصبح رمزًا لباريس، ما هو؟","answer":"برج إيفل","difficulty":3},{"id":"LTR-232","stage":"secondary","category":"جغرافيا ومعالم","letter":"ب","question":"تحدٍ معرفي: برج أنشئ لمعرض 1889 وأصبح رمزًا لباريس، ما هو؟","answer":"برج إيفل","difficulty":4},{"id":"LTR-233","stage":"primary_lower","category":"جغرافيا ومعالم","letter":"ت","question":"ما الضريح الرخامي الأبيض الشهير في الهند؟","answer":"تاج محل","difficulty":1},{"id":"LTR-234","stage":"primary_upper","category":"جغرافيا ومعالم","letter":"ت","question":"ما الضريح الرخامي الأبيض الشهير في الهند؟","answer":"تاج محل","difficulty":2},{"id":"LTR-235","stage":"middle","category":"جغرافيا ومعالم","letter":"ت","question":"معلم مغولي في أغرا بناه شاه جهان تخليدًا لزوجته، ما هو؟","answer":"تاج محل","difficulty":3},{"id":"LTR-236","stage":"secondary","category":"جغرافيا ومعالم","letter":"ت","question":"تحدٍ معرفي: معلم مغولي في أغرا بناه شاه جهان تخليدًا لزوجته، ما هو؟","answer":"تاج محل","difficulty":4},{"id":"LTR-237","stage":"primary_lower","category":"جغرافيا ومعالم","letter":"ج","question":"ما أعلى جبل فوق مستوى سطح البحر؟","answer":"جبل إيفرست","difficulty":1},{"id":"LTR-238","stage":"primary_upper","category":"جغرافيا ومعالم","letter":"ج","question":"ما أعلى جبل فوق مستوى سطح البحر؟","answer":"جبل إيفرست","difficulty":2},{"id":"LTR-239","stage":"middle","category":"جغرافيا ومعالم","letter":"ج","question":"قمة في جبال الهيمالايا يبلغ ارتفاعها نحو 8849 مترًا، ما هي؟","answer":"جبل إيفرست","difficulty":3},{"id":"LTR-240","stage":"secondary","category":"جغرافيا ومعالم","letter":"ج","question":"تحدٍ معرفي: قمة في جبال الهيمالايا يبلغ ارتفاعها نحو 8849 مترًا، ما هي؟","answer":"جبل إيفرست","difficulty":4},{"id":"LTR-241","stage":"primary_lower","category":"جغرافيا ومعالم","letter":"س","question":"ما المعلم الدفاعي الطويل الممتد شمال الصين؟","answer":"سور الصين","difficulty":1},{"id":"LTR-242","stage":"primary_upper","category":"جغرافيا ومعالم","letter":"س","question":"ما المعلم الدفاعي الطويل الممتد شمال الصين؟","answer":"سور الصين","difficulty":2},{"id":"LTR-243","stage":"middle","category":"جغرافيا ومعالم","letter":"س","question":"سلسلة تحصينات تاريخية صينية تمتد آلاف الكيلومترات، ما اسمها؟","answer":"سور الصين","difficulty":3},{"id":"LTR-244","stage":"secondary","category":"جغرافيا ومعالم","letter":"س","question":"تحدٍ معرفي: سلسلة تحصينات تاريخية صينية تمتد آلاف الكيلومترات، ما اسمها؟","answer":"سور الصين","difficulty":4},{"id":"LTR-245","stage":"primary_lower","category":"جغرافيا ومعالم","letter":"ق","question":"ما المعلم التاريخي في الرياض المرتبط باسترداد المدينة؟","answer":"قصر المصمك","difficulty":1},{"id":"LTR-246","stage":"primary_upper","category":"جغرافيا ومعالم","letter":"ق","question":"ما المعلم التاريخي في الرياض المرتبط باسترداد المدينة؟","answer":"قصر المصمك","difficulty":2},{"id":"LTR-247","stage":"middle","category":"جغرافيا ومعالم","letter":"ق","question":"حصن طيني في قلب الرياض ارتبط ببداية توحيد المملكة، ما هو؟","answer":"قصر المصمك","difficulty":3},{"id":"LTR-248","stage":"secondary","category":"جغرافيا ومعالم","letter":"ق","question":"تحدٍ معرفي: حصن طيني في قلب الرياض ارتبط ببداية توحيد المملكة، ما هو؟","answer":"قصر المصمك","difficulty":4},{"id":"LTR-249","stage":"primary_lower","category":"جغرافيا ومعالم","letter":"م","question":"ما الموقع الأثري النبطي في محافظة العلا؟","answer":"مدائن صالح","difficulty":1},{"id":"LTR-250","stage":"primary_upper","category":"جغرافيا ومعالم","letter":"م","question":"ما الموقع الأثري النبطي في محافظة العلا؟","answer":"مدائن صالح","difficulty":2},{"id":"LTR-251","stage":"middle","category":"جغرافيا ومعالم","letter":"م","question":"أول موقع سعودي أدرج في قائمة التراث العالمي ويعرف بالحِجر، ما هو؟","answer":"مدائن صالح","difficulty":3},{"id":"LTR-252","stage":"secondary","category":"جغرافيا ومعالم","letter":"م","question":"تحدٍ معرفي: أول موقع سعودي أدرج في قائمة التراث العالمي ويعرف بالحِجر، ما هو؟","answer":"مدائن صالح","difficulty":4},{"id":"LTR-253","stage":"primary_lower","category":"لغة عربية وكلمات","letter":"أ","question":"ما نوع الكلمة التي تدل على إنسان أو حيوان أو شيء دون زمن؟","answer":"الاسم","difficulty":1},{"id":"LTR-254","stage":"primary_upper","category":"لغة عربية وكلمات","letter":"أ","question":"ما نوع الكلمة التي تدل على إنسان أو حيوان أو شيء دون زمن؟","answer":"الاسم","difficulty":2},{"id":"LTR-255","stage":"middle","category":"لغة عربية وكلمات","letter":"أ","question":"قسم من أقسام الكلام يقبل أل والتنوين ولا يدل بذاته على زمن، ما هو؟","answer":"الاسم","difficulty":3},{"id":"LTR-256","stage":"secondary","category":"لغة عربية وكلمات","letter":"أ","question":"تحدٍ معرفي: قسم من أقسام الكلام يقبل أل والتنوين ولا يدل بذاته على زمن، ما هو؟","answer":"الاسم","difficulty":4},{"id":"LTR-257","stage":"primary_lower","category":"لغة عربية وكلمات","letter":"ب","question":"ما العلم الذي يدرس جمال التعبير ومطابقته للمقام؟","answer":"البلاغة","difficulty":1},{"id":"LTR-258","stage":"primary_upper","category":"لغة عربية وكلمات","letter":"ب","question":"ما العلم الذي يدرس جمال التعبير ومطابقته للمقام؟","answer":"البلاغة","difficulty":2},{"id":"LTR-259","stage":"middle","category":"لغة عربية وكلمات","letter":"ب","question":"علم عربي يضم المعاني والبيان والبديع، ما هو؟","answer":"البلاغة","difficulty":3},{"id":"LTR-260","stage":"secondary","category":"لغة عربية وكلمات","letter":"ب","question":"تحدٍ معرفي: علم عربي يضم المعاني والبيان والبديع، ما هو؟","answer":"البلاغة","difficulty":4},{"id":"LTR-261","stage":"primary_lower","category":"لغة عربية وكلمات","letter":"ت","question":"ما الأسلوب الذي يشارك فيه شيء شيئًا آخر في صفة؟","answer":"التشبيه","difficulty":1},{"id":"LTR-262","stage":"primary_upper","category":"لغة عربية وكلمات","letter":"ت","question":"ما الأسلوب الذي يشارك فيه شيء شيئًا آخر في صفة؟","answer":"التشبيه","difficulty":2},{"id":"LTR-263","stage":"middle","category":"لغة عربية وكلمات","letter":"ت","question":"أسلوب بياني له مشبه ومشبه به وأداة ووجه شبه، ما هو؟","answer":"التشبيه","difficulty":3},{"id":"LTR-264","stage":"secondary","category":"لغة عربية وكلمات","letter":"ت","question":"تحدٍ معرفي: أسلوب بياني له مشبه ومشبه به وأداة ووجه شبه، ما هو؟","answer":"التشبيه","difficulty":4},{"id":"LTR-265","stage":"primary_lower","category":"لغة عربية وكلمات","letter":"ج","question":"ما التركيب الذي يفيد معنى تامًا؟","answer":"الجملة","difficulty":1},{"id":"LTR-266","stage":"primary_upper","category":"لغة عربية وكلمات","letter":"ج","question":"ما التركيب الذي يفيد معنى تامًا؟","answer":"الجملة","difficulty":2},{"id":"LTR-267","stage":"middle","category":"لغة عربية وكلمات","letter":"ج","question":"تركيب لغوي من كلمتين فأكثر يعطي معنى يحسن السكوت عليه، ما هو؟","answer":"الجملة","difficulty":3},{"id":"LTR-268","stage":"secondary","category":"لغة عربية وكلمات","letter":"ج","question":"تحدٍ معرفي: تركيب لغوي من كلمتين فأكثر يعطي معنى يحسن السكوت عليه، ما هو؟","answer":"الجملة","difficulty":4},{"id":"LTR-269","stage":"primary_lower","category":"لغة عربية وكلمات","letter":"ض","question":"ما الكلمة التي تحل محل الاسم مثل هو وهي؟","answer":"الضمير","difficulty":1},{"id":"LTR-270","stage":"primary_upper","category":"لغة عربية وكلمات","letter":"ض","question":"ما الكلمة التي تحل محل الاسم مثل هو وهي؟","answer":"الضمير","difficulty":2},{"id":"LTR-271","stage":"middle","category":"لغة عربية وكلمات","letter":"ض","question":"اسم معرفة مبني يدل على متكلم أو مخاطب أو غائب، ما هو؟","answer":"الضمير","difficulty":3},{"id":"LTR-272","stage":"secondary","category":"لغة عربية وكلمات","letter":"ض","question":"تحدٍ معرفي: اسم معرفة مبني يدل على متكلم أو مخاطب أو غائب، ما هو؟","answer":"الضمير","difficulty":4},{"id":"LTR-273","stage":"primary_lower","category":"لغة عربية وكلمات","letter":"ف","question":"ما قسم الكلام الذي يدل على حدث مرتبط بزمن؟","answer":"الفعل","difficulty":1},{"id":"LTR-274","stage":"primary_upper","category":"لغة عربية وكلمات","letter":"ف","question":"ما قسم الكلام الذي يدل على حدث مرتبط بزمن؟","answer":"الفعل","difficulty":2},{"id":"LTR-275","stage":"middle","category":"لغة عربية وكلمات","letter":"ف","question":"كلمة تدل على معنى في نفسها مقترن بأحد الأزمنة، ما هي؟","answer":"الفعل","difficulty":3},{"id":"LTR-276","stage":"secondary","category":"لغة عربية وكلمات","letter":"ف","question":"تحدٍ معرفي: كلمة تدل على معنى في نفسها مقترن بأحد الأزمنة، ما هي؟","answer":"الفعل","difficulty":4},{"id":"LTR-277","stage":"primary_lower","category":"لغة عربية وكلمات","letter":"م","question":"ما الاسم المرفوع الذي تبدأ به الجملة الاسمية غالبًا؟","answer":"المبتدأ","difficulty":1},{"id":"LTR-278","stage":"primary_upper","category":"لغة عربية وكلمات","letter":"م","question":"ما الاسم المرفوع الذي تبدأ به الجملة الاسمية غالبًا؟","answer":"المبتدأ","difficulty":2},{"id":"LTR-279","stage":"middle","category":"لغة عربية وكلمات","letter":"م","question":"ركن مرفوع في الجملة الاسمية يُخبر عنه، ما هو؟","answer":"المبتدأ","difficulty":3},{"id":"LTR-280","stage":"secondary","category":"لغة عربية وكلمات","letter":"م","question":"تحدٍ معرفي: ركن مرفوع في الجملة الاسمية يُخبر عنه، ما هو؟","answer":"المبتدأ","difficulty":4},{"id":"LTR-281","stage":"primary_lower","category":"ثقافة عامة ومنطق","letter":"أ","question":"ما المدة التي تتكون من سبعة أيام؟","answer":"الأسبوع","difficulty":1},{"id":"LTR-282","stage":"primary_upper","category":"ثقافة عامة ومنطق","letter":"أ","question":"ما المدة التي تتكون من سبعة أيام؟","answer":"الأسبوع","difficulty":2},{"id":"LTR-283","stage":"middle","category":"ثقافة عامة ومنطق","letter":"أ","question":"وحدة زمنية دورية تساوي سبعة أيام، ما هي؟","answer":"الأسبوع","difficulty":3},{"id":"LTR-284","stage":"secondary","category":"ثقافة عامة ومنطق","letter":"أ","question":"تحدٍ معرفي: وحدة زمنية دورية تساوي سبعة أيام، ما هي؟","answer":"الأسبوع","difficulty":4},{"id":"LTR-285","stage":"primary_lower","category":"ثقافة عامة ومنطق","letter":"ب","question":"ما الأداة التي تحدد الاتجاهات؟","answer":"البوصلة","difficulty":1},{"id":"LTR-286","stage":"primary_upper","category":"ثقافة عامة ومنطق","letter":"ب","question":"ما الأداة التي تحدد الاتجاهات؟","answer":"البوصلة","difficulty":2},{"id":"LTR-287","stage":"middle","category":"ثقافة عامة ومنطق","letter":"ب","question":"أداة تستخدم إبرة ممغنطة تشير إلى الشمال، ما هي؟","answer":"البوصلة","difficulty":3},{"id":"LTR-288","stage":"secondary","category":"ثقافة عامة ومنطق","letter":"ب","question":"تحدٍ معرفي: أداة تستخدم إبرة ممغنطة تشير إلى الشمال، ما هي؟","answer":"البوصلة","difficulty":4},{"id":"LTR-289","stage":"primary_lower","category":"ثقافة عامة ومنطق","letter":"ث","question":"ما الوحدة الأساسية لقياس الزمن في النظام الدولي؟","answer":"الثانية","difficulty":1},{"id":"LTR-290","stage":"primary_upper","category":"ثقافة عامة ومنطق","letter":"ث","question":"ما الوحدة الأساسية لقياس الزمن في النظام الدولي؟","answer":"الثانية","difficulty":2},{"id":"LTR-291","stage":"middle","category":"ثقافة عامة ومنطق","letter":"ث","question":"وحدة SI للزمن ويرمز لها بالحرف s، ما هي؟","answer":"الثانية","difficulty":3},{"id":"LTR-292","stage":"secondary","category":"ثقافة عامة ومنطق","letter":"ث","question":"تحدٍ معرفي: وحدة SI للزمن ويرمز لها بالحرف s، ما هي؟","answer":"الثانية","difficulty":4},{"id":"LTR-293","stage":"primary_lower","category":"ثقافة عامة ومنطق","letter":"د","question":"ما الشكل الهندسي الذي لا يحتوي على أضلاع أو زوايا؟","answer":"الدائرة","difficulty":1},{"id":"LTR-294","stage":"primary_upper","category":"ثقافة عامة ومنطق","letter":"د","question":"ما الشكل الهندسي الذي لا يحتوي على أضلاع أو زوايا؟","answer":"الدائرة","difficulty":2},{"id":"LTR-295","stage":"middle","category":"ثقافة عامة ومنطق","letter":"د","question":"مجموعة نقاط مستوية تبعد مسافة ثابتة عن مركز، ما هي؟","answer":"الدائرة","difficulty":3},{"id":"LTR-296","stage":"secondary","category":"ثقافة عامة ومنطق","letter":"د","question":"تحدٍ معرفي: مجموعة نقاط مستوية تبعد مسافة ثابتة عن مركز، ما هي؟","answer":"الدائرة","difficulty":4},{"id":"LTR-297","stage":"primary_lower","category":"ثقافة عامة ومنطق","letter":"ذ","question":"ما القدرة العقلية على حفظ المعلومات واسترجاعها؟","answer":"الذاكرة","difficulty":1},{"id":"LTR-298","stage":"primary_upper","category":"ثقافة عامة ومنطق","letter":"ذ","question":"ما القدرة العقلية على حفظ المعلومات واسترجاعها؟","answer":"الذاكرة","difficulty":2},{"id":"LTR-299","stage":"middle","category":"ثقافة عامة ومنطق","letter":"ذ","question":"وظيفة معرفية تتضمن الترميز والتخزين والاسترجاع، ما هي؟","answer":"الذاكرة","difficulty":3},{"id":"LTR-300","stage":"secondary","category":"ثقافة عامة ومنطق","letter":"ذ","question":"تحدٍ معرفي: وظيفة معرفية تتضمن الترميز والتخزين والاسترجاع، ما هي؟","answer":"الذاكرة","difficulty":4}];

var LETTERS = ["أ","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","هـ","و","ي"];
var CATS = ["رياضة","تاريخ","علامات تجارية","دول وعواصم","علوم","ألغاز","تقنية","أسئلة دينية","جغرافيا ومعالم","لغة عربية وكلمات","ثقافة عامة ومنطق"];
/* ألوان الفرق — منسجمة مع هوية أنشطة ومتمايزة بوضوح على السبورة.
   جميعها فوق 4.5:1 تباينًا مع النص الأبيض. */
var PALETTE = ["#5E4B73","#245B78","#367A55","#A87724","#A44747","#3F6B68","#596B7A","#6A4E3B"];
var LIGHTS  = ["#EEEAF3","#E8F1F6","#E7F3EC","#F7F0E1","#F8EAEA","#E8F0EF","#EDF0F3","#F1ECE8"];
var ICONS   = ["⭐","🏆","🎯","💡"];
var DEFAULTS= ["فريق النجوم","فريق الأبطال","فريق التحدي","فريق الإبداع"];
var STAGES  = {primary_lower:"ابتدائي 1–3", primary_upper:"ابتدائي 4–6", middle:"متوسط", secondary:"ثانوي"};
var STAGE_HINT = {primary_lower:"أسئلة مباشرة وبسيطة", primary_upper:"أسئلة مباشرة أطول قليلاً", middle:"أسئلة وصفية", secondary:"أسئلة تحليلية"};

/* ================= الحالة ================= */
var S = {
  teacher:"", school:"", className:"", stage:"", categories:[], teamCount:2,
  names:DEFAULTS.slice(), colors:[0,1,2,3], rounds:5, time:30
};
var step=1, teams=[], team=0, usedLetters={}, usedQ={},
    currentLetter=null, currentQ=null, phase="board", turns=0,
    tv=0, tid=null, paused=false, sound=true, ac=null;

/* ================= أدوات ================= */
function $(id){ return document.getElementById(id); }
function esc(v){ return String(v).replace(/[&<>"']/g,function(c){
  return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
function show(id){ ["wizard","game","results"].forEach(function(x){ $(x).classList.remove("active"); });
  $(id).classList.add("active"); }
function err(m){ var e=$("err"); e.textContent=m||""; e.classList.toggle("show", !!m); }
function pool(){ return QUESTIONS.filter(function(q){
  return q.stage===S.stage && S.categories.indexOf(q.category)>=0; }); }
function availableLetters(){ var s={}; pool().forEach(function(q){ s[q.letter]=1; });
  return LETTERS.filter(function(l){ return s[l]; }); }
function maxRounds(){ return Math.max(1, Math.floor(availableLetters().length / S.teamCount)); }

/* ================= الويزارد ================= */
function drawSteps(){
  $("steps").innerHTML = [1,2,3,4,5,6].map(function(n){
    var cls = step===n ? "active" : (step>n ? "done" : "");
    return '<div class="step-dot '+cls+'">'+(step>n?"✓":n)+'</div>';
  }).join("");
}

function render(){
  drawSteps(); err("");
  var c=$("wc"), n=$("nav");

  if(step===1){
    c.innerHTML = '<div class="title">بيانات المعلم</div>'
      + '<div class="subtitle">أدخل اسم المعلم، ويمكن إضافة المدرسة والصف لتظهر في ملخص النشاط النهائي.</div>'
      + '<div class="teacher-fields">'
      + '<div><label class="field-label" for="teacherInput">اسم المعلم</label>'
      + '<input type="text" id="teacherInput" value="'+esc(S.teacher)+'" placeholder="مثال: محمد العتيبي"></div>'
      + '<div><label class="field-label" for="schoolInput">اسم المدرسة <span class="optional">(اختياري)</span></label>'
      + '<input type="text" id="schoolInput" value="'+esc(S.school)+'" placeholder="مثال: مدرسة الإبداع"></div>'
      + '<div><label class="field-label" for="classInput">اسم الصف <span class="optional">(اختياري)</span></label>'
      + '<input type="text" id="classInput" value="'+esc(S.className)+'" placeholder="مثال: الصف الثاني المتوسط / ب"></div>'
      + '</div>';
    n.innerHTML = '<button id="nextW" class="btn btn-primary" type="button">التالي</button>';
    bindNav();
    var ti=$("teacherInput");
    if(ti){ ti.addEventListener("keydown",function(ev){ if(ev.key==="Enter") goNext(); }); setTimeout(function(){ti.focus();},60); }
  }

  else if(step===2){
    var html = '<div class="title">المرحلة الدراسية</div>'
      + '<div class="subtitle">اختر مستوى الأسئلة المناسب لطلابك.</div><div class="cards">';
    Object.keys(STAGES).forEach(function(k){
      html += '<button type="button" class="choice'+(S.stage===k?" selected":"")+'" data-stage="'+k+'">'
            + '<b>'+STAGES[k]+'</b><small>'+STAGE_HINT[k]+'</small></button>';
    });
    c.innerHTML = html + '</div>';
    n.innerHTML = '<button id="backW" class="btn btn-secondary" type="button">رجوع</button>'
                + '<button id="nextW" class="btn btn-primary" type="button">التالي</button>';
    bindNav();
    // اختيار المرحلة — تحديث موضعي بلا إعادة بناء
    c.querySelectorAll("[data-stage]").forEach(function(b){
      b.addEventListener("click", function(){
        S.stage = this.getAttribute("data-stage");
        c.querySelectorAll("[data-stage]").forEach(function(x){ x.classList.remove("selected"); });
        this.classList.add("selected");
        err("");
      });
    });
  }

  else if(step===3){
    var h = '<div class="title">مجالات الأسئلة</div>'
      + '<div class="subtitle">اختر أربعة مجالات على الأقل.</div>'
      + '<div class="category-toolbar"><span class="count-line" style="margin:0">يمكنك اختيار المجالات يدويًا أو تحديدها كلها.</span>'
      + '<button id="selectAllCats" class="select-all-btn" type="button">اختيار الكل</button></div>'
      + '<div class="category-grid">';
    CATS.forEach(function(x,i){
      h += '<button type="button" class="cat-choice'+(S.categories.indexOf(x)>=0?" selected":"")
         + '" data-cat="'+i+'">'+x+'</button>';
    });
    c.innerHTML = h + '</div><div class="count-line">المحدد: <b id="catCount">'+S.categories.length+'</b> من 4 مطلوبة</div>';
    n.innerHTML = '<button id="backW" class="btn btn-secondary" type="button">رجوع</button>'
                + '<button id="nextW" class="btn btn-primary" type="button">التالي</button>';
    bindNav();
    c.querySelectorAll("[data-cat]").forEach(function(b){
      b.addEventListener("click", function(){
        var name = CATS[Number(this.getAttribute("data-cat"))];
        var i = S.categories.indexOf(name);
        if(i>=0){ S.categories.splice(i,1); this.classList.remove("selected"); }
        else { S.categories.push(name); this.classList.add("selected"); }
        var cc=$("catCount"); if(cc) cc.textContent = S.categories.length;
        err("");
      });
    });
    var allBtn=$("selectAllCats");
    function updateAllButton(){
      if(!allBtn) return;
      allBtn.textContent = S.categories.length===CATS.length ? "إلغاء اختيار الكل" : "اختيار الكل";
    }
    updateAllButton();
    if(allBtn) allBtn.addEventListener("click",function(){
      if(S.categories.length===CATS.length){
        S.categories=[];
        c.querySelectorAll("[data-cat]").forEach(function(x){ x.classList.remove("selected"); });
      }else{
        S.categories=CATS.slice();
        c.querySelectorAll("[data-cat]").forEach(function(x){ x.classList.add("selected"); });
      }
      var cc=$("catCount"); if(cc) cc.textContent=S.categories.length;
      updateAllButton();
      err("");
    });
    c.querySelectorAll("[data-cat]").forEach(function(b){
      b.addEventListener("click", updateAllButton);
    });
  }

  else if(step===4){
    c.innerHTML = '<div class="title">الفرق والألوان</div>'
      + '<div class="subtitle">اختر عدد الفرق واسم كل فريق ولونه. لا يمكن تكرار اللون.</div>'
      + '<div class="pills" id="countPills"></div>'
      + '<div class="team-config" id="teamConfig"></div>';
    n.innerHTML = '<button id="backW" class="btn btn-secondary" type="button">رجوع</button>'
                + '<button id="nextW" class="btn btn-primary" type="button">التالي</button>';
    bindNav();
    drawCountPills();
    drawTeamConfig();
  }

  else if(step===5){
    var m = maxRounds();
    if(S.rounds > m) S.rounds = m;
    var r = '<div class="title">الجولات والوقت</div>'
      + '<div class="subtitle">كل جولة تمنح سؤالًا واحدًا لكل فريق. الحروف المتاحة: '
      + availableLetters().length + ' حرفًا.</div>'
      + '<b>عدد الجولات لكل فريق</b><div class="pills" id="roundPills" style="margin:10px 0 20px"></div>'
      + '<b>وقت السؤال</b><div class="pills" id="timePills" style="margin-top:10px"></div>';
    c.innerHTML = r;
    n.innerHTML = '<button id="backW" class="btn btn-secondary" type="button">رجوع</button>'
                + '<button id="nextW" class="btn btn-primary" type="button">التالي</button>';
    bindNav();

    var rp=$("roundPills"), rh="";
    for(var i=1;i<=m;i++) rh += '<button type="button" class="pill'+(S.rounds===i?" selected":"")+'" data-rounds="'+i+'">'+i+'</button>';
    rp.innerHTML = rh;
    rp.querySelectorAll("[data-rounds]").forEach(function(b){
      b.addEventListener("click", function(){
        S.rounds = Number(this.getAttribute("data-rounds"));
        rp.querySelectorAll(".pill").forEach(function(x){ x.classList.remove("selected"); });
        this.classList.add("selected");
      });
    });

    var tp=$("timePills"), opts=[[0,"بدون مؤقت"],[15,"15 ث"],[20,"20 ث"],[30,"30 ث"],[45,"45 ث"],[60,"60 ث"]], th="";
    opts.forEach(function(o){ th += '<button type="button" class="pill'+(S.time===o[0]?" selected":"")+'" data-time="'+o[0]+'">'+o[1]+'</button>'; });
    tp.innerHTML = th;
    tp.querySelectorAll("[data-time]").forEach(function(b){
      b.addEventListener("click", function(){
        S.time = Number(this.getAttribute("data-time"));
        tp.querySelectorAll(".pill").forEach(function(x){ x.classList.remove("selected"); });
        this.classList.add("selected");
      });
    });
  }

  else if(step===6){
    var teamChips = "";
    for(var i=0;i<S.teamCount;i++)
      teamChips += '<span style="display:inline-block;padding:3px 10px;border-radius:16px;margin:2px;font-size:12px;color:#fff;background:'+PALETTE[S.colors[i]]+'">'+esc(S.names[i])+'</span>';
    c.innerHTML = '<div class="title">ملخص النشاط</div>'
      + '<div class="subtitle">راجع الإعدادات ثم ابدأ.</div>'
      + '<div class="summary">'
      + '<div class="summary-row"><span>المعلم</span><b>أ. '+esc(S.teacher)+'</b></div>'
      + (S.school ? '<div class="summary-row"><span>المدرسة</span><b>'+esc(S.school)+'</b></div>' : '')
      + (S.className ? '<div class="summary-row"><span>الصف</span><b>'+esc(S.className)+'</b></div>' : '')
      + '<div class="summary-row"><span>المرحلة</span><b>'+STAGES[S.stage]+'</b></div>'
      + '<div class="summary-row"><span>المجالات</span><b>'+S.categories.length+' مجالات</b></div>'
      + '<div class="summary-row"><span>الفرق</span><b>'+teamChips+'</b></div>'
      + '<div class="summary-row"><span>الجولات</span><b>'+S.rounds+' لكل فريق</b></div>'
      + '<div class="summary-row"><span>إجمالي الأسئلة</span><b>'+(S.rounds*S.teamCount)+' سؤال</b></div>'
      + '<div class="summary-row"><span>وقت السؤال</span><b>'+(S.time?S.time+" ثانية":"بدون مؤقت")+'</b></div>'
      + '<div class="summary-row"><span>الأسئلة المتاحة</span><b>'+pool().length+' سؤال</b></div>'
      + '</div><button id="start" class="btn btn-start" type="button">ابدأ تحدي الحروف</button>';
    n.innerHTML = '<button id="backW" class="btn btn-secondary" type="button">رجوع</button>';
    bindNav();
    $("start").addEventListener("click", startGame);
  }
}

function drawCountPills(){
  var box=$("countPills"), h="";
  [2,3,4].forEach(function(x){ h += '<button type="button" class="pill'+(S.teamCount===x?" selected":"")+'" data-count="'+x+'">'+x+' فرق</button>'; });
  box.innerHTML = h;
  box.querySelectorAll("[data-count]").forEach(function(b){
    b.addEventListener("click", function(){
      saveNames();
      var next = Number(this.getAttribute("data-count"));
      for(var j=S.teamCount;j<next;j++){
        if(!S.names[j]) S.names[j]=DEFAULTS[j];
        var cand=0;
        while(S.colors.slice(0,j).indexOf(cand)>=0) cand++;
        S.colors[j]=cand;
      }
      S.teamCount = next;
      box.querySelectorAll(".pill").forEach(function(x){ x.classList.remove("selected"); });
      this.classList.add("selected");
      drawTeamConfig();          /* تحديث القسم فقط — لا إعادة بناء كاملة */
    });
  });
}

function saveNames(){
  for(var i=0;i<S.teamCount;i++){
    var inp=$("name"+i);
    if(inp) S.names[i] = inp.value.trim() || DEFAULTS[i];
  }
}

function drawTeamConfig(){
  var box=$("teamConfig");
  if(!box) return;
  var h="";
  for(var i=0;i<S.teamCount;i++){
    h += '<div class="team-config-row"><div class="team-input">'
       + '<div class="badge" style="background:'+LIGHTS[S.colors[i]]+';color:'+PALETTE[S.colors[i]]+'">'+ICONS[i]+'</div>'
       + '<input type="text" id="name'+i+'" value="'+esc(S.names[i])+'" maxlength="18"></div><div class="palette">';
    for(var k=0;k<PALETTE.length;k++){
      var taken = S.colors.slice(0,S.teamCount).indexOf(k)>=0 && S.colors[i]!==k;
      h += '<button type="button" class="swatch'+(S.colors[i]===k?" selected":"")+'" data-team="'+i+'" data-color="'+k+'"'
         + (taken?" disabled":"") + ' style="background:'+PALETTE[k]+'"></button>';
    }
    h += '</div></div>';
  }
  box.innerHTML = h;

  box.querySelectorAll("[data-color]").forEach(function(b){
    b.addEventListener("click", function(){
      var ti=Number(this.getAttribute("data-team"));
      var ci=Number(this.getAttribute("data-color"));
      if(S.colors.slice(0,S.teamCount).indexOf(ci)>=0 && S.colors[ti]!==ci) return;
      saveNames();                /* حفظ الأسماء قبل إعادة رسم القسم */
      S.colors[ti]=ci;
      drawTeamConfig();           /* إعادة رسم القسم فقط */
    });
  });
}

function bindNav(){
  var nx=$("nextW"), bk=$("backW");
  if(nx) nx.addEventListener("click", goNext);
  if(bk) bk.addEventListener("click", function(){ if(step>1){ step--; render(); } });
}

function goNext(){
  if(step===1){
    var v=$("teacherInput") ? $("teacherInput").value.trim() : "";
    if(!v){ err("الرجاء إدخال اسم المعلم"); return; }
    S.teacher=v;
    S.school=$("schoolInput") ? $("schoolInput").value.trim() : "";
    S.className=$("classInput") ? $("classInput").value.trim() : "";
  }
  if(step===2 && !S.stage){ err("الرجاء اختيار المرحلة الدراسية"); return; }
  if(step===3 && S.categories.length<4){ err("اختر أربعة مجالات على الأقل (المحدد: "+S.categories.length+")"); return; }
  if(step===4){
    saveNames();
    if(availableLetters().length < S.teamCount){ err("الحروف المتاحة غير كافية، اختر مجالات أكثر"); return; }
  }
  if(step<6){ step++; render(); }
}

/* ================= اللعب ================= */
function startGame(){
  teams=[];
  for(var i=0;i<S.teamCount;i++){
    teams.push({ name:S.names[i], score:0, color:PALETTE[S.colors[i]], light:LIGHTS[S.colors[i]], icon:ICONS[i] });
  }
  team=0; usedLetters={}; usedQ={}; turns=0;
  buildTeams(); updateTurn();
  $("teacher").textContent = "إدارة النشاط: أ. " + S.teacher;
  $("liveTime").value = S.time;
  show("game"); showBoard(); roundInfo();
}

function buildTeams(){
  $("teams").innerHTML = teams.map(function(t,i){
    return '<div id="team'+i+'" class="team-card" style="background:'+t.light+';color:'+t.color+'">'
      + '<div class="team-line"><b>'+t.icon+' '+esc(t.name)+'</b></div>'
      + '<div id="score'+i+'" class="team-score">0</div></div>';
  }).join("");
}
function updateTurn(){
  $("turn").textContent = teams[team].icon + " الدور على: " + teams[team].name;
  teams.forEach(function(_,i){ $("team"+i).classList.toggle("current", i===team); });
}
function roundInfo(){
  var r = Math.min(S.rounds, Math.floor(turns/S.teamCount)+1);
  $("roundInfo").textContent = "الجولة "+r+" من "+S.rounds+" — السؤال "+(turns+1)+" من "+(S.rounds*S.teamCount);
}
function eligible(){
  var s={};
  pool().forEach(function(q){ if(!usedLetters[q.letter] && !usedQ[q.id]) s[q.letter]=1; });
  return s;
}
function buildBoard(){
  var e = eligible();
  $("board").innerHTML = LETTERS.map(function(l){
    return '<button type="button" class="letter" data-l="'+l+'"'+(!e[l]?" disabled":"")+'>'+l+'</button>';
  }).join("");
  $("board").querySelectorAll(".letter").forEach(function(b){
    b.addEventListener("click", function(){ choose(this.getAttribute("data-l")); });
  });
  paint(); progress();
}
function choose(l){
  if(phase!=="board" || usedLetters[l]) return;
  var p = pool().filter(function(q){ return q.letter===l && !usedQ[q.id]; });
  var recent = getRecent();
  var fresh = p.filter(function(q){ return recent.indexOf(q.id)<0; });
  var list = fresh.length ? fresh : p;
  if(!list.length) return;

  currentLetter = l;
  currentQ = list[Math.floor(Math.random()*list.length)];
  usedQ[currentQ.id]=1; saveRecent(currentQ.id);
  phase = "question";

  $("boardBox").classList.add("hidden");
  $("questionBox").classList.add("show");
  renderCurrentQuestion();
}

function renderCurrentQuestion(){
  $("bigLetter").textContent = currentLetter;
  $("cat").textContent = currentQ.category + " · " + STAGES[currentQ.stage];

  var qi=$("questionImage"), qiw=$("questionImageWrap");
  if(currentQ.image){
    qi.src=currentQ.image;
    qi.alt=currentQ.imageAlt || "صورة السؤال";
    qiw.classList.add("show");
  }else{
    qi.removeAttribute("src");
    qiw.classList.remove("show");
  }

  $("q").textContent = currentQ.question;
  $("answer").textContent = "الإجابة: " + currentQ.answer;
  $("answer").classList.remove("show");
  $("reveal").textContent = "إظهار الإجابة";
  $("reveal").classList.remove("hidden");
  $("changeQuestion").classList.remove("hidden");
  $("correct").classList.add("hidden");
  $("wrong").classList.add("hidden");
  $("changeQuestion").classList.add("hidden");
  $("msg").className = "result-message";
  $("msg").textContent = "";
  $("next").classList.add("hidden");
  applyTimer();
}

function changeQuestion(){
  if(phase!=="question" && phase!=="timeup") return;

  stopTimer();

  var alternatives = pool().filter(function(q){
    return q.letter===currentLetter && !usedQ[q.id];
  });

  if(!alternatives.length){
    phase="board";
    $("questionBox").classList.remove("show");
    $("boardBox").classList.remove("hidden");
    $("questionImageWrap").classList.remove("show");
    $("questionImage").removeAttribute("src");
    $("changeQuestion").classList.add("hidden");
    $("reveal").classList.remove("hidden");
    $("correct").classList.add("hidden");
    $("wrong").classList.add("hidden");
    $("next").classList.add("hidden");
    $("msg").className="result-message";
    $("answer").classList.remove("show");
    buildBoard();
    alert("لا يوجد سؤال بديل متاح لهذا الحرف، اختر حرفًا آخر.");
    return;
  }

  var recent = getRecent();
  var fresh = alternatives.filter(function(q){
    return recent.indexOf(q.id)<0;
  });
  var list = fresh.length ? fresh : alternatives;

  currentQ = list[Math.floor(Math.random()*list.length)];
  usedQ[currentQ.id]=1;
  saveRecent(currentQ.id);
  phase="question";
  renderCurrentQuestion();
}

function reveal(){
  if(phase!=="question" && phase!=="timeup") return;
  stopTimer(); phase="revealed";
  $("answer").classList.add("show");
  $("reveal").classList.add("hidden");
  $("changeQuestion").classList.add("hidden");
  $("correct").classList.remove("hidden");
  $("wrong").classList.remove("hidden");
  tone([440,660,880],"sine",.1);
}
function evaluate(ok){
  if(phase!=="revealed") return;
  phase="done";
  usedLetters[currentLetter] = { ok:ok, color: ok ? teams[team].color : "#9AA4AE" };
  if(ok){
    teams[team].score++;
    $("score"+team).textContent = teams[team].score;
    tone([523,659,784,1047],"triangle",.15);
    confetti();
  } else {
    tone([260,220,180],"sine",.13);
  }
  $("correct").classList.add("hidden");
  $("wrong").classList.add("hidden");
  $("msg").textContent = ok ? "إجابة صحيحة! تلوّن الحرف بلون الفريق." : "إجابة خاطئة، أُغلق الحرف بالرمادي.";
  $("msg").className = "result-message show " + (ok?"good":"bad");
  $("next").classList.remove("hidden");
  turns++; progress(); roundInfo();
}
function nextTurn(){
  if(phase!=="done") return;
  if(turns >= S.rounds*S.teamCount){ finish(); return; }
  team = (team+1) % teams.length;
  updateTurn(); showBoard();
}
function showBoard(){
  phase="board"; stopTimer();
  $("questionBox").classList.remove("show");
  $("boardBox").classList.remove("hidden");
  $("reveal").classList.remove("hidden");
  $("changeQuestion").classList.add("hidden");
  $("correct").classList.add("hidden");
  $("wrong").classList.add("hidden");
  $("next").classList.add("hidden");
  $("msg").className="result-message";
  $("answer").classList.remove("show");
  $("questionImageWrap").classList.remove("show");
  $("questionImage").removeAttribute("src");
  buildBoard();
}
function paint(){
  Object.keys(usedLetters).forEach(function(l){
    var b = document.querySelector('[data-l="'+l+'"]');
    if(!b) return;
    b.disabled = true;
    if(usedLetters[l].ok){
      b.style.background = usedLetters[l].color;
      b.style.borderColor = usedLetters[l].color;
      b.style.color = "#fff";
    } else b.classList.add("closed");
  });
}
function progress(){ $("progress").textContent = turns + " من " + (S.rounds*S.teamCount) + " أسئلة"; }

/* ================= المؤقت ================= */
function applyTimer(){
  if(S.time){ $("timer").classList.remove("hidden"); startTimer(S.time); }
  else { $("timer").classList.add("hidden"); stopTimer(); }
}
function startTimer(s){
  stopTimer(); tv=s; paused=false;
  $("pause").textContent="إيقاف المؤقت";
  updateTimer();
  tid = setInterval(function(){
    if(paused) return;
    tv--; updateTimer();
    if(tv<=0){
      stopTimer(); phase="timeup";
      tone([720,520,360],"square",.09);
      $("reveal").textContent = "انتهى الوقت — إظهار الإجابة";
      $("reveal").classList.remove("hidden");
    }
  },1000);
}
function stopTimer(){ if(tid){ clearInterval(tid); tid=null; } }
function updateTimer(){
  var p = Math.max(0, tv/(S.time||1)*100);
  $("fill").style.width = p+"%";
  $("fill").className = "timer-fill " + (tv<=5?"danger":tv<=10?"warn":"");
  $("timeNum").textContent = tv + " ث";
}
function changeTime(){
  S.time = Number($("liveTime").value);
  if(phase==="question" || phase==="timeup"){
    if(S.time===0){ $("timer").classList.add("hidden"); stopTimer(); phase="question"; }
    else { $("timer").classList.remove("hidden"); phase="question"; startTimer(S.time); }
  }
}

/* ================= التخزين ================= */
function getRecent(){ try{ return JSON.parse(localStorage.getItem("letters_recent_"+S.stage)||"[]"); }catch(e){ return []; } }
function saveRecent(id){
  try{
    var a = getRecent().filter(function(x){ return x!==id; });
    a.push(id);
    localStorage.setItem("letters_recent_"+S.stage, JSON.stringify(a.slice(-100)));
  }catch(e){}
}

/* ================= النهاية ================= */
function finish(){
  stopTimer();
  $("resultTeacher").textContent = "الأستاذ " + S.teacher;
  var meta=[];
  if(S.school) meta.push('<div class="final-meta-card"><span>المدرسة</span><b>'+esc(S.school)+'</b></div>');
  if(S.className) meta.push('<div class="final-meta-card"><span>الصف</span><b>'+esc(S.className)+'</b></div>');
  meta.push('<div class="final-meta-card"><span>المرحلة</span><b>'+esc(STAGES[S.stage]||"—")+'</b></div>');
  meta.push('<div class="final-meta-card"><span>المجالات</span><b>'+S.categories.length+' مجالات</b></div>');
  meta.push('<div class="final-meta-card"><span>الأسئلة المنفذة</span><b>'+turns+' سؤالًا</b></div>');
  $("finalMeta").innerHTML=meta.join("");
  var s = teams.slice().sort(function(a,b){ return b.score-a.score; });
  var m = s[0].score;
  var w = s.filter(function(x){ return x.score===m; });
  $("winner").textContent = w.length>1
    ? "تعادل بين: " + w.map(function(x){ return x.name; }).join(" و ")
    : "الفائز: " + w[0].name;
  var medals = ["🥇","🥈","🥉","🏅"];
  $("rows").innerHTML = s.map(function(t,i){
    return '<div class="result-row'+(i===0?" first":"")+'"><b>'+medals[i]+'</b>'
      + '<b style="color:'+t.color+'">'+t.icon+' '+esc(t.name)+'</b>'
      + '<b>'+t.score+' نقطة</b></div>';
  }).join("");
  show("results"); confetti();
}
function resetHome(){
  stopTimer(); step=1;
  S.stage=""; S.categories=[]; S.teacher=""; S.school=""; S.className="";
  S.teamCount=2; S.names=DEFAULTS.slice(); S.colors=[0,1,2,3];
  S.rounds=5; S.time=30;
  show("wizard"); render();
}

/* ================= الصوت والقصاصات ================= */
function audio(){
  if(!ac){
    var A = window.AudioContext || window.webkitAudioContext;
    if(!A) return null;
    try{ ac = new A(); }catch(e){ return null; }
  }
  if(ac.state==="suspended") ac.resume();
  return ac;
}
function tone(ns,type,g){
  if(!sound) return;
  var a = audio(); if(!a) return;
  try{
    var now = a.currentTime;
    ns.forEach(function(f,i){
      var o=a.createOscillator(), v=a.createGain();
      o.type=type; o.frequency.value=f;
      o.connect(v); v.connect(a.destination);
      var t = now + i*0.08;
      v.gain.setValueAtTime(0,t);
      v.gain.linearRampToValueAtTime(g,t+0.02);
      v.gain.exponentialRampToValueAtTime(0.001,t+0.35);
      o.start(t); o.stop(t+0.4);
    });
  }catch(e){}
}
function confetti(){
  var cv=$("confetti"), x=cv.getContext("2d");
  cv.width=innerWidth; cv.height=innerHeight; cv.style.display="block";
  var p=[];
  for(var i=0;i<90;i++) p.push({
    x:Math.random()*cv.width, y:-Math.random()*300,
    v:2+Math.random()*4, c:PALETTE[Math.floor(Math.random()*PALETTE.length)], a:1
  });
  var f=0;
  (function d(){
    x.clearRect(0,0,cv.width,cv.height);
    var alive=false;
    p.forEach(function(q){
      q.y+=q.v; q.x+=Math.sin(q.y*0.03);
      if(f>110) q.a-=0.02;
      if(q.a<=0) return;
      alive=true; x.globalAlpha=q.a; x.fillStyle=q.c;
      x.fillRect(q.x,q.y,7,11);
    });
    f++;
    if(alive) requestAnimationFrame(d); else cv.style.display="none";
  })();
}

/* ================= الأحداث الثابتة ================= */
$("changeQuestion").addEventListener("click", changeQuestion);
$("reveal").addEventListener("click", reveal);
$("correct").addEventListener("click", function(){ evaluate(true); });
$("wrong").addEventListener("click", function(){ evaluate(false); });
$("next").addEventListener("click", nextTurn);
$("pause").addEventListener("click", function(){
  if(!S.time || phase!=="question") return;
  paused = !paused;
  this.textContent = paused ? "استئناف المؤقت" : "إيقاف المؤقت";
});
$("add").addEventListener("click", function(){
  if(!S.time || (phase!=="question" && phase!=="timeup")) return;
  tv += 10;
  if(phase==="timeup"){ phase="question"; $("reveal").textContent="إظهار الإجابة"; startTimer(tv); }
  else updateTimer();
});
$("reset").addEventListener("click", function(){
  if(S.time && (phase==="question" || phase==="timeup")){
    phase="question"; $("reveal").textContent="إظهار الإجابة"; startTimer(S.time);
  }
});
$("liveTime").addEventListener("change", changeTime);
$("end").addEventListener("click", function(){ if(confirm("إنهاء النشاط وعرض النتائج؟")) finish(); });
$("newGame").addEventListener("click", resetHome);
$("homeBtn").addEventListener("click", function(){ if(confirm("العودة للرئيسية؟")) resetHome(); });
$("soundBtn").addEventListener("click", function(){
  sound = !sound;
  this.textContent = sound ? "🔊" : "🔇";
  if(sound) audio();
});

render();
})();

