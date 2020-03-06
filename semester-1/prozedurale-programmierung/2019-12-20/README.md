# Gunrlagen der Prozeduralen Programmierung

Vorlesung vom *2019-12-20*

## Organisatorisches und Wiederholung

- Zeichenketten (Strings)
  - Können durch Arrays oder Pointer dargestellt werden
  - Sind nullterminiert (char code '\0')
  - Funkionen in `<string.h>`
    - `strcat`
    - `strlen`
    - `strtok`
    - ...
- Letzte Aufgabe "Aufgabe 4: Standorte" besprechen
  - Es wurde ein Array von Strings vorgegeben
    - Zweidimensionaler Array auf char; erste Dimeni´sion
    sind die Zeichenketten selbst, die zweite zeigt, dass es mehrere
    Zeichenketten sind
    - `char standorte [][100] = {"28359;Bremen;Linzer Straße 7",
      "28209;Bremen;Metzer Straße 1"}`
    - `char delimiter = ';'`
  - Mit `strtok` auslesen
    - `ptr = strtok(standorte[i], delimiter); printf("PLZ = %s", ptr)`
    - `ptr = strtok(NULL, delimiter); printf("ORT = %s", ptr)`
    - `ptr = strtok(NULL, delimiter); printf("STRASSE = %s", ptr)`

## Strukturierte Datentypen `struct`

Die strukturierte Datentypen (auch Strukturen) genannt, werden über das
Schlßsselwort `struct` in C dargestellt.

Man kann verschiedene Datentypen, die zusammengehören, in einer Struktur
ablegen. Beispiel Auto: besteht aus Marke, Modell und Listenpreis.

Traditionell wird man dann folgende Variablen pflegen:

```c
char marke[25];
char modell[50];
int listenpreise;
```

Problem wird es geben, wenn man ein zweites Auto hinzufügen möchte:

```c
char marke2[25];
char modell2[50];
int listenpreis2;
```

Besser geeignet wären Strukturen:

```c
struct Auto {
  char marke[25];
  char modell[50];
  int listenpreis;
};

struct Auto auto1;
struct Auto auto2;

strcpy(auto1.marke, "Ford");
strcpy(auto1.modell, "Ka");
auto1.listenpreis = 14999;

strcpy(auto2.marke, "Telsa");
strcpy(auto2.modell, "X");
auto2.listenpreis = 139999;
```

### Verschachtelte Strukturen

Es ist auch möglich Strukturen aus anderen Strukturen zu bauen:

```c
struct Datum {
  int jahr;
  int monat;
  int tag;
};

struct Person {
  struct Datum geburtsTag;
  char* name;
}

struct Person person1;

person1.name = "Max Mustermann";
person1.geburtsTag.jahr = 1981;
person1.geburtsTag.monat = 3;
person1.geburtsTag.tag = 15;
```
