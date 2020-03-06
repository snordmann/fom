# Management Basics - BWL Teil

Vorlesung vom *2020-02-07*

## Wiederholung und Grundsätzliches

- Ablauf morgen
  - Zweigeteilt
    - Erster Teil: Übungsklausur (nicht alle
    - Zweiter Teil: offene (Verständnis-)Fragen
- Klausur
  - BWL und VWL aufteilen (neue Zettel nehmen und die jeweiligen Dozenten eintragen)
- Strukturierung der EK einer AG  
  - Genutzt für Kapitalerhöhungen
  - Nennwert der Anteile wird in das gezeichnete Kapital eingetragen
  - Differenz zwischen Ausgabekurs und Nennwert (AGIO) in die Kapitalrücklagen
    - Wenn Ausgabekurs < Nennwert = Dis-AGIO
  - Die Summe des Eigenkapitals ist das bilanzierte Eigenkapital
    - Durch das gezeichnete EK teilen, um Bilanzwertkurs zu erhalten
      - Formel: Bilanzwertkurs = bilanziertes EK / gez. Kapital
      - Sagt aus, wie viel Prozent mein Eigenkapital über das gezeichnete
        Kapital ist
      - Korrekturwert: Stille Reserven
        - Zum bilabizerten EK addieren
        - Ergibt Korrigiertes EK
        - Korregierter Bilanzwert-Kurs = korrigiertes EK / gez. Kapital
- Ertragswerte bzw. -kurse
  - 1\. Szenrio: bis 3 Jahre (begrenzte Lebensdauer, ungleiche Nettoeinzahlungen)
    - Summe(g_t/(1+i)^t)
  - 2\. Szenario: bis 10 Jahre (begrenzte Lebensdauer, gleiche Nettoeinzahlungen)
    - g*((1+i)^n-1)/(i*(1+i))
  - 3\. Szenrio: ab 10 Jahre (unbegrenzte Lebensdauer, gleiche Nettoeinzahlungen)
    - g/i
  - Ertragswertkurs= g/gez. Kapital
- Briefkurs/...Kurs
  - Kurs einer Aktie ergibt sich aus Angebot und Nachfrage, wo der höchste
    Umsatz erzielt wird (meistes Angebots- und Kaufvolumen)
- Neuausgabe von Aktien
  - Mittelkurs = (K_a*a+K_n*n)/(a+n)
  - rechnerischer Wert Bezugsrecht = (K_a-K_n)/(a/n+1)
- Leasing ist nur sinnvoll, wenn das Gut zwischen 40% und 90% genutzt wurd

## Risikomanagement

- Risiken quantifizieren und Auswirkungen auf zukünftige Zahlungseingänge bewerten
- Risiko = Eintrittswahrscheinlichkeit * Auswirkung
- Maßnahmen
  - präventiv
    - Beispiel
      - Coronavirus
        - Lagerhaltung (entgegen JiT-Herstellung)
        - in mehreren Länder/Kontinente herstellen
        - Ausbruch des Virus selbst, kann nicht wirklich verhindert werden
  - situativ

### Strategien

1. Risiko vermeiden
1. Risiko vermindern
1. Risiko überwälzen
1. Risiken selbst tragen

### Risikoportfolio

Plot von Risiken anhand deren Eintrittswahrscheinlichkeiten und Auswirkungen

```text
Eintrittswahrscheinlichkeit
|_
| \_
|   \_
|     \_
|_______\________Schadenshöhe
```

Wenn Risikofaktoren oberhalb der Line sind, sollte eine Strategie dafür gebildet werden.

### Kennzahlen

- Break Even Point (nächstes Semester)
- ROI = Gesamtkapitalrendite
- Leverage Effekt
- Cash Flow ROI
- Liquiditätskennzahlen
- Economic Value Added (nicht relevant)
- Balanced Scorecard
- SWOT-Analyse / Benchmarking

#### Return on Investment: Du-Pont-Zahlensystem

![Du-Pont System](./../2020-02-04-20-08-23.png)

- Ist es gut, wenn ROI höher ist?
  - Nachteil, wenn ANlagenanteil gering ist, weil
    - kreditwürdigkeit ist eingeschränkt (keine Substanzfähigkeit)
    - Wachstum muss idR in Anlagevermögen investiert werden

##### Vor- und Nachteile Du-Pont

- Vorteile
- Nachteile
  - Innovationshemmend
    - Viele wertvolle Investitionen finden im Anlagevermögen statt (citation needed)
    - Anlagevermögen gering zu halten wird gemacht, um Kennzahl zu verbessern
    - kurzfristige Interessen (Kennzahlen) != langfristige Interessen (Verbesserungen)

##### ROI - Was passiert wenn am ROI-Modell

Als Hausaufgabe verschiedene Szenarien am ROI-Schema durchspielen (Beispiel:
Marketing, Factoring, ....)

#### Balanced Scorecard

##### Vorteil

Bisher Strategisches Management in werte zu fassen, um gut zu vergleichen

Das ist sehr einseitig, vor allem durch die Kennzahlen und Goodhart's Law

Es gibt Sachen, die nicht messbar sind.

Es ist einfach und gut an viele Unternehmen anzupassen (sehr flexibel). Integrierte Betrachtung über viele Unternehmensebenen hinweg ist möglich.

##### Nachteil

Kommunikation ist damit schwierig

#### Leverage-Effekt

Auch bekannt als Return on Equity (Eigenkapitalrentsbilität) oder Kurs-Gewinn-Verhältnis

##### Probleme mit Eigenkapital

Man kann annehmen, dass EK gut ist, weil es Puffergröße ist

Windows-Dressing: Kredit annehmen, weil EK anteilmäßig kleiner wird.

Fazit: Kennzahl verbessert sich, wenn Verschludungsgrad höher ist

##### Übertrag zum Leverage Effekt

Solange GKR > FK-Zinssatz, kann man die Kennzahlen "fälschen"

Verschludungsgrad = FK / EK

Nachteil der hohen Verschuldung: Hoher Kapitaldienst und Risiko der Insolvenz

Dies nennt man Leverage-Effekt (auch Leverage-Risiko, Leverage-Chance)

Es wird versucht das optimale Verhältnis von EK zu FK zu finden, dass EKR
möglichst hoch und Risiko möglichst gering ist.

Geringere Innenfinanzierungskraft, weil alles, was für Kapitaldienst ausgegeben
wird, nicht für Innovationen zur Verfügung steht

##### Übung Leverage Effekt

Wenn rGK > i:

|   EK |   FK |      V |    x |  rGK |    i | i*FK | x-(i*FK) |    rEK |
| ---: | ---: | -----: | ---: | ---: | ---: | ---: | -------: | -----: |
| 1000 |    0 |     0% |  100 |  10% |   8% |    0 |      100 |    10% |
|  600 |  400 | 67.78% |  100 |  10% |   8% |   32 |       68 | 11.33% |
|  400 |  600 |   150% |  100 |  10% |   8% |   48 |       52 |    13% |
|   90 |  910 | 10.11% |  100 |  10% |   8% | 72.8 |     27.2 | 30.22% |

Wenn rGK < i:

|   EK |   FK |      V |    x |  rGK |    i |  i*FK | x-(i*FK) |     rEK |
| ---: | ---: | -----: | ---: | ---: | ---: | ----: | -------: | ------: |
| 1000 |    0 |     0% |  100 |  10% |  12% |     0 |      100 |     10% |
|  600 |  400 | 67.78% |  100 |  10% |  12% |    48 |       32 |   5.33% |
|  400 |  600 |   150% |  100 |  10% |  12% |    72 |       28 |      7% |
|   90 |  910 | 10.11% |  100 |  10% |  12% | 109.2 |     -9.2 | -10.22% |

Klausur: In der MC Teil wird abgefragt, ob rGK > i richtig ist, wenn man rEK
erhöhen möchte.

## Turnaround Management

### Unternehmen in der Krise

#### Was ist eine Unternehmenskrise

- Existenzbedrohung
  - Kann in unterschiedlichen Graden vorhanden sein
  - Mekrmale
    - Handlungsdruck hoch
    - Handlungsspielraum ist klein
  - Schaubild S. 38 Teil 3
    - Verschiedene Kriesensituationen werden dargestellt
    - Zu Beginn kann man an der Unrsache arbeiten
    - Später können nur noch Symptome behandelt werden
    - Abbildung kann sinngemäß in der Klausur abgefragt werden

#### Messbarkeit von Krisen

- Häufigste Probleme: Endogene Ursachen
  - Fehlerhaftes management
  - Ineffizienz

#### Messbarkeit

- Finanzielle Restrukturierung
- Operative Restrukturierung
- Strategische Restrukturierung

Bei Ergebnis- und Liquiditätskrise analysiert man folgendes:

- Vermögenslage
  - Anlagendeckungsgrade und Goldene Bilanzregel
  - Substanzerhaltung (Bilanzwertkurs)
- Ertragslage
  - Rentabilitäten
- Finanzlage
  - EBITDA
  - Liquiditäten
  - Cash Flow
