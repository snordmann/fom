#include <stdio.h>
#include <signal.h>
#include <stdlib.h>

typedef struct {
  char *sorte;
  int preis;
  int kilo;
} Apfel;

int anzahlAepfelAbfragen(void) {
  int anzahl = 0;
  printf("Wie viele Apfelsorten werden eingegeben? ");
  fflush(stdout);
  scanf("%i", &anzahl);
  return anzahl;
}

int umsatzBerechnen(Apfel aepfel[], int anzahl) {
  int gesamtumsatz = 0;
  for (int i = 0; i < anzahl; i++) {
    gesamtumsatz += aepfel[i].preis * aepfel[i].kilo;
  }
  return gesamtumsatz;
}

Apfel apfelEinlesen(void) {
  Apfel apfel;
  apfel.sorte = malloc(15);

  printf("Sorte: ");
  fflush(stdout);
  scanf("%s", apfel.sorte);

  printf("Preis in Cent: ");
  fflush(stdout);
  scanf("%i", &apfel.preis);

  printf("Absatz in kg: ");
  fflush(stdout);
  scanf("%i", &apfel.kilo);

  return apfel;
}

int main(void) {
  signal(SIGINT, exit);

  int anzahl = anzahlAepfelAbfragen();
  Apfel aepfel[anzahl];

  for (int i = 0; i < anzahl; i++) {
    printf("\nSorte %i:\n", i+1);
    aepfel[i] = apfelEinlesen();
  }
  
  int gesamtumsatz = umsatzBerechnen(aepfel, anzahl);

  printf("\nGesamtumsatz: %7.2f€\n", gesamtumsatz / 100.0);

  return 0;
}
