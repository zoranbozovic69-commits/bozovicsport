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
//    /clanak/<slug> (ili na `path` ako je definisan), dodati
//    SEO meta tagove i JSON-LD šemu, i prikazati karticu na
//    početnoj stranici u sekciji "Stručna baza".
// 4. Opciona polja:
//    - `path`      – custom URL putanja (npr. "/strucna-baza/...").
//    - `metaTitle` – <title> tag (SEO). Ako nije zadat, koristi se `title`.
//    - `heading`   – H1 na stranici članka. Ako nije zadat, koristi se `title`.
// 5. Nakon izmene kliknite "Publish" gore desno – Google će
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
  path?: string; // custom route path
  metaTitle?: string; // <title> override
  heading?: string; // page H1 override
}

export const articles: Article[] = [
  {
    slug: "strah-od-vode-u-zrelim-godinama-40-plus",
    path: "/strucna-baza/strah-od-vode-u-zrelim-godinama-40-plus",
    title: "Strah od vode kod odraslih – uzroci i naučno rešenje",
    excerpt:
      "Strah od vode nije slabost karaktera, već naučljiva neurofiziološka reakcija. Saznajte kako DDK metodologija sistemski uklanja paniku u vodi.",
    metaTitle: "Strah od vode u zrelim godinama (40+) – Božović Sport Novi Sad",
    heading:
      "STRAH OD VODE U ZRELIM GODINAMA NIJE SRAMOTA, VEĆ NEUROFIZIOLOŠKI REFLEKS: KAKO NAUKA REŠAVA PROBLEM NEPLIVAČA STAROSTI 40+",
    datePublished: "2026-07-05",
    author: "Zoran Božović",
    content: `
      <p><em>Zašto tradicionalni pristupi i grupne školice plivanja ne deluju na odrasle osobe, kako vaš mozak blokira voljne pokrete u vodenom medijumu i na koji način DDK metodologija garantuje potpunu kontrolu u dubini za tačno 10 sesija.</em></p>
      <hr />
      <div style="background-color: hsl(var(--muted)); border-left: 4px solid hsl(var(--destructive)); padding: 15px; margin-bottom: 20px; border-radius: 4px;">
        <strong>⚠️ METODOLOŠKA NAPOMENA I ZAŠTITA INTELEKTUALNE SVOJINE</strong><br />
        <em>DDK® (Dijagnostika, Dokumentacija, Kontrola) predstavlja zaštićenu autorsku metodologiju Udruženja „Božović Sport” i osnivača Zorana Božovića, mastera sporta i kineziterapeuta. Svako neovlašćeno kopiranje teksta, prisvajanje terminologije ili pokušaj repliciranja protokola bez zvanične licence i sertifikata Plivačkog saveza Srbije (Dozvola br. 0333) podleže zakonskoj odgovornosti po Zakonu o autorskim i srodnim pravima Republike Srbije. Sistemi kontrole i dijagnostike su zaštićeno intelektualno vlasništvo.</em>
      </div>
      <h2>Uvod: Sramota je nusprodukt pogrešnih metoda</h2>
      <p>Veliki broj odraslih osoba starijih od 40 godina nosi sa sobom skriveni teret – nesposobnost plivanja i dubok, često parališući strah od vode. Tokom decenija, ovaj problem prerasta u socijalnu stigmu i stid. Izbegavaju se letovanja sa porodicom, odlasci na bazene i hidroterapije, a samopouzdanje se narušava predrasudom da je „sada kasno za učenje".</p>
      <p>Kao master sporta, kineziterapeut i doktorand sportskih nauka sa preko 25 godina praktičnog iskustva, želim odmah da vam saopštim surovu istinu: <strong>vi niste krivi za svoj strah, a stid je posledica pogrešnih, agresivnih metoda kojima ste možda bili izloženi u detinjstvu.</strong> Strah od vode u zrelim godinama nije slabost karaktera, niti nedostatak motoričke inteligencije. To je egzaktna, naučno objašnjiva odbrambena reakcija vašeg organizma.</p>
      <h2>Neurofiziologija straha: Zašto se telo parališe u vodi?</h2>
      <p>Da bismo pobedili problem, moramo ga raščlaniti na sitne delove. Kada odrasla osoba sa izraženim strahom zakorači prema ivici bazena, u njenom mozgu se aktivira <strong>amigdala</strong> – drevni centar zadužen za preživljavanje. Ona u sekundi prepoznaje vodu kao neposrednu životnu opasnost i pokreće odbrambeni mehanizam „bori se ili beži".</p>
      <p>U tom trenutku dešava se sledeći neurofiziološki niz:</p>
      <ul>
        <li><strong>Blokada svesnog mišljenja:</strong> Kora velikog mozga (deo kojim logički razmišljate) gubi kontrolu, a upravljanje preuzimaju evolutivni nagoni.</li>
        <li><strong>Neuromišićna kočnica:</strong> Organizam luči hormone stresa, što dovodi do naglog ubrzanja rada srca, plitkog disanja i ekstremne zategnutosti muskulature.</li>
        <li><strong>Gubitak biomehaničke efikasnosti:</strong> Zbog grča mišića, telo odrasle osobe postaje specifično teže, narušava se prirodna statika fluida i osoba počinje da tone.</li>
      </ul>
      <p>Kada vas u takvom stanju tradicionalni trener ubaci u grupu i kaže vam da „samo mašete rukama i opustite se", on pravi kardinalnu stručnu grešku. Vi ne možete da naučite motoričku veštinu dok je vaš nervni sistem u stanju paničnog sloma.</p>
      <h2>Zašto grupne školice plivanja ne funkcionišu za odrasle?</h2>
      <p>Grupni treninzi su projektovani za decu, kod kojih je kognitivni aparat drugačije postavljen i gde dominira učenje kroz igru. Kod odrasle osobe od 40 i više godina, kineziološki profil je potpuno drugačiji. Imate formiran lokomotorni aparat, specifične biomehaničke barijere, ali i nagomilano životno iskustvo koje traži <strong>logiku i kontrolu</strong>.</p>
      <p>Vama nije potrebna zabava u vodi – vama je potreban <strong>stručni nadzor, apsolutna diskrecija i naučni protokol</strong>.</p>
      <h2>DDK Metodologija: Tri stuba do potpune slobode</h2>
      <p>U udruženju <strong>Božović Sport</strong>, problemu neplivanja kod odraslih pristupamo sa hirurškom preciznošću kroz naš zaštićeni <strong>DDK standard (Dijagnostika, Dokumentacija, Kontrola)</strong>. Naš cilj je da resetujemo pogrešne odbrambene reflekse i ponovo izgradimo vašu neuromišićnu adaptaciju.</p>
      <ul>
        <li><strong>1. Dijagnostika:</strong> Pre nego što uopšte dodirnemo duboku vodu, vršimo detaljnu analizu vašeg neurološkog praga straha i motoričkih sposobnosti. Rad počinje u plićaku ili na samoj ivici bazena, kroz kineziterapijske vežbe disanja.</li>
        <li><strong>2. Dokumentacija:</strong> Svaki minut vašeg boravka u vodi se dokumentuje. Prati se ekonomičnost disanja, položaj tela i eliminacija panike. Vi tačno znate šta radite i zašto to radite.</li>
        <li><strong>3. Kontrola:</strong> Kroz tačno vođene individualne sesije (1 na 1 sa stručnjakom), vaš mozak postepeno shvata da je bezbedan. Kada amigdala utihne, otvara se prostor za formiranje stabilne motorne navike.</li>
      </ul>
      <h2>Naša garancija: 10 sesija od po 60 minuta</h2>
      <p>Mi ne nagađamo – mi garantujemo napredak. Naš specijalizovani program za odrasle 40+ traje tačno jedan ciklus od <strong>10 sesija u trajanju od 60 minuta</strong>.</p>
      <ul>
        <li><strong>Od sesije 1 do 3:</strong> Fokus je na bazičnoj adaptaciji, kontroli disanja, eliminaciji panike i uspostavljanju prirodnog plutanja.</li>
        <li><strong>Od sesije 4 do 7:</strong> Prelazimo na vertikalnu sigurnost i stabilizaciju položaja u dubokoj vodi, gde učite kako da bezbedno boravite u medijumu bez oslonca.</li>
        <li><strong>Od sesije 8 do 10:</strong> Razvijamo bazičnu samostalnost, kretanje kroz vodu i svesno upravljanje sopstvenim telom.</li>
      </ul>
      <p>Nakon ovog ciklusa, stid nestaje, a zamenjuje ga osećaj ponosa i potpune kontrole nad sopstvenim životom i telom.</p>
      <blockquote style="border-left: 4px solid hsl(var(--primary)); padding: 12px 16px; margin: 20px 0; background-color: hsl(var(--muted)); border-radius: 4px;">
        <p><strong>Poruka osnivača:</strong><br />
        <em>"Cena je ono što plaćate. Sigurnost i sloboda su ono što dobijate. Sa preko 20.000 sati rada u vodenom prostoru, garantujem vam da ne postoji strah koji nauka i pravilan kineziterapijski pristup ne mogu da savladaju. Dobrodošli u DDK standard."</em><br />
        <strong>– Zoran Božović, master sporta i doktorand</strong></p>
      </blockquote>
      <hr />
      <div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
        <a href="/#kontakt" style="background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); padding: 15px 30px; font-weight: bold; text-decoration: none; border-radius: 6px; text-transform: uppercase; display: inline-block;">
          OSLOBODITE SE STIDA: ZAKAŽITE DISKRETNU DDK DIJAGNOSTIKU
        </a>
      </div>
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
