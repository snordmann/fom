#include <stdlib.h>
#include <stdio.h>
#include <signal.h>
#include <math.h>

#define   SECONDS_IN_A_YEAR 31556952
#define   SECONDS_IN_A_WEEK 604800
#define    SECONDS_IN_A_DAY 86400
#define  SECONDS_IN_AN_HOUR 3600
#define SECONDS_IN_A_MINUTE 60

char* readString() {
  char* retval;
  scanf("%s", retval);
  fflush(stdin);
  return retval;
}

int main () {
  signal(SIGINT, exit);

  printf("Second second calculator\n\n");

  int seconds;
  printf("Enter the number of seconds: ");
  fflush(stdout);
  seconds = atoi(readString());

  long secondsLeft = seconds;

  long years = secondsLeft / SECONDS_IN_A_YEAR;
  long weeks = secondsLeft / SECONDS_IN_A_WEEK;
  if (years != 0)
    secondsLeft %= SECONDS_IN_A_YEAR;
  else
    secondsLeft %= SECONDS_IN_A_WEEK;

  long days = secondsLeft / SECONDS_IN_A_DAY;
  secondsLeft %= SECONDS_IN_A_DAY;

  long hours = secondsLeft / SECONDS_IN_AN_HOUR;
  secondsLeft %= SECONDS_IN_AN_HOUR;

  long minutes = secondsLeft / SECONDS_IN_A_MINUTE;
  secondsLeft %= SECONDS_IN_A_MINUTE;

  if (years != 0) {
    printf("\n\n%ds = %da %dd %dh %dm %ds\n", seconds, years, days, hours, minutes, secondsLeft);
  } else if (weeks != 0) {
    printf("\n\n%ds = %dw %dd %dh %dm %ds\n", seconds, weeks, days, hours, minutes, secondsLeft);
  } else if (days != 0) {
    printf("\n\n%ds = %dd %dh %dm %ds\n", seconds, days, hours, minutes, secondsLeft);
  } else if (hours != 0) {
    printf("\n\n%ds = %dh %dm %ds\n", seconds, hours, minutes, secondsLeft);
  } else if (minutes != 0) {
    printf("\n\n%ds = %dm %ds\n", seconds, minutes, secondsLeft);
  } else {
    printf("\n\n%ds = %ds\n", seconds, secondsLeft);
  }
  return 0;
}
