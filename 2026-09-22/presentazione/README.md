# I Grandi Concetti della Programmazione (Ripasso Generale)
**Verso il Vending Machine Manager &bull; Operatore Informatico &bull; Seconda Annualità &bull; Piazza dei Mestieri**  
*Docente: Daniele Cerrina (`daniele.cerrina@immaginazioneelavoro.it`)*

---

## Panoramica della Presentazione (34 Slide Decongestionate per LIM)

Presentazione interattiva progettata specificamente per la proiezione in aula su schermi **LIM** (Lavagna Interattiva Multimediale) o schermi a risoluzione ridotta. Ogni diapositiva è focalizzata su **un singolo concetto essenziale**, con testi a caratteri grandi, forte contrasto, cartiglio ufficiale istituzionale ed esclusione di qualsiasi scorrimento verticale.

### Approccio Didattico: Concetti Generali Indipendenti dal Linguaggio
Poiché la classe ha svolto il primo anno in **C++**, questa presentazione **non si focalizza sulle peculiarità sintattiche di un singolo linguaggio (come Python)**, bensì sui **concetti logici e architetturali universali** dell'informatica (memoria RAM, tipi dato, logica binaria, confronto, algebra booleana, controllo di flusso, cicli e vettori), validi in C++, Java, Python e qualsiasi altro linguaggio moderno.

Tutti gli esempi concettuali, i controlli logici e gli schemi algoritmici sono ambientati attorno al **Vending Machine Manager**, il progetto annuale a oggetti scelto dalla classe.

### Struttura Modulare delle 34 Diapositive:

1. **Copertina Ufficiale:** I Grandi Concetti della Programmazione &bull; Verso il Vending Machine.
2. **La Mappa dei Concetti:** I 5 mattoni universali (Ragionamento, Memoria, Scelte, Ripetizioni, Collezioni).
3. **Che cos'è un Algoritmo?:** Input moneta/tasto &rarr; Istruzioni rigorose &rarr; Output snack/resto.
4. **Proprietà degli Algoritmi (1 & 2):** Finitezza (terminare sempre) e Definitezza (comandi deterministici).
5. **Proprietà degli Algoritmi (3):** Generalità (risolvere qualsiasi prezzo e moneta, vietato cablare dati).
6. **Variabili e Assegnazione (=):** La cella di memoria RAM e il senso di scrittura da destra a sinistra.
7. **Le Costanti in Memoria:** Dati protetti in sola lettura (`const` / MAIUSCOLO) e sicurezza del listino prezzi.
8. **I Tipi Numerici:** Interi (`int`, pezzi e monete) e Decimali (`float/double`, valute col punto).
9. **Testo e Booleani:** Codici alfanumerici (`string/char`, es. `"B2"`) e sensori a due stati (`bool`).
10. **Gli Operatori Aritmetici:** Addizione, sottrazione per il resto, moltiplicazione e divisione intera per i tubi.
11. **L'Operatore Modulo (%):** Calcolo del resto nelle monete (`70 % 50 = 20`) e verifica matematica di parità.
12. **La Logica Binaria:** O il credito basta (`VERO / 1`) oppure l'erogazione è negata (`FALSO / 0`).
13. **Gli Operatori di Confronto:** Relazioni universali `==`, `!=`, `<`, `>`, `<=`, `>=`.
14. **Il Tranello Mortale (= vs ==):** Assegnare alla memoria vs Confrontare due valori (il bug più celebre).
15. **Operatore Logico AND (&&):** Entrambe vere (erogare SOLO se credito &gt;= prezzo E scorte &gt; 0).
16. **Operatore Logico OR (||):** Basta almeno una vera (accettare monete da 1€ OPPURE da 2€).
17. **Operatore Logico NOT (!):** Inversione di verità e controlli di blocco/allarme.
18. **Espressioni Booleane Composte:** Priorità degli operatori e uso obbligatorio delle parentesi tonde.
19. **La Struttura IF - ELSE:** La selezione bivalente a due vie nel flusso (esclusione reciproca).
20. **Scelte Multiple a Cascata:** Decodifica della tastiera alfanumerica a eliminazione (primo match vince ed esce).
21. **Perché i Cicli? Principio DRY:** *Don't Repeat Yourself* contro la riscrittura a mano.
22. **Il Ciclo Pre-Condizionale (WHILE / FINCHÉ):** Test della condizione prima di ogni giro (loop di cassa).
23. **Allarme Loop Infinito:** Cosa accade se la variabile di controllo non avanza mai (arresto con `Ctrl + C`).
24. **Il Ciclo a Conteggio (FOR / PER OGNI):** I 3 elementi (inizio, fine, passo) applicati alla bobina a spirale.
25. **Confronto Concettuale: WHILE vs FOR:** Iterazione indefinita per eventi vs Iterazione definita per conteggi.
26. **Vettori (Array): La Regola dell'Indice da ZERO:** Offset in memoria e pericolo di Out of Bounds.
27. **Scorrere un Vettore:** L'unione di FOR e Array da indice `0` a `N-1`.
28. **Le Stringhe come Vettori di Caratteri:** Scomposizione di `"B2"` in corsia `[0]` e motore `[1]`.
29. **Sfida LIM 1 (Il Controllo):** Trova l'errore logico del singolo uguale nell'accettatore monete.
30. **Sfida LIM 2 (Il Ciclo):** Trova il loop infinito dovuto alla mancata modifica della variabile.
31. **Sfida LIM 3 (Il Vettore):** Trova l'accesso fuori scala (indice 2 su vettore di 2 elementi).
32. **Modellare il Vending Machine (1. Dati):** Definizione della memoria di prezzi, cassa e magazzino.
33. **Modellare il Vending Machine (2. Algoritmo):** Controllo di fattibilità, erogazione dello snack e calcolo resto.
34. **Conclusioni: I Concetti Sono Universali:** Valgono in C++, varranno in Python e in qualsiasi linguaggio futuro!

---

## Controlli da Tastiera e Touch

| Tasto | Funzione |
|---|---|
| `→` / `Spazio` / `PageDown` | Slide Successiva |
| `←` / `Backspace` / `PageUp` | Slide Precedente |
| **`F`** | Schermo Intero (consigliato su LIM per eliminare le barre del browser) |
| **`O`** o **`Esc`** | Indice interattivo delle 34 slide per salto rapido |
| **`N`** | Note didattiche del docente a fondo slide |
| **`P`** | Esporta le slide in PDF widescreen 16:9 |
| **Touch / Swipe** | Scorri a destra/sinistra su monitor o schermi interattivi touch |
