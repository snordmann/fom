#include <stdlib.h>
#include <stdio.h>
#include <signal.h>
#include <math.h>

void sigint(int a)
{
  exit(0);
}

char* readString() {
  char* retval;
  scanf("%s", retval);
  fflush(stdin);
  return retval;
}

int main () {
  signal(SIGINT, sigint);

  printf("cirlce area calculator\n\n");

  float radius;
  printf("Enter the radius of the circle: ");
  fflush(stdout);
  radius = atof(readString());

  // area = 𝜋 * radius * radius
  // acos(-1) = 𝜋
  float area = acos(-1.0) * pow(radius, 2);

  printf("\n\n%g", area);

  return 0;
}
