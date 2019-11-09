float max(float zahl1, float zahl2) {
  if (zahl1 > zahl2)
    return zahl1;
  return zahl2;
}

float min(float zahl1, float zahl2) {
  if (zahl1 < zahl2)
    return zahl1;
  return zahl2;
}

float absol(float zahl) {
  return max(zahl, -zahl);
}
