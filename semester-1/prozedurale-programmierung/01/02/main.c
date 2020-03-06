#include <stdio.h>

void printVars(int a, int b, int c, int d) {
  printf("%d\t%d\t%d\t%d\n", a, b, c, d);
}

int main(void) {
  int a, b=5, c, d; // a=N/A, b=5, c=N/A, d=N/A
  printVars(a,b,c,d);

  a = b / 2; // a=2
  printVars(a,b,c,d);
  c = b % 2; // c=1
  printVars(a,b,c,d);
  d = b << a; // d=20
  printVars(a,b,c,d);
  b = 1 - --b; // b=-3
  printVars(a,b,c,d);

  b *= -3; // b=9
  printVars(a,b,c,d);
  d %= 3; // d=2
  printVars(a,b,c,d);
  c += b * d + 4; // c=23
  printVars(a,b,c,d);
  a = --b + d++; // a=10, b=8, d=3
  printVars(a,b,c,d);
  d *= 3 * 2 + 1; // d=21
  printVars(a,b,c,d);

  a=0; b=2; c=3; d=4; // a=0, b=2, c=3, d=4
  printVars(a,b,c,d);
  a = (b + 2) * 2 * c + 1; // a=25
  printVars(a,b,c,d);
  a = ++b * d++ * ++c * (-1); // a=-48; b=3; d=5; c=4
  printVars(a,b,c,d);
  a = d++ + d; // a=11 ; d=6
  printVars(a,b,c,d);
}