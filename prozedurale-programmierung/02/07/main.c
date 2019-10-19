#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

#define MAX_VAL 25

int main(void) {
  signal(SIGINT, exit);
  int i;

  for (i=1; i <= MAX_VAL; printf("%d\n", i++));

  printf("\n\n");
  i=1;
  while (i <= MAX_VAL) printf("%d\n",i++);

  printf("\n\n");
  i=1;
  do printf("%d\n",i); while(i++ < MAX_VAL);

  return 0;
}