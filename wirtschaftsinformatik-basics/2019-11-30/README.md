# Wirtschaftsinformatik Basics

Vorlesung vom *2019-11-30*.

## Wiederholung und Organisatorisches

- Im Selbststudium wird erwartet, dass Stoff nachgearbeitet wird, weil nicht
  alles im Unterricht nicht reicht.
  - Es wir explizit gesagt, was nachgeholt werden muss.
- Wann wird die ausgefallene Stunde nachgeholen?

## Binäre Logik

- Beispiele für binäre Entscheidungen
  - Ist die Freigabe vorhanden (wahr), oder nicht (falsch)
  - Gehe ich ins Kino (ja), oder nicht (nein)
- Die Wahrheitswerte können als wahr/falsch, ja/nein, oder auch als 1/0
  ausgedrückt werden
- Beispiel mehrerer Bedingungne, die die Entscheidungen beeinflussen
  - Bestellprozess: Um zu bestellen, muss man (a) die Freigabe haben und (b) das Item
    muss im Inventar sein oder (c) es kann schnell bestellt werden. Man kann den
    Zusammenhang als a & (b | c) darstellen.

### Halb- und Volladdierer

Rechner kann kein Plus rechnen, sondern nur logische Gatter.

Halbaddierer sind exklusives Oder und Und, aber nur mit zwei Zahlen

Volladdierer ist ein Halbaddierer, der so modifiziert wurde, dass er drei Zahlen
addieren kann, somit kann auch der Übertrag verrechnet werden.
![Logische Schaltung](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Volladdierer_Aufbau_DIN40900.svg/294px-Volladdierer_Aufbau_DIN40900.svg.png)

### Probleme mit der Addition

Bei der Addition kann es zu Übertrag über die Registerbreite (besipielsweise 8
bit) kommen. Wenn die Zahl größer ist als die Registerbreite darstellen
kann (Im Beispiel für 8 bit maximal 255), redet man vom Overflow.
Der Overflow kann entweder woanders "aufgefangen" werden,
den Speicherbreich der originalen Variable verbreitern oder einfach ignorieren.

Das Ignorieren hilft später auch bei der Subtraktion (durch die Bildung des
Zweierkomplements).

### Subtrahieren

#### Möglichkeit 1: Ein Bit für das Vorzeichen verwenden

12 = 01100
-12 = 11100

Problem, wenn 12 + (-12) gerechnet wird, weil es nicht 0 ergibt sondern eine
andere Zahl ergibt (TODO: zahl berechnen).

#### Einerkomplement

Einfacher Weg: Zahl invertieren
Schwieriger Weg: Formel `K_1 = 2^n - D - 1` anwenden

Problem der doppelten Darstellung der `0`, weil `00000` (=`+0`) und `fffff` (=`-0`) die null darstellen.

#### Zweierkomplement

Generell: Einerkomplement plus 1 rechnen
Einfacher Weg: Zahl invertieren und plus 1 rechnen
Schwieriger Weg: Formel `K_2 = 2^n - D` anwenden

Hausaufgabe: Einer- und Zweierkomplement im Dezimalsystem bilden und Subtraktion
durch Addition machen

### Multiplikation

Sind Schiebeoperationen, Und-Gatter und Additionen

```text
 110 * 101 (6*5)
 ---------
 110   (110 & 1)
+ 000  (110 & 0)
+  110 (110 & 1)
------
 11110 (16+8+4+2=30)
```

```text
 110 * 010 (6*2)
 ---------
 000   (110 & 0)
+ 110  (110 & 1)
+  000 (110 & 0)
------
 01100 (8+4=12)
```

Sind rechenaufwendig, weil 3 Verschiebungen und 2 Additionen gemacht werden
müssen: insgesamt 5 Rechenoperationen.

## Arithmetik und Hardware

- Nach von Neumann Architektur gibt es einen gemeinsamen Speicher für Daten und
  Programme
  - Beim Programmstart wird das komplette Programm in den Arbeitsspeicher geladen
  - Das Programm schreibt selbst Daten in den Arbeitsspeicher
- Addressierung im Arbeitsspeicher erfolgt Byteweise
  - Bei einer 24 Bit Addresse, hat man 2^24 Addressen und kann somit maximal 16
    MiB Arbeitsspeicher adressieren.

### Rechenprozessor

Für mehr Informationen folgende Video Serie gucken: <https://www.youtube.com/watch?v=HyznrdDSSGM&list=PLowKtXNTBypGqImE405J2565dvjafglHU>

#### Die ALU

Arithmetic Logic Unit (ALU) berechnet Ganzzahlen und logische Verhältnisse (Im
Gegensatz zu Floating Point Unit (FPU)).

Hat (nur) zwei Eingänge, die so groß sind wie die Registerbreite.

- Ein Register ist eine SPeichereinheit auf dem Prozessor (10x schneller als Cache, 100x schneller als RAM, 1000x schneller als Festplatte)
- Es gibt nur wenige (ca. 20 Stück)

Es gibt zwei Große Arten von Registern:

- Instuction pointer
  - Welche Operationen als nächstes ausgeführt wird
- Befehlsregister
  - Was wird als nächstes getan wird
  - Beispiele
    - Increment
    - Decrement
    - Add
    - LoadA, LoadB, Load...
    - StoreA, StoreB, Store...
    - ...
- Speicherregister(Werde die so genannt?)
  - Es gibt verschiedene Typen (für kleine Zahlen, große Zahlen, floating point Zahlen, ...)

### Transistoren und Logische Schaltungen

Ein Transistor kann steuern, ob Strom läuft, oder nicht (ähnlich wie Relais, nur
kleiner).

#### Aussagenlogik

Ein Transistor verhält sich wie ein AND operator. Nur wenn Source und Gate an
sind, gibt es einen Stromfluss von Source zu Drain.

Weitere Verknüpfungen sind möglich, wenn man mehrere Transistoren benutzt.

| A   | B   |     | C   | S   |
| --- | --- | --- | --- | --- |
| 0   | 0   |     | 0   | 0   |
| 0   | 1   |     | 0   | 1   |
| 1   | 0   |     | 0   | 1   |
| 1   | 1   |     | 1   | 0   |

| A   | B   | C0  |     | C1  | S   |
| --- | --- | --- | --- | --- | --- |
| 0   | 0   | 0   |     | 0   | 0   |
| 0   | 1   | 0   |     | 0   | 1   |
| 1   | 0   | 0   |     | 0   | 1   |
| 1   | 1   | 0   |     | 1   | 0   |
| 0   | 0   | 1   |     | 0   | 1   |
| 0   | 1   | 1   |     | 1   | 0   |
| 1   | 0   | 1   |     | 1   | 0   |
| 1   | 1   | 1   |     | 1   | 1   |
