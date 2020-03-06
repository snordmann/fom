# Mathematische Grundlagen

Vorlesung vom *2020-01-10*.

## Fortsetzung Integralrechnung

Generelle Idee: Fläche unter einem Graphen berechnen

Ist die Umkehrung der Ableitung: $F'(x) = f(x)$ die Ableitung des Integrals ist
die Funktion selbst.

## Übungsaufgabe

> Es sei dir Funktion f definiert mit $f(x)=-\frac{1}{3}+4$
> Bestimme eine obere Grenze des Integrals so, dass $\int^k_1{f(x)dx}=2$ ergibt!

Bestimmen der Stammfunktion:

$$
F(x) = -\frac{1}{6}x^2 + 4x
$$

Gleichung für bestimmtes Integral aufstellen und Einsetzen:

$$
\int^k_1{f(x)dx}=2\\
F(k)-F(1)=2\\
-\frac{1}{6}k^2 + 4k - \left(-\frac{1}{6} + 4\right) = 2\\
-\frac{1}{6}k^2 + 4k - \frac{23}{6} = 2\\
-\frac{1}{6}k^2 + 4k - \frac{35}{6} = 0\\
k^2 - 24k + 35 = 0\\
k_{1,2} = \frac{24}{2}\pm\sqrt{\frac{24^2}{4}-35}\\
k_{1,2} = 12\pm\sqrt{144-35}\\
k_{1} = 12+\sqrt{109} = 22.44\\
k_{2} = 12-\sqrt{109} = 1.56\\
$$

Es gibt zwei mögliche obere Grenzen: Einmal kurz hinter der unteren Grenze bei
$1.56$ und eine weiter "hinten" bei $22.44$, weil dann die positive Fläche oberhalb der
x-Achse durch die Fläche unterhalb der x-Achse ausgeglichen ist, dass der
Nettoflächeninhalt 2 beträgt.
