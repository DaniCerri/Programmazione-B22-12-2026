# Ciao Python! Variabili e print()
**Corso di Programmazione 2 &bull; Seconda Annualità**  
*Piazza dei Mestieri &bull; Docente: Daniele Cerrina*  
*26 Ottobre 2026 &bull; Durata 2 h 10' circa*  
*Progetto Guida Annuale:* **Vending Machine Manager**

---

## Obiettivo della Lezione

Primo contatto con **Python** per una classe che l'anno scorso ha programmato in **C++**: capire cosa cambia (interpretato invece di compilato, niente `;`, niente `main()`, niente tipo davanti, rientri al posto delle graffe, `True`/`False` maiuscoli, `/` che dà sempre un decimale), creare ed eseguire un file `.py` in VS Code, usare `print()` con testo e variabili, creare variabili dei 4 tipi base (`int`, `float`, `str`, `bool`) e aggiornarle (`credito = credito + 50`). I soldi si gestiscono **in centesimi**, come nella lezione del 12/10.

## Struttura della Presentazione (25 Slide)

1. **Copertina:** Ciao Python! Variabili e print() (con il primo programma del distributore in Python).
2. **Stesso Saluto, Meno Righe:** lo stesso programma in C++ (7 righe) e in Python (1 riga).
3. **Compilato o Interpretato?** Libro tradotto e interprete simultaneo.
4. **Dove Scriviamo: VS Code:** estensione, cartella `python_vending`, file `.py`, esecuzione.
5. **Differenza 1:** addio `;`, `main()` e `#include`.
6. **Differenza 2:** le graffe diventano `:` + 4 spazi (solo anteprima dell'if).
7. **Differenza 3:** niente tipo davanti, `True`/`False`, commenti con `#`.
8. **Il Dizionario C++ &rarr; Python:** tabella riassuntiva.
9. **print(): la Macchina Parla.**
10. **Testo e Variabili Insieme:** la virgola, con e senza virgolette, `0.60` &rarr; `0.6`.
11. **Variabili: una Scatola con un'Etichetta** e la regola d'oro dell'`=`.
12. **I 4 Tipi di Base** e `type()`.
13. **Come Chiamare le Variabili:** snake_case, nomi corretti e sbagliati.
14. **Cambiare Valore e Fare Conti:** operatori `+ - * / // %`.
15. **Leggere gli Errori:** `NameError`, `SyntaxError`, `TypeError`.
16. **Esempio Svolto (testo):** Lo Scontrino della Merendina.
17. **Esempio Svolto (soluzione a passi).**
18. **Laboratorio: Come Lavoriamo.**
19. **Esercizio 1 (testo):** La Carta d'Identità del Distributore &rarr; i 4 tipi.
20. **Esercizio 1 (soluzione a passi).**
21. **Esercizio 2 (testo):** Il Credito che Cresce &rarr; riassegnazione.
22. **Esercizio 2 (soluzione a passi).**
23. **Esercizio 3 (testo):** Il Resto in Centesimi &rarr; calcolo e unità di misura.
24. **Esercizio 3 (soluzione a passi).**
25. **Riepilogo, Checklist e Anteprima di input().**

## Slide delle Soluzioni a Passi

Ogni esercizio ha **due slide gemelle**: la prima con il testo (messaggio di Marta, consegna, output atteso), la seconda con la soluzione che si rivela un passo alla volta:

| Passo | Cosa compare |
|---|---|
| 1 | Variabili (i dati del messaggio) |
| 2 | Calcolo |
| 3 | Le istruzioni `print()` |
| 4 | Esecuzione nel terminale + suggerimento |

Le etichette dei passi si impostano nell'HTML con `<div class="step-bar" data-labels="in:Variabili|rule:Calcolo|...">`. Nell'**esportazione PDF** la slide del testo resta pulita e la slide della soluzione esce con **tutti i passi già rivelati**. Per un PDF da dare agli studenti senza soluzioni, togliere le pagine 17, 20, 22 e 24.

## Controlli da Tastiera e Scorciatoie LIM

| Tasto | Funzione |
|---|---|
| `→` / `Spazio` / `PageDown` | Passo successivo (sulle soluzioni), poi slide successiva |
| `←` / `Backspace` / `PageUp` | Nasconde l'ultimo passo, poi slide precedente |
| **`A`** | Mostra tutta la soluzione |
| **`Z`** | Nasconde la soluzione |
| **`F`** | Schermo intero |
| **`O`** o **`Esc`** | Indice delle slide |
| **`N`** | Note del docente (con i tempi della lezione) |
| **`P`** | Esporta in PDF 16:9 |
| **Touch** | Swipe a destra/sinistra (stesso comportamento delle frecce) |
