#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

char* readString() {
  char* retval;
  scanf("%s", retval);
  fflush(stdin);
  return retval;
}

int main(void) {
  signal(SIGINT, exit);
  
  int num1, num2;

  printf("Please enter number 1: ");
  fflush(stdout);
  num1 = atoi(readString());

  printf("Please enter number 2: ");
  fflush(stdout);
  num2 = atoi(readString());

  if (num1 > num2)
    printf("%d is greater than %d\n", num1, num2);
  else if (num1 == num2)
    printf("%d is equal to %d\n", num1, num2);
  else if (num1 < num2)
    printf("%d is less than %d\n", num1, num2);
  else
    printf("NaN\n");

  return 0;
}
