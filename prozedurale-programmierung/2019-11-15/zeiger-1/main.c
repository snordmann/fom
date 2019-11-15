#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

int main(void) {
  signal(SIGINT, exit);

  int zahl = 5;
  int *zeiger = NULL;

  printf("Addresse: %p\n", zeiger);
  if (zeiger != NULL) {
    printf("Wert: %d\n", *zeiger);
  }

  zeiger = &zahl;

  printf("Addresse: %p\n", zeiger);
  if (zeiger != NULL) {
    printf("Wert: %d\n", *zeiger);
  }


  return 0;
}
