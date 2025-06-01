# 📣 CTASectionTwoBlocks – Leapforce Design System Case

Deze component is ontwikkeld als onderdeel van de **Leapforce Design System Case**, met als doel een _pixel-perfect_ implementatie van een call-to-action sectie uit Figma. De component is gebouwd in **React** met **Tailwind CSS**, waarbij elk detail is afgestemd op het visueel ontwerp.

---

## 🎯 Doel van de case

- Pixel-perfect vertaling van een aangewezen Figma-ontwerp.
- Correct gebruik van typografie, spacing, kleuren en responsive gedrag.
- Consistent gebruik van Tailwind CSS op basis van design tokens en breekpunten.

---

## ⚙️ Functionaliteiten

- ✅ Responsieve lay-out (mobile & desktop).
- ✅ Desktop en mobiele typografie los gestructureerd voor nauwkeurige breking.
- ✅ Afbeeldingsblokken met overlay, button en tekstzone.
- ✅ Juiste spacing op elk formaat (gap, padding, margin).
- ✅ Design-specifieke kleuren, lettertypes, en object-fit logica toegepast.

---

## 💻 Desktop specificaties

| Element                | Eigenschappen                                                   |
|------------------------|-----------------------------------------------------------------|
| Tekstblok breedte      | `864px`                                                         |
| Titelhoogte            | `97px`, breekt op "the"                                         |
| Spacing in headline    | `gap-[24px]` tussen elementen                                   |
| Bottom spacing button  | `mb-[80px]`                                                     |
| CTA afbeelding         | `644x515px`, `object-cover`                                     |
| Afstand tussen blokken | `gap-[24px]`                                                    |

---

## 📱 Mobile specificaties

| Element                | Eigenschappen                                                   |
|------------------------|-----------------------------------------------------------------|
| Titelregels            | Opgebroken in 3 regels, met aparte `<br />` bij "call-to-action"|
| Spacing in headline    | `gap-[16px]` tussen tekst-elementen                             |
| CTA afbeelding         | `335x252px`, `object-cover`                                     |
| Buitenmarges           | `mx-[20px]`                                                     |
| Bottom spacing button  | `mb-[32px]`                                                     |

---

## 🧱 Bestandstructuur
<pre> 📁 <strong>components/</strong> └── 📄 <strong>CTASectionTwoBlocks.jsx</strong> 📁 <strong>public/</strong> └── 📁 <strong>img/</strong> └── 🖼️ <strong>placeholder.png</strong> </pre>

---

## 🧠 Technische keuzes

- **Tailwind CSS**: gebruikt voor volledige controle over spacing en styling zonder extra CSS.
- **Responsieve opbouw**: aparte `<h2>` voor mobiel en desktop om pixel-perfect breekpunten te respecteren.
- **object-fit gedrag**: bewust gekozen voor `object-cover` op alle resoluties voor consistente beeldvulling.
- **Figma-alignement**: alle paddings, gaps en max-widths afgestemd op het ontwerp.

---

## ✅ Test-aanpak

- [x] PixelPerfect overlay extensie in Chrome gebruikt voor visuele vergelijking.
- [x] DevTools: spacing gecontroleerd via het box-model tabblad.
- [x] Meerdere schermresoluties getest (mobile-first).
- [x] Lettergrootte en line-height gecontroleerd op basis van Figma.

---

## 🔚 Conclusie

Deze CTA-component bewijst hoe een zorgvuldig ontworpen visuele layout tot op de pixel correct vertaald kan worden naar semantisch nette en responsieve code in React. De component houdt rekening met alle typografische, visuele en structurele eisen uit het ontwerp.

---

