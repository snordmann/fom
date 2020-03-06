#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <string.h>
#include <time.h>

#define ZEILENLAENGE 120

FILE* openFile (char *filename, char *mode) {
  FILE *fp;
  if ((fp = fopen(filename, mode)) == NULL) {
    printf("[error] Could not open file '%s' in mode '%s'\n", filename, mode);
    exit(1);
  }
  printf("[debug] File '%s' opened in mode '%s'\n", filename, mode);
  return fp;
}

int main (void) {
  signal(SIGINT, exit);

  FILE* fp = NULL;
  char buf[ZEILENLAENGE];

  fp = openFile("./log.csv", "r");
  char *ptr;
  while (fgets(buf, ZEILENLAENGE, fp) != NULL) {

    ptr = strtok(buf, ",");
    printf("Datum: %22s\n", ptr);

    ptr = strtok(NULL, ",");
    printf("Uhr: %24s\n", ptr);

    ptr = strtok(NULL, ",");
    ptr[strcspn(ptr, "\n")] = 0;
    printf("Name: %23s\n", ptr);

    printf("-----------------------------\n");
  }

  fclose(fp);

  return 0;
}
