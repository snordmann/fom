# Mathematiche  Grundlagen

*2019-11-16* <!-- mdlint-disable-line -->

## Mengen und Relationen

Generelle Bemerkungen:

- Dieser Bereich kann umfangreich sein
- Beispiele können nur als Hausaufgaben gemacht werden
  - Bei Fragen E-Mail an Espitalier senden
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
  - Die Menge der Zahlen von 1 bis 49 kann als $A=\{1,2,3,...,48,49\}$
    geschrieben werden.
  - Die Menge aller ungeraden Zahlen kann als $U=\{1,3,5,7,9,11,...\}$
    geschrieben werden.
  - Die Menge aller ungeraden Primzahlen kann als $P=\{x \in \N;\ x\ ist\ eine\ Primzahl\ und\ ist\ ungerade\}$
    geschrieben werden.

#### Mengenoperationen

##### Teilmengen und echte Teilmengen

$$ x \in A $$

$$ B \subset A $$

$$ B \subseteq A \iff \forall x \in A : x \in B $$

$$ B \subset A \iff B \subseteq A \cup A \neq B $$

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

## Relation

- Kartesiches Produkt
- Relation
- Äquivalenzrelationen
  - reflexiv
  - symmetrisch
  - transitiv

### Kartesisches Produkt

siehe oben

### Relationen

Eine Relation ist eine Teilmenge von dem kartesischem Produkt

Beispiel:
$$ A=\{1,2\}\ und\ B=\{3,4,5\} $$

$$ A \times B = \{(1,3),(1,4),(1,5),(2,3),(2,4),(2,5)\} $$

$$ R = \{(1,3),(2,3)\} $$

#### Relation mit Bedingungen

Seien $A = B = Menge\ der\ deutschen\ Städte$.

Ich möchte nun Städtepaare haben, die im selben Bundesland sind, kann man es
schreiben als:

$$ R = \{(s_1, s_2); s_1 \in A, s_2 \in B, s_1\ liegt\ im\ selben\ Bundesland\ wie\ s_2\} $$

Aus dieser Menge könnte man folgende Paare bilden:

$$\{(Kiel, Flensburg),\ (Hannover, Göttigen),\ (Flensburg, Kiel),\ (Bremen, Bremen),\ (Bremen, Bremen),\ ...\}$$

### Äquivalenzrelationen

#### reflexiv

Eine Relation ist reflexiv wenn:

$$\forall x \in R\ gilt\ (a,a) \in R$$

Beispiele:

- Kleiner-gliech bei reellen Zahlen

  Für alle reellen Zahlen gilt $x \leq x$.

#### symmetrisch

Eine Relation ist symmetrisch wenn:

$$\forall x \in R\ gilt\ (a,b) \in R \land (b,a) \in R$$

Beispiele:

- Gleichheit der reellen Zahlen

  Aus $x=y$  folgt $y=x$.

#### transitiv

Eine Relation ist transitiv wenn:

$$(a,b) \in R\ und\ (b,c) \in R\ ist\ auch\ (a,c) \in R$$

Beispiele:

- Reelle Zahlen
  
  Wenn $x<y$ und $y<z$, gilt $x<z$.
- Logik
  
  Aus $A\implies B$ und $B\implies C$ folgt $A\implies C$.

## Eingrenzen von Mengen

### Abgeschlossenes Interval

$$\{x\in \R; a\leq x\leq b\}$$

### Offenes Interval

$$\{x\in \R; a < x < b\}$$

### Halboffenes Intervall

$$\{x\in \R; a \leq x < b\}$$

oder

$$\{x\in \R; a < x \leq b\}$$

## Vollständige Induktion

- DIES IST EIN SEHR WICHTIGES THEMA!!!!
- KLAUSURERELEVANT

Generelle Fragestellung: Wie kann ich was für alle Zahlen beweisen?

Beispiel:

- Wie kann ich viele Zahlen addieren?
  - Von $1+2+3+4+5+...+100$
  - Feststellung:
    - Wenn man die erste und letzte Zahl addiert, bekommt man 101.
    - Wenn man die zweite und vorletzte Zahl addiert, bekommt man 101.
    - Lösung: $\frac{100}{2}(1+100) = 505$
  - Nun muss bewiesen werden, dass $\frac{n}{2}(1+n)$ (bzw. $\frac{n(1+n)}{2}$) für alle Zahlen gilt.

### Drei Schritte der Induktion

