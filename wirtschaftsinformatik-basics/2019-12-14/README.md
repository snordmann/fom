# Wirtschaftsinformatik Basics

Vorlesung vom *2019-12-14*.

## Grundlegendes und Wiederholung

- Wichtig ist, Vorgehensmodelle und Vorgehensweisen zu unterscheiden
- Was ist der Unterschied zwischen Explorativem, experimentellen und
  evolutionärem/inkrementellen Prototyping?
- Vervollständigen Sie die Vor- und Nachteile aller Modelle
  (Sequenziell, Wasserfall, Spiral, V, und alle, die noch kommen)
- Hausaufgabe: Rollen und Prozesse im Scrum durchlesen
- 10% Aufgabe: Agil und Scrum

## Ansätze

In der Praxis werden diese Modelle nur sehr selten in deren Reinform angewandt.

- Sequienzielles Modell
  - Vor- und Nachteile?
- Wasserfallmodell
  - Die Phasen sind sequentiell angeordnet, hat aber Iterationen in
    aufeinanderfolgende Phasen
- Inkrementelle Vorgehensweise
- Spiralmodell
  - Iterative Vorgehensweise
  - Iterationen beziehen sich immer auf andere Aufgaben
  - Welche Phase entsprechen im Spiralmodell den Phasen Softwareentwurf und Implementierung?
    - Softwareentwurf: "Produktentwurf" und eventuell "Prototypen", wenn diese
      codiert wurden
    - Implementierung: "Codieren", "Modultest" und "Integration und Test"
  - Die Erstellung der Prototypen hat eine große Bedeutung. Es wird im nächsten
    Arbeitsschritt auch Feedback vom Stakeholder eingeholt.
  - Prototyp muss nicht immer Imple,entation. Kann auch bspw. Spezifikationen,
    Architekturdokumente, ...
  - Risiko kann heißen, dass für bussiness-critical Funktionalität wichtig ist,
    und sicher sein möchte, dass alles richtig ist.
    - Spielt im Spiralmodell eine große Rolle, da Risikoanalyse eine explizite
      Phase ist.
  - Bei Komplexität: die Komponenten aufteilen und Schnittstellen zu
    Unterprogrammen definieren.Bei Aufteilung muss einiges Beachtet werden:
    - Komponenten dürfen keine großen Abhängigkeiten haben (lose Kopplung)
    - Schnittstellen müssen klar definiert sein
    - Problem muss ein kleinere Komponenten einteilbar sein
  - Spirale stellt Kosten (länge des Pfeils) und Zeit (Winkel zur letzte
    Iteration) dar
  - Spiralmodell ist nur ein visuelles Hilfmittel, kein mathematisches Konstruke
    für genaues Controlling/Monitoring
  - Spiralmodell wird nicht direkt 1:1 umgetzt, sondern ist eine Schablone, um
    eigene Modelle zu entwickeln (Meta-Modell)
- V-Modell
  - Phasen werden von links nach rechts durchlaufen, und später durch die
    verschiedenen takeholder abgenommen
  - Anordnung: Innerhalb der Phasen wird nicht nur Defniiert, was dort steht,
    sonder auch zusätzlich werden umfangereiche Tests, Spezifikationen,
    Definitionen und Abnahmekriterien bei den Phasen nach untern gesetzt. Diese
    werden Ausgeführt, wenn man wieder nach oben geht.
    - Je weiter man nach untern geht, desto höher die Wahrscheinlichkeit, dass
      Tests auch in Software implementiert werden
  - Danach werden dide Systemteile umgesetzt und getestet
  - Vorteile, Nachteile im Selbststudium erarbeiten
- Software-Prototypen sind grundlegend verschieden zu Prototypen im Ingenieurswesen
  - Ist keine fertiges Produkt, sondern ausgewählte Eigenschaften des Zielproduktes
  - Im Ingenieurswesen sind prototypen komplette Modelle
  - Warum Prototypen?
    - Schnell aufbauen
    - Einfach veränderbar und erweiterbar
    - Ist ein Modell der späteren Funktionalitäten des Systems
    - Ist eine gute Kommunikationsbasis zwischen Benutzern und Entwicklern

## Sachen, die sich ändern können

- Umwelt
  - Markanforderungen
- Interne Prozesse/Strategien ändern sich
- Technologische Fortschritte

## Agile Vergehensweisen

- Window of Opportunity wird kleiner, wenn Innovationszyklen kürzer werden
