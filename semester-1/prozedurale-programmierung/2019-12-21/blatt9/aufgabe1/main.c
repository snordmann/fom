#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

int main(void) {
  signal(SIGINT, exit);

  FILE *fp = NULL;
  char *filename = "test.txt";
  char *mode = NULL;
  
  mode = "w";
  if ((fp = fopen(filename, mode)) == NULL) {
    printf("[error] Could not open file '%s' in mode '%s'\n", filename, mode);
    return 1;
  }
  printf("[debug] File '%s' opened in mode '%s'\n", filename, mode);

  fprintf(fp, "Hello World!\n");

  fclose(fp);
  printf("[debug] File '%s' closed\n", filename);

  mode = "a";
  if ((fp = fopen(filename, mode)) == NULL) {
    printf("[error] Could not open file '%s' in mode '%s'\n", filename, mode);
    return 1;
  }
  printf("[debug] File '%s' opened in mode '%s'\n", filename, mode);

  fprintf(fp, "Second line\n");

  fclose(fp);
  printf("[debug] File '%s' closed\n", filename);

  return 0;
}
