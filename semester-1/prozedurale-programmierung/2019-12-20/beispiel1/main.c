#include <stdio.h>
#include <signal.h>
#include <stdlib.h>
#include <string.h>

struct Auto {
  char *marke;
  char *modell;
  int listenpreis;
};

int main (void) {
  signal(SIGINT, exit);

  struct Auto fordF150 = {"Ford", "F150", 32000};

  printf("Marke:  %s\n", fordF150.marke);
  printf("Modell: %s\n", fordF150.modell);
  printf("Preis:  €%i\n\n", fordF150.listenpreis);

  struct Auto fordKa;
  struct Auto teslaX;

  /* Werte in Variable fordKa setzen */
  fordKa.marke       = "Ford";
  fordKa.modell      = "Ka";
  fordKa.listenpreis = 14900;

  printf("Marke:  %s\n", fordKa.marke);
  printf("Modell: %s\n", fordKa.modell);
  printf("Preis:  €%i\n\n", fordKa.listenpreis);

  /* Werte in Variable teslaX vom benutzer bekommen */
  teslaX.marke  = malloc(255);
  teslaX.modell = malloc(255);
  
  printf("\nBitte Marke eingeben: ");
  fflush(stdout);
  scanf("%s", teslaX.marke);

  printf("\nBitte Modell eingeben: ");
  fflush(stdout);
  scanf("%s", teslaX.modell);

  printf("\nBitte Preis eingeben: ");
  fflush(stdout);
  scanf("%i", &teslaX.listenpreis);

  printf("\nMarke:  %s\n", teslaX.marke);
  printf("Modell: %s\n", teslaX.modell);
  printf("Preis:  €%i\n\n", teslaX.listenpreis);

  free(teslaX.marke);
  free(teslaX.modell);

  return 0;
}
