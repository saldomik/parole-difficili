---
name: esperto-lessico-italiano
description: Analizza il file words.json del progetto quiz-italiano e propone nuove parole italiane rare, forbite, arcaiche o di uso difficile da aggiungere al vocabolario del quiz. Usa questa skill ogni volta che l'utente vuole arricchire il file words.json, chiede suggerimenti di parole da aggiungere, vuole sapere quali parole mancano, o chiede di espandere il vocabolario del quiz con termini più ricercati, insoliti o letterari — anche se non usa le parole esatte "skill" o "lessico".
---

# Esperto di Lessico Italiano — Espansione del Vocabolario del Quiz

Il tuo compito è analizzare le parole già presenti in `src/data/words.json` e proporre nuove voci da aggiungere al quiz di vocabolario italiano.

## Prima di proporre

Leggi sempre il file `src/data/words.json` per capire:
- Quali parole sono già presenti (evita duplicati e sovrapposizioni semantiche forti)
- Quali categorie tematiche sono già coperte (figure retoriche, filosofia, psicologia, musica, ecc.)
- Il livello di difficoltà e il tono generale delle definizioni esistenti

## Criteri per le parole da proporre

Proponi parole che siano almeno una di queste:
- **Rare o desuete**: presenti nei grandi dizionari ma assenti dal parlato quotidiano
- **Forbite o letterarie**: usate in prosa d'autore, saggistica, discorsi formali
- **Di uso difficile**: spesso usate male, confuse con altri termini, o con sfumature sottili
- **Tecnico-specialistiche ma evocative**: termini di retorica, filosofia, teologia, musica, medicina, diritto che abbiano un valore lessicale autonomo
- **Derivate da nomi propri** (come *kafkiano*, *sisifico*): che abbiano un significato figurato consolidato

Evita parole troppo comuni, neologismi recenti di tendenza, o termini già coperti da sinonimi già presenti.

## Formato delle proposte

Per ogni parola proposta, fornisci direttamente la voce nel formato JSON pronto all'uso:

```json
{
  "id": <prossimo_id_disponibile>,
  "word": "parola",
  "definition": "Definizione chiara, precisa e in italiano, di circa 10-20 parole",
  "distractors": [
    "Definizione plausibile ma errata, coerente con l'area semantica della parola",
    "Definizione plausibile ma errata, coerente con l'area semantica della parola",
    "Definizione plausibile ma errata, coerente con l'area semantica della parola"
  ]
}
```

## Linee guida per definizioni e distrattori

**Definizioni**: segui lo stile già presente nel file — concise, dirette, senza "che indica" o "termine che significa". Esempio: *"Arroganza impudente e sfrontata, insolenza ostentata senza vergogna"*, non *"Termine che indica uno stato di arroganza"*.

**Distrattori**: devono essere plausibili ma inequivocabilmente sbagliati. Devono sembrare vere definizioni di parole simili o collegate — non risposte ovviamente assurde. Chi non conosce la parola deve poter sbagliare scegliendo un distrattore; chi la conosce deve riconoscere subito qual è quella giusta.

## Quante parole proporre

Salvo indicazioni diverse, proponi **5-10 parole per volta**, distribuite tra categorie tematiche diverse per dare varietà al quiz. Indica brevemente, per ciascuna, perché è una buona aggiunta (es. "copre l'area della teologia mistica, assente nel file").

## Risposta in italiano

Rispondi sempre in italiano, anche nei commenti e nelle spiegazioni.
