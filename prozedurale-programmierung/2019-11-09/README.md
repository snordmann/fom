# Prozedurale Programmierung

*2019-11-09*

## Funktionsbenutzung vor der Deklaration

Der folgende Code resultiert in eine Warnung:

```c
int main (void) {
  double a=1.5, b=5.3;
  printf("Output of functions: %f", func(a,b));
  return 0;
}

double func (double x, double y) {
  return x/y;
}
```

Warnung:

```text
warning: implicit declaration of function 'func'
warning: format 'if' expects argument of type 'double', but argument 2 has type 'int'
```

### Mögliche Lösungen

#### Lösung 1

Die Funktion vor Benutzung deklarieren:

```c
double func (double x, double y) {
  return x/y;
}

int main (void) {
  double a=1.5, b=5.3;
  printf("Output of functions: %f", func(a,b));
  return 0;
}
```

#### Lösung 2

Funktion dem Compiler bekannt machen, und erst danach deklarieren. (Funktionsprototypen)

```c
double func (double x, double y);

int main (void) {
  double a=1.5, b=5.3;
  printf("Output of functions: %f", func(a,b));
  return 0;
}

double func (double x, double y) {
  return x/y;
}
```

## Modularität durch Trennung von Funktionen in extra Dateien

Wenn eine Bibliothek gebaut wird, braucht man zwei Dateien:

- `taschenrechner.h`
- `taschenrechner.c`

In der Header Datei `taschenrechner.h` werden die Funktionsprototypen
deklariert.
In dem Hauptmodul `taschenrechner.c` wird deklariert, wie diese Funktionen sich
verhalten.

Diese Trennung ist dafür, dass das Hauptmodul auch kompiliert (z.B. DLL)
veröffentlicht wird.

Inhalt der `taschenrechner.h`:

```c
float eingabeZahl(void);
float multipilizere(float, float);
void ausgabeErgebnis(float);
```

Inhalt der `taschenrechner.c`:

```c
float eingabeZahl(void) {
  float zahl;
  printf("Bitte Zahl eingaben: ");
  fflush(stdout);
  scanf("%f", &zahl);
  fflush(stdin);
  return zahl;
}

float multipilizere(float zahl1, float zahl2){
  return zahl1 * zahl2;
}

void ausgabeErgebnis(float ergebnis){
  printf("Das Ergebnis ist %f", ergebnis);
}
```

Einbindung in das Hauptprogramm:

```c
#include "taschenrechner.h"

int main(void) {
  int zahl1, zahl2, ergebnis;

  zahl1 = eingabeZahl();
  zahl2 = eingabeZahl();

  ergebnis = multipilizere(zahl1, zahl2);
  ausgabeErgebnis(ergebnis);

  return 0;
}
```

Durch die Anführungszeichen wird dem Compiler gesagt, dass es zuerst im lokalen
Verzeichnis gucken soll und erst danach die Standardbibliotheken suchen soll.

Danach kann man die Funktionen wie normal benutzen, als ob Sie oberhalb der main
funktion deklariert wurden.
