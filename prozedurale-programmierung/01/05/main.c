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
  gas = atof(readString());

  float milage;
  printf("Enter the driven kilometers: ");
  fflush(stdout);
  milage = atof(readString());

  float gasperkm = gas * 100 / milage;

  printf("\n\nThe fuel economy is %g l/100km.\n", gasperkm);

  return 0;
}
