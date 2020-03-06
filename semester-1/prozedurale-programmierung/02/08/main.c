#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

#define NUMBERX 20
#define NUMBERY 100

int main(void) {
  signal(SIGINT, exit);

  for(int x = 0; x < NUMBERX; x++) {
    for(int y = 0; y < NUMBERY; y++) {
      if ((y*x-6)%11 == 0) printf("*");
      else if(x == NUMBERX-1) printf("_");
      else if (y == 0) printf("|");
      else printf(" ");
    }
    printf("\n");
  }

  return 0;
}