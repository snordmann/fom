#include "max.h"

#ifndef PI
#define PI 3.1415926
#endif

float umfang(float radius) {
  return 2 * PI * absol(radius);
}

float flaeche(float radius) {
  return PI * radius * radius; // no need to take abolute value, because square is always positive
}
