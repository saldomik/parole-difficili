# Cinque nuove voci per words.json

Di seguito le cinque nuove voci proposte, pronte per essere incollate nell'array `words` del file `src/data/words.json`. Gli id seguono in sequenza (147–151). Ogni voce appartiene al vocabolario colto ma non tecnico: parole che si incontrano in un saggio letterario o in un romanzo d'autore italiano, ma che non tutti i parlanti sanno definire con precisione.

---

## Criteri di selezione

Le parole scelte soddisfano questi criteri:
- Non già presenti nel file (verificato sull'intero corpus di 146 voci).
- Usate in prosa letteraria o saggistica di livello medio-alto (es. Leopardi, Calvino, Sciascia, Magris, Eco nei loro scritti giornalistici o di divulgazione colta).
- Non tecniche in senso stretto (nessuna delle cinque appartiene a un lessico specialistico di disciplina accademica chiusa).
- Sufficientemente rare da risultare una sfida per molti lettori, ma non così arcaiche da essere inutili.

---

## Voci JSON

```json
{
  "id": 147,
  "word": "velleità",
  "definition": "Desiderio vago e impotente di fare qualcosa, privo della volontà e delle forze necessarie per realizzarlo",
  "distractors": [
    "Ambizione tenace e concreta che si traduce in azioni costanti e determinate",
    "Rimpianto doloroso per un'occasione perduta che non tornerà più",
    "Aspirazione nobile condivisa da un intero gruppo o da una generazione"
  ]
},
{
  "id": 148,
  "word": "compiacenza",
  "definition": "Soddisfazione di sé che porta a non mettere in discussione le proprie idee o i propri limiti",
  "distractors": [
    "Severa autocritica che spinge a rivedere continuamente i propri risultati",
    "Disponibilità generosa verso gli altri che nasce da autentica benevolenza",
    "Disagio interiore che impedisce di giudicare serenamente sé stessi"
  ]
},
{
  "id": 149,
  "word": "puntiglio",
  "definition": "Ostinazione minuziosa su un dettaglio secondario, difesa caparbio di una questione di principio formale",
  "distractors": [
    "Capacità di cogliere l'essenziale trascurando i particolari irrilevanti",
    "Noncuranza per le regole e le convenzioni stabilite dalla tradizione",
    "Spirito di adattamento che rinuncia ai propri principi per quieto vivere"
  ]
},
{
  "id": 150,
  "word": "languore",
  "definition": "Stato di dolce spossatezza e di malinconica dolcezza, in cui il corpo e l'animo sembrano cedere a un morbido abbandono",
  "distractors": [
    "Energia vivace e irrequieta che spinge ad agire senza sosta",
    "Intenso dolore fisico che non lascia spazio ad altri pensieri",
    "Eccitazione febbrile prodotta dall'attesa di un evento desiderato"
  ]
},
{
  "id": 151,
  "word": "protervo",
  "definition": "Che si comporta con arroganza ostinata e sfrontatezza, rifiutando ogni richiamo alla ragione o alla misura",
  "distractors": [
    "Che accetta con umiltà le critiche e corregge volentieri il proprio comportamento",
    "Che agisce con prudente circospezione per non urtare la sensibilità altrui",
    "Che mantiene una riservatezza dignitosa anche di fronte alle provocazioni"
  ]
}
```

---

## Note sulle singole voci

**velleità** (147) — Leopardi la usa con precisione nello *Zibaldone*; ricorre spesso nella critica letteraria e giornalistica moderna per indicare propositi che restano nel vago. Da non confondere con "desiderio" (più neutro) o "ambizione" (che implica concretezza).

**compiacenza** (148) — Parola di uso frequente nel saggio critico italiano del Novecento (Croce, Contini). Il significato qui proposto è quello prevalente nel registro colto, distinto dall'accezione corrente di "disponibilità verso altri". La definizione punta sul significato più preciso e letterariamente produttivo.

**puntiglio** (149) — Compare in Goldoni, Manzoni e nella prosa giornalistica di qualità. Si distingue da "pedanteria" (che è stilistica) e da "caparbietà" (che riguarda il fine, non la forma). La sfumatura è quella dell'orgoglio ferito che si aggrappa a un dettaglio.

**languore** (150) — Parola cardine del Romanticismo e del Decadentismo italiano (Pascoli, D'Annunzio, ma anche De Amicis). Sopravvive nella prosa contemporanea di qualità per descrivere stati d'animo misti, fisici e psichici insieme. I distrattori coprono stati opposti o contigui ma distinti.

**protervo** (151) — Aggettivo dantesco (cf. *Inferno* VIII, 46) rimasto vitale nella prosa letteraria e saggistica italiana. Semanticamente più forte e più preciso di "arrogante": implica l'ostinazione nel male, il rifiuto consapevole di cedere. Da non confondere con "tracotante" (già presente come id 43 — "tracotanza") poiché "protervo" enfatizza la sfrontatezza persistente più che l'eccesso di superbia.

---

## Blocco JSON completo (pronto per l'inserimento)

Incollare questi oggetti alla fine dell'array `words`, prima della parentesi quadra di chiusura `]`, aggiungendo una virgola dopo l'ultima voce esistente (id 146):

```json
    {
      "id": 147,
      "word": "velleità",
      "definition": "Desiderio vago e impotente di fare qualcosa, privo della volontà e delle forze necessarie per realizzarlo",
      "distractors": [
        "Ambizione tenace e concreta che si traduce in azioni costanti e determinate",
        "Rimpianto doloroso per un'occasione perduta che non tornerà più",
        "Aspirazione nobile condivisa da un intero gruppo o da una generazione"
      ]
    },
    {
      "id": 148,
      "word": "compiacenza",
      "definition": "Soddisfazione di sé che porta a non mettere in discussione le proprie idee o i propri limiti",
      "distractors": [
        "Severa autocritica che spinge a rivedere continuamente i propri risultati",
        "Disponibilità generosa verso gli altri che nasce da autentica benevolenza",
        "Disagio interiore che impedisce di giudicare serenamente sé stessi"
      ]
    },
    {
      "id": 149,
      "word": "puntiglio",
      "definition": "Ostinazione minuziosa su un dettaglio secondario, difesa caparbia di una questione di principio formale",
      "distractors": [
        "Capacità di cogliere l'essenziale trascurando i particolari irrilevanti",
        "Noncuranza per le regole e le convenzioni stabilite dalla tradizione",
        "Spirito di adattamento che rinuncia ai propri principi per quieto vivere"
      ]
    },
    {
      "id": 150,
      "word": "languore",
      "definition": "Stato di dolce spossatezza e di malinconica dolcezza, in cui il corpo e l'animo sembrano cedere a un morbido abbandono",
      "distractors": [
        "Energia vivace e irrequieta che spinge ad agire senza sosta",
        "Intenso dolore fisico che non lascia spazio ad altri pensieri",
        "Eccitazione febbrile prodotta dall'attesa di un evento desiderato"
      ]
    },
    {
      "id": 151,
      "word": "protervo",
      "definition": "Che si comporta con arroganza ostinata e sfrontatezza, rifiutando ogni richiamo alla ragione o alla misura",
      "distractors": [
        "Che accetta con umiltà le critiche e corregge volentieri il proprio comportamento",
        "Che agisce con prudente circospezione per non urtare la sensibilità altrui",
        "Che mantiene una riservatezza dignitosa anche di fronte alle provocazioni"
      ]
    }
```
