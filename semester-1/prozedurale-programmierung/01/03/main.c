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
  signal(SIGINT, exit); // Be able to press ^C to interrupt the program

  printf("Simple sum\n\n");

  float num1;
  printf("Enter the first summand: ");
  fflush(stdout);
  num1 = atof(readString());

  float num2;
  printf("Enter the second summand: ");
  fflush(stdout);
  num2 = atof(readString());

  float sum = num1 + num2;

  printf("\n\n%g + %g = %g\n", num1, num2, sum);

  return 0;
}
