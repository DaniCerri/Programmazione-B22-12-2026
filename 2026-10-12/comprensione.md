# Capire la Richiesta del Cliente — Leggere da Analista
**Data:** 12 Ottobre 2026  
**Corso:** Programmazione 2 (Seconda Annualità — Operatore Informatico)  
**Docente:** Daniele Cerrina (`daniele.cerrina@immaginazioneelavoro.it`)  
**Sede:** Piazza dei Mestieri (Torino)  
**Progetto Guida Annuale:** **Vending Machine Manager**  
**Durata:** 1 ora e 30 minuti

---

## 1. Analisi dei Requisiti: il Primo Mestiere del Programmatore

Prima di progettare qualsiasi funzione del distributore, qualcuno deve capire **cosa vuole davvero il cliente**. Il cliente parla come parla: mescola richieste e chiacchiere, dà per scontate molte cose e dimentica i casi strani. L'**analista** legge, smonta e chiede, finché la richiesta diventa un insieme di **requisiti chiari**: dati con nome e valore, regole precise, risultati attesi.

> [!WARNING]
> **Il bug dei 120 euro**  
> Il listino del cliente dice: *"Patatine — 120"*. Per il cliente era ovvio: **centesimi**.  
> Il programmatore capisce **120 €**. Un cliente inserisce 2 € e la macchina risponde: *"Credito insufficiente, mancano 118 €"*.  
> Il cliente dava per scontata l'unità di misura, il programmatore non ha chiesto.

---

## 2. Lo Schema I-P-O come Filtro di Lettura

| | Domanda da farsi | Cosa cercare nella richiesta |
|---|---|---|
| **INPUT** | Cosa mi **DAI**? | I dati che la macchina riceve o conosce: monete, prezzi, quantità |
| **ELABORAZIONE** | Quali **REGOLE**? | Calcoli e condizioni che collegano dati e risultato |
| **OUTPUT** | Cosa mi **CHIEDI**? | Cosa deve fare o mostrare la macchina alla fine |

Tutto il resto è **RUMORE**: saluti, piani dell'edificio, orari, sfoghi del cliente. Aiuta a capire il contesto, ma non entra nella scheda.

---

## 3. Il Metodo dell'Analista in 5 Passi

1. **Leggi due volte.** La prima volta per capire cosa vuole il cliente, la seconda per cercare i dati.
2. **Evidenzia** con i colori o con i simboli (vedi sotto).
3. **Riformula** con una sola frase: *"La macchina deve…"*.
4. **Compila la scheda I-P-O** con nomi, valori e **unità di misura**.
5. **Prova & Domande:** prova con i numeri e con il **caso limite**, poi scrivi le domande per il cliente.

> [!IMPORTANT]
> **Regola d'oro dell'analista:** se un dato manca, non si inventa. Si chiede.

---

## 4. Il Kit dell'Evidenziatore: Colori e Simboli

Chi ha gli evidenziatori usa **colore e simbolo insieme**. Chi non li ha usa **solo il simbolo**, con una penna qualsiasi.

| Cosa cerco | Colore | Simbolo (solo penna) | Come ricordarlo |
|---|---|---|---|
| **Dato (Input)** | Blu / azzurro | **Cerchio** intorno alla parola | Il cerchio *cattura* il dato |
| **Richiesta (Output)** | Rosso / rosa | **Doppia sottolineatura** | Due righe = il risultato, come in matematica |
| **Regola** | Giallo | **Sottolineatura a onda** 〰 | L'onda è il *bivio*: la strada cambia |
| **Rumore** | — | **Barrato** (una riga sopra) | Lo butto via |
| **Dato nascosto** | Blu | **★** a margine + scrivi il dato | Un tesoro che il testo non scrive |
| **Dato mancante** | — | **?** a margine + scrivi la domanda per il cliente | Non lo inventi: lo chiedi |

---

## 5. Il Dizionario: Parole che Diventano Confronti

