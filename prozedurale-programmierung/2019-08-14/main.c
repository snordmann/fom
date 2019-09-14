/**
 * Szenario: Preis=149€, Menge=200, Einwohner=10000
 * Ziel: Umsatz pro Einwohner berechnern
 */

#include <stdio.h>
#include <time.h>

void logger(const char* tag, const char* message) {
  time_t now;
  time(&now);
  char buf[sizeof "0000-00-00T00:00:00Z"];
  strftime(buf, sizeof buf, "%FT%TZ", gmtime(&now));
  printf("%s [%s]: %s\n", buf, tag, message);
}

int main(void) {
  float preis, umsatz, umsatzProEinwohner; // Preise können Kommazahlen sein
  int menge, einwohner; // Menschen und Verkaufmengen können nicht fraktional sein
  logger("debug", "Variablen wurden erfolgreich deklariert");

  preis=149;
  menge=200;
  einwohner=10000;
  logger("debug", "Variablen wurden erfolgreich zugewiesen");
  printf("%20s: %.2f€\n", "Preis", preis);
  printf("%20s: %d\n", "Menge", menge);
  printf("%20s: %d\n", "Einwohner", einwohner);
  printf("\n");

  umsatz = menge * preis;
  umsatzProEinwohner = umsatz / einwohner;
  logger("debug", "Umsatz und Umsatz pro Einwohner wurde erfolgreich errechnet");

  printf("%20s: %.2f€\n", "Gesamtumsatz", umsatz);
  printf("%20s: %.2f€\n", "Umsatz pro Einwohner", umsatzProEinwohner);
  logger("info", "Programm erfolgreich beendet");
  return 0;
}
