#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

int main(void) {
  signal(SIGINT, exit);

  int a = 5;
  int *c = &a;
  int **e = &c;
  printf("Address of a: %p\n", &a);
  printf("Address of a: %p\n", c);
  printf("Address of a: %p\n", *e);
  printf("Value of a: %p\n", a);
  printf("Value of a: %p\n", *c);
  printf("Value of a: %p\n", **e);
  printf("\n");

  printf("Address of c: %p\n", &c);
  printf("Address of c: %p\n", e);
  printf("Value of c: %p\n", &a);
  printf("Value of c: %p\n", c);
  printf("Value of c: %p\n", *e);
  printf("\n");

  printf("Address of e: %p\n", &e);
  printf("Value of e: %p\n", &c);
  printf("Value of e: %p\n", e);
  printf("\n");


  char one = 'a';
  float two = 2.0;
  int three = 3;

  void *ptr = NULL;

  ptr = &one;
  printf("Value of one: %c\n", *((char*) ptr));
  printf("Sizeof of one: %p\n", sizeof(ptr));
  ptr = &two;
  printf("Value of two: %f\n", *((float*) ptr));
  printf("Sizeof of two: %p\n", sizeof(ptr));
  ptr = &three;
  printf("Value of three: %d\n", *((int*) ptr));
  printf("Sizeof of three: %p\n", sizeof(ptr));

  return 0;
}
