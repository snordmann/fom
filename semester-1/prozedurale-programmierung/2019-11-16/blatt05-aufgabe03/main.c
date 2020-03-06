#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

#define ZEILEN 20
#define SPALTEN 20

/**
 * Far too much code for just formating the output
 */

int numberOfDigits(long double number) {
  return snprintf(NULL, 0, "%.0Lf", number);
}

void printSpaces(int numberOfSpaces) {
  for (int i=0; i<numberOfSpaces; i++){
    printf(" ");
  }
}

int maximumDigits(int *row) {
  long double product = 1;
  for(int j = 0; j < SPALTEN; j++) {
      product *= row[j];
  }
  return numberOfDigits(product);
}

int main(void) {
  signal(SIGINT, exit);

  int paare[ZEILEN][SPALTEN] = { 0 };

  // initialisiere werte des arrays
  for(int i = 0; i < ZEILEN; i++) {
    for(int j = 0; j < SPALTEN; j++) {
      paare[i][j] = SPALTEN*i+j+1;
    }
  }

  int maxNumDigits = maximumDigits(paare[ZEILEN-1]);

  // produkt berechnen und ausgeben
  for(int i = 0; i < ZEILEN; i++) {
    long double product = 1.0;

    for(int j = 0; j < SPALTEN; j++) {
      printf("%3d ", paare[i][j]);
      product *= paare[i][j];
    }
    int numDigits = numberOfDigits(product);
    printf("| ");
    printSpaces(maxNumDigits - numDigits);
    printf("%.0Lf\n", product);
  }

  return 0;
}
