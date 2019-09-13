#include <stdlib.h>
#include <stdio.h>
#include <signal.h>
#include <math.h>

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

  printf("Second calculator\n\n");

  int days;
  printf("Enter the number of days: ");
  fflush(stdout);
  days = atoi(readString());

  long hours = 24 * days;
  long minutes = 60 * hours;
  long seconds = 60 * minutes;

  printf("\n\n%d days = %d hours = %d minutes = %d seconds\n", days, hours, minutes, seconds);

  return 0;
}