| Parola nella richiesta | Confronto | Esempio | La soglia è… |
|---|:---:|---|---|
| almeno | ≥ | "almeno 3 € di credito" | compresa |
| al massimo | ≤ | "al massimo 12 prodotti per spirale" | compresa |
| più di / supera | > | "più di 5 €", "supera gli 8 gradi" | esclusa |
| meno di / sotto | < | "sotto i 2 pezzi" | esclusa |
| fino a | ≤ | "resto fino a 5 €" | compresa |
| basta / è sufficiente | ≥ | "credito sufficiente" → credito ≥ prezzo | compresa |
| esattamente / pari a | = | "importo esatto" → credito = prezzo | solo quella |
| diverso da / tranne | ≠ | "tutti tranne chi paga con la chiavetta" | esclusa |

**Il caso limite:** prova sempre con il valore *esatto* della soglia (3 €, 5 €, 8 gradi…). È lì che cliente e programma possono non essere d'accordo, e spesso è lì che nasce una domanda per il cliente.

---

## 6. Le 5 Trappole delle Richieste

1. **Il rumore:** saluti, storie e numeri inutili (*"comprato nel 2019, 300 bicchieri a settimana"*).
2. **Il dato nascosto:** non è scritto, ma serve (*"tre monete da 50 cent"* → ★ credito 1,50 €).
3. **Le parole-trappola:** "almeno" e "più di" sul caso limite danno risultati opposti.
4. **Il dato mancante:** il cliente ha dimenticato qualcosa di indispensabile (*"quando sta per finire"* → quanti pezzi?).
5. **L'unità di misura:** euro o centesimi? pezzi o confezioni? Si sceglie **una** unità e si converte tutto subito.

---

## 7. Esempio Svolto: Il Resto Giusto

> **Da:** Marta, responsabile distributori · **Oggetto:** distributore del piano terra  
> *Ciao ragazzi! Sono Marta, gestisco i distributori del piano terra, quelli vicino alla palestra che all'intervallo delle 10:50 vengono presi d'assalto. Vorrei che la macchina, quando un cliente sceglie un prodotto, controllasse se il credito inserito è sufficiente. Se lo è, deve erogare il prodotto e restituire il resto; se non lo è, deve mostrare quanto manca. Per esempio: un cliente inserisce 2,00 € e sceglie una bottiglietta d'acqua da 0,60 €. Grazie mille e buona giornata!*

* **Rumore:** saluti, piano terra, palestra, intervallo delle 10:50, ringraziamenti.
* **Dati:** credito = 2,00 € · prezzo = 0,60 €.
* **Richiesta:** erogare il prodotto e restituire il resto / mostrare quanto manca.
* **Regole:** "se il credito è sufficiente" → **≥**; "se non lo è" → **<**.

| Scheda I-P-O | |
|---|---|
| **Riformulo** | "La macchina deve capire se il credito copre il prezzo e calcolare resto o importo mancante." |
| **Input** | credito = 2,00 € · prezzo = 0,60 € |
| **Elaborazione** | credito ≥ prezzo → resto = credito − prezzo; altrimenti → mancano = prezzo − credito |
| **Output** | prodotto + resto, oppure "Mancano X €" |
| **Prova a mano** | 2,00 ≥ 0,60 VERO → resto 1,40 €. Caso limite: credito 0,60 → eroga, resto 0,00 € |
| **Domande** | E se il prodotto è esaurito? La richiesta non lo dice. |

---

## 8. Foglio dello Studente (da stampare)

Modalità: **a coppie**. Su questo foglio evidenzia ogni richiesta con colori o simboli. Sul quaderno scrivi la frase *"La macchina deve…"*, la scheda I-P-O, la prova a mano e **almeno una domanda per Marta**.

**Legenda:** ◯ dato · ═ richiesta · 〰 regola · ~~barrato~~ rumore · ★ dato nascosto · ? dato mancante

