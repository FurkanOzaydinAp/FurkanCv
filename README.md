# Furkan Ozaydin — cv website

Eenvoudige React-site, gebouwd met Vite.

## Bestandstructuur

```
furkan-cv/
├── index.html              ← entry point, laadt fonts + src/main.jsx
├── src/
│   ├── main.jsx             ← rendert <App /> in #root
│   ├── App.jsx               ← zet alle secties onder elkaar
│   ├── App.css                ← layout (.wrap, sectie-spacing)
│   ├── index.css               ← kleuren, fonts, globale animaties
│   ├── hooks/
│   │   └── useInView.js          ← detecteert wanneer een sectie in beeld scrolt
│   └── components/
│       ├── Hero/                  ← naam + intro, fade-in bij laden
│       ├── About/                  ← bio
│       ├── Stack/                   ← vaardigheden, scrollende marquee-animatie
│       ├── Education/                ← opleiding
│       ├── Contact/                   ← contactgegevens
│       └── Footer/
```

Elk component heeft zijn eigen `.jsx` (de markup/structuur) en `.css` (de styling) bestand.

## Lokaal draaien

```
npm install
npm run dev
```

Opent op http://localhost:5173

## Bouwen voor productie

```
npm run build
```

Dit maakt een `dist/` map met statische bestanden (html, css, js). Die map is wat je naar GitHub Pages pusht of in Cloudflare Pages uploadt.

## Wat je zelf nog moet aanpassen

- `src/components/About/About.jsx` — de bio-tekst
- `src/components/Stack/Stack.jsx` — de lijst met talen/technologieën (frontend, backend, tools)
- `src/components/Education/Education.jsx` — opleidingsgegevens en eventueel werkervaring
