# Prozedurale Programmierung

*2019-11-16* <!-- mdlint-disable-line -->

## Wiederholung von letzten Mal

- Pointer sind Zeiger auf andere Variablen
  - Sie Zeigen auf die Addresse im Arbeitsspeicher
- Man kann pointer mit `type *name` initialisieren
  - Beispiele
    - `int *x = NULL;`
    - `float *x;`
- Um einen Wert zuzuweisen kann man den Addressoperator benutzen
  - Beispiel

    ```c
    int x=5;
    int *ptr = &x;
    ```

- Man kann den Wert der Variable, auf die der Pointer zeigt, mit dem
  Dereferenzoperator `*` ausgeben lassen
  - Beispiel

    ```c
    int x = 5;
    int *ptr = &x;
    printf("%d", *ptr); //Ausgabe ist '5'
    ```

- Funktionen können nun Parameter über Call by Value und Call by Referenz annehmen
  - Beispiel Call By Value

    ```c
    int add10(int x, int y) {
      x = 10 * x;
      return x  + y;
    }

    int main (void) {
      int a=5, b=4, ergebnis;

      ergebnis = add10(a, b);
      printf("%d + %d = %d", a, b, ergebnis);
      // Ausgabe ist: '5 + 4 = 54'

      return 0;
    }
    ´´´

    - Beispiel Call By Reference

    ```c
    int add10(int *x, int *y) {
      *x = 10 * (*x);
      return (*x)  + (*y);
    }

    int main (void) {
      int a=5, b=4, ergebnis;

      ergebnis = add10(&a, &b);
      printf("%d + %d = %d", a, b, ergebnis);
      // Ausgabe ist: '50 + 4 = 54'

      return 0;
    }
    ´´´

    Man bemerke die Seiteneffekte, die die Funktion hat.

- Call by Reference ist gut, wenn man viele Daten vorhanden sind, und die nicht
  kopiert werden sollen (bspw. Arrays).

## Arrays in C

- Arrays sind eine Sammlung von Daten.
- Anstatt 5 Variablen zu schreiben, kann man einen Array der Größe 5 benutzen
  - 5 Variablen sieht so aus:

    ```c
    int messwerte1;
    int messwerte2;
    int messwerte3;
    int messwerte4;
    int messwerte5;
    ```

  - Ein Array der Größe 5 sieht so aus:

    ```c
    int messwerte[5];
    ```

Ein Array der Größe 5 sieht im Arbeitsspeicher wie folgt aus:

| Variable       | Addresse | Wert |
| -------------- | -------- | ---- |
| `messwerte[0]` | 0xAB68   | 3    |
| `messwerte[1]` | 0xAB6C   | 7    |
| `messwerte[2]` | 0xAB70   | 2    |
| `messwerte[3]` | 0xAB74   | 1    |
| `messwerte[4]` | 0xAB78   | -5   |

### Erste Beispiele mit Arrays

#### Werte direkt zuweisen

```c
int main (void) {
  // Array deklarieren
  int messwerte[5];

  // Werte in das Array einfügen
  messwerte[0] = 3;  // direkter zuriff über den index
  messwerte[1] = 7;
  messwerte[2] = 2;
  messwerte[3] = 1;
  messwerte[4] = -5;

  // Ausgabe der Werte über eine for Schleife
  for (int i = 0; i < 5; i++) {
    printf("Messwert %d: %d\n", i+1, messwerte[i]);
  }
  // Ausgabe
  //   Messwert 1: 3
  //   Messwert 2: 7
  //   Messwert 3: 2
  //   Messwert 4: 1
  //   Messwert 5: -5

  return 0;
}
```

#### Einlesen der Benutzereingabe in ein Array

```c
int main (void) {
  int messwerte[5];

  for (int i = 0; i < 5; i++) {
    printf("Bitte den $d. Messwert eingeben:\n", i+1);
    scanf("%d", &messwert[i]);
  }

  for (int i = 0; i < 5; i++) {
    printf("Messwert %d: %d\n", i+1, messwerte[i]);
  }

  return 0;
}
```

#### Array mit Werten initialisiert

```c
int main (void) {
  int messwerte[5] = { 3, 7, 2, 1, -5 };

  for (int i = 0; i < 5; i++) {
    printf("Messwert %d: %d\n", i+1, messwerte[i]);
  }

  return 0;
}
```

Nehmen wir an, dass wir die letzten Werte nicht eingeben:

```c
int main (void) {
  int messwerte[5] = { 3, 7, 2 };

  for (int i = 0; i < 5; i++) {
    printf("Messwert %d: %d\n", i+1, messwerte[i]);
  }

  return 0;
}
```

Die Ausgabe ist nun

