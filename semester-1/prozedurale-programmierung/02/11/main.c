#include <stdlib.h>
#include <stdio.h>
#include "functions.h"

int sortenwahl(void) {
  int sorte;
  printf("Waehlen sie ihr Getraenk aus:\n");
  printf("1) Wasser (0,50 Euro)\n");
  printf("2) Limonade (1,00 Euro)\n");
  printf("3) Bier (2,00 Euro)\n\n");
  printf("Geben sie 1, 2 oder 3 ein: \n");
  scanf("%d", &sorte);

  return sorte;
}

float einzelpreisfestlegen(int sorte) {
  float preis=0.0;
  switch(sorte) {
      case 1: preis = 0.5; break;
      case 2: preis = 1.0; break;
      case 3: preis = 1.0; break;
  }
  return preis;
}

int mengeneingabe(void) {
  int menge=1;
  printf("\nGeben sie die gewuenschte Menge ein: \n");
  scanf("%d", &menge);
  return menge;
}

float bezahlvorgang(float gesamtpreis) {
  printf("\n--- Bezahlvorgang ---\n");
  float einwurf;
  do {
    printf("\nEs fehlen noch %.2f Euro.", gesamtpreis);
    printf("\nBitte werfen sie ein Geldstueck ein: \n");
    scanf("%f", &einwurf);
    gesamtpreis -= einwurf;

  } while(gesamtpreis > 0.0);
  return -gesamtpreis;
}

void ausgabe(int menge, float restgeld) {
  printf("\n--- Getraenkeausgabe ---\n");
  int i;
  for(i=1; i <= menge; i++)  {
    printf("\nFlasche %d von %d wurde ausgegeben.", i, menge);
  }

  if(restgeld>0){
    printf("\n\nBitte entnehmen Sie Ihr Wechselgeld von %.2f Euro.\n", restgeld);
  }

  printf("\n\nVielen Dank, bitte entnehmen sie ihre Getraenke.\n");
}

int main(void) {
  printf("Getraenke Automat v0.3\n\n");

  int sorte = sortenwahl();
  int menge = mengeneingabe();
  float preis = einzelpreisfestlegen(sorte);
  float zuZahlen = gesamtpreisberechnen(preis, menge);
  float restgeld = bezahlvorgang(zuZahlen);
  ausgabe(menge, restgeld);

	return 0;
}
