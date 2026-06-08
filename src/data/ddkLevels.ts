export interface DDKLevel {
  level: number;
  meaning: string;
  expert: string;
}

export const ddkLevels: DDKLevel[] = [
  {
    level: 1,
    meaning:
      "Potpuna sloboda i bazična kontrola. Dete nema nikakav strah od vode. Potpuno je opušteno, samostalno ulazi u bazen, svesno kontroliše izdah i može da zaroni lice bez oklevanja.",
    expert:
      "Dete se nalazi u fazi potpune hidro-adaptacije. Amigdala je mirna, a vestibularni sistem stabilan. Sa ovim nivoom odmah se pokreće proces formiranja naprednih motornih navika i biomehanike plivačkih tehnika kroz dinamičku propulziju.",
  },
  {
    level: 2,
    meaning:
      "Blaga opreznost bez blokade. Dete je hrabro, ali pokazuje prirodnu opreznost prema dubini ili novom okruženju. Uspešno izvodi izdah i potapanje lica uz blagi podsticaj trenera.",
    expert:
      "Dete je uspešno prevazišlo bazični strah. Prisutna je samo svesna opreznost koja se kineziterapijskim radom i pravilnim neuro-pedagoškim vođenjem pretvara u potpunu slobodu već nakon prvog treninga.",
  },
  {
    level: 3,
    meaning:
      "Prisutan strah sa očuvanom kontrolom. Dete se boji nepoznatog položaja i gubitka oslonca pod nogama, ali svesno sarađuje. Može da napravi izdah uz ivicu bazena, ali ima otpor prema odvajanju stopala od dna ili ležanju na leđima.",
    expert:
      "Navedeni nivo straha zahteva kineziterapijski pristup. Fokus rada je na stabilizaciji vestibularnog sistema i neurofiziološkom smirivanju centra za strah. Kroz prva tri časa primenjujemo hidro-adaptaciju i svesnu kontrolu disanja, pre nego što pređemo na učenje horizontalnog položaja tela.",
  },
  {
    level: 4,
    meaning:
      "Vidljiv fizički grč i umereni otpor. Dete ulazi u vodu samo uz držanje za ruku trenera ili roditelja. Pri pokušaju potapanja lica ili opružanja tela javlja se vidljiv neuromišićni grč (povišen tonus) i ubrzano disanje.",
    expert:
      "Kod ovog nivoa odbrambeni mehanizmi su aktivni i blokiraju motoričko učenje. Metodologija rada se striktno bazira na raščlanjivanju pokreta na sitne delove. Radimo isključivo u plitkom delu bazena, gde kroz statiku fluida vraćamo detetu osećaj sigurnosti pod nogama.",
  },
  {
    level: 5,
    meaning:
      "Aktivna blokada i strah od potapanja glave. Dete želi da sarađuje, ali doživljava potpunu blokadu (smrzavanje) kada voda treba da pređe nivo brade. Prisutan je izražen strah od ulaska vode u nos, uši i oči.",
    expert:
      "Dete vodu doživljava kao neposrednu pretnju po stabilnost. Kineziterapijski protokol ovde nalaže rad „1 na 1” bez ikakvog forsiranja plivanja. Prva faza je isključivo učenje pravilnog i svesnog izdaha (duvanje mehurića) kako bi polaznik shvatio da kontrolom daha sam kontroliše svoju bezbednost.",
  },
  {
    level: 6,
    meaning:
      "Otvoreni otpor i odbijanje ulaska u dubinu. Dete pristaje da sedi na ivici bazena ili da stoji u plićaku, ali burno reaguje, plače ili se čvrsto drži za trenera ako se napravi korak ka dubljem delu, čak i u naručju.",
    expert:
      "Slabija prostorna maturacija vestibularnog sistema uzrokuje osećaj propadanja. Ovde se primenjuje stroga pedagogija autoriteta i poverenja. Rad se sprovodi kroz dodir i stalni fizički oslonac pod lopaticama deteta, čime se amigdala postepeno navikava na sila potiska.",
  },
  {
    level: 7,
    meaning:
      "Panični strah na samoj ivici bazena. Dete odbija uopšte da uđe u vodu. Već pri samom prilasku ivici bazena javlja se plač, ubrzan rad srca i odbrambeni refleks „bori se ili beži” (dete pokušava da pobegne sa bazena).",
    expert:
      "Panični nivo gde je svesni deo mozga potpuno blokiran pod uticajem nagona za samoodržanjem. Rad započinje van vode – na samoj ivici bazena, kroz kineziterapijske vežbe disanja i postepeno kvašenje ekstremiteta. Cilj je spuštanje nivoa stresa pre prvog ulaska u vodeni medijum.",
  },
  {
    level: 8,
    meaning:
      "Trauma izazvana ranijim lošim iskustvom. Dete ima duboko ukorenjen strah jer se ranije nagutalo vode, upalo u dubinu ili bilo izloženo nestručnom radu („bacanju u vodu”). Sam pogled na veliku površinu vode izaziva drhtavicu i suze.",
    expert:
      "U pitanju je posttraumatska neurološka blokada. Rad sa ovakvim profilom zahteva ekspertski nadzor i kineziterapijsku reedukaciju. Proces obuhvata potpuno resetovanje motorne navike kroz posebne faze opuštanja, gde je igra nagrada za savladanu bezbednost, a stručni autoritet garancija sigurnosti.",
  },
  {
    level: 9,
    meaning:
      "Težak oblik hidrofobije sa somatskim simptomima. Dete reaguje burno na sam miris hlora, zvuk bazena ili promenu temperature. Javljaju se telesni simptomi stresa: grčenje stomaka, mučnina, hladan znoj i potpuni slom kontrole.",
    expert:
      "Ozbiljan kineziterapijski i neurofiziološki izazov. Zahteva isključivo individualne časove u izolovanom i mirnom trenažnom prostoru. Napredak se meri milimetrima – od svesnog opuštanja mišića na suvom, preko adaptacije na plićak, do uspostavljanja bazične kontrole vestibularnog aparata.",
  },
  {
    level: 10,
    meaning:
      "Potpuni panični slom i nemogućnost kontakta. Najteži oblik straha gde dete doživljava panični napad pri svakom pokušaju približavanja vodi. Nema mogućnosti za pedagoški kontakt ili razgovor na bazenu, dete je u potpunom trenažnom zastoju.",
    expert:
      "U ovom statusu motoričko učenje je teoretski i praktično nemoguće. Protokol nalaže hitan prelazak na suve kineziterapijske simulacije i specijalne vežbe disanja i stabilizacije trupa (core) van bazena. Tek kada se uspostavi svesno poverenje u sopstveno telo i trenera na suvom, kreće se sa minimalnim, kontrolisanim ulaskom u vodu.",
  },
];

export const colorForLevel = (level: number): string => {
  if (level <= 3) return "hsl(145, 65%, 42%)";
  if (level <= 6) return "hsl(45, 93%, 47%)";
  return "hsl(0, 70%, 55%)";
};
