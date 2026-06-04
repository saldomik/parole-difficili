# Cinque nuove voci per il quiz di vocabolario italiano

Dopo aver analizzato le 146 parole già presenti in `src/data/words.json`, ho individuato le aree tematiche ancora scoperte e propongo cinque termini che appartengono al vocabolario colto ma non tecnico — parole che si incontrano in un saggio di Calvino, in un romanzo di Morante o in un articolo del Corriere della Sera firmato da un critico letterario, ma che non tutti saprebbero definire con precisione.

---

## Analisi delle lacune tematiche

Il file copre figure retoriche, filosofia antica e contemporanea, narratologia, psicologia cognitiva, musica medievale, sistemi di governo e aggettivi di carattere stilistico. Mancano invece:

- Termini che descrivono **atteggiamenti intellettuali o stati d'animo complessi** (diversi da quelli già presenti come abulia, accidia, atarassia)
- Parole legate all'**estetica e alla ricezione dell'opera d'arte**, al di là della retorica pura
- Vocaboli di uso **letterario quotidiano** ma con sfumature sottili che molti confondono

---

## Le cinque proposte

---

### 1. `verecondo`
**Motivazione**: copre l'area del carattere e del pudore morale, assente nel file. Parola che Leopardi e Manzoni usano con naturalezza, ma che molti italiani oggi confonderebbero con "timido" o "riservato" senza coglierne la sfumatura etica.

```json
{
  "id": 147,
  "word": "verecondo",
  "definition": "Che prova pudore e ritegno morale, incapace di sfrontatezza o impudenza per genuina riservatezza interiore",
  "distractors": [
    "Che evita di esprimere opinioni per paura di essere giudicato o contraddetto",
    "Che mostra rispetto verso gli anziani e i superiori per convenzione sociale",
    "Che si comporta in modo misurato per calcolo strategico, non per natura"
  ]
}
```

---

### 2. `ineffabile`
**Motivazione**: termine di uso letterario e mistico, presente nella grande prosa italiana da Dante a Pavese, usato per indicare ciò che resiste alla parola. Spesso confuso genericamente con "bellissimo" o "straordinario", perde così la sua precisa valenza semantica. Copre l'area dell'estetica e della mistica, assente nel file.

```json
{
  "id": 148,
  "word": "ineffabile",
  "definition": "Che non può essere espresso a parole, che supera i limiti del linguaggio per eccesso di intensità o di mistero",
  "distractors": [
    "Che produce un effetto di fastidio impossibile da ignorare o da tollerare",
    "Che non può essere compreso dalla ragione ordinaria senza una formazione specifica",
    "Che lascia chi lo ascolta o lo legge senza alcuna risposta o reazione"
  ]
}
```

---

### 3. `compiacenza`
**Motivazione**: parola di uso comune ma con due significati ben distinti — uno positivo (soddisfazione) e uno negativo (condiscendenza passiva, acquiescenza servile) — che molti sovrappongono. Nei saggi e nei romanzi d'autore il secondo significato è quello dominante. Copre l'area degli atteggiamenti relazionali, non ancora presente nel file.

```json
{
  "id": 149,
  "word": "compiacenza",
  "definition": "Acquiescenza servile e accomodante verso i desideri altrui, per debolezza o per convenienza, senza spirito critico",
  "distractors": [
    "Soddisfazione profonda e legittima per un risultato ottenuto con impegno",
    "Generosità disinteressata verso chi si trova in una situazione di bisogno",
    "Atteggiamento di chi accetta le critiche con umiltà e disponibilità al cambiamento"
  ]
}
```

---

### 4. `ignavia`
**Motivazione**: termine classico — presente in Dante, nel Canto III dell'Inferno, per indicare chi non fu né bene né male — che indica una forma di viltà morale specifica: non la paura, ma l'indolenza dello spirito, il rifiuto di schierarsi. Diversa dall'accidia (già presente) per il suo connotato etico-politico. Copre l'area della morale civile.

