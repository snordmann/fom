#include <stdlib.h>
#include <stdio.h>
#include <signal.h>
#include <string.h>

#define HOURS_IN_A_DAY 24
#define MINUTES_IN_A_DAY 1440
#define SECONDS_IN_A_DAY 86400

size_t str_format_int_grouped(char dst[16], int num)
{
  char src[16];
  char *p_src = src;
  char *p_dst = dst;

  const char separator = ',';
  int num_len, commas;

  num_len = sprintf(src, "%d", num);

  if (*p_src == '-') {
    *p_dst++ = *p_src++;
    num_len--;
  }

  for (commas = 2 - num_len % 3;
    *p_src;
    commas = (commas + 1) % 3)
  {
    *p_dst++ = *p_src++;
    if (commas == 1) {
      *p_dst++ = separator;
    }
  }
  *--p_dst = '\0';

  return (size_t)(p_dst - dst);
}

char* readString() {
  char* retval;
  scanf("%s", retval);
  fflush(stdin);
  return retval;
}

int main () {
  signal(SIGINT, exit);

  printf("Second calculator\n\n");

  int days;
  printf("Enter the number of days: ");
  fflush(stdout);
  days = atoi(readString());
  // scanf("%d", &days);
  // fflush(stdin);


  long hours   = HOURS_IN_A_DAY   * days;
  long minutes = MINUTES_IN_A_DAY * days;
  long seconds = SECONDS_IN_A_DAY * days;

  char hoursStr[16],
      minutesStr[16],
      secondsStr[16];

  str_format_int_grouped(hoursStr, hours);
  str_format_int_grouped(minutesStr, minutes);
  str_format_int_grouped(secondsStr, seconds);

  printf("\n\n%d days = %s hours = %s minutes = %s seconds\n", days, hoursStr, minutesStr, secondsStr);

  return 0;
}
