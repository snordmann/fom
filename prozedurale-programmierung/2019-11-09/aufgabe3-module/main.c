#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

#include "taschenrechner.h"

int main(void) {
  signal(SIGINT, exit);

  float zahl1 = eingabeZahl();
  float zahl2 = eingabeZahl();

  float ergebnis = multipliziere(zahl1, zahl2);

  ausgabeErgebnis(ergebnis);

  return 0;
}
