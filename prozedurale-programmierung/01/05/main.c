#include <stdlib.h>
#include <stdio.h>
#include <signal.h>

char* readString() {
  char* retval;
  scanf("%s", retval);
  fflush(stdin);
  return retval;
}

int main () {
  signal(SIGINT, exit);

  printf("gas calculator\n\n");

  float gas;
  printf("Enter the complete gas usage: ");
  fflush(stdout);
  gas = (float) atoi(readString());

  float milage;
  printf("Enter the driven kilometers: ");
  fflush(stdout);
  milage = (float) atoi(readString());

  float gasperkm = gas * 100 / milage;

  printf("\n\nThe fuel economy per 100km is %g.\n", gasperkm);

  return 0;
}
