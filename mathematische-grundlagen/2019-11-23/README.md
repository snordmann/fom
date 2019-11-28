# Mathematische Grundlagen der Informatik

Vorlesung vom *2019-11-23*

## Wiederholung und generelles

- Übungsklausur ist in [Google Drive](https://drive.google.com/drive/folders/1LG8ne7eCaIsrRZpCBslp3Bh4jhJ8KBPi) zu finden

## Gleichungssysteme und Matrizen

### Erstes Beispiel

$$
x-y=-3\\
x+y=-1
$$

Gleichungen addieren:

$$
2x+0y=-4\\
x=-2
$$

Wert für $x$ in eine der Gleichungen einsetzen:

$$
x-y=-3\\
(-2)-y=-3\\
-y=-1\\
y=1
$$

Prüfen, ob es auch dür die andere Gleichung gilt:

$$
(-2) + 1 = -1
(-2) - 1 = -3
$$

### Umformungen

- Vertauschung von zwei Zeilen
- Multiplikation einer Zeile mit einer von 0 verschiedenen Zahl
- Addition einer Zeile auf eine andere

#### Gaussverfahren

- "Treppe machen"

### Beispiel 2.1

EIn kleiner Junge kauft am Kiosk einen Lutscher und zwei Päckchen Kekse und mus
dafür 1,90€ bezahlen. Am nächsten Tag kauft er drei Lutscher, jedoch nur ein
Päckchen Kakse; der Gesamtpreis ist 1,20€. WIe teuer ist ein Lutscher, und wie
teuer ist ein Keks?

$$
x+2y = 1.90\\
3x + y = 1.20
$$

#### Gaussverfahren

$$
\begin{pmatrix}
I\qquad & 1 & 2 &\quad 1.9 \\
II\qquad & 3 & 1 &\quad 1.2
\end{pmatrix}
$$

Rechne $(-3)\cdot I + II$ und setze für Formel $II$ ein:

Hilfsgleichungen:

- $I_a = (-3)\cdot I$
- $II_a = I_a + II$

$$
\begin{pmatrix}
I\qquad & 1 & 2 &\quad 1.9 \\
I_a\qquad & -3 & -6 &\quad -5.7 \\
II\qquad & 3 & 1 &\quad 1.2\\
II_a\qquad & 0 & -5 &\quad -4.5
\end{pmatrix}
$$

Nach $II_a$ gilt $y=\frac{-4.5}{-5}=0.9$. Diesen Wert kann man in in $I$
einsetzen und bekommt folgenden Wert:

$$
x+2\cdot 0.9 = 1.9\\
x = 1.9 - 2\cdot 0.9 = 0.1
$$

Diese Werte kann man mit der Gleichung $II$ überprüfen:
$3\cdot 0.1 + 0.9 = 1.2$. Dies ist eine wahre Aussage und die Umformungen sind korrekt

#### Mit Taschenrechner

- GLeichungsmodus aufrufen
  - `Mode 5` oder `Mode A` oder ...
  - Wo es sich befindet ist abhängig vom Taschenrechner
- Anzahl der Unbekannten eingeben
  - `2x2`oder `3x3`
- Faktoren eingeben

  - ```text
         1x +    2y=    1.9
         3x +    1y=    1.2
    ```

- Noch einmal die Gleichheitstaste drücken für die erste, zweilte und dritte Variable.
  - Man kann Brüche zu dezimal umwandeln mit der Taste `S<=>D`

### Beispiel 2.4

$$
\begin{pmatrix}
I\qquad &-1 & 2 & 1 &\quad 3\\
II\qquad &1 & -1 & -2 &\quad -5\\
II\qquad &2 & 2 & 1 &\quad 0
\end{pmatrix}
$$

- Zeile $II_a = I+II$
- Zeile $III_a = 2\cdot I + III$

$$
\begin{pmatrix}
I\qquad &-1 & 2 & 1 &\quad 3\\
II_a\qquad &0 & 1 & -1 &\quad -2\\
III_a\qquad &0 & 6 & 3 &\quad 6
\end{pmatrix}
$$

- Zeile $III_b = (-6)\cdot II_a + III_a$

$$
\begin{pmatrix}
I\qquad &-1 & 2 & 1 &\quad 3\\
II_a\qquad &0 & 1 & -1 &\quad -2\\
III_b\qquad &0 & 0 & 9 &\quad 18
\end{pmatrix}
$$

- $x_3=\frac{18}{9} = 2$
- $x_2=-2+x_3 = -2+2 = 0$
- $x_1=3-2x_2-x_3= 3-2 = 1$

Überprüfung:

$$
-x_1 + 2x_2 + x_3 = 3\\
 x_1 -  x_2 -2x_3 = -5\\
2x_1 + 2x_2 + x_3 = 0
$$

$$
-1       + 2*0 + 2 = 3\\
 1       -  0  -2\cdot 2 = -5\\
2\cdot 1 + 2*0 + 2 = 0
$$

### Beispiel 2.9

- Hat drei Söhne (J&A&M), die gemeinsam 100 Jahre alt sind
- Wenn J doppelt so alt ist, wäre er 20 jahre älter als A
- J mal drei plus M = 110

Aus den Bedingungn folgen folgende Gleichungen:

$$
J + A + M = 100\\
2\cdot J = A+20\\
3\cdot J + M = 110
$$

Daraus folgt die Matrix:

$$
\begin{pmatrix}
1 & 1 & 1 &\quad 100\\
2 & -1 & 0 &\quad 20\\
3 & 0 & 1 &\quad 110
\end{pmatrix}
$$

Laut Taschenrechner keine Lösung.

### Beispielaufgabe 2.4

Werte in Tausende Euro

$$
2\cdot H + K + G = 47000\\
H + K = 24000\\
5\cdot H +2\cdot G = 106000
$$

Matrix aufstellen:

$$
\begin{pmatrix}
2 & 1 & 1 &\quad 47000\\
1 & 1 & 0 &\quad 24000\\
5 & 0 & 2 &\quad 106000
\end{pmatrix}
$$

Laut Taschenrechner:

- $H=20000$
- $K=4000$
- $G=3000$

## Vektoren

- Geschrieben als $\vec{x} = \begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix}$
- Rechenoperatoren
  - $\vec{x}+\vec{y} = \begin{pmatrix}x_1+y_1\\x_2+x_2\\\vdots\\x_n+y_n\end{pmatrix}$
  - $a\cdot \vec{x} = \begin{pmatrix}a\cdot x_1\\a\cdot x_2\\\vdots\\a\cdot x_n\end{pmatrix}$
