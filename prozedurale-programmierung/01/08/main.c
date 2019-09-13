#include <stdlib.h>
#include <stdio.h>
#include <signal.h>
#include <math.h>

#define SECONDS_IN_A_DAY (60*60*24)
#define SECONDS_IN_AN_HOUR (60*60)
#define SECONDS_IN_A_MINUTE 60

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

  printf("Second second calculator\n\n");

  int seconds;
  printf("Enter the number of seconds: ");
  fflush(stdout);
  seconds = atoi(readString());

  long secondsLeft = seconds;
  long days = seconds / SECONDS_IN_A_DAY;
  secondsLeft -= (int) days * SECONDS_IN_A_DAY;
  long hours = secondsLeft / SECONDS_IN_AN_HOUR;
  secondsLeft -= (int) hours * SECONDS_IN_AN_HOUR;
  long minutes = secondsLeft / SECONDS_IN_A_MINUTE;
  secondsLeft -= (int) minutes * SECONDS_IN_A_MINUTE;

  printf("\n\n%ds = %dd %dh %dm %ds\n", seconds, days, hours, minutes, secondsLeft);

  return 0;
}
