#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <time.h>

FILE* openFile (char *filename, char *mode) {
  FILE *fp;
  if ((fp = fopen(filename, mode)) == NULL) {
    printf("[error] Could not open file '%s' in mode '%s'\n", filename, mode);
    exit(1);
  }
  printf("[debug] File '%s' opened in mode '%s'\n", filename, mode);
  return fp;
}

int main(void) {
  signal(SIGINT, exit);
  time_t t;
  srand((unsigned) time(&t));

  int i = 0;
  int anzahlDaten = 5;
  int daten[anzahlDaten];

  for (i = 0; i < anzahlDaten; i++) {
    daten[i] = rand();
  }

  FILE *fp = NULL;
  char *filename = "test.txt";
  
  fp = openFile(filename, "w");

  for (i = 0; i < anzahlDaten; i++) {
    fprintf(fp, "%i\n", daten[i]);
  }

  fclose(fp);
  printf("[debug] File '%s' closed\n", filename);

  fp = openFile(filename, "r");

  int datenGelesen[anzahlDaten];
  int line;
  i = 0;

  while(fscanf(fp, "%i", &line) != EOF) {
    datenGelesen[i++] = line;
  }

  fclose(fp);
  printf("[debug] File '%s' closed\n", filename);

  for (i = 0; i < anzahlDaten; i++) {
    printf("%d. Wert: %d\n", i+1, datenGelesen[i]);
  }

  return 0;
}