- Linearkombination
  - Möglich, wenn zwei Vektoren die selbe Dimensino haben
  - Beispiel:
    - $\vec{x} = \begin{pmatrix}2\\-3\end{pmatrix}$ ist eine linearkombination
      von $\vec{x_1} = \begin{pmatrix}2\\-2\end{pmatrix}$ und $\vec{x_2} =
      \begin{pmatrix}0\\1\end{pmatrix}$
      - $\vec{x} = \vec{x_1} - \vec{x_2}$
    - $\vec{x} = \begin{pmatrix}2\\-3\end{pmatrix}$ kann aber nicht als
      linearkombination von $\vec{y_1} = \begin{pmatrix}2\\-2\end{pmatrix}$ und
      $\vec{y_2} = \begin{pmatrix}1\\-1\end{pmatrix}$ gebildet werden
  - Lineare Unabhängigkeit
    - Vektoren sind linear unabhängig, wenn der Nullvektor als Linearkombination
      nur zu erreichen ist, wenn alle Faktoren $0$ sind
    - $a_1x_1+a_2+x_2+\dots+a_nx_n=0$ ist nur möglich, wenn
      $a_1=a_2=\dots=a_n=0$ ist
    - Ansonsten sind die linear abhängig
    - Wichtig, um zu prüfen, ob Flugzeuge (3d) oder Schiffe (2d) sich treffen

## Matrizen

$$
\begin{pmatrix}
a_{11} & 1_{12} & \ldots & a_{1n}\\
a_{21} & 1_{22} & \ldots & a_{1n}\\
\vdots& \vdots & \ddots & \vdots\\
a_{m1} & 1_{m2} & \ldots & a_{mn}\\
\end{pmatrix}
$$

### Operationen

#### Addition

#### Multiplikation mit reellen Zahlen

#### Matrixprodukt

##### Beispiel IKEA Schrank

| Element         | A   | B   | C   | D   | E   |
| --------------- | --- | --- | --- | --- | --- |
| Korpus          | 1   | 1   | 1   | 1   | 1   |
| Türen           | 0   | 0   | 1   | 1   | 2   |
| Einlegeböden    | 3   | 0   | 3   | 3   | 6   |
| Schubladensätze | 1   | 2   | 0   | 1   | 0   |

Jetzt kommt Auftrag für 25 A, 35 B, 10 C, 1 D und 55 E. Wie kann man schnell
herausfinden, wie viele Einzelteile gebraucht werden?

Kann als Matrix geschrieben werden:

$$
A=
\begin{pmatrix}
1 & 1 & 1 & 1 & 1\\
0 & 0 & 1 & 1 & 2\\
3 & 0 & 3 & 3 & 6\\
1 & 2 & 0 & 1 & 0\\
\end{pmatrix}
$$

Auftrag kann als Vektor geschrieben werden:

$$
\vec{x}=
\begin{pmatrix}
25 \\ 35 \\ 10 \\ 1 \\ 55\\
\end{pmatrix}
$$

Multiplikation ergibt, wie viele Einzelteile gebraucht werden:

$$
A \cdot \vec{x} =
\begin{pmatrix}
126 \\ 121 \\ 438 \\ 96\\
\end{pmatrix}
$$

Bei Mehreren Kunden kann der Auftragsvektor wie folgt aussehen:

$$
K=
\begin{pmatrix}
0 & 10 & 0\\
5 & 5 & 0 \\
0 & 0 & 10 \\
5 & 2 & 0 \\
10 & 5 & 5\\
\end{pmatrix}
$$

Und jetzt kann man auch die Teile pro Kunde berechnen.

Als Hausaufgabe

### Übungsaufgabe 2.6

Als Hausaufgabe

- Einfacher Weg: $r=0,s=0,t=0$
- Gibt es einen anderen Weg? ie. sind sie linear unabhängig?

### Übungsaufgabe Materialverpflechtung

Als Hausaufgabe

### Übungsausfgabe Zustandsänderung

- Kann gut in der Prüfung vorkommen
- Als Hausaufgabe

Ich werde ab jetzt jedes a als e schreiben.

## Nächstes Mal

- Analytische Geomatrie
  - Rechnen in 3D-Raum
  - Projektion von 3D aus 2D (bspw. bei Computern)
