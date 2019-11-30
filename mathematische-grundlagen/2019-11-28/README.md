---
header-includes:
  - \usepackage{tikz}
---
# Mathematische Grundlangen

Vorlesung vom *2019-11-28*

## Wiederholung und Generelles

- N/A

## Analysitsche Geometrie

> "Ist eigentlich ein einfaches Thema" - Espi

### Vektoren

- Werden nur n Zahlen im n-dimansionalen Raum dargestellt
- Sind Verschiebungen
  - Beispiel von Punkt A zu Punkt B
  - Verschiebungvektor berechnen $\overrightarrow{AB} = B - A$
    - Gleichung weil wir von $A$ zu $B$ wollen und damit diese Gleichung haben:
      $A + \overrightarrow{AB} = B$. Durch umstellen erhalten wir
      $\overrightarrow{AB} = B - A$
- Einheitsvektoren $(1,0)$ und $(0,1)$ bilden die Grundlage für das Koordinatensystem

Eine Gerade im Vektorfeld angeben durch einen Punkt auf der Geraden und einem
Richtungsvektor (als Parameterform bekannt):

$$g: \begin{pmatrix}7\\3\end{pmatrix} + a \cdot \begin{pmatrix}1\\2\end{pmatrix}
\ |\ a \in \mathbb{R}$$

Jeder Punkt, für den ein rationales $a$ zu finden ist, ist auf der Geraden.

#### Multiplikation mit einer Zahl

$$4 \cdot \begin{pmatrix}1\\3\\7\end{pmatrix} = \begin{pmatrix}4\\12\\28\end{pmatrix}$$

#### Skalarprodukt von zwei Vektoren

> **Nicht zu verwechseln mit dem Kreuzprodukt**

Sind der Cosinus zwischen zwei Vektoren. Sind somit $0$, wenn die
senkrechtzueinander sind.

$$\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix} \cdot
\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix} = a_1\cdot b_1+a_2\cdot b_2+a_3\cdot b_3$$

$$\vec{a} \cdot \vec{b} = \frac{\cos(\vec{a}, \vec{b})}{|\vec{a}|\cdot
|\vec{b}|}$$

Um den Winkel zwischen Vektoren zu berechnen kann mal also folgendes machen:

$$ \alpha = \arccos\left(\frac{\vec{a}\cdot \vec{b}}{|\vec{a}|\cdot|\vec{b}|}\right)$$

## Geraden und Ebenen im Raum

- Geraden in Paramaterform siehe oben
- Ebenen
  - Ein Stützvektor und zwei Richtungsvektoren
    - Die Vektoren dürfen nicht kolinear (auf einer Geraden) sein