### Richiesta 1: Bicchierini Esauriti
Ciao, sono ancora Marta. Il distributore delle bevande calde del primo piano è un modello vecchiotto, grigio, comprato nel 2019, e il caffè lungo è il preferito della prof di italiano. Ogni bicchierino costa alla scuola 5 centesimi e d'inverno ne usiamo circa 300 a settimana. Il problema è che, quando i bicchierini finiscono, la macchina versa lo stesso il caffè… direttamente nello scarico! Vorrei che, quando un cliente sceglie una bevanda, la macchina controllasse se c'è ancora almeno un bicchierino: se c'è, prepara la bevanda e i bicchierini diminuiscono di uno; se non c'è, non prepara niente e mostra "Bicchieri esauriti". Adesso nel tubo ci sono 40 bicchierini.

### Richiesta 2: La Gettoniera in Centesimi
Ciao! Il tecnico della ditta, simpaticissimo, mi ha spiegato che la gettoniera nuova ragiona tutto in centesimi, mentre sul listino i prezzi sono scritti in euro. Le patatine costano 1,20 €. Un cliente inserisce tre monete da 50 centesimi. La macchina deve restituire il resto usando soltanto monete da 10 centesimi. Il tecnico ha detto che ripasserà giovedì per controllare. Quante monete da 10 centesimi deve restituire la macchina?

### Richiesta 3: La Promo d'Autunno
Buongiorno! Per festeggiare l'arrivo dell'autunno (e delle castagne!) lanciamo una promozione. Chi inserisce almeno 3 € di credito riceve uno snack in omaggio; chi inserisce più di 5 € riceve anche una bottiglietta d'acqua gratis. Attenzione: la promozione vale per tutti tranne chi paga con la chiavetta ricaricabile. Che omaggi spettano a un cliente che inserisce esattamente 5 € in monete?

### Richiesta 4: L'Avviso di Rifornimento
Ciao ragazzi, ultima richiesta della settimana, promesso! Ogni spirale della macchina snack contiene al massimo 12 prodotti. Vorrei che la macchina mi mandasse un avviso quando una spirale sta per finire, così il tecnico passa a riempirla prima che i ragazzi restino a bocca asciutta. Il tecnico di solito passa il martedì mattina. Ah, l'avviso deve arrivare anche quando una spirale è proprio vuota. Grazie!

### Richiesta 5: La Macchina del Secondo Piano
Ciao a tutti! Dopo la riunione di ieri con il preside (due ore, che fatica!) abbiamo deciso: dalla prossima settimana la macchina snack del secondo piano accetterà solo monete da 50 centesimi, 1 € e 2 €. Il cliente inserisce le monete e digita il codice dello snack. Se lo snack è esaurito, la macchina restituisce tutte le monete inserite. Se invece è disponibile e il credito basta, eroga lo snack e dà il resto. Se il credito non basta, aspetta altre monete. Esempio: un cliente inserisce una moneta da 1 € e una da 50 centesimi e digita B2, i cracker, che costano 1,30 €. Nella spirale B2 ne restano 4.

### Scheda I-P-O da copiare sul quaderno (una per richiesta)

| Richiesta n° ___ | |
|---|---|
| **Riformulo** | La macchina deve ………………………………………… |
| **Input** (nome = valore + unità) | |
| **Elaborazione** (calcoli e confronti) | |
| **Output** | |
| **Prova a mano** (+ caso limite) | |
| **Domande per il cliente** | |

---

## 9. Soluzioni per il Docente

### Richiesta 1: Bicchierini Esauriti — *trappola: rumore*
* **Rumore:** modello, colore, **2019**, caffè lungo della prof, **5 centesimi**, **300 a settimana**, lo sfogo sul caffè nello scarico (spiega il *perché* della richiesta, ma non entra nella scheda).
* **Dati:** bicchierini nel tubo = 40 · bevanda scelta.
* **Regole:** "almeno un bicchierino" → bicchierini ≥ 1; "se non c'è" → bicchierini = 0.
* **Output:** bevanda + bicchierini scesi di 1, oppure "Bicchieri esauriti".
* **Prova:** 40 ≥ 1 → bevanda, ne restano 39. Caso limite: 1 → prepara, ne restano 0.
* **Domande:** le monete inserite vengono restituite se i bicchieri sono finiti?

