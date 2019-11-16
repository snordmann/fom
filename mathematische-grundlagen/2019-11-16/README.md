# Mathematiche  Grundlagen

*2019-11-16* <!-- mdlint-disable-line -->

## Mengen und Relationen

Generelle Bemerkungen:

- Dieser Bereich kann umfangreich sein
- Beispiele können nur als Hausaufgaben gemacht werden
  - Bei Fragen E-Mail an Prof senden
- In der Vorlesung wird dieser Bereich schnell abgehandelt

Themen:

- Definition und Schreibweisen
- Mengenoperationen
  - Schnittmenge
  - Vereinigung
- Rechenregeln
- Distributivgesetz
- Differenzmenge
- De Morgansche Regeln
- Potenzmengen
- Kartesisches Produkt
- Zahlenmengen
  - Natürliche Zahlen
  - Ganze Zahlen
  - Rationale Zahlen
  - Nicht rationale Zahlen
  - Reele Zahlen
  - Irrationale Zahlen
- Intervalle

### Definitionen und Schreibweisen

- Wird in Großbuchstaben geschrieben
- Elemente in geschweifte Klammern, mit Komma getrennt

$$A=\{1,2,3\}$$
$$K=\{Apfel,Birne,Banane\}$$
$$C=\{\}$$

#### Probleme, wenn man viele Elemente schreiben möchte

- Beispiele
  - Die Menge der Zahlen von 1 bis 49

    $A=\{1,2,3,...,48,49\}$
  - Die Menge aller ungeraden Zahlen

    $U=\{1,3,5,7,9,11,...\}$
  - Die Menge aller ungeraden Primzahlen

    $P=\{x ; x\ ist\ eine\ Primzahl\ und\ ist\ ungerade\}$

#### Mengenoperationen

##### Teilmengen und echte Teilmengen

$$ x \in A $$
$$ B \subset A $$
$$ B \subseteq A \Leftrightarrow \forall x \in A : x \in B $$
$$ B \subset A \Leftrightarrow B \subseteq A \cup A \neq B $$

Echte Teilmenge ist Teilmenge und die Mengen nicht gleich sind (mindestens ein
Element nicht in der Obermenge).

##### Schnittmenge

$$ A=\{1,2,3\} $$
$$ B=\{2,3,4\} $$
$$ A \cap B=\{2,3\} $$

##### Vereinigung

$$ A=\{1,2,3\} $$
$$ B=\{2,3,4\} $$
$$ A \cup B=\{1,2,3,4\} $$

==> Hausaufgabe: Alle Regeln (Assoziativ, Distributiv, ...) mit Mengen
ausprobieren

==> Vollständige Induktion kommt auf jeden Fall in der Klausur vor

##### De Morganscge Regeln

Analog zu Logik

$$ \overline{A\cap B} $$
ist das selbe wie:
$$ \overline{A} \cup \overline{B} $$

##### Kartesische Produkt

Wir später für Relation benötigt

$$ A \times B = \{(a,b); a \in A, b \in B\} $$

Beispiel:

$$ A=\{1,2\}\ und\ B=\{3,4,5\} $$
$$ A \times B = \{(1,3),(1,4),(1,5),(2,3),(2,4),(2,5)\} $$
