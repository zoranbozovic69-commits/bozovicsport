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

export const ddkLevelsEn: DDKLevel[] = [
  {
    level: 1,
    meaning: "Full freedom and basic control. The child has no fear of water. Completely relaxed, enters the pool independently, consciously controls exhalation and can submerge the face without hesitation.",
    expert: "The child is in full hydro-adaptation. The amygdala is calm and the vestibular system stable. At this level we immediately start forming advanced motor habits and the biomechanics of swimming techniques through dynamic propulsion.",
  },
  {
    level: 2,
    meaning: "Mild caution without blockage. The child is brave but shows natural caution toward depth or a new environment. Successfully performs exhalation and face submersion with a slight nudge from the coach.",
    expert: "The child has successfully overcome basic fear. Only conscious caution remains, which kinesiotherapy and proper neuro-pedagogical guidance turn into full freedom within the first training session.",
  },
  {
    level: 3,
    meaning: "Present fear with preserved control. The child fears the unfamiliar position and loss of footing, but cooperates consciously. Can exhale by the pool edge but resists lifting feet off the bottom or lying on the back.",
    expert: "This level requires a kinesiotherapy approach. Work focuses on stabilizing the vestibular system and calming the fear center. The first three lessons apply hydro-adaptation and conscious breath control before moving to horizontal body position.",
  },
  {
    level: 4,
    meaning: "Visible physical tension and moderate resistance. The child enters water only while holding the coach's or parent's hand. When attempting to submerge the face or stretch the body, visible neuromuscular tension (elevated tone) and rapid breathing appear.",
    expert: "At this level defensive mechanisms are active and block motor learning. The methodology is strictly based on breaking movement into small parts. We work only in the shallow end, where the static fluid restores the child's sense of safety underfoot.",
  },
  {
    level: 5,
    meaning: "Active blockage and fear of head submersion. The child wants to cooperate but freezes completely when water reaches the chin. A strong fear of water entering the nose, ears and eyes is present.",
    expert: "The child perceives water as an immediate threat to stability. The kinesiotherapy protocol requires strict 1-on-1 work without any forcing. The first phase is exclusively learning correct conscious exhalation (blowing bubbles) so the learner realizes that controlling breath means controlling safety.",
  },
  {
    level: 6,
    meaning: "Open resistance and refusal to enter deeper water. The child agrees to sit on the edge or stand in shallow water, but reacts strongly, cries, or clings to the coach if a step is taken toward the deep end — even when held.",
    expert: "Weaker spatial maturation of the vestibular system causes a sense of falling. We apply strict pedagogy of authority and trust. Work is conducted through touch and constant physical support under the child's shoulder blades so the amygdala gradually adapts to buoyancy forces.",
  },
  {
    level: 7,
    meaning: "Panic at the very edge of the pool. The child refuses to enter the water at all. Already when approaching the edge there is crying, increased heart rate and the 'fight or flight' reflex (the child tries to run away from the pool).",
    expert: "A panic level where the conscious part of the brain is fully blocked by the self-preservation drive. Work starts outside the water — at the pool edge — through kinesiotherapy breathing exercises and gradual wetting of the extremities. The goal is to reduce stress before the first contact with water.",
  },
  {
    level: 8,
    meaning: "Trauma caused by an earlier bad experience. The child has deeply rooted fear because they previously inhaled water, fell into deep water, or were exposed to unprofessional work ('being thrown in'). The mere sight of a large water surface causes trembling and tears.",
    expert: "This is a post-traumatic neurological blockage. Such a profile requires expert supervision and kinesiotherapy re-education. The process involves a full reset of motor habits through specific relaxation phases, where play is the reward for mastered safety and expert authority is the guarantee of security.",
  },
  {
    level: 9,
    meaning: "Severe hydrophobia with somatic symptoms. The child reacts strongly to the smell of chlorine, the sound of the pool or temperature change. Bodily stress symptoms appear: stomach cramps, nausea, cold sweat and total loss of control.",
    expert: "A serious kinesiotherapy and neurophysiological challenge. Requires exclusively individual lessons in an isolated and calm training space. Progress is measured in millimeters — from conscious muscle relaxation on dry land, to shallow-water adaptation, to establishing basic vestibular control.",
  },
  {
    level: 10,
    meaning: "Complete panic breakdown and inability to make contact. The most severe form of fear, where the child experiences a panic attack at every attempt to approach water. No pedagogical contact or conversation is possible at the pool; the child is in complete training arrest.",
    expert: "In this status, motor learning is theoretically and practically impossible. The protocol calls for an immediate switch to dry kinesiotherapy simulations and special breathing and core stabilization exercises outside the pool. Only when conscious trust in one's own body and the coach is established on land do we begin minimal, controlled entry into water.",
  },
];
