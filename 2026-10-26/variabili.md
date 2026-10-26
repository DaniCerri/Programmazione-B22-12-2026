# Ciao Python! Variabili e print()
**Data:** 26 Ottobre 2026  
**Corso:** Programmazione 2 (Seconda Annualità — Operatore Informatico)  
**Docente:** Daniele Cerrina (`daniele.cerrina@immaginazioneelavoro.it`)  
**Sede:** Piazza dei Mestieri (Torino)  
**Progetto Guida Annuale:** **Vending Machine Manager**  
**Durata:** 2 ore e 10 minuti circa (20 minuti per ogni esercizio)

---

## 1. Da C++ a Python

Le idee della programmazione (variabili, tipi, condizioni, cicli) restano le stesse. Cambia il modo di scriverle.

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Benvenuto al distributore!" << endl;
    return 0;
}
```

```python
print("Benvenuto al distributore!")
```

### Compilato o interpretato?

- **C++ si compila:** il compilatore traduce tutto il file `.cpp` in un `.exe`, poi lo si esegue. Se c'è un errore, il programma non parte.
- **Python si interpreta:** l'interprete legge ed esegue il file `.py` **una riga alla volta**, e si ferma alla prima riga sbagliata.

Si esegue con: `python nome_file.py` (su alcuni PC `python3 nome_file.py`).

### Il dizionario C++ → Python

| Cosa voglio fare | C++ | Python |
|---|---|---|
| Stampare | `cout << x << endl;` | `print(x)` |
| Creare una variabile | `int piano = 2;` | `piano = 2` |
| Fine istruzione | `;` | si va a capo |
| Blocco di codice | `{ ... }` | `:` + 4 spazi di rientro |
| Vero / Falso | `true` / `false` | `True` / `False` |
| Commento | `// nota` | `# nota` |
| E / O / NON | `&&` `\|\|` `!` | `and` `or` `not` |
| Divisione `7 / 2` | `3` (tra interi) | `3.5` |
| File ed esecuzione | compila `.cpp` → `.exe` | `python file.py` |

> [!WARNING]
> **In Python il rientro è obbligatorio.** In C++ spostare le righe a destra serviva solo a renderle leggibili. In Python decide quali righe stanno dentro un blocco: un rientro sbagliato è un errore.

---

## 2. print(): la macchina parla

```python
print("Benvenuto!")
print("Scegli un prodotto")
print()
print("Grazie e arrivederci")
```

- Il testo fisso va tra **virgolette** (doppie `"` o singole `'`).
- Ogni `print` va **a capo da solo**. `print()` vuoto stampa una riga vuota.
- Con la **virgola** si stampano più cose insieme, e Python aggiunge uno spazio tra una e l'altra:

```python
prodotto = "Acqua"
prezzo = 0.60
print("Prodotto:", prodotto)      # Prodotto: Acqua
print("Prezzo:", prezzo, "euro")  # Prezzo: 0.6 euro
print("prodotto")                 # prodotto   <- con le virgolette è solo una parola!
```

---

## 3. Le variabili

Una variabile è una **scatola con un'etichetta**: un pezzo di memoria con un nome, che contiene un valore.

```python
credito = 200
```

Si legge: **credito prende il valore 200**. L'`=` non è l'uguale della matematica:

1. Python calcola quello che c'è a **destra**;
2. lo mette nella scatola che ha il nome a **sinistra**.

Se si riassegna una variabile, il valore vecchio viene sostituito.

### I 4 tipi di base

| Tipo | Cos'è | Esempio |
|---|---|---|
| `int` | numero intero | `lattine = 12` |
| `float` | numero decimale (con il **punto**) | `gradi = 4.5` |
| `str` | testo, sempre tra virgolette | `codice = "A3"` |
| `bool` | vero o falso | `acceso = True` |

Il tipo **non si scrive**: lo decide Python guardando il valore. Per chiederglielo si usa `type()`:

```python
print(type(4.5))   # <class 'float'>
print(type("12"))  # <class 'str'>   <- le virgolette vincono sempre
```

### I nomi delle variabili

