#include <stdlib.h>
#include <stdio.h>
#include <signal.h>

void sigint(int a)
{
  exit(0);
}

char* readString() {
  char* retval;
  scanf("%s", retval);
  fflush(stdin);
  return retval;
}

int main () {
  signal(SIGINT, sigint);

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

  printf("\n\n%g", gasperkm);

  return 0;
}
