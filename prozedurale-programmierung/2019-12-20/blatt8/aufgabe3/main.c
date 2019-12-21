#include <stdio.h>
#include <signal.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
  char *sorte;
  int preis;
  int kilo;
} Apfel;

#define anzahlAepfel 3

int main(void) {
  signal(SIGINT, exit);

  Apfel aepfel[anzahlAepfel] = {
    {"Jonagold", 149, 29},
    {"Delicious", 159, 15},
    //{"Carnet", 215, 57},
    {"Elstar", 199, 35}
  };
  
  int gesamtumsatz = 0;


  printf("\nSorte\t\tPreis\t\t\b\bx Absatz\t\t= Umsatz\n");
  printf("--------------------------------------------------------\n");

  for (int i = 0; i < anzahlAepfel; i++) {
    int umsatz = aepfel[i].kilo * aepfel[i].preis;
    gesamtumsatz += umsatz;
    printf("%-12s\t%4.2f€/kg\t%3ikg\t\t%7.2f€\n", 
      aepfel[i].sorte,
      aepfel[i].preis/100.0,
      aepfel[i].kilo,
      umsatz/100.0
    );
  }
  printf("--------------------------------------------------------\n");

  printf("Gesamtumsatz:\t\t\t\t\t%7.2f€\n", gesamtumsatz / 100.0);

  return 0;
}