- Si usa lo stile **snake_case**: minuscolo, parole unite con `_` (`prezzo_acqua`, `lattine_vendute`).
- **Non** si può: iniziare con un numero (`2piano`), usare spazi (`prezzo acqua`) o trattini (`prezzo-acqua`), usare parole riservate (`if`, `for`, `class`...).
- **Maiuscole e minuscole contano:** `Credito` e `credito` sono due variabili diverse.
- Meglio evitare gli accenti (`quantita`, non `quantità`) e i nomi da una lettera (`x`).

### Cambiare valore e fare conti

```python
credito = 0
credito = credito + 100   # ora vale 100
credito = credito + 50    # ora vale 150
```

| Operatore | Significato | Esempio |
|---|---|---|
| `+` | somma | `7 + 2` → `9` |
| `-` | sottrazione | `7 - 2` → `5` |
| `*` | moltiplicazione | `7 * 2` → `14` |
| `/` | divisione (**sempre decimale**) | `7 / 2` → `3.5` |
| `//` | divisione intera | `7 // 2` → `3` |
| `%` | resto della divisione | `7 % 2` → `1` |

> [!TIP]
> **I soldi in centesimi.** Come abbiamo visto con il bug dei 120 euro (12/10), l'unità di misura va decisa e scritta. Nel Vending Machine Manager i soldi si tengono **in centesimi** (numeri interi) e si convertono in euro solo per stamparli: `resto / 100`.

---

## 4. Leggere gli errori

Leggete l'**ultima riga** del messaggio e il **numero di riga** (`line`).

| Codice | Errore | Correzione |
|---|---|---|
| `print(Benvenuto)` | `NameError: name 'Benvenuto' is not defined` | Mancano le virgolette: `print("Benvenuto")` |
| `Print("Ciao")` | `NameError: name 'Print' is not defined. Did you mean: 'print'?` | `print` tutto minuscolo |
| `prezzo acqua = 1` | `SyntaxError: invalid syntax` | Niente spazi nei nomi: `prezzo_acqua = 1` |
| `print("Totale: " + 5)` | `TypeError: can only concatenate str (not "int") to str` | Usate la virgola: `print("Totale:", 5)` |

---

## 5. Esempio svolto: Lo Scontrino della Merendina

> «Ciao ragazzi, vorrei che il distributore stampasse uno scontrino. Esempio: un cliente compra **2** pacchetti di **Crackers** da **0.80 euro** l'uno.»

```python
# Lo scontrino della merendina
prodotto = "Crackers"
prezzo = 0.80
quantita = 2

totale = prezzo * quantita

print("=== SCONTRINO ===")
print("Prodotto:", prodotto)
print("Prezzo:", prezzo, "euro")
print("Quantita:", quantita)
print("Totale:", totale, "euro")
```

```text
=== SCONTRINO ===
Prodotto: Crackers
Prezzo: 0.8 euro
Quantita: 2
Totale: 1.6 euro
```

Il totale si calcola solo **dopo** aver creato `prezzo` e `quantita`: Python legge dall'alto in basso.

---

## 6. Laboratorio

Ognuno lavora sul proprio PC nella cartella `python_vending`, con un file per esercizio. Tempo: **20 minuti per esercizio**, poi correzione insieme alla LIM. Eseguite spesso e confrontate il terminale con l'output atteso.

<div style="page-break-before: always;"></div>

### Foglio dello studente

**Nome e cognome:** ______________________________ **Data:** ____________

#### Esercizio 1 — La Carta d'Identità del Distributore (★☆☆) · file `es1_carta.py`

> «Per l'inventario mi serve la scheda di ogni macchina. Quella dell'atrio si chiama **VM-02**, sta al piano **2**, dentro ci sono **4.5** gradi ed è **accesa**.»

1. Create una variabile per ognuno dei 4 dati.
2. Stampate la scheda come nell'output atteso.

```text
Distributore: VM-02
Piano: 2
Temperatura: 4.5 gradi
Accesa: True
```

*Bonus:* stampate anche il tipo di ogni variabile con `type()`.

#### Esercizio 2 — Il Credito che Cresce (★★☆) · file `es2_credito.py`

