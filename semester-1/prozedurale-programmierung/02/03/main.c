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

  int points;
  printf("Number of points (max. 10): ");
  fflush(stdout);
  points = atoi(readString());

  if (points > 10)
    printf("How!???!\n");
  else if (points == 10)
    printf("sehr gut\n");
  else if (points == 9)
    printf("gut\n");
  else if (points == 8)
    printf("befriedigend\n");
  else if (points == 7)
    printf("ausreichend\n");
  else if (points >= 0)
    printf("ungenügend\n");
  else
    printf("HOW !??!?\n");

  return 0;
}