export type DDKPhase = 1 | 2 | 3;

export interface DDKEntry {
  meaning: string;
  expert: string;
}

type Matrix = Record<DDKPhase, Record<number, DDKEntry>>;

const p = (a: string, b: string): DDKEntry => ({ meaning: a, expert: b });

export const ddkMatrixSr: Matrix = {
  1: {
    1: p(
      "Potpuna opuštenost i odsustvo straha. Polaznik nema nikakvih psiholoških barijera u vodi.",
      "Brza kortikalna adaptacija. Rad na hidrodinamičkom klizanju i koordinaciji disanja u plitkoj vodi."
    ),
    2: p(
      "Blaga i prirodna opreznost prema vodenom medijumu. Disanje je stabilno, nema fizičke napetosti.",
      "Brza kortikalna adaptacija. Rad na hidrodinamičkom klizanju i koordinaciji disanja u plitkoj vodi."
    ),
    3: p(
      "Povremena nesigurnost pri ulasku u duboku vodu ili pri gubitku oslonca pod nogama.",
      "Kineziterapijske vežbe disanja i kontrole izdisaja pod vodom uz postepeno uspostavljanje plovnosti trupa."
    ),
    4: p(
      "Povećana napetost mišića trupa i vratnog dela pri potapanju lica u vodu. Kratko zadržavanje daha.",
      "Kineziterapijske vežbe disanja i kontrole izdisaja pod vodom uz postepeno uspostavljanje plovnosti trupa."
    ),
    5: p(
      "Umeren strah. Izražena nelagodnost pri pomisli na dubinu, uz ubrzano i plitko disanje.",
      "DDK protokol vođenog odvajanja 1-na-1 uz primenu pasivnog potiska i spuštanje stresa u plitkoj vodi."
    ),
    6: p(
      "Znatna nesigurnost. Polaznik se nerado odvaja od ivice bazena. Pri gubitku oslonca javlja se refleks napetosti.",
      "DDK protokol vođenog odvajanja 1-na-1 uz primenu pasivnog potiska i spuštanje stresa u plitkoj vodi."
    ),
    7: p(
      "Visok nivo stresa i pojava odbrambenih refleksa čim se priđe vodi ili izgubi oslonac.",
      "Desenzitizacija van vode i na samoj ivici. Postepeno kvašenje i stimulacija parasimpatikusa radi neutralizacije straha."
    ),
    8: p(
      "Izražen strah propraćen brzim radom srca, drhtavicom ili blagom blokadom pokreta na samoj ivici bazena.",
      "Desenzitizacija van vode i na samoj ivici. Postepeno kvašenje i stimulacija parasimpatikusa radi neutralizacije straha."
    ),
    9: p(
      "Skoro paničan strah. Izbegavanje ulaska u vodu, uz jaku reakciju borbe ili bega.",
      "Specijalizovani DDK protokol za neutralizaciju trauma (posebno prilagođen polaznicima 40+ godina). Rad započinje bez pritiska."
    ),
    10: p(
      "Panični slom i potpun blok svesnog upravljanja pokretom pri samoj pomisli na ulazak u vodu.",
      "Specijalizovani DDK protokol za neutralizaciju trauma (posebno prilagođen polaznicima 40+ godina). Rad započinje bez pritiska."
    ),
  },
  2: {
    1: p(
      "Stabilna kontrola. Polaznik samostalno i opušteno održava vertikalni položaj u dubini bez znakova zamora.",
      "Usavršavanje efikasnosti rada nogu („eggbeater” / prsni rad) i prelazak na kompleksne kretne strukture."
    ),
    2: p(
      "Stabilna kontrola. Polaznik samostalno i opušteno održava vertikalni položaj u dubini.",
      "Usavršavanje efikasnosti rada nogu („eggbeater” / prsni rad) i prelazak na kompleksne kretne strukture."
    ),
    3: p(
      "Povremeni gubitak ritma. Pri dužem održavanju u dubini javlja se ubrzano disanje i blagi zamor u ramenom pojasu.",
      "Korekcija biomehanike zaveslaja ruku i podizanje visine izronaja radi očuvanja energije."
    ),
    4: p(
      "Povremeni gubitak ritma. Pri dužem održavanju u dubini javlja se ubrzano disanje.",
      "Korekcija biomehanike zaveslaja ruku i podizanje visine izronaja radi očuvanja energije."
    ),
    5: p(
      "Strah od dubokog prostora. U plitkoj vodi funkcionalno, ali u dubokoj vodi dolazi do grčenja mišića i gubitka stabilnosti.",
      "Postepena neuro-motorička reedukacija u dubini uz korišćenje DDK trenažnih rekvizita i stalni nadzor."
    ),
    6: p(
      "Izražena nesigurnost u dubini. Održavanje na vodi je grčevito i kratkotrajno.",
      "Postepena neuro-motorička reedukacija u dubini uz korišćenje DDK trenažnih rekvizita i stalni nadzor."
    ),
    7: p(
      "Panično traženje oslonca. Nemogućnost održavanja na vodi duže od par sekundi bez hvatanja za pruge ili ivicu.",
      "Vraćanje na biomehaničke vežbe uzgon-rotacija uz vertikalnu stabilizaciju karlice i trupa."
    ),
    8: p(
      "Panično traženje oslonca pri svakom pokušaju samostalnog boravka u dubini.",
      "Vraćanje na biomehaničke vežbe uzgon-rotacija uz vertikalnu stabilizaciju karlice i trupa."
    ),
    9: p(
      "Inhibicija kretanja u dubini. Potpuna nesposobnost boravka u dubokoj vodi uz akutnu reakciju panike.",
      "Kineziterapijski protokol postepene dubinske adaptacije, korak po korak, do potpune kontrole stresa."
    ),
    10: p(
      "Potpuna blokada i panika čim se izgubi dno pod nogama.",
      "Kineziterapijski protokol postepene dubinske adaptacije, korak po korak, do potpune kontrole stresa."
    ),
  },
  3: {
    1: p(
      "Visoka ekonomičnost. Tečno kretanje kroz vodu sa minimalnim brojem zaveslaja po dužini bazena.",
      "Optimizacija propulzivne sile, sinhronizacija rolanja trupa i rad na maksimalnoj brzini."
    ),
    2: p(
      "Visoka ekonomičnost sa blagim prostorom za napredak u brzini.",
      "Optimizacija propulzivne sile, sinhronizacija rolanja trupa i rad na maksimalnoj brzini."
    ),
    3: p(
      "Manje biomehaničke greške. Prisutno lakše propadanje lakta ili nepravilnost u radu nogu iz kolena.",
      "Analiza i korekcija faze hvatanja vode i poluge zaveslaja radi smanjenja utroška energije."
    ),
    4: p(
      "Manje biomehaničke greške pri većim brzinama plivanja.",
      "Analiza i korekcija faze hvatanja vode i poluge zaveslaja radi smanjenja utroška energije."
    ),
    5: p(
      "Izražen čeoni otpor. Polaznik ulaže veliki napor, ali se sporo kreće usled podizanja glave pri udahu.",
      "Korekcija hidrodinamičke linije tela, korekcija bočnog rolanja glave i stabilizacija trupa."
    ),
    6: p(
      "Povećan otpor vode. Neefikasna poluga zaveslaja i brzo zamaranje.",
      "Korekcija hidrodinamičke linije tela, korekcija bočnog rolanja glave i stabilizacija trupa."
    ),
    7: p(
      "Ogroman otpor i brzo umaranje. Zaveslaji su kratki, noga propada, a mišići se ekstremno zamaraju nakon 25 m.",
      "Inicijalna Master dijagnostika (60 min) sa fokusom na kompletnu biomehaničku rekonstrukciju zaveslaja."
    ),
    8: p(
      "Ogroman otpor. Potpuna neekonomičnost kretanja i gubitak snage već nakon prve dužine.",
      "Inicijalna Master dijagnostika (60 min) sa fokusom na kompletnu biomehaničku rekonstrukciju zaveslaja."
    ),
    9: p(
      "Potpuni motorički zastoj. Nemogućnost preplivavanja dužine usled mešanja pogrešnih motornih obrazaca.",
      "Razlaganje kretanja na sitne komponente (po DDK sistemu), reedukacija mišićnih obrazaca i građenje iznova."
    ),
    10: p(
      "Potpuna nemogućnost uspostavljanja kontinuiteta plivanja usled izrazitog kočenja vode.",
      "Razlaganje kretanja na sitne komponente (po DDK sistemu), reedukacija mišićnih obrazaca i građenje iznova."
    ),
  },
};

