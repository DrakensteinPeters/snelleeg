# Snelleeg.nl — Website

Officiële website voor **Snelleeg.nl**, woningontruiming met gevoel. Gebouwd in de stijl van [Spullenbaas.com](https://spullenbaas.com).

---

## 📁 Bestandsstructuur

```
snelleeg/
├── index.html          # Hoofdpagina
├── css/
│   └── style.css       # Alle stijlen
├── js/
│   └── script.js       # FAQ accordion + animaties
└── README.md           # Dit bestand
```

---

## 🚀 Lokaal openen

Dubbelklik op `index.html` om de website in je browser te openen.
Geen server of installatie nodig.

---

## 🌐 Online zetten via GitHub Pages

1. Maak een **nieuw repository** aan op [github.com](https://github.com)
2. Upload alle bestanden (behoud de mappenstructuur)
3. Ga naar **Settings → Pages**
4. Kies bij *Branch*: `main` → map: `/ (root)`
5. Klik **Save**
6. Na een minuutje is de site live op: `https://jouwgebruikersnaam.github.io/snelleeg`

---

## ✏️ Aanpassen

| Wat aanpassen | Waar |
|---|---|
| Teksten & inhoud | `index.html` |
| Kleuren & stijl | `css/style.css` (bovenaan de `:root` variabelen) |
| Telefoonnummer | Zoek op `+31659110607` in `index.html` |
| E-mailadres | Zoek op `johan@snelleeg.nl` in `index.html` |
| WhatsApp link | Zoek op `wa.me/31659110607` in `index.html` |
| Animaties & FAQ | `js/script.js` |

### Kleuren aanpassen (`css/style.css`)

```css
:root {
  --green: #2d6a4f;        /* Hoofdkleur groen */
  --green-light: #52b788;  /* Licht groen accent */
  --green-pale: #d8f3dc;   /* Lichte achtergrond */
  --cream: #faf7f2;        /* Pagina achtergrond */
  --dark: #1a2e22;         /* Donkere tekst/secties */
  --accent: #e8a045;       /* Oranje accent */
}
```

---

## 📞 Contactgegevens

- **Telefoon:** +31 6 5911 0607
- **E-mail:** johan@snelleeg.nl
- **Adres:** Rollandstraat 12, 2013 SP Haarlem
- **KvK:** 98927744

---

## 🛠️ Technische details

- Pure HTML, CSS en JavaScript — geen frameworks
- Responsive (mobiel, tablet, desktop)
- Google Fonts: Playfair Display + DM Sans
- Geen externe afhankelijkheden behalve Google Fonts
- Klaar voor GitHub Pages hosting
