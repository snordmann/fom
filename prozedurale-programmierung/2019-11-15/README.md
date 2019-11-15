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

### Parameterübergabe bei Funktionen

Es gibt zwei Möglichkeiten Parameter an eine Funktion zu übergeben:

- Call by Value
  - Beispiel: `int summe(int a, int b);`
  - Bei dem Funktionsaufruf wird eine Kopie übergeben
- Call by Reference
  - Beispiel: `int summe(int *a, int *b);`
  - Bei dem Funktionsaufruf wird eine Speicheraddresse (also das Original) übergeben
  - **==> Potentielle Seiteneffekte**
  - Am besten für große Datenmengen (in arrays) geeignet, da nichts kopiert wird

```c
int summeByValue(int a, int b) {
  a = a * 10;
  int summe = a + b;
  return summe;
}
int summeByReference(int* a, int* b) {
  *a = *a * 10;
  int summe = *a + *b;
  return summe;
}

int main(void) {
  int nummer1 = 4, nummer2 = 5;

  int ergebnisByValue = summeByValue(nummer1, nummer2);
  printf("%d + %d = %d", nummer1, nummer2, ergebnisByValue);
  // 4 + 5 = 45

  int ergebnisByReference = summeByValue(&nummer1, &nummer2);
  printf("%d + %d = %d", nummer1, nummer2, ergebnisByReference);
  // 40 + 5 = 45 <== Seiteneffekt in nummer1
}
```

### Mehrere Werte in Funktionen zurückgeben durch Referenz

Es ist möglich mehrere Werte einer Funktion zurückzugeben, wenn man die
Ergebnisse direkt in die Variable schreibt. Dazu muss die Addresse der
Ergebnisvariablen in die Funktion übergeben werden:

```c
void minAndMax(int a, int b, int* min, int* max) {
  *min = a < b ? a : b;
  *max = a > b ? a : b;
}

int main (void) {
  int num1=2, num2=6, min, max;

  minAndMax(num1, num2, &min, &max);
  printf("a = %d\n", num1);
  printf("b = %d\n", num2);
  printf("min = %d\n", min);
  printf("max = %d\n", max);
}
```

Ein weiterer Use-Case ist das Einlesen von Variablen über die Kommandozeile:

```c
void einlesen(int *num1, int *num2) {
  printf("Geben Sie die erste Zahl ein: \n");
  scanf("%d", num1);

  printf("Geben Sie die zweite Zahl ein: \n");
  scanf("%d", num2);
}

int main(void) {
  int zahl1, zahl2;
  einlesen(&zahl1, &zahl2);
  printf("Produkt: %d\n", zahl1 * zahl2);
}

```
