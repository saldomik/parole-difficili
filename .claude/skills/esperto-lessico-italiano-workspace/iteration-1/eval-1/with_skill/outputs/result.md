# Analisi e proposte di nuove parole per il quiz

## Analisi del file words.json

Il file contiene attualmente **146 voci** (ID 1–146) distribuite tra le seguenti categorie principali:

- **Figure retoriche** (~35 voci): chiasmo, ipallage, zeugma, metafora, sineddoche, ossimoro, epanadiplosi, catacresi, antonomasia, ecc.
- **Filosofia e teoria critica** (~25 voci): atarassia, epoché, eudaimonia, demiurgo, entelechia, rizomatico, decostruzione, logocentrismo, biopolitica, paradigma, ecc.
- **Psicologia e neuroscienze** (~10 voci): abulia, pareidolia, anedonia, apofenia, alexitimia, confabulazione, propriocezione, ecc.
- **Sistemi di governo** (4 voci): ochlocrazia, gerontocrazia, timocrazia, satrapìa
- **Musica medievale** (4 voci): melisma, bordone, contraffactura, neumatico
- **Linguistica e lessicologia** (~10 voci): hapax, solecismo, neologismo, glossolalia, logomachia, crestomazia, ecc.
- **Aggettivi rari o letterari** (~30 voci): mefitico, nefando, procelloso, belluino, lambiccato, sciamannato, ecc.
- **Medicina** (5 voci): diatesi, iatrogenico, nosocomiale, apoptosi, omeostasi
- **Derivate da nomi propri** (8 voci): kafkiano, sisifico, tantalico, pantagruelico, donchisciottesco, lapalissiano, pilatesco, machiavellico

**Aree poco o non coperte**: diritto e giurisprudenza, architettura e arte, economia, botanica, lessico arcaico del quotidiano, retorica medievale-scolastica.

---

## 5 nuove parole proposte

### 1. **contumace**

Copre l'area del diritto processuale, completamente assente nel file. Termine tecnico-giuridico con forte valenza lessicale autonoma e uso figurato consolidato nel linguaggio comune.

```json
{
  "id": 147,
  "word": "contumace",
  "definition": "Chi non si presenta in giudizio pur essendo stato regolarmente citato; per estensione, chi si sottrae ostinatamente agli obblighi",
  "distractors": [
    "Chi testimonia in giudizio a favore dell'imputato senza esserne richiesto",
    "Chi viene condannato in primo grado e ricorre in appello contro la sentenza",
    "Chi si presenta spontaneamente alle autorità per confessare un illecito"
  ]
}
```

---

### 2. **chiaroscuro**

Copre l'area delle arti visive e della tecnica pittorica, completamente assente nel file. Termine noto ma spesso usato impropriamente o ridotto al senso figurato, con una definizione tecnica precisa e ricca.

```json
{
  "id": 148,
  "word": "chiaroscuro",
  "definition": "Tecnica pittorica che modella le forme attraverso il contrasto graduato tra zone di luce intensa e ombre profonde",
  "distractors": [
    "Tecnica di ritratto che utilizza soli colori primari per ottenere il massimo della vivacità cromatica",
    "Stile decorativo caratterizzato da motivi geometrici in bianco e nero senza gradazioni",
    "Procedimento che sfrutta la prospettiva aerea per sfumare i contorni delle figure lontane"
  ]
}
```

---

### 3. **vetustà**

Copre l'area del lessico letterario arcaico e forbito, con sfumature che mancano nel file. Desueto è già presente, ma riguarda l'uso di una cosa; vetustà indica l'antichità della cosa stessa, con una connotazione di dignità o decadenza che lo rende diverso.

```json
{
  "id": 149,
  "word": "vetustà",
  "definition": "Antichità remota e venerabile di una cosa, accompagnata spesso da segni visibili di decadimento o di storia",
  "distractors": [
    "Stato di conservazione perfetta di un oggetto d'arte nonostante l'età avanzata",
    "Qualità di ciò che è moderno pur ispirandosi deliberatamente al passato",
    "Processo di restauro che restituisce a un edificio il suo aspetto originario"
  ]
}
```

---

### 4. **peculato**

Secondo termine giuridico proposto, di uso comune nei media ma spesso confuso o mal compreso. Riempie un vuoto nell'area del diritto penale e arricchisce la sezione politico-istituzionale già presente (ochlocrazia, gerontocrazia, timocrazia).

```json
{
  "id": 150,
  "word": "peculato",
  "definition": "Appropriazione indebita di denaro pubblico da parte di chi lo detiene per ragioni d'ufficio",
  "distractors": [
    "Reato di chi riceve denaro in cambio di favori nell'esercizio di una funzione pubblica",
    "Delitto di chi falsifica atti ufficiali per ottenere vantaggi personali",
    "Illecito di chi esercita pressioni indebite su un pubblico funzionario"
  ]
}
```

---

### 5. **anfrattuoso**

Termine raro e letterario che descrive un tipo di percorso o conformazione fisica, completamente assente nel file. Di grande efficacia visiva e usato nella prosa d'autore (da Leopardi a Gadda), copre l'area del lessico paesaggistico-descrittivo.

```json
{
  "id": 151,
  "word": "anfrattuoso",
  "definition": "Pieno di anfratti, tortuoso e accidentato, detto di percorso, terreno o discorso difficile da seguire",
  "distractors": [
    "Ampio e sgombro, privo di ostacoli che ne impediscano la percorribilità",
    "Stretto e angusto ma rettilineo, come un corridoio sotterraneo scavato nella roccia",
    "Ripido e scosceso, che richiede sforzo fisico ma non presenta deviazioni"
  ]
}
```

---

## Riepilogo delle proposte

| ID  | Parola        | Area tematica              | Motivazione principale                                    |
|-----|---------------|----------------------------|-----------------------------------------------------------|
| 147 | contumace     | Diritto processuale        | Area completamente assente; uso figurato nel quotidiano   |
| 148 | chiaroscuro   | Arti visive / pittura      | Area completamente assente; tecnica con definizione precisa |
| 149 | vetustà       | Lessico arcaico-letterario | Diverso da "desueto" già presente; sfumatura diversa      |
| 150 | peculato      | Diritto penale             | Termine dei media, spesso confuso; rafforza area politico-istituzionale |
| 151 | anfrattuoso   | Lessico paesaggistico      | Raro e letterario; copre area descrittiva non presente    |