> «Voglio vedere il credito salire mentre il cliente inserisce le monete. Si parte da **0**, poi arrivano una moneta da **100** centesimi, una da **50** e una da **20**.»

1. Create la variabile `credito` che vale 0 e stampatela.
2. Dopo ogni moneta aggiornate `credito` e stampatelo di nuovo.

```text
Credito: 0 centesimi
Credito: 100 centesimi
Credito: 150 centesimi
Credito: 170 centesimi
```

*Bonus:* alla fine stampate il credito in euro (diviso 100).

#### Esercizio 3 — Il Resto in Centesimi (★★★) · file `es3_resto.py`

> «Le patatine costano **120** centesimi. Un cliente inserisce una moneta da **2 euro**. La macchina deve dire quanto resto restituire.»

1. Create le variabili `prezzo` e `inserito` (attenzione all'unità di misura!).
2. Calcolate il resto in una nuova variabile.
3. Stampate il resto in centesimi e in euro.

```text
Prezzo: 120 centesimi
Inserito: 200 centesimi
Resto: 80 centesimi
Resto: 0.8 euro
```

*Bonus:* quante monete da 20 centesimi servono per dare il resto? (usate `//`)

<div style="page-break-before: always;"></div>

## 7. Soluzioni per il docente

### Esercizio 1

```python
# Carta d'identita del distributore
nome_macchina = "VM-02"
piano = 2
temperatura = 4.5
accesa = True

print("Distributore:", nome_macchina)
print("Piano:", piano)
print("Temperatura:", temperatura, "gradi")
print("Accesa:", accesa)

# Bonus
print(type(nome_macchina), type(piano))     # <class 'str'> <class 'int'>
print(type(temperatura), type(accesa))      # <class 'float'> <class 'bool'>
```

**Da controllare:** `"VM-02"` tra virgolette (senza, Python legge «VM meno 02» e si ferma con un `SyntaxError`); `True` maiuscolo e **senza** virgolette (con le virgolette diventa un `str`).

### Esercizio 2

```python
# Il credito che cresce (in centesimi)
credito = 0
print("Credito:", credito, "centesimi")

credito = credito + 100
print("Credito:", credito, "centesimi")
credito = credito + 50
print("Credito:", credito, "centesimi")
credito = credito + 20
print("Credito:", credito, "centesimi")

# Bonus
print("In euro:", credito / 100)            # In euro: 1.7
```

**Da controllare:** basta **una** variabile. Chi crea `credito1`, `credito2`, `credito3` ottiene lo stesso output, ma non ha usato la riassegnazione: chiedere «e se le monete fossero 50?». Tabella di traccia: 0 → 100 → 150 → 170.

### Esercizio 3

```python
# Il resto in centesimi
prezzo = 120      # centesimi
inserito = 200    # 2 euro = 200 centesimi

resto = inserito - prezzo
resto_euro = resto / 100

print("Prezzo:", prezzo, "centesimi")
print("Inserito:", inserito, "centesimi")
print("Resto:", resto, "centesimi")
print("Resto:", resto_euro, "euro")

# Bonus
print("Monete da 20:", resto // 20)         # Monete da 20: 4
```

**Da controllare:** la trappola è `inserito = 2`. Il programma non dà errore ma stampa `Resto: -118 centesimi`: è il bug più pericoloso, perché il programma «funziona». L'unità di misura la decide il programmatore.

---

## 8. Checklist di autovalutazione

- [ ] Creo ed eseguo un file `.py` in VS Code.
- [ ] Scrivo senza `;` e senza tipo davanti, con `True`/`False` maiuscoli.
- [ ] Stampo testo e variabili insieme con `print` e la virgola.
- [ ] Creo variabili `int`, `float`, `str`, `bool` con nomi chiari in snake_case.
- [ ] Aggiorno una variabile usando il suo valore: `credito = credito + 50`.
- [ ] So che `/` dà sempre un decimale e `//` la divisione intera.
- [ ] Leggo l'ultima riga di un messaggio di errore e trovo la riga sbagliata.

**Prossima lezione:** `input()`. Saranno i clienti a inserire i dati dalla tastiera.