1. Aussage muss für $n=n_0$ gezeigt werden.
1. Es wird angenommen, dass die Aussage für eine natürliche Zahl $n$ mit $n\geq n_0$ gilt.
1. Unter der Annahme ist zu zeigen, dass die Aussage dann auch für $n+1$ gilt.

### Beispiel 1.14

Behauptet wird: Für alle $n \in \N$ gilt:

$$ \sum^n_{i=1}{i}=\frac{n(n+1)}{2} $$

#### Schritt 1: Induktionsannahme

In diesem Fall wird angenommen, dass eine natürliche Zahl $n$ gilt:

$$ 1+2+3+...+n=\frac{n(n+1)}{2} $$

Formel für $n+1$ aufstellen.

$$ 1+2+3+...+n+(n+1)=\frac{(n+1)\big((n+1)+1\big)}{2} $$

Einsetzen der Formel für die Summe der Zahlen bis $n$.

$$ \frac{n(n+1)}{2}+(n+1)=\frac{(n+1)\big((n+1)+1\big)}{2} $$

Nun muss nur noch überprüft werden, ob beide Seiten gleich sind.

$$ \frac{n^2+n}{2}+(n+1)=\frac{(n+1)(n+2)}{2} $$

$$ \frac{n^2+n}{2}+(n+1)=\frac{n^2+3n+2}{2} $$

$$ n^2+n+2(n+1)=n^2+3n+2 $$

$$ n^2+n+2n+2=n^2+3n+2 $$

$$ n^2+3n+2=n^2+3n+2$$

### Beispiel 1.15

Behauptung: Für alle $n \in \N$ gilt:

$$ 1+3+5+...+(2n-1) = n^2 $$

Annahme stimmt für $n=1$:

$$ 1 = 1^2  = 1 $$

Annahme stimmt für $n=2$:

$$ 1 + 3 = 2^2  = 4 $$

Einsetzen von $n+1$

$$ 1+3+5+...+(2n-1) + (2(n+1)-1) = (n+1)^2 $$

Einsetzen der Annahme in die Summe:

$$ n^2 + (2(n+1)-1) = (n+1)^2 $$

Umformen:

$$ n^2 + (2n + 2 - 1) = n^2 + 2n + 1 $$

$$ n^2 + 2n + 1 = n^2 + 2n + 1 $$

### Beispiel einer falschen Annahme

Für alle $n \in \N$ gilt:

$$n^3 \leq n^2$$

Annahme für $n=1$ überprüfen:

$$1^3 \leq 1^2,\ weil\ 1^3 = 1\ und\ 1^2 = 1 $$

Weiterführen für $n+1$:

$$(n+1)^3\leq(n+1)^2$$

$$n^3+3n^2+3n+1\leq n^2+2n+1$$

$$n^3+2n^2+n\leq 0$$

Widerspruch: Für kein positives $n$ ist die Formel null oder negativ.

### Übung 1.16

Für alle $n\in \N$ gilt:

$$ 2+5+8+...+(3n-1)=\frac{n(3n+1)}{2} $$

Zeigen, dass es für $n=1$ gilt:

$$ 2 = \frac{1*(3+1)}{2} = \frac{4}{2} = 2 $$

Zeigen, dass es für $n+1$ gilt:

$$ 2+5+8+...+(3n-1) + (3(n+1)-1)=\frac{(n+1)\big(3(n+1)+1\big)}{2} $$

Einsetzen der Annahme:

$$ \frac{n(3n+1)}{2} + (3(n+1)-1)=\frac{(n+1)\big(3(n+1)+1\big)}{2} $$

Umformen:

$$ \frac{3n^2+n}{2} + (3n+3-1)=\frac{(n+1)(3n+3+1)}{2} $$

$$ \frac{3n^2+n}{2} + (3n+2)=\frac{(n+1)(3n+4)}{2} $$

$$ \frac{3n^2+n}{2} + (3n+2)=\frac{3n^2 +3n+4n+4}{2} $$

$$ \frac{3n^2+n}{2} + (3n+2)=\frac{3n^2 +7n+4}{2} $$

$$ 3n^2+n + 2(3n+2)=3n^2 +7n+4 $$

$$ 3n^2+n + 6n+4=3n^2 +7n+4 $$

$$ 3n^2+7n+4=3n^2 +7n+4 $$

Annahme ist wahr.

==> Hausaufgaben 1.17 und 1.18 und 1.20

### Beispiel 1.17

TBD

### Beispiel 1.18

TBD

### Beispiel 1.20

Für alle $n\in\N$ gilt:

$$2^n > n$$

## Nächstes Mal

- Lineare Gleichungssysteme, Vektoren und Matrizen
