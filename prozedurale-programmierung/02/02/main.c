#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

int main(void) {
  signal(SIGINT, exit);

  int begin, count, end;

  begin = 0;
  count = 5; 
  end   = 10;
  if( begin < count < end ) printf("1. %d\n",count);

  begin = 7;
  count = 5; 
  end   = -10;
  if( begin < count < end ) printf("2. %d\n",count);

  begin = 7;
  count = 5; 
  end   = 10;
  if( begin < count < end ) printf("3. %d\n",count);

  return 0;
}