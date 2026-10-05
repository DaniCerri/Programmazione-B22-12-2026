# Libro di Programmazione 2 -- Setup LaTeX

Questa cartella contiene l'infrastruttura \LaTeX\ per il **Libro Ufficiale del Corso di Programmazione 2** (Piazza dei Mestieri, Torino).  
L'impostazione è pensata per essere ampliata gradualmente lezione dopo lezione, generando un testo organico con indice ipertestuale e navigabile.

---

## 📁 Struttura della Cartella

```text
documento_corso/
├── main.tex          # File master del libro: copertina, introduzione, indice e include capitoli
├── stile.sty         # Stile grafico: colori istituzionali, card tcolorbox, listati codice
├── compile.sh        # Script per compilazione rapida a due passate (con opzione clean)
├── Makefile          # Makefile per compilare da terminale (make / make clean)
├── README.md         # Questa documentazione
└── capitoli/         # I capitoli del libro (ognuno dedicato a un tema del secondo anno)
    └── 01_introduzione_secondo_anno.tex
```

---

## 🚀 Come Compilare il Libro

### Metodo 1: Script bash (consigliato)
```bash
./compile.sh
```

Per pulire i file temporanei generati da \LaTeX\ (`.aux`, `.log`, `.toc`, ecc.):
```bash
./compile.sh clean
```

### Metodo 2: Makefile
```bash
make
```
Oppure per pulire:
```bash
make clean
```

---

## ✍️ Come Aggiungere una Nuova Lezione / Capitolo

1. **Crea un nuovo file `.tex`** all'interno della cartella `capitoli/`, ad esempio:
   ```text
   capitoli/02_classi_e_oggetti.tex
   ```
2. **Inizia il file con l'intestazione del capitolo:**
   ```latex
   \chapter{Classi, Istanze e Metodi}
   \label{chap:classi-oggetti}

   \section{Il Concetto di Classe}
   ...
   ```
3. **Collega il nuovo capitolo in `main.tex`:**
   ```latex
   \input{capitoli/02_classi_e_oggetti}
   ```
4. **Ricompila con `./compile.sh` o `make`**: l'indice generale mostrerà subito il nuovo capitolo con il link cliccabile!

---

## 🎨 Ambienti Didattici Disponibili

Nel file `stile.sty` trovi i box stilizzati già pronti:

* **Concetto Chiave:** `\begin{concetto}[Titolo] ... \end{concetto}`
* **Esempio Pratico:** `\begin{esempio}[Titolo] ... \end{esempio}`
* **Esercizio:** `\begin{esercizio}[Titolo] ... \end{esercizio}`
* **Soluzione Guidata:** `\begin{soluzione}[Titolo] ... \end{soluzione}`
* **Attenzione / Debugging:** `\begin{attenzione}[Titolo] ... \end{attenzione}`
* **Best Practice:** `\begin{consiglio}[Titolo] ... \end{consiglio}`
* **Codice Sorgente:**
  ```latex
  \begin{lstlisting}[language=Python]
  class Studente:
      def __init__(self, nome):
          self.nome = nome
  \end{lstlisting}
  ```
