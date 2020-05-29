# Datenbank Managment

Vorlesung vom *2020-03-07*

## Grundsätzliches

- Klausurbewertung von Wirtschaftsinformatik dauert bis etwa Anfang April
- Thema ist scharf umrandet, vor allem im Vergleich zu Wirtschaftsinformatik
- Wir benutzen MariaDB (bzw. MySQL)
  - Als Oberfläche MySQL Workbench
- In dieser Veranstaltung eher Management (Nutzung und Administration) von
  Datenbanksystemen anstatt technische Implementationen von Datenbanken
- Klausur Transferaufgabe: NoSQL (vor allem Graphen und KV-Stores)

## Glossar

- Datenbanksystem (DBS)
  - Das "Ganze"
  - Daten aufnehmen, speichern und verwalten
  - Bestehend auf Datenbank Management System (DBMS) und Datenbank
  - Datenbanksysteme sind generell langsam, aber sehr nützlich, flexibel, ...
- DBMS
  - Programm, dass Daten aus der Datenbank lesen, auffinden, verwalten, ... kann
- Datenbank (DB)
  - Eigentliche Daten (also keine Semantik)
  - Aus den Daten semantisch WIssen aufzubauen, ist Aufgabe der Entwickler
  - Inhalte können unterschiedlich Strukturiert sein (Bilder, Texte, Zeichen, ...)
- Structured Query Language (SQL)
  - Sprache mit der strukturierte Daten verwaltet werden können
  - Untersprachen
    - Data Query Language (DQL)
      - Lesen und Auswerten von Daten
      - Performance und Effizienz ist hier riesiges Thema
    - Data Definition Laguage (DDL)
      - Datenstrukturen erstellen
    - Data Manipulation Language (DML)
      - Daten verändern (CUD vom CRUD)
      - Hier werden auch Transaktionen und Integrität wichtig
    - Data Control Language (DCL)
      - Zugriffsberechtigungen setzen
      - Datenschutz und Datensicherheit

## Strukturierte und unstrukturierte Daten

Word Dokumente sind unstrukturiert, weil der Mensch die Struktur gibt.

Bei strukturierten Daten geben die Systeme die Struktur und können damit
arbeiten.

Wenn der Rechner etwas unterteilen kann, sind die Daten semi-strukturiert.

Strukturiert: Vollständig in kleinstmögliche bedeutungstragende (atomare) Einheiten geteilt

Datenbanken entscheiden, ob sie unstrukturiere oder strukturierte Daten
verarbeiten und wie diese Strukturen aussehen sollen. Nicht jede Datenbank kann
nicht alle Strukturen verarbeiten.

## Datenspeicherung

- Seite 4 Klausurfrage: "Nennen Sie zwei Nachteile flacher Dateisysteme und begründen Sie."
