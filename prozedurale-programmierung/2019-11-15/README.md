# Prozedurale Programmierung

2019-11-15T18:00

## Wiederholung

- Wie ist das Vorgehen, um Funktionen in Bibliotheken auszulagern?
  - Funktionen in neue Datei schreiben
  - Funktionsprototypen in header datei schreiben
  - in der main file die header datei mit einem include in Anführungszeichen
    - Nur wenn #include "bibliothek.h" geschrieben wird, werden aktuelle
      verzeichnisse durchsucht, sonst nur standardbibliotheken

## Zeiger in C

- Zeiger sind Adressen im Arbeitsspeicher
- Wurde schon benutzt
  - Beispielsweise der Addressoperator im scanf

Beispiel:

```c
int zahl = 5;
int *zeiger;
zeiger = &zahl;
```

Damit sieht der Arbeitsspeicher ungefähr wie folgt aus:

| Name   | Addresse | Wert       |
| ------ | -------- | ---------- |
| zahl   | 0xAD57   | 0b00000000 |
|        | 0xAD58   | 0b00000000 |
|        | 0xAD59   | 0b00000000 |
|        | 0xAD5A   | 0b00000101 |
| ...    | ...      | ...        |
| zeiger | 0xAE12   | 0xAD57     |

### Umgang mit Zeigern in C

#### Ausgabe der Zeiger über printf

Wenn man den Wert einer Variable, auf die ein Pointer zeigt, ausgeben möchte,
kann man das wie folgt über den zeiger tun:

```c
int zahl = 5;
int *zeiger;

zeiger = &zahl; // Zuweisung der Addresse im Speicher

printf("Addresse: %p", zeiger);
printf("Wert: %d", *zeiger); // Dereferenzierung um den Wert der Variable an Addresse zu erlangen
```
