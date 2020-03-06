<!-- markdownlint-disable-file MD026 -->
# Aufgabenblatt 3

## Aufgabe 1 - Positionssysteme

### Erklären Sie das Prinzip der allgemeinen positionellen Zahlendarstellung!

In der positionellen Zahlendarstellung hat die Position eines Zeichens (meistens
eine Ziffer) einen Wert. Je früher das Zeichen steht, desto höher ist der Wert,
die dieses Zeichen repräsentiert.

Es wird eine Basis $n$ gewählt und ein geordneter Zeichenvorrat mit $n$
verschiedenen Zeichen definiert.

Möchte man eine Zahl repräsentieren schreibt man die Zeichen aneinander
gekettet. Das erste Zeichen hat einen Wert von dem Zeichen multipliziert mit der
Basis potenziert mit der Position des zeichens von rechts minus 1 ($n^{Position
von rechts - 1}$). Die Weiteren Zeichenwerte werden so errechnet und dann summiert.

### Geben Sie diese Darstellung am Beispiel der binären Zahl 1001 wieder!

$1001_{(2)}$ lässt sich schreiben als $1\cdot 2^3 + 0\cdot 2^2 + 0\cdot  2^1 +
1* 2^0$ (Diese Darstellung ist dezimal), da es die Zahl $2_{(10)}$ als Basis
hat. Man kann die Summe ausrechnung, um den Wert $9_{(10)}$ zu erhalten.

## Aufgabe 2 - Transformation Zahlensysteme

### Rechnen Sie die binäre Zahl 110101 in einen Dezimalwert um!

Vorgehen wie oben beschrieben:

$$
110101_{(2)}
= 1\cdot 2^5 + 1\cdot 2^4 + 0\cdot 2^3 + 1\cdot 2^2 + 0\cdot 2^1 +1\cdot 2^0
= 32+16+4+1
= 53_{(10)}
$$

### Wandeln Sie die dezimale Zahl 19 in dualer Schreibweise dar!

Vorgehen: Division durch zwei und Modulo von unten lesen

| Zahl | Basis | nächste Zahl | Rest |
| ---- | ----- | ------------ | ---- |
| $19$   | $:2$ | $9$ | $R1$ |
| $9$   | $:2$ | $4$ | $R1$ |
| $4$   | $:2$ | $2$ | $R0$ |
| $2$   | $:2$ | $1$ | $R0$ |
| $1$   | $:2$ | $0$ | $R1$ |

Die Zahl $19_{(10)}$ entspricht $10011_{(2)}$.

### Stellen Sie die Dualzahl 1010110110

#### in einer hexadezimalen Schreibweise dar!

Vorgehen: von rechts angefangen vier Zeichen auf einmal zu einer hexadizimalen
Zahl umwandeln

```text
Bin  10 1011 0110
Hex   2    B    6
```

$1010110110_{(2)} = 2B6_{(16)}$

#### in einer oktalen Schreibweise dar!

Vorgehen: von recht angefangen drei Zeichen auf einmal zu einer okalen Zahl
umwandeln

```text
Bin 1 010 110 110
Oct 1   2   6   6
```

$1010110110_{(2)} = 1266_{(8)}$

## Aufgabe 3 - Algebraische Operationen

### Stellen Sie die Zahl 19 als ihr Zweikomplement dar! Was bedeutet diese Darstellung, bzw. welcher dezimale Wert ergibt sich?

Vorgehen: Jedes Zeichen von 9 subtrahieren und beim letzte Zeichen von 10 subtrahieren.

```text
Zahl        1    9
Vorgehen  9-1 10-9
ZK          8    1
```

Das Zweierkomplement (ZK) im dezimalen System von $19$ ist $81$ (mit potentiell
unendlich vielen neunen vor der 81).

### Welchen dezimalen Wert hat die Zahl 110101 für vorzeichenbehaftete Darstellungen von Dualzahlen mit n = 6 Stellen?

Die Zahl ist negativ, weil die erste Ziffer eine 1 ist. Man kann das ZK erneut
ausführen, um die korrespondierende positive Zahl herauszufinden.

Vorgehen: Zweierkomplement im binären System bilden (Zahl von rechts angefangen bis zur
ersten 1 genauso abschreiben, danach invertieren)

```text
Bin    110101
ZK   - 001011
Dec  -     11
```

### Addieren Sie die beiden Zahlen 8 und 11 in dualer Form! Wie lautet das dezimale Ergebnis?

Vorgehen: Zunächst Zahlen in binär Umwandeln, dann schriftlich addieren, wie
auch in anderen Zahlensystemen

$8_{(10)} = 1000_{(2)}$
$11_{(10)} = 1011_{(2)}$

```text
     1000
 +   1011
---------
ÜT  10000
=========
Sum 10011
```

Umwandeln zu dezimal: $10011_{(2)}$ entspricht $2^4+2^1+2^0 = 16 + 2 + 1 = 19_{(10)}$

### Subtrahieren Sie die beiden Zahlen 8 und 11 in dualer Form! Wie lautet das dezimale Ergebnis?

Ich gehe davon aus, dass ich 11 von 8 subtrahieren soll.

Vorgehen: ZK zu 11 bilden, Resultat mit 8 addieren, vom Ergebnis ZK bilden und
zu dezimal umrechnen

```text
Bin  1011
ZK  10101

   1000
+ 10101
=======
  11101

Bin   11101
ZK  - 00011
Dec -     3
```
