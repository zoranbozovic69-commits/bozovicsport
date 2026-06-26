// ============================================================
// STRUČNA BAZA – Članci
// ------------------------------------------------------------
// UPUTSTVO ZA UREĐIVANJE:
// 1. Da biste promenili postojeći članak, izmenite polja
//    (title, excerpt, content, datePublished) u nizu ispod.
// 2. Da biste dodali novi članak, kopirajte jedan blok { ... }
//    i dodajte ga u niz. Obavezno postavite jedinstven `slug`
//    (samo mala slova, brojevi i crtice – bez razmaka i č/š/ž).
// 3. Polje `content` podržava HTML (npr. <p>, <h2>, <ul><li>,
//    <strong>). Sajt će automatski generisati stranicu na
//    /clanak/<slug>, dodati SEO meta tagove i JSON-LD šemu,
//    i prikazati karticu na početnoj stranici u sekciji
//    "Stručna baza".
// 4. Nakon izmene kliknite "Publish" gore desno – Google će
//    preko sitemap-a indeksirati nove članke.
// ============================================================

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML allowed
  datePublished: string; // YYYY-MM-DD
  author?: string;
  image?: string;
}

export const articles: Article[] = [
  {
    slug: "strah-od-vode-kod-odraslih",
    title: "Strah od vode kod odraslih – uzroci i naučno rešenje",
    excerpt:
      "Strah od vode nije slabost karaktera, već naučljiva neurofiziološka reakcija. Saznajte kako DDK metodologija sistemski uklanja paniku u vodi.",
    datePublished: "2026-06-26",
    author: "Zoran Božović",
    content: `
      <p>Strah od vode (akvafobija) javlja se kod više od 30% odraslih i najčešće je posledica neprijatnog iskustva u detinjstvu, gušenja ili nedostatka pravilne adaptacije.</p>
      <h2>Zašto klasični časovi ne pomažu?</h2>
      <p>Standardni časovi plivanja podrazumevaju da polaznik već kontroliše disanje i telo u horizontalnom položaju. Kod osoba sa strahom, nervni sistem aktivira <strong>borba–beg</strong> odgovor pre nego što tehnika uopšte može biti uvežbana.</p>
      <h2>DDK pristup</h2>
      <ul>
        <li><strong>Faza 1 – Adaptacija:</strong> kontrola disanja i potapanja lica</li>
        <li><strong>Faza 2 – Vertikalnost:</strong> sigurnost u dubokoj vodi bez oslonca</li>
        <li><strong>Faza 3 – Propulzija:</strong> tehnika kretanja i izdržljivost</li>
      </ul>
      <p>Rezultat: predvidljiv uspeh za 10 × 60 min, sa garancijom.</p>
    `,
  },
  {
    slug: "kineziterapija-i-plivanje",
    title: "Kineziterapija u vodi – zašto je plivanje najbolja terapija",
    excerpt:
      "Voda smanjuje opterećenje na zglobove za 90%. Pogledajte zašto je kineziterapija u bazenu prvi izbor za rehabilitaciju kičme i postoperativni oporavak.",
    datePublished: "2026-06-26",
    author: "Zoran Božović",
    content: `
      <p>Kineziterapija u vodi (hidrokineziterapija) koristi hidrostatički pritisak i potisak da omogući bezbolno izvođenje vežbi koje na suvom često nisu moguće.</p>
      <h2>Glavne indikacije</h2>
      <ul>
        <li>Skolioza i loše držanje kod dece</li>
        <li>Diskus hernija i hronični bol u krstima</li>
        <li>Postoperativni oporavak (koleno, kuk, rame)</li>
        <li>Reumatska oboljenja i artroze</li>
      </ul>
      <h2>Program rada</h2>
      <p>Svaki tretman se prilagođava medicinskom nalazu i sprovodi pod nadzorom licenciranog kineziterapeuta (licenca PSS 0333).</p>
    `,
  },
  {
    slug: "vaterpolo-dijagnostika-mladih",
    title: "Dijagnostika mladih vaterpolista – šta meri DDK protokol",
    excerpt:
      "Vertikalni skok iz vode, izdržljivost u eggbeater-u i preciznost dodavanja – tri ključna parametra koja odlučuju o napretku mladog vaterpoliste.",
    datePublished: "2026-06-26",
    author: "Zoran Božović",
    content: `
      <p>DDK dijagnostika za vaterpoliste objektivno meri trenutni nivo motoričkih sposobnosti i daje pisani izveštaj sa preporukama za trenera i roditelje.</p>
      <h2>Testovi</h2>
      <ul>
        <li><strong>Eggbeater izdržljivost</strong> – vreme zadržavanja vertikalne pozicije sa opterećenjem</li>
        <li><strong>Vertikalni skok iz vode</strong> – eksplozivna snaga nogu</li>
        <li><strong>Preciznost dodavanja</strong> – tehnika i koordinacija</li>
        <li><strong>Sprint 25 m</strong> – brzina i tehnika zaveslaja</li>
      </ul>
      <p>Cena kompletne dijagnostike sa pisanim izveštajem: <strong>4.000 RSD</strong>.</p>
    `,
  },
];
