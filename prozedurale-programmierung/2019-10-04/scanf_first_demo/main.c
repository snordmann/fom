#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

void handle_sigint(int code) {
  printf("\nStopping now...\n\n");
  exit(code);
}

int main(void) {
  signal(SIGINT, handle_sigint); // Be able to press ^C to interrupt the program

  int zahl;
  printf("Bitte Zahl eingeben: ");
  fflush(stdout);
  scanf("%d", &zahl);
  fflush(stdin);

  printf("Sie haben '%d'  eingegeben\n\n", zahl);

  char eingabe;
  do {
    printf("Wollen Sie die Datei wirklich löschen? [y|n] ");
    fflush(stdout);
    scanf("%c", &eingabe);
    fflush(stdin);
  } while (! (eingabe == 'y' || eingabe == 'n'));
  if (eingabe == 'y') printf("Datei wird gelöscht...\n");
  else printf("Abbruch\n");

  return 0;
}