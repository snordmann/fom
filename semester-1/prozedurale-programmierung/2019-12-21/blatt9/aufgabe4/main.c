#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <string.h>
#include <time.h>

#define ZEILENLAENGE 150

FILE* openFile (char *filename, char *mode) {
  FILE *fp;
  if ((fp = fopen(filename, mode)) == NULL) {
    printf("[error] Could not open file '%s' in mode '%s'\n", filename, mode);
    exit(1);
  }
  printf("[debug] File '%s' opened in mode '%s'\n", filename, mode);
  return fp;
}

void printFile (FILE *fp) {
  char buf[ZEILENLAENGE];
  while (fgets(buf, ZEILENLAENGE, fp) != NULL) {
    printf("%s", buf);
  }
}

int main (void) {
  signal(SIGINT, exit);

  FILE* fp = NULL;
  FILE* copy = NULL;
  char buf[ZEILENLAENGE];

  fp = openFile("./log.csv", "r");
  copy = openFile("./copy.csv", "w");
  while (fgets(buf, ZEILENLAENGE, fp) != NULL) {
    fputs(buf, copy);
  }

  fclose(fp);
  fclose(copy);

  copy = openFile("./copy.csv", "r");
  printFile(copy);
  fclose(copy);

  return 0;
}
