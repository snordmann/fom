#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

#include "max.h"
#include "kreisberechnung.h"

#ifndef PI
#define PI 3.1415926
#endif

int assertEqual(int expected, int actual) {
  if (expected != actual) {
    printf("Expected %d, got %d\n", expected, actual);
    exit(1);
  }
  return 0;
}

void testMax(void) {
  assertEqual(5.0, max(4.0,5.0)); // works with natural numbers
  assertEqual(5.0, max(5.0,5.0)); // works when numbers are equal
  assertEqual(-5.0, max(-6.0,-5.0)); // works with negative numbers
  assertEqual(1.0, max(1.0,-1.0)); // isn't confused negative and positive numbers
  assertEqual(1.1, max(1.09,1.1)); // works with float
  assertEqual(-5.1, max(-5.11,-5.1)); // works with negative float
}
void testMin(void) {
  assertEqual(4.0, min(4.0,5.0)); // works with natural numbers
  assertEqual(5.0, min(5.0,5.0)); // works when numbers are equal
  assertEqual(-6.0, min(-6.0,-5.0)); // works with negative numbers
  assertEqual(-1.0, min(1.0,-1.0)); // isn't confused negative and positive numbers
  assertEqual(1.09, min(1.09,1.1)); // works with float
  assertEqual(-5.11, min(-5.11,-5.1)); // works with negative float
}

void testAbsol(void) {
  assertEqual(5.0, absol(5.0)); // works with positive numbers
  assertEqual(5.0, absol(-5.0)); // works with negative numbers
  assertEqual(0.0, absol(0.0)); // works with zero
}

void testKreisUmfang(void) {
  assertEqual(PI * 2.0, umfang(1.0));
  assertEqual(PI * 10.0, umfang(5.0));
  assertEqual(PI * 10.0, umfang(-5.0)); // return positive for negative radius
}
void testKreisFlaeche(void) {
  assertEqual(PI, flaeche(1.0));
  assertEqual(PI * 25.0, flaeche(5.0));
  assertEqual(PI * 25.0, flaeche(-5.0)); // works with negative numbers
}

void runTests(void) {
  testMax();
  testMin();
  testAbsol();
  testKreisUmfang();
  testKreisFlaeche();
  printf("All tests passed\n");
}

int main(void) {
  runTests();
}
