# Mathematische Grundlagen

Vorlesung vom *2019-12-14*.

## Grundlegendes & Wiederholung

- Als Hausaufgabe $\lim$ erklären
- Hausaufgabe: Seiten 63, 64 im Buch: Ferry hat Foto der Aufgaben
- Hausaufgabe: Abitur Bremen 2007

## Folgen und Funktionen

- Folgen sind Zahlenreihen, die einem Muster folgen.
- Folgen können Grenzen haben
  - Bsp. $a_n = a_{n-1}+\frac{1}{n}$
- Die Monotonie einer Folge bezeichnet, ob die Folge steigt, fällt oder gleich bleibt.
- Die Grenzen einer unendlichen Folge können mit dem $\lim$ errechnet und
  dargestellt werden
  - Die Grenze kann gegen einen Wert konvergieren, ins Unendliche steigen/sinken
    oder ständig alternieren

## Differenzialrechnung

- Die Steigung einer Funktion
  - Bei linearen Funktionen einfach: $\frac{\Delta y}{\Delta x}$
  - Bei anderen Funktionen etwas komplizierter, weil man die Tangente an einem
    Punkt bilden muss. Siehe Konvergenz $\lim$, wenn die Stellen der Sekante
    aneinander "wandern":
    $$\lim_{x \to a} \frac{f(x)-f(a)}{x-a}$$
- Generelle Regel für Ableitungen bei Polynomfunktionen:
  $$f(x) = x^n$$
  $$f'(a) = n \cdot a^{n-1}$$

## Kurvendiskussion

Berechnung von:

- Achsenschnittpunkte
  - Schnittpunkt mit y-Achse ist der Wert $f(0)$
  - Schnittpunkt mit x-Achse muss errechnet werden indem $f(x) = 0$ gesetzt wird
- Hoch- und Tiefpunkte
  - Ist, wenn die erste Ableitung null ist $f'(x) = 0$
  - Wenn $f''(x) > 0$ ist, ist es ein Tiefpunkt
  - Wenn $f''(x) < 0$ ist, ist es ein Hochpunkt
  - Wenn $f''(x) = 0$ und $f'''(x) \neq 0$ ist, ist es ein Sattelpunkt
- Wendepunkte
  - Ist, wenn die zweite Ableitung null ist $f''(x) = 0$
- Verhalten im Unendlichen
  - Die höchste Potenz ist zu betrachten
    - Bsp. bei $f(x)=x^5-1000x^4$ muss man nur betrachten, wie sich $x^5$ bei
      unendlich großen $x$ verhält.
      $$\lim_{x\to+\infty} = +\infty$$
      $$\lim_{x\to-\infty} = -\infty$$

## Integralrechnung

- Fläche unter dem Graphen
  - Hilfreich bei: Wassermenge im Pool bei Wasserzufluss berechnen, Zusammenhang
    zwischen Beschleunigung, Geschwindigkeit und Strecke in der Physik
- Ist das Gegenteil von der Ableitung: $F'(x) = f(x)$ Die Ableitung der
  Stammfunktion ist die Funktion selbst
