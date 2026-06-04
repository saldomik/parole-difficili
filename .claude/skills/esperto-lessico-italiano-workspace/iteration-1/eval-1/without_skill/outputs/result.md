# Analisi e Proposte: 5 Nuove Parole Italiane Rare

## Analisi del file words.json

Il file contiene 146 voci (id 1–146). I campi rispettano lo schema `WordEntry`:
- `id` (intero unico)
- `word` (la parola o locuzione italiana)
- `definition` (definizione in italiano, formulata come frase descrittiva)
- `distractors` (array di esattamente 3 false definizioni plausibili ma errate)

Le parole presenti coprono già ampi territori lessicali: figure retoriche (chiasmo, ipallage, zeugma…), filosofia (atarassia, epoché, entelechia…), psicologia (abulia, alexitimia, pareidolia…), termini letterari e narratologici (diegesi, metalessi, prolessi…), musicologia (melisma, bordone, neumatico…), termini medici (iatrogenico, apoptosi, omeostasi…) e aggettivi letterari ricercati (belluino, procelloso, lambiccato…).

Per non duplicare le aree già ben rappresentate, le 5 nuove parole proposte esplorano nicchie ancora scoperte: lessico giuridico-latino, termini della retorica medievale, psicologia analitica junghiana, filosofia del linguaggio e lessico botanico-alchemico.

---

## 5 Nuove Parole Proposte

```json
{
  "id": 147,
  "word": "captatio benevolentiae",
  "definition": "Tecnica retorica con cui un oratore conquista la simpatia del pubblico prima di esporre la propria tesi",
  "distractors": [
    "Procedimento logico con cui si confuta una tesi avversaria riducendola all'assurdo",
    "Formulazione conclusiva di un discorso giuridico che riassume le prove a sostegno",
    "Lunga digressione narrativa inserita all'inizio di un testo per rallentare il ritmo"
  ]
},
{
  "id": 148,
  "word": "enantiosemia",
  "definition": "Fenomeno per cui una stessa parola assume nel tempo significati diametralmente opposti",
  "distractors": [
    "Processo per cui una parola perde progressivamente il proprio significato originario per usura",
    "Tendenza di termini tecnici ad acquisire accezioni volgari nel linguaggio comune",
    "Coesistenza in una lingua di due parole di forma diversa ma di identico significato"
  ]
},
{
  "id": 149,
  "word": "sincretismo",
  "definition": "Fusione di elementi dottrinali, religiosi o culturali di origine diversa in un sistema unitario",
  "distractors": [
    "Rifiuto sistematico di qualsiasi influenza esterna a tutela della purezza di una tradizione",
    "Conflitto irriducibile tra due sistemi di credenze incapaci di coesistere",
    "Processo di graduale estinzione di una religione minoritaria assorbita dalla maggioranza"
  ]
},
{
  "id": 150,
  "word": "individuazione",
  "definition": "In Jung, il processo psicologico di integrazione degli aspetti inconsci che porta alla realizzazione del Sé",
  "distractors": [
    "In Freud, il meccanismo di difesa con cui l'Io respinge nell'inconscio i contenuti inaccettabili",
    "In Adler, la spinta compensatoria con cui il soggetto supera i propri complessi di inferiorità",
    "In Lacan, il momento in cui il bambino riconosce la propria immagine nello specchio"
  ]
},
{
  "id": 151,
  "word": "escoriare",
  "definition": "Graffiare e lacerare superficialmente la pelle; per estensione, criticare aspramente e senza pietà",
  "distractors": [
    "Lenire una ferita con sostanze calmanti per accelerarne la cicatrizzazione",
    "Incidere profondamente un materiale duro per ricavarvi un disegno o un'iscrizione",
    "Proteggere una superficie delicata applicandovi uno strato di materiale resistente"
  ]
}
```

---

## Commento alle scelte

**`captatio benevolentiae` (id 147)**: Locuzione latina di uso retorico, ampiamente attestata nella tradizione italiana ma assente dal quiz. I distractors evocano altre funzioni retoriche (confutazione, conclusione, digressione) per mettere alla prova la precisione del candidato.

**`enantiosemia` (id 148)**: Termine tecnico della linguistica storica, rarissimo nel parlato corrente ma fondamentale per lo studio dell'evoluzione semantica. I distractors descrivono altri processi di mutamento lessicale (desemanticizzazione, volgarizzazione, sinonimia) per indurre confusione plausibile.

**`sincretismo` (id 149)**: Vocabolo di medio registro, usato in teologia, filosofia e antropologia, ma spesso frainteso. I distractors esplorano i concetti opposti (purismo, conflitto, estinzione) restando nel medesimo campo semantico.

**`individuazione` (id 150)**: Termine tecnico della psicologia analitica junghiana, distinto dai concetti freudiiani e adleriani citati nei distractors. La struttura dei distractors — tutti in forma "In X, il meccanismo Y" — mantiene la coerenza formale con la definizione.

**`escoriare` (id 151)**: Verbo letterario di registro elevato, con significato sia medico-anatomico sia figurato critico. I distractors descrivono azioni fisicamente affini (lenire, incidere, proteggere una superficie) per sfruttare la vicinanza di campo semantico concreto.
