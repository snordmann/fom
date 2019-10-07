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
  
  int weekDay = -1, locale = -1;

  char *weekDays[5][7] = {
    {"Monday",    "Tuesday",  "Wednesday", "Thursday",   "Friday",   "Saturday",  "Sunday"},
    {"Montag",    "Dienstag", "Mittwoch",  "Donnerstag", "Freitag",  "Samstag",   "Sonntag"},
    {"Lundi",     "Mardi",    "Mercredi",  "Jeudi",      "Vendredi", "Samedi",    "Dimanche"},
    {"Lunes",     "Martes",   "Miércoles", "Jueves",     "Viernes",  "Sábado",    "Domingo"},
    {"Pazartesi", "Salı",     "Çarsamba",  "Persembe",   "Cuma",     "Cumartesi", "Pazar"},
  };


  while (locale < 1 || locale > 5) {
    printf("1. en\n");
    printf("2. de\n");
    printf("3. fr\n");
    printf("4. es\n");
    printf("5. tr\n");
    printf("Please enter your language: ");
    fflush(stdout);
    locale = atoi(readString());
  }




  while (weekDay < 1 || weekDay > 7) {
    printf("The day of the week [1-7]: ");
    fflush(stdout);
    weekDay = atoi(readString());
  }

  printf("%s\n", weekDays[--locale][--weekDay]);

  return 0;
}
