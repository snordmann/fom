#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

char* readString() {
  char* retval;
  scanf("%s", retval);
  fflush(stdin);
  return retval;
}

int main(void) {
  signal(SIGINT, exit);

  printf("First If-Else program\n\n");

  int alter;
  int gender;

  printf("Please enter your age: ");
  fflush(stdout);
  alter = atoi(readString());

  printf("\n");
  printf("(1) male\n");
  printf("(2) female\n");
  printf("(3) non-binary\n");
  printf("(0) prefer not to answer\n");
  printf("Please enter your gender: ");
  fflush(stdout);
  gender = atoi(readString());

  // (condition) ? (true-case) : (false-case)
  char* RenterString = gender == 1 ? "ein Rentner" : gender == 2 ? "eine Rentnerin" : "ein*e Rentner*in";
  char* ErwaschenString = gender == 1 ? "ein Erwachsener" : gender == 2 ? "eine Erwachsene" : "ein*e Erwachsene*r";
  char* JugendString = gender == 1 ? "ein Minderjähriger" : gender == 2 ? "eine Minderjährige" : "ein*e Minderjährige*r";

  printf("\n");

  if (alter >= 67) {
    printf("Sie sind %s\n", RenterString);
  } else if (alter >= 18) {
    printf("Sie sind %s\n", ErwaschenString);
  } else {
    printf("Sie sind %s\n", JugendString);
  }

}