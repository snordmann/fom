#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

struct drink {
  char *name;
  float price;
  int count;
};

const int numChoices = 5;
struct drink choices[] = {
  {.name = "Wasser", .price = 0.49, .count = 0},
  {.name = "Limonade", .price = 0.99, .count = 0},
  {.name = "Wasser 2", .price = 0.74, .count = 0},
  {.name = "Limonade 2", .price = 1.39, .count = 0},
  {.name = "Bier", .price = 1.99, .count = 0}
};

char *readString(char *retval) {
  scanf("%s", retval);
  fflush(stdin);
  return retval;
}

float readFloat() {
  char *input = malloc(255);
  float retVal;
  readString(input);
  retVal = atof(input);
  free(input);
  return retVal;
}

int readInt() {
  char *input = malloc(255);
  int retVal;
  readString(input);
  retVal = atoi(input);
  free(input);
  return retVal;
}

char *printChoice (int index, struct drink *choice) {
  return printf("%d) %-10s (€ %.2f)\n", index, choice->name, choice->price);
}

void printOrder (int numOfItems, struct drink order[]) {
  printf("Your order: ");
  int empty = 1;
  for(int i = 0; i < numOfItems; i++) {
    if(order[i].count) {
      empty = 0;
      printf("%dx %s\t", order[i].count, order[i].name);
    }
  }
  if (empty) {
    printf("None");
  }
  printf("\n");
}

float calculateSum (int numOfItems, struct drink order[]) {
  float sum = 0;
  for(int i = 0; i < numOfItems; i++) {
    sum += order[i].count * order[i].price;
  }
}

float reducePrice(float p) {
  float coinInserted;

  printf("Restbetrag €%.2f\n", p);
  printf("Welche Münze eingeworfen? ");
  fflush(stdout);
  coinInserted = readFloat();

  if (
      coinInserted != 0.01f &&
      coinInserted != 0.02f &&
      coinInserted != 0.05f &&
      coinInserted != 0.10f &&
      coinInserted != 0.20f &&
      coinInserted != 0.50f &&
      coinInserted != 1.00f &&
      coinInserted != 2.00f
    ) {
      printf("Bitte eine gültige Münze einwerfen.\n");
      fflush(stdout);
      return p;
  }

  return p - coinInserted;
}

char *centToEur(char *buf, int cents) {
  switch(cents) {
    case 1:
    case 2:
    case 5:
    case 10:
    case 20:
    case 50:
      sprintf(buf, "%2d¢", cents);
      return buf;
    case 100:
    case 200:
      sprintf(buf, "%2d€", cents / 100);
      return buf;
  }
  return "NaN";
}

void calculateChange(float change) {
  int numberOfPossibleCoins = 8;
  int coinValues[] = {200, 100, 50, 20, 10, 5, 2, 1};
  int changeCoins[numberOfPossibleCoins];
  int remainingChange = (int) round(change * 100);
  
  for (int i = 0; i < numberOfPossibleCoins; i++) {
    int numCoins = remainingChange / coinValues[i];
    remainingChange %= coinValues[i];
    if (numCoins) {
      char *buf = malloc(255);
      printf("%d x %s\n", numCoins, centToEur(buf, coinValues[i]));
      free(buf);
    }
  }
}

int main(void) {
  signal(SIGINT, exit);

  printf("Getränkeautomat v0.1\n\n");

  int choice = -1;
  float priceToPay;
  while (1) {
    printf("0) Bezahlvorgang starten\n");
    for(int i=0; i < numChoices; i++) {
      printChoice(i + 1, &choices[i]);
    }
    printOrder(numChoices, &choices);
    printf("Bitte wählen Sie Ihr Getränk: ");
    fflush(stdout);
    choice = readInt() - 1;
    if (choice >= 0 && choice < numChoices) {
      choices[choice].count++;
    }
    else if (choice == -1)
      break;
    printf("\n");
  }

  priceToPay = calculateSum(numChoices, choices);

  while (priceToPay > 0.0f) {
    if (priceToPay == 0.0f) break;
    priceToPay = reducePrice(priceToPay);
  }

  if (priceToPay == 0.0f) {
    printf("Getränk entnehmen");
    return 0;
  }

  printf("You will get €%.2f back.\n", -priceToPay);
  calculateChange(-priceToPay);
  printf("\n");
  return 0;
}
