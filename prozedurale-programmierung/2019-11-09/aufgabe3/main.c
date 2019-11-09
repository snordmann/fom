#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

/**
 * Implementieren Die einen Multiplikationstaschenrechner, der folgendes leistet:
 * - Benutzer auffordern, EIngaben zu tätigen
 * - Eingabe von Zahl 1
 * - Eingabe von Zahl 2
 * - Ergebnis ausrechnen: Zahl1 * Zahl2
 * - Ergebnis ausgeben
 * 
 * Implementieren Sie dabei drei FUnktionen:
 * - float eingabeZahl(void) für die Eingabe einer Zahl durch den Benutzer
 * - float multipliziere(float, float) multipliziert zwei Zahlen
 * - void ausgabeErgebnis(float) gibt das Ergebnis auf der Konsole aus
 */

float eingabeZahl(void) {
  char *eingabeString = malloc(255);
  float zahl;
  printf("Bitte Zahl eingaben: ");
  fflush(stdout);
  scanf("%s", eingabeString);
  fflush(stdin);
  zahl = atof(eingabeString);
  free(eingabeString);
  return zahl;
}

float multipliziere(float zahl1, float zahl2) {
  return zahl1 * zahl2;
}

void ausgabeErgebnis(float ergebnis) {
  printf("Das Ergebnis ist %f", ergebnis);
}

int main(void) {
  signal(SIGINT, exit);

  float zahl1 = eingabeZahl();
  float zahl2 = eingabeZahl();
  float ergebnis = multipliziere(zahl1, zahl2);
  ausgabeErgebnis(ergebnis);

  return 0;
}
