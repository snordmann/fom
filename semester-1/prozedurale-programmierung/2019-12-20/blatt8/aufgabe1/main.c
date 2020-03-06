#include <stdio.h>
#include <signal.h>
#include <stdlib.h>
#include <string.h>

struct spender {
  float betrag;
  char vorname[30];
  char nachname[30];
};

int main (void) {
  signal(SIGINT, exit);

  struct spender einSpender;

  printf("Bitte den Vornamen des Spenders eingeben: ");
  fflush(stdout);
  scanf("%s", einSpender.vorname);
  printf("\n");

  printf("Bitte den Nachnamen des Spenders eingeben: ");
  fflush(stdout);
  scanf("%s", einSpender.nachname);
  printf("\n");

  printf("Bitte die Spendenhöhe eingeben: €");
  fflush(stdout);
  scanf("%f", &einSpender.betrag);
  printf("\n");


  printf("\n%s %s hat €%.2f gespendet.\n",
      einSpender.vorname, einSpender.nachname, einSpender.betrag);

  return 0;
}
