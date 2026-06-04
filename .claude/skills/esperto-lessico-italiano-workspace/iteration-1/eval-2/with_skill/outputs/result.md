# Analisi delle lacune tematiche e 5 nuove proposte

## Analisi del file attuale

Il file `words.json` conta 146 voci e copre le seguenti aree in modo ampio:

- **Figure retoriche** (chiasmo, sineddoche, litote, anafora, ossimoro, iperbole, metafora, zeugma, anastrofe, epanadiplosi, aposiopesi, climax, antitesi, ecc.) — **molto coperta**
- **Psicologia e cognizione** (abulia, anedonia, alexitimia, pareidolia, apofenia, confabulazione, propriocezione, ecc.) — **ben coperta**
- **Filosofia antica e moderna** (atarassia, epoché, eudaimonia, demiurgo, entelechia, aporia, pirronismo, ecc.) — **ben coperta**
- **Filosofia critica contemporanea** (alienazione, reificazione, rizomatico, decostruzione, logocentrismo, biopolitica, straniamento) — **ben coperta**
- **Forme di governo** (ochlocrazia, gerontocrazia, timocrazia, satrapìa) — **coperta**
- **Musica** (melisma, bordone, contraffactura, neumatico) — **coperta**
- **Narratologia** (diegesi, metalessi, prolessi, anacronia, ipotesto) — **coperta**
- **Medicina e biologia** (iatrogenico, nosocomiale, apoptosi, omeostasi, diatesi) — **coperta**
- **Derivate da nomi propri** (kafkiano, machiavellico, sisifico, tantalico, lapalissiano, donchisciottesco, pantagruelico, pilatesco) — **coperta**

## Aree del tutto assenti o quasi

| Area tematica | Situazione |
|---|---|
| **Diritto / giurisprudenza** | Assente: nessun termine tecnico-giuridico di valore lessicale autonomo |
| **Arte visiva / estetica** | Quasi assente: solo *icastico* e *iconoclasta* sfiorano il tema |
| **Astronomia / cosmologia** | Assente |
| **Architettura / urbanistica** | Assente |
| **Botanica / natura** | Assente |
| **Economia / finanza** | Assente |
| **Diplomatica / relazioni internazionali** | Assente |
| **Teologia mistica / spiritualità interiore** | Solo parziale (*escatologia*, *apocatastasi*, *glossolalia*) |

---

## 5 proposte per colmare le lacune più evidenti

---

### 1. Diritto e giurisprudenza

```json
{
  "id": 147,
  "word": "capzioso",
  "definition": "Detto di argomento o domanda: apparentemente corretto ma costruito per ingannare o far cadere in errore",
  "distractors": [
    "Detto di ragionamento: rigoroso e inattaccabile sul piano della logica formale",
    "Detto di accusa: infondata e calunniosa, mossa per screditare l'avversario",
    "Detto di norma giuridica: di difficile applicazione per la sua complessità tecnica"
  ]
}
```

**Perché è una buona aggiunta:** copre l'area del diritto e della dialettica giuridica, finora del tutto assente. Il termine è forbito, spesso usato male (confuso con "caparbio" o "cavilloso"), e ha un preciso valore semantico nel linguaggio giuridico e filosofico.

---

### 2. Arte visiva / estetica

```json
{
  "id": 148,
  "word": "chiaroscuro",
  "definition": "Tecnica pittorica che contrappone zone di luce intensa e zone d'ombra profonda per dare volume e drammaticità",
  "distractors": [
    "Tecnica che stende il colore in campiture piatte e uniformi senza gradazioni tonali",
    "Procedimento che sovrappone più strati di colore trasparente per ottenere tinte luminose",
    "Metodo di composizione che distribuisce le figure in modo simmetrico su entrambi i lati della tela"
  ]
}
```

**Perché è una buona aggiunta:** colma la lacuna dell'arte visiva con un termine tecnico evocativo, conosciuto ma raramente definito con precisione. Ha anche un uso figurato consolidato (situazione in chiaroscuro), il che lo rende ricco di sfumature.

---

### 3. Astronomia / cosmologia

```json
{
  "id": 149,
  "word": "zenith",
  "definition": "Il punto della volta celeste direttamente sopra l'osservatore, opposto al nadir; per estensione, il punto più alto di qualcosa",
  "distractors": [
    "L'angolo formato tra l'orizzonte e la direzione di un astro al momento del suo sorgere",
    "Il punto della volta celeste direttamente sotto i piedi dell'osservatore",
    "La linea immaginaria che congiunge i due poli celesti passando per il centro del cielo"
  ]
}
```

**Perché è una buona aggiunta:** introduce l'area astronomica finora assente. Il termine è noto nell'uso figurato (al culmine, allo zenith della carriera) ma la sua definizione tecnica precisa — incluso il rapporto con il nadir — è spesso ignorata. Ottimo per chi confonde zenith con nadir o con meridiano.

---

### 4. Economia / finanza

```json
{
  "id": 150,
  "word": "usura",
  "definition": "Prestito di denaro a tassi di interesse esorbitanti e illegali, con profitto abusivo sul bisogno altrui",
  "distractors": [
    "Deterioramento progressivo di un bene materiale dovuto all'uso prolungato nel tempo",
    "Pratica di accumulare beni in eccesso rispetto al fabbisogno per timore della scarsità",
    "Cessione temporanea di un bene a fronte di un canone periodico concordato tra le parti"
  ]
}
```

**Perché è una buona aggiunta:** copre l'area economico-giuridica con un termine di forte tradizione letteraria (Dante, il canto degli usurai) e civile. Il termine ha due significati distinti — quello economico-legale e quello fisico del logoramento — il che rende i distrattori particolarmente insidiosi per chi non conosce la distinzione.

---

### 5. Teologia mistica / spiritualità interiore

```json
{
  "id": 151,
  "word": "kenosi",
  "definition": "Svuotamento volontario di sé da parte di Dio incarnandosi nel Cristo; per estensione, ogni atto di annullamento del proprio io",
  "distractors": [
    "Dottrina dell'unione mistica dell'anima con Dio attraverso la purificazione progressiva",
    "Stato di pienezza spirituale raggiunto dall'anima dopo la contemplazione prolungata",
    "Principio teologico secondo cui Dio è totalmente trascendente e inaccessibile all'uomo"
  ]
}
```

**Perché è una buona aggiunta:** completa l'area della teologia mistica, già avviata da *escatologia* e *apocatastasi* ma priva di termini legati alla spiritualità interiore e cristologica. *Kenosi* è presente nella saggistica filosofica e teologica contemporanea (Vattimo, Girard) e rappresenta una sfida autentica per chi non ha familiarità con il pensiero cristiano.

---

## Riepilogo delle proposte

| ID | Parola | Area tematica |
|---|---|---|
| 147 | capzioso | Diritto / dialettica |
| 148 | chiaroscuro | Arte visiva / estetica |
| 149 | zenith | Astronomia / cosmologia |
| 150 | usura | Economia / diritto |
| 151 | kenosi | Teologia mistica |
