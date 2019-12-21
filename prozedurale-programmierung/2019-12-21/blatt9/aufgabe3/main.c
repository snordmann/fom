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

typedef struct {
  char datum[11];
  char uhr[6];
  char name[100];
} ENTRY;

void printLog(ENTRY *entry) {
  printf("Datum: %s\n", entry->datum);
  printf("Uhr:   %s\n", entry->uhr);
  printf("User:  %s\n", entry->name);
  printf("--------------------\n");
}

int main (void) {
  signal(SIGINT, exit);

  char *filename = "./log.csv";
  FILE *fp = NULL;

  fp = openFile(filename, "r");

  ENTRY log;

  while (fscanf(fp, "%10s,%5s,%s", log.datum, log.uhr, log.name) != EOF) {
    printLog(&log);
  }

  fclose(fp);
  return 0;
}