### Richiesta 2: La Gettoniera in Centesimi — *trappola: dato nascosto e unità di misura*
* **Rumore:** tecnico simpaticissimo, giovedì.
* **Dati:** prezzo = 1,20 € · monete inserite = 3 da 50 cent · taglio del resto = 10 cent · **★ 1 € = 100 cent**.
* **Elaborazione:** tutto in centesimi → prezzo = 120, credito = 3 × 50 = 150, resto = 30, monete = 30 ÷ 10.
* **Prova:** **3 monete** da 10 centesimi. Errore tipico: 1,50 − 120 (unità mescolate).
* **Domande:** e se il resto non è multiplo di 10 (es. prezzo 1,25 €)?

### Richiesta 3: La Promo d'Autunno — *trappola: parole-trappola*
* **Rumore:** autunno, castagne, "Buongiorno!".
* **Dati:** credito = 5,00 € · pagamento = monete · soglie 3 € e 5 €.
* **Regole:** pagamento ≠ chiavetta; snack se credito ≥ 3; acqua se credito > 5.
* **Prova:** 5 ≥ 3 VERO → snack; 5 > 5 FALSO → niente acqua. Risposta: **solo lo snack**. Con la chiavetta: nessun omaggio.
* **Domande:** la promo vale una volta per cliente? Quanto dura? Marta voleva davvero escludere i 5 € esatti dall'acqua?

### Richiesta 4: L'Avviso di Rifornimento — *trappola: dati mancanti*
* **Rumore:** "ultima richiesta, promesso", ragazzi a bocca asciutta, il tecnico del martedì, "Grazie!".
* **Dati:** prodotti in ogni spirale · capienza = 12 (non serve all'avviso, ma servirà al tecnico) · **? soglia: MANCA**.
* **Regole:** "sta per finire" → prodotti ≤ soglia (?); "proprio vuota" → prodotti = 0 (già compresa nella soglia).
* **Output:** avviso al gestore con la spirale da riempire.
* **Domande:** quanti pezzi significa "sta per finire"? L'avviso arriva via email, SMS o display? A chi? Un avviso per spirale o uno riassuntivo?

### Richiesta 5: La Macchina del Secondo Piano — *tutte le trappole*
* **Rumore:** riunione con il preside, due ore, prossima settimana, secondo piano, "i cracker".
* **Dati:** **★ credito = 1 € + 0,50 € = 1,50 €** · codice = B2 · prezzo B2 = 1,30 € · quantità B2 = 4.
* **Regole (in quest'ordine):** monete accettate solo da 0,50 / 1 / 2 €; quantità = 0 → rimborso; credito ≥ prezzo → snack + resto; altrimenti → attesa.
* **Prova:** 4 ≠ 0 → disponibile; 1,50 ≥ 1,30 → eroga, resto **0,20 €**.
* **Domande:** per quanto tempo aspetta altre monete? Una moneta non accettata (es. 20 cent) viene restituita? E se in cassa non ci sono monete per il resto?

### Biglietto d'uscita: La Spia del Frigo
> *Il frigorifero della macchina delle bibite deve accendere la spia di manutenzione se la temperatura interna supera gli 8 gradi. Il frigorifero è stato pulito martedì dal tecnico. In questo momento il termometro segna 8 gradi. La spia si accende?*

* **Rumore:** pulizia del martedì. **Dati:** temperatura = 8 °C · soglia = 8 °C. **Regola:** "supera" → temperatura > 8.
* **Prova:** 8 > 8 FALSO → la spia resta **spenta**. Domanda per il cliente: con 8 gradi esatti la vuole davvero spenta?

---

## 10. Checklist dell'Analista

- [ ] Ho letto la richiesta **due volte**?
- [ ] Ho **barrato** il rumore (anche i numeri che non servono)?
- [ ] Ogni dato ha **nome, valore e unità di misura**?
- [ ] Ho cercato i **dati nascosti** (★) e quelli **mancanti** (?)?
- [ ] Ho tradotto le regole in **confronti** (≥, >, ≤, <, =, ≠)?
- [ ] Ho provato il **caso limite**?
- [ ] Ho scritto le **domande per il cliente**?
