#include <stdio.h>
#include <signal.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

struct Datum {
  int jahr;
  int monat;
  int tag;
};

char* printDatum (struct Datum *datum) {
  char *buf = malloc(10);
  sprintf(buf, "%04d-%02d-%02d", datum->jahr, datum->monat, datum->tag);
  return buf;
}

struct Datum createDatum(int jahr, int monat, int tag) {
  struct Datum datum;
  datum.jahr = jahr;
  datum.monat = monat;
  datum.tag = tag;
  return datum;
}

struct Datum getCurrentDatum(void) {
  time_t now = time(0);
  struct tm *local = localtime(&now);

  return createDatum(local->tm_year + 1900, local->tm_mon + 1, local->tm_mday);
}

struct Datum parseDatum(char* input) {
  char *ptr = NULL;
  struct Datum datum;

  ptr = strtok(input, ".");
  datum.tag = atoi(ptr);
  ptr = strtok(NULL, ".");
  datum.monat = atoi(ptr);
  ptr = strtok(NULL, ".");
  datum.jahr = atoi(ptr);

  return datum;
}

struct Person {
  char* vorname;
  char* nachname;
  struct Datum geburtstag;
};

struct Rechnung {
  struct Person kunde;
  int betrag;
  struct Datum datum;
};

int main (void) {
  signal(SIGINT, exit);

  struct Rechnung rechnung;

  rechnung.kunde.vorname = malloc(255);
  rechnung.kunde.nachname = malloc(255);

  printf("Bitte den Vornamen des Kunden eingeben: ");
  fflush(stdout);
  scanf("%s", rechnung.kunde.vorname);
  printf("\n");

  printf("Bitte den Nachnamen des Kunden eingeben: ");
  fflush(stdout);
  scanf("%s", rechnung.kunde.nachname);
  printf("\n");

  printf("Bitte das Gebutsdatum des Kunden eingeben (DD.MM.YYYY): ");
  fflush(stdout);
  char* tmp = malloc(10);
  scanf("%s", tmp);
  rechnung.kunde.geburtstag = parseDatum(tmp);
  free(tmp);
  printf("\n");

  printf("Bitte die Rechnungshöhe eingeben: €");
  fflush(stdout);
  scanf("%i", &rechnung.betrag);
  printf("\n");

  rechnung.datum = getCurrentDatum();

  printf("%s: %s %s (geboren am %s) hat eine Rechnung in Höhe von €%d.\n",
        printDatum(&rechnung.datum),
        rechnung.kunde.vorname,
        rechnung.kunde.nachname,
        printDatum(&rechnung.kunde.geburtstag),
        rechnung.betrag);

  return 0;
}