```text
Messwert 1: 3
Messwert 2: 7
Messwert 3: 2
Messwert 4: 0
Messwert 5: 0
```

Man kann sehen, dass die Elemente mit `0` initilaisiert werden, und nicht
irgendwas in dem Speicher steht.

Man muss auch die Anzahl der Elemente bei der direkten Zuweisung nicht angeben.

Dieser Code resultiert in einem Array der Länge 5;

```c
int messwerte[] = { 3, 7, 2, 1, -5 };
```

### Länge eines Arrays berechnen

Mit der `sizeof()` Funktion kann man die Länge des Arrays ermitteln.

```c
int intArray[100];

printf("Größe von int: %d\n", sizeof(int));
printf("Größe des Arrays: %d\n", sizeof(intArray));
printf("Länge des Arrays: %d\n", (sizeof(intArray) / sizeof(int)));
```

Ausgabe:

```text
Größe von int: 4
Größe des Arrays: 400
Länge des Arrays: 100
```

Man könnte auch eine Funktion dafür schreiben:

```c
int intArrayLength(int* array) {
  return (int) sizeof(*array) / sizeof(int);
}
```

## Zeigerarithmetik

```c
int messwerte[5] = {3, 7, 2, 1, -5};
```

Der Array sieht in etwa so aus:

| Index |  `0` |  `1` |  `2` |  `3` |  `4` |
| ----- | ---: | ---: | ---: | ---: | ---: |
| Wert  |  `3` |  `7` |  `2` |  `1` | `-5` |

Nun können wir einen Zeiger benutzen, um die aktuelle Position im Array zu
kennzeichen.

1. ```c
   int *pos = messwerte; // oder *pos = &messwerte[0]
   ```

   Somit befindet sich der Zeiger an der nullten Stelle im Array:

   | Index |  `0` |  `1` |  `2` |  `3` |  `4` |
   | ----- | ---: | ---: | ---: | ---: | ---: |
   | Wert  |  `3` |  `7` |  `2` |  `1` | `-5` |
   | Pos   |    x |      |      |      |      |

1. Man kann den Wert des Positionszeigers abfragen:

   ```c
   printf("%d", *pos);
   ```

   Das resultiert in der Ausgabe `3`. Das liegt an der Dereferenizerung des
   Zeigers und funktioniert genauso, wie in der letzten Vorlesung, als noch
   keine Array vorhanden waren.

1. Jetzt kann man den Zeiger bewegen und die Werte an der stelle ausgeben:

   ```c
   pos++;
   printf("%d", *pos);
   ```

   | Index |  `0` |  `1` |  `2` |  `3` |  `4` |
   | ----- | ---: | ---: | ---: | ---: | ---: |
   | Wert  |  `3` |  `7` |  `2` |  `1` | `-5` |
   | Pos   |      |    x |      |      |      |

   Die Ausgabe wird also `7` sein, weil das die Position des Zeigers ist.

1. Analog werden folgende Ereignisse passieren:

   ```c
   pos+=2;
   printf("%d", *pos);
   ```

   | Index |  `0` |  `1` |  `2` |  `3` |  `4` |
   | ----- | ---: | ---: | ---: | ---: | ---: |
   | Wert  |  `3` |  `7` |  `2` |  `1` | `-5` |
   | Pos   |      |      |      |    x |      |

   Ausgabe: `1`

1. ```c
   pos--;
   printf("%d", *pos);
   ```

   | Index |  `0` |  `1` |  `2` |  `3` |  `4` |
   | ----- | ---: | ---: | ---: | ---: | ---: |
   | Wert  |  `3` |  `7` |  `2` |  `1` | `-5` |
   | Pos   |      |      |    x |      |      |

   Ausgabe: `2`

### Zeigerarithmetik mit mehrdimenionalen Arrays

```c
int zweidimArray[3][3] = { {1,2,3},
                          {4,5,6},
                          {7,8,9} };

int *pos;
pos = &zweidimArray[0][0]; // am besten in dieser langen Schreibweise zuweisen

printf("%d", *pos); // Ausgabe: 1
pos += 3;
printf("%d", *pos); // Ausgabe: 4

//Diagonale ausgeben
pos = &zweidimArray[0][0];
printf("%d", *pos); // Ausgabe: 1
pos += 4;
printf("%d", *pos); // Ausgabe: 5
pos += 4;
printf("%d", *pos); // Ausgabe: 9

```

## Zusammenfassung

- Array
  - Ermöglichen mehrere Wert des gleichen Datentypes abzuspeichern
  - Zugriff mit eckigen Klammern oder Zeigerarithmetik
    - Zeigerarithmetik
      - Man addiert den Zeiger und springt durch die Positionen im Array
