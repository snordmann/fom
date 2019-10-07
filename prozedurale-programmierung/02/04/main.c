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

  switch(points) {
    case 10:
      printf("sehr gut\n");
      break;
    case 9:
      printf("gut\n");
      break;
    case 8:
      printf("befriedigend\n");
      break;
    case 7:
      printf("ausreichend\n");
      break;
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
      printf("ungenügend\n");
      break;
    default:
      printf("How!???!\n");
  }

  return 0;
}