#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

#define ZEILEN 5
#define SPALTEN 2

int main(void) {
  signal(SIGINT, exit);

  int paare[ZEILEN][SPALTEN] = {
      {1,2}
    , {3,4}
    , {5,6}
    , {7,8}
    , {9,10}
  };

  for(int i = 0; i < ZEILEN; i++) {
    printf("%02d * %02d = %02d\n", paare[i][0], paare[i][1], paare[i][0] * paare[i][1]);
  }

  return 0;
}
