# Übungsklausur

Link: <https://drive.google.com/file/d/1C4wt8t157xBlgbU3hhZwJI7hZ2Rp4IB1/view?usp=sharing>

## Aufgabe 1

Die Teilmenge A der natürlichen Zahlen, die durch 3 teilbar, größer als 11 und
kleiner als 33 sind.

$$
A = \{12,15,18,21,24,27,30\}
$$

$$
A = \{x \in \mathbb{N} | x\ ist\ durch\ 3\ teilbar\ und\ 11 < x < 33\}
$$

## Aufgabe 2

Gegeben sind die folgenden Aussagen:
a: Der SQL-Server läuft! b: Datensätze können gelöscht werden!
Notieren Sie die folgenden Aussagen in der Symbolsprache:
1. der SQL-Server läuft und es können keine Datensätze gelöscht werden
2. wenn der SQL-Server nicht läuft, dann können auch keine Datensätze gelöscht werden
3. der SQL-Server läuft und Datensätze können gelöscht werden
4. Immer, wenn Datensätze gelöscht werden können, dann läuft der SQL-Server.

```text
Teil 1
a b  Erg
0 0  0
0 1  0
1 0  1
1 1  0

a && !b

Teil 2
a b  Erg
0 0  1
0 1  0
1 0  1
1 1  1

!(!a && b)
a || (!a && !b)

Teil 3
a b  Erg
0 0  0
0 1  0
1 0  0
1 1  1

a && b

Teil 4
a b  Erg
0 0  1
0 1  0
1 0  1
1 1  1

!(!a && b)
a || (!a && !b)
```

## Aufgabe 3

Es sei A die Menge A={1,3,5,7,9,11} und B die Menge B={8,9}.
Geben Sie alle Elemente der folgenden Relationen an:

R1 = {(a,b);a ∈A,b ∈B,b < a} R2 = {(a,b);a ∈A,b ∈B,a ≠ b}

R1 = {(9,8),(11,8),(11,9)}

R2 = {(1,8),(1,9),(3,8),(3,9),(5,8),(5,9),(7,8),(7,9),(9,8),(11,8),(11,9)}

## Aufgabe 5

Schreiben Sie die folgende Summe (Summe der ersten n ungeraden Zahlen)
unter Verwendung des Summenzeichens: 1 + 3 + 5 + ... + 2n-1

Zeigen Sie mithilfe der vollständigen Induktion,
dass für alle n ∈ N gilt: 1 + 3 + 5 + ... + (2n-1) = n^2

1. Zeigen für n=1

1 = 1^2 w.A.

2. Formel für n+1 aufstellen

1 + 3 + 5 + ... + (2n-1) + (2(n+1)-1) = (n+1)^2

3. Einsetzen und ausrechnen

1 + 3 + 5 + ... + (2n-1) + (2(n+1)-1) = (n+1)^2
            n^2          + (2(n+1)-1) = (n+1)^2
            n^2          + (2n+2-1)   = (n+1)^2
            n^2          + 2n + 1     = n^2 +2n + 1

QED

Aussage ist richtig, bewiesen durch vollständige Induktion