export const ddkMatrixEn: Matrix = {
  1: {
    1: p(
      "Complete relaxation and absence of fear. The learner has no psychological barriers in water.",
      "Rapid cortical adaptation. Work on hydrodynamic gliding and breathing coordination in shallow water."
    ),
    2: p(
      "Mild, natural caution toward the water. Breathing is stable, no physical tension.",
      "Rapid cortical adaptation. Work on hydrodynamic gliding and breathing coordination in shallow water."
    ),
    3: p(
      "Occasional insecurity when entering deep water or losing footing.",
      "Kinesiotherapy breathing exercises and underwater exhalation control with gradual trunk buoyancy."
    ),
    4: p(
      "Increased tension in trunk and neck muscles when submerging the face. Short breath holding.",
      "Kinesiotherapy breathing exercises and underwater exhalation control with gradual trunk buoyancy."
    ),
    5: p(
      "Moderate fear. Marked discomfort at the thought of depth, with rapid shallow breathing.",
      "DDK guided-detachment protocol 1-on-1 with passive buoyancy support and stress reduction in shallow water."
    ),
    6: p(
      "Considerable insecurity. The learner is reluctant to leave the pool edge; loss of footing triggers a tension reflex.",
      "DDK guided-detachment protocol 1-on-1 with passive buoyancy support and stress reduction in shallow water."
    ),
    7: p(
      "High stress level and defensive reflexes as soon as the water is approached or footing is lost.",
      "Desensitization out of the water and at the edge. Gradual wetting and parasympathetic stimulation to neutralize fear."
    ),
    8: p(
      "Pronounced fear with rapid heartbeat, trembling or mild movement blockage at the pool edge.",
      "Desensitization out of the water and at the edge. Gradual wetting and parasympathetic stimulation to neutralize fear."
    ),
    9: p(
      "Near-panic fear. Avoidance of entering the water with a strong fight-or-flight reaction.",
      "Specialized DDK trauma-neutralization protocol (specifically adapted for learners aged 40+). Work begins without pressure."
    ),
    10: p(
      "Panic breakdown and total block of conscious movement control at the very thought of entering water.",
      "Specialized DDK trauma-neutralization protocol (specifically adapted for learners aged 40+). Work begins without pressure."
    ),
  },
  2: {
    1: p(
      "Stable control. The learner independently and calmly maintains a vertical position in deep water with no fatigue.",
      "Refining leg efficiency (eggbeater / breaststroke kick) and moving on to complex movement structures."
    ),
    2: p(
      "Stable control. The learner independently and calmly maintains a vertical position in deep water.",
      "Refining leg efficiency (eggbeater / breaststroke kick) and moving on to complex movement structures."
    ),
    3: p(
      "Occasional loss of rhythm. Prolonged treading brings rapid breathing and mild shoulder-girdle fatigue.",
      "Correction of arm-sculling biomechanics and raising emersion height to conserve energy."
    ),
    4: p(
      "Occasional loss of rhythm. Prolonged treading brings rapid breathing.",
      "Correction of arm-sculling biomechanics and raising emersion height to conserve energy."
    ),
    5: p(
      "Fear of deep space. Functional in shallow water, but in deep water muscles cramp and stability is lost.",
      "Gradual neuro-motor re-education in depth using DDK training aids under constant supervision."
    ),
    6: p(
      "Marked insecurity in depth. Staying afloat is tense and short-lived.",
      "Gradual neuro-motor re-education in depth using DDK training aids under constant supervision."
    ),
    7: p(
      "Panicked search for support. Unable to stay afloat longer than a few seconds without grabbing the lane or edge.",
      "Return to buoyancy-rotation biomechanics with vertical stabilization of pelvis and trunk."
    ),
    8: p(
      "Panicked search for support at every attempt to stay independently in deep water.",
      "Return to buoyancy-rotation biomechanics with vertical stabilization of pelvis and trunk."
    ),
    9: p(
      "Movement inhibition in depth. Complete inability to stay in deep water with an acute panic reaction.",
      "Kinesiotherapy protocol of gradual depth adaptation, step by step, until full stress control."
    ),
    10: p(
      "Total blockage and panic as soon as the bottom is lost underfoot.",
      "Kinesiotherapy protocol of gradual depth adaptation, step by step, until full stress control."
    ),
  },
  3: {
    1: p(
      "High economy. Fluid movement through water with a minimal number of strokes per pool length.",
      "Optimization of propulsive force, synchronization of body roll and work on maximum speed."
    ),
    2: p(
      "High economy with slight room for improvement in speed.",
      "Optimization of propulsive force, synchronization of body roll and work on maximum speed."
    ),
    3: p(
      "Minor biomechanical errors. Slight elbow drop or irregular kick from the knee.",
      "Analysis and correction of the catch phase and stroke leverage to reduce energy expenditure."
    ),
    4: p(
      "Minor biomechanical errors at higher swimming speeds.",
      "Analysis and correction of the catch phase and stroke leverage to reduce energy expenditure."
    ),
    5: p(
      "Pronounced frontal drag. Great effort but slow movement due to lifting the head when breathing.",
      "Correction of the hydrodynamic body line, lateral head roll and trunk stabilization."
    ),
    6: p(
      "Increased water resistance. Inefficient stroke leverage and rapid fatigue.",
      "Correction of the hydrodynamic body line, lateral head roll and trunk stabilization."
    ),
    7: p(
      "Enormous drag and rapid fatigue. Strokes are short, legs sink, muscles fatigue extremely after 25 m.",
      "Initial Master diagnostics (60 min) focused on complete biomechanical stroke reconstruction."
    ),
    8: p(
      "Enormous drag. Complete inefficiency of movement and loss of power after the first length.",
      "Initial Master diagnostics (60 min) focused on complete biomechanical stroke reconstruction."
    ),
    9: p(
      "Complete motor standstill. Inability to swim a length due to mixed incorrect motor patterns.",
      "Breaking movement into small components (DDK system), re-education of muscle patterns and rebuilding from scratch."
    ),
    10: p(
      "Complete inability to establish swimming continuity due to extreme braking against the water.",
      "Breaking movement into small components (DDK system), re-education of muscle patterns and rebuilding from scratch."
    ),
  },
};

export const getDDKEntry = (lang: string, phase: DDKPhase, level: number): DDKEntry =>
  (lang === "en" ? ddkMatrixEn : ddkMatrixSr)[phase][Math.min(10, Math.max(1, level))];
