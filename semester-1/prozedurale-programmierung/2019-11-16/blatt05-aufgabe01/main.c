#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

void inputChar(char *var) {
  scanf("%s", var);
  fflush(stdin);
}

int inputInt(void) {
  char* eingabeChar = malloc(255);
  inputChar(eingabeChar);
  int eingabe = atoi(eingabeChar);
  free(eingabeChar);
  return eingabe;
}

float inputFloat(void) {
  char* eingabeChar = malloc(255);
  inputChar(eingabeChar);
  float eingabe = atof(eingabeChar);
  return eingabe;
}

float sum(float *array, int length) {
  float summe = 0.0;
  for(int i = 0; i < length; i++) {
    summe += array[i];
  }
  return summe;
}

float durchschnitt(float* array, int length) {
  return sum(array, length) / length;
}

void printArray(float * array, int length) {
  for(int i = 0; i < length; i++) {
    printf("%d: %f\n", i, array[i]);
  }
  printf("\n");
}

int main(void) {
  signal(SIGINT, exit);

  printf("Bitte geben Sie die Anzahl der Noten ein: ");
  fflush(stdout);
  int anzahl = inputInt();

  float noten[anzahl];

  for(int i = 0; i <anzahl; i++) {
    printf("Bitte geben Sie die %d. Note ein: ", i+1);
    fflush(stdout);
    noten[i] = inputFloat();
  }

  printf("Der Durschnitt lautet: %f\n", durchschnitt(noten, anzahl));

  return 0;
}
