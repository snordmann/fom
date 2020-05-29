# Quantitative Methoden der Informatik

Vorlesung vom *2020-03-06*

## Grundsätzliches

- Numerik wird in der Klausur klein ausfallen
- Klausur
  - Übungsblätter zur Klausur werden konkreter/klausurrelevant gefasst
  - Übungsaufgaben bekommen auch Lösungen
  - Übungsklausur in der Unterrichtszeit durchführen
- Unterricht wird etwas anders gestaltet: 1/2 der Zeit Frontalunterricht und 1/2
  der Zeit Übungen

## Kombinatorik

Durch Kombinatorik beschreiben und errechnen wir wie häufig ist etwas möglich
ist.

Wie viele Möglichkeiten gibt es bei Zahlenschlössern, Passwörtern,
Lottoziehungen, ...?

### Beispiel "Würfeln"

Wir haben die Zahlen (mögliche Ergebnisse) 1, 2, 3, 4, 5 und 6.

Das Ergebnis 6 zu erhalten kann geschrieben werden als 1:5 (eine Chance zu
gewinnen und 5 mal so hohe Chance zu verlieren) oder (was deutlich schöner ist)
1/6 (Einer der sechs möglichen Ergebnisse ist gewonnen)

Keine 6 zu würfeln hat eine Wahrscheinlichkeit von 5/6.

Die Gesamtanzahl der Ergebnisse wird durch die Kombinatorik errechnet.

### Beispiel "Auto"

Ein elektronisches Auto kann in den folgenden Konfigurationen gebaut werden:

- Akkus
  - A
  - B
  - C
- Farben
  - rot
  - schwarz
  - blau
  - ocker

Darauf bilden sich diese Konfigurationen:

- A, rot
- A, blau
- A, schwarz
- A, ocker
- B, rot
- B, blau
- B, schwarz
- B, ocker
- C, rot
- C, blau
- C, schwarz
- C, ocker

Die Anzahl der Möglichkeiten ist 3 (Konfigurationen für Akku) * 4 (Konfiguration
für Farbe) = 12 mögliche Kombinationen

### Beispiel "Computer Passwörter"

29*2 (a bis z, ö, ä und ü, + großschreibung) + 10 (Ziffern) + 20 (Sonderzeichen)
= 88 Zeichen

Bei Passwortlänge von 10 Zeichen: 88^10 = 2.78500976e19 mögliche Kombinationen

### Urnenmodell

Alle Probleme der Kombinatorik werden auf ein Urnenmodell zurückgeführt, bei
denen es folgende Urnenmodelle gibt:

- Mit zurück legen, Reihenfolge wichtig
  - Beispiel: Zahlenschloss, Passwörter
  - Formel: n^k
    - n = Anzahl der Kugeln in der Urne
    - k = Anzahl der Ziehungen
- Mit zurück legen, Reihenfolge unwichtig
  - Beispiel: Würfeln
  - Formel: n^k / k! = (n+k-1) über k
- Ohne zurück legen, Reihenfolge wichtig
  - Beispiel: Wahl von Klassensprechern und Vertretern
  - Formel: n! / (n-k)!
    - n = Anzahl der Kugeln in der Urne (zu beginn)
    - k = Anzahl der Ziehungen (k ist immer kleiner als n)
- Ohne zurück legen, Reihenfolge unwichtig
  - Beispiel: Lotto
  - Formel: n über k = n! / (k! * (n-k)!)
    - n = Anzahl der Kugeln in der Urne (zu beginn)
    - k = Anzahl der Ziehungen (k ist immer kleiner als n)
