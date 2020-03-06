#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

#define PI 3.1415926

float berechneUmfang(float*);
float berechneFlaeche(float*);

void berechneUmfangErg(float, float*);
void berechneFlaecheErg(float, float*);

int main(void) {
  signal(SIGINT, exit);

  float radius = 5.0;

  printf("Radius: %f\n", radius);
  printf("Umfang: %f\n", berechneUmfang(&radius));
  printf("Fläche: %f\n", berechneFlaeche(&radius));
  printf("\n");

  float umfang;
  float flaeche;

  berechneUmfangErg(radius, &umfang);
  berechneFlaecheErg(radius, &flaeche);

  printf("Radius: %f\n", radius);
  printf("Umfang: %f\n", umfang);
  printf("Fläche: %f\n", flaeche);
  printf("\n");

  return 0;
}

void berechneUmfangErg(float radius, float* ergebnis) {
  *ergebnis = 2.0 * PI * radius;
}

void berechneFlaecheErg(float radius, float* ergebnis) {
  *ergebnis = PI * radius * radius;
}

float berechneUmfang(float* radius) {
  return 2.0 * PI * (*radius);
}
float berechneFlaeche(float* radius) {
  return PI * (*radius) * (*radius);
}
