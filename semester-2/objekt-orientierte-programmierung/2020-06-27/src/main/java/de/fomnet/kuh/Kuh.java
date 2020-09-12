package de.fomnet.kuh;

/** Klasse Kuh
 * 
 * <h3>Implementierte Features:</h3><br>
 * <ul>
 * <li>...</li>
 * <li>...</li>
 * <li>...</li>
 * </ul>
 * <br>
 * 
 * @author IHR NAME
 * @since 6/20
 * @version 1.0
 */
public class Kuh {

  private int alter; // dies ist eine Instanzvariable
  private static int anzahl; // dies ist eine Klassenvariable
  private static double maxMilchInEuter = 15;

  // 3
  private double milchInEuter;
  
  // 6
  public Kuh() {
    this(18, 5.0);
  }
  
  // 5
  public Kuh(int alter, double milchInEuter) {
    this.alter        = alter;
    this.milchInEuter = milchInEuter;
    Kuh.anzahl        = Kuh.anzahl + 1;
  }

  // 1
  public int getAlter() {
    return alter;
  }
  public double getAlter(int Zahl) {
    return (double) Zahl;
  }

  // 2
  public Kuh setAlter(int alter) {
    this.alter = alter;
    return this;
  }

  // 4
  public Kuh fuettern(int menge) {
    this.milchInEuter += (float) menge / 3;
    // 9
    this.milchInEuter = Math.max(this.milchInEuter, Kuh.maxMilchInEuter);
    return this;
  }

  // 7
  public String toString() {
    return String.format("Alter: %d Monate; Milch in Eutern: %.2f", this.alter, this.milchInEuter);
  }

  // 8
  public static int getAnzahl() {
    return Kuh.anzahl;
  }
}





// 1. Schreiben Sie eine Methode um das Alter der Kuh zu bekommen (als R�ckgabewert)

// 2. Schreiben Sie jeweils eine Methode, um das Alter zu setzen

// 3. Erg�nzen Sie ein Attribut (Instanzenvariable) "milchInEuter"

// 4. Schreiben Sie eine Methode "f�ttern()", die eine Menge (in ganzen kg) Gras (legales) �bergeben 
// bekommt und ein drittel der Menge in Milch (nicht in Wein) verwandelt

// 5. Schreiben Sie einen Konstruktor, der das Alter und die Eutermilchmenge beim Erzeugen auf die 
// �bergabewerte setzt und die Anzahl aller K�he aktualisiert (versuchen Sie danach zun�chst 
// eine neue Kuh (neues kuhobjekt) ohne �bergabewerte zu erzeugen)

// 6. Schreibe einen Standardkonstruktor, der eine Kuh immer mit einem Mindestalter von 
// 18 Monaten und einer Eutermilchmenge von 5 Litern erzeugt und die Anzahl aller K�he 
// aktualisiert

// 7. Erg�nze die Methode print um die Ausgabe der Werte aller Attribute; �nderen Sie dann den 
// Namen der Methode in "toString()"

// 8. Schreiben Sie eine Methode um die Anzahl der K�he zu bekommen (als R�ckgabewert)

// 9. Erg�nzen Sie die Methode F�TTERN um die Pr�fung auf die maximale Eutergr��e (Liter Milch),
// die f�r alle K�he gleich gilt. Eine Kuh laktiert nie mehr Milch, als Ihr Euter gro� ist.
 


