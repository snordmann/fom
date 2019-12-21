#include <stdio.h>
#include <signal.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
  char *marke;
  char *modell;
  int listenpreis;
} Auto;

int main (void) {
  signal(SIGINT, exit);

  Auto fuhrpark[2] = {
    {"Ford", "Ka", 13900},
    {"Ford", "F150", 34900}
  };

  for (int i = 0; i < 2; i ++) {
    printf("Marke:  %s\n", fuhrpark[i].marke);
    printf("Modell: %s\n", fuhrpark[i].modell);
    printf("Preis:  €%i\n\n", fuhrpark[i].listenpreis);
  }
  return 0;
}
