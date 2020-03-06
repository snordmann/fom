# Konzepte der prozeduralen Programmierung

Vorlesung vpm *2019-12-21*

## Grundlegendes und Wiederholung

N/A

## Ein- und Ausgabe

- Bezeichnet die Möglichkeit mit Dateien zu arbeiten
- Zwei häufige Anforderungen, die Dateien benötigen:
  - Datensicherung, weil Programm selbst mit RAM nur flüchtig ist
  - Datenaustausch, wenn mehrere Informationssysteme zusammenarbeiten müssen

### Dateien öffnen

```c
FILE *file = NULL;
char *filename = "datei.txt";

file = fopen(filename, "r"); // Lesend öffnen
fclose(file); // Datei file schließen

file = fopen(filename, "w"); // Schreibend öffnen

fcloseall(); // Alle Dateien schloeßen
```

## Wiederholung

- Einlesen aus Dateien mit Format
  - scanf("%5s,%10d", uhr, datum);
  - Nachteile, wenn die Formatierung nicht genaustens eingehalten wird
- Einlesen aus Dateien mit fgets
  - Problem, wenn buffer zu klein ist (bzw. Zeile zu lang ist)
- Schreiben in Dateien
  - fprintf kann mit Platzhaltern arbeiten
  - fputs nicht
