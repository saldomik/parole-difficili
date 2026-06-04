# Analisi delle lacune tematiche in words.json

## Mappa tematica attuale (146 voci)

Scorrendo le 146 voci presenti nel dizionario, emergono chiaramente alcune aree ipercoperte e altre quasi assenti.

### Aree ipercoperte
- **Retorica e figure stilistiche**: almeno 35-40 voci (chiasmo, ipallage, zeugma, litote, anafora, metafora, metonimia, sineddoche, ossimoro, antitesi, allegoria, ellissi, climax, allitterazione, perifrasi, onomatopea, aposiopesi, anastrofe, epanadiplosi, apostrofe, iperbato, eufemismo, pleonasmo, tautologia, battologia, solecismo, antonomasia, catacresi, anafora ecc.)
- **Narratologia**: diegesi, metalessi, prolessi, anacronia, ipotesto, anagnorisi, peripetia, angnorisi
- **Filosofia greca/termini tecnici**: eudaimonia, epoché, demiurgo, apocatastasi, entelechia, atarassia, aporia, ermeneutica, episteme, pirronismo
- **Psicologia/cognizione**: abulia, alexitimia, anedonia, apofenia, confabulazione, pareidolia, propriocezione, sinestesia
- **Tratti caratteriali negativi**: protervia, tracotanza, pusillanimità, tronfio, querulo, fatuità, pedissequo, millantare, mendace, lezioso
- **Musica medievale**: melisma, bordone, contraffactura, neumatico
- **Forme di governo**: ochlocrazia, gerontocrazia, timocrazia, satrapìa
- **Aggettivi da nomi propri/letteratura**: lapalissiano, pilatesco, pantagruelico, sisifico, tantalico, donchisciottesco, kafkiano, machiavellico, pindarico

### Aree poco coperte o del tutto assenti

1. **Natura, ambiente, paesaggio**: nessuna voce dedicata a fenomeni naturali, flora, fauna, meteorologia, geografia fisica
2. **Vita quotidiana e corpo umano**: pochissime voci sul corpo (solo diatesi, apoptosi, omeostasi, iatrogenico, nosocomiale — tutte tecnico-mediche); nessuna parola della vita pratica di tutti i giorni
3. **Gastronomia e cultura materiale**: assente (pantagruelico è l'unico accenno, ma è aggettivo figurato)
4. **Arti visive e architettura**: nessuna voce dedicata a pittura, scultura, architettura
5. **Diritto e istituzioni civili**: nessuna voce giuridica di uso colto
6. **Tempo, durata, cicli**: pochissime voci che riguardino la dimensione temporale vissuta
7. **Relazioni umane, affetti, società**: quasi assente; solo alienazione/reificazione in chiave sociologica astratta
8. **Artigianato, mestieri, tecnica**: quasi assente

Le lacune più evidenti e culturalmente rilevanti sono: **natura/paesaggio**, **vita quotidiana e relazioni umane**, **arti visive**, **diritto**. Queste aree renderebbero il quiz molto più vario ed equilibrato.

---

## 5 parole proposte per colmare le lacune

### 1. `canoro` — area: Natura / fauna

```json
{
  "id": 147,
  "word": "canoro",
  "definition": "Che emette suoni melodiosi e armoniosi; detto soprattutto di uccelli dal canto gradevole",
  "distractors": [
    "Che produce versi rauchi e fastidiosi, tipici degli uccelli notturni",
    "Che è privo di voce e comunicato solo attraverso gesti e movimenti",
    "Che imita i suoni altrui senza possedere un canto proprio"
  ]
}
```

**Perché**: introduce il campo semantico della natura/fauna con un aggettivo di uso letterario e quotidiano insieme, assente dall'intero dizionario.

---

### 2. `frugale` — area: Vita quotidiana / alimentazione

```json
{
  "id": 148,
  "word": "frugale",
  "definition": "Di pasto o stile di vita sobrio e semplice, che si accontenta dello stretto necessario senza eccessi",
  "distractors": [
    "Di banchetto sontuoso e abbondante, ricco di portate elaborate",
    "Di dieta rigidamente controllata per ragioni mediche o sportive",
    "Di cibo esotico e ricercato, proveniente da culture lontane"
  ]
}
```

**Perché**: copre il campo della vita quotidiana e dell'alimentazione, complementare al già presente `pantagruelico` (il suo contrario naturale), e di uso frequente nella prosa italiana.

---

### 3. `chiaroscuro` — area: Arti visive

```json
{
  "id": 149,
  "word": "chiaroscuro",
  "definition": "Tecnica pittorica che modella le forme attraverso il contrasto graduato tra zone di luce intensa e ombre profonde",
  "distractors": [
    "Tecnica che stende il colore in campiture piatte prive di gradazioni tonali",
    "Procedimento che sovrappone strati trasparenti di colore per ottenere luminosità",
    "Metodo che traccia i contorni con una linea netta senza uso di ombreggiature"
  ]
}
```

**Perché**: le arti visive e l'architettura sono completamente assenti; `chiaroscuro` è un termine noto nel mondo intero come italianismo, culturalmente rilevante e di media difficoltà.

---

### 4. `contumace` — area: Diritto e istituzioni civili

```json
{
  "id": 150,
  "word": "contumace",
  "definition": "Detto di imputato che non si presenta in giudizio pur essendo stato regolarmente citato",
  "distractors": [
    "Detto di testimone che rifiuta di rispondere alle domande del pubblico ministero",
    "Detto di giudice che si astiene dal partecipare a un processo per conflitto di interessi",
    "Detto di imputato che si dichiara colpevole prima dell'inizio del dibattimento"
  ]
}
```

**Perché**: il diritto è del tutto assente. `Contumace` è un termine giuridico entrato nel parlare comune (si dice di chi «fa il contumace» nel senso di chi si sottrae), di registro medio-alto, ideale per un quiz di lessico italiano colto.

---

### 5. `effimero` — area: Tempo, durata, esistenza

```json
{
  "id": 151,
  "word": "effimero",
  "definition": "Che dura pochissimo tempo, destinato a svanire rapidamente senza lasciare traccia duratura",
  "distractors": [
    "Che si ripete con regolarità ciclica nel corso degli anni",
    "Che permane immutato attraverso le epoche resistendo al tempo",
    "Che si manifesta solo in determinate stagioni dell'anno"
  ]
}
```

**Perché**: la dimensione temporale vissuta — durata, caducità, permanenza — è quasi assente dal dizionario (solo `desueto` e poche altre). `Effimero` è di uso frequentissimo nella prosa e nel parlato colto italiano, e copre un concetto filosofico-esistenziale di grande spessore.

---

## Riepilogo delle lacune colmate

| ID  | Parola        | Area tematica colmata         |
|-----|---------------|-------------------------------|
| 147 | canoro        | Natura / fauna                |
| 148 | frugale       | Vita quotidiana / alimentazione|
| 149 | chiaroscuro   | Arti visive                   |
| 150 | contumace     | Diritto e istituzioni civili  |
| 151 | effimero      | Tempo, durata, esistenza      |
