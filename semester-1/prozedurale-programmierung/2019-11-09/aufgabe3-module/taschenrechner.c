#include <stdio.h>
#include <stdlib.h>

float eingabeZahl(void) {
  char *eingabeString = malloc(255);
  float zahl;
  printf("Bitte Zahl eingeben: ");
  fflush(stdout);
  scanf("%s", eingabeString);
  fflush(stdin);
  zahl = atof(eingabeString);
  free(eingabeString);
  return zahl;
}

float multipliziere(float zahl1, float zahl2) {
  printf("%f, %f, %f\n", zahl1, zahl2, zahl1 * zahl2);
  return zahl1 * zahl2;
}

void ausgabeErgebnis(float ergebnis) {
  printf("Das Ergebnis ist %f\n", ergebnis);
}