```json
{
  "id": 150,
  "word": "ignavia",
  "definition": "Viltà morale e incapacità di impegnarsi, di scegliere e di agire, anche quando la situazione lo richiederebbe",
  "distractors": [
    "Pigrizia del corpo che porta a rimandare i compiti quotidiani senza una causa profonda",
    "Paura paralizzante che impedisce di agire di fronte a un pericolo reale e concreto",
    "Indifferenza verso le questioni politiche causata da mancanza di informazione"
  ]
}
```

---

### 5. `perentorio`
**Motivazione**: aggettivo di uso saggistico e letterario frequente, ma spesso impiegato in modo generico come sinonimo di "deciso" o "categorico". Il suo significato preciso — ciò che non ammette replica, che chiude ogni discussione — è importante e sfumato. Copre l'area del tono e del registro del discorso, assente nel file come voce esplicita.

```json
{
  "id": 151,
  "word": "perentorio",
  "definition": "Che non ammette replica né discussione, formulato in modo da escludere qualsiasi obiezione o alternativa",
  "distractors": [
    "Che lascia aperta la possibilità di negoziazione e di compromesso tra le parti",
    "Che viene pronunciato con tono solenne ma senza vera autorità di imporsi",
    "Che esprime una preferenza netta pur riconoscendo la validità delle opinioni contrarie"
  ]
}
```

---

## Riepilogo in formato JSON pronto all'uso

```json
[
  {
    "id": 147,
    "word": "verecondo",
    "definition": "Che prova pudore e ritegno morale, incapace di sfrontatezza o impudenza per genuina riservatezza interiore",
    "distractors": [
      "Che evita di esprimere opinioni per paura di essere giudicato o contraddetto",
      "Che mostra rispetto verso gli anziani e i superiori per convenzione sociale",
      "Che si comporta in modo misurato per calcolo strategico, non per natura"
    ]
  },
  {
    "id": 148,
    "word": "ineffabile",
    "definition": "Che non può essere espresso a parole, che supera i limiti del linguaggio per eccesso di intensità o di mistero",
    "distractors": [
      "Che produce un effetto di fastidio impossibile da ignorare o da tollerare",
      "Che non può essere compreso dalla ragione ordinaria senza una formazione specifica",
      "Che lascia chi lo ascolta o lo legge senza alcuna risposta o reazione"
    ]
  },
  {
    "id": 149,
    "word": "compiacenza",
    "definition": "Acquiescenza servile e accomodante verso i desideri altrui, per debolezza o per convenienza, senza spirito critico",
    "distractors": [
      "Soddisfazione profonda e legittima per un risultato ottenuto con impegno",
      "Generosità disinteressata verso chi si trova in una situazione di bisogno",
      "Atteggiamento di chi accetta le critiche con umiltà e disponibilità al cambiamento"
    ]
  },
  {
    "id": 150,
    "word": "ignavia",
    "definition": "Viltà morale e incapacità di impegnarsi, di scegliere e di agire, anche quando la situazione lo richiederebbe",
    "distractors": [
      "Pigrizia del corpo che porta a rimandare i compiti quotidiani senza una causa profonda",
      "Paura paralizzante che impedisce di agire di fronte a un pericolo reale e concreto",
      "Indifferenza verso le questioni politiche causata da mancanza di informazione"
    ]
  },
  {
    "id": 151,
    "word": "perentorio",
    "definition": "Che non ammette replica né discussione, formulato in modo da escludere qualsiasi obiezione o alternativa",
    "distractors": [
      "Che lascia aperta la possibilità di negoziazione e di compromesso tra le parti",
      "Che viene pronunciato con tono solenne ma senza vera autorità di imporsi",
      "Che esprime una preferenza netta pur riconoscendo la validità delle opinioni contrarie"
    ]
  }
]
```
