package de.fomnet.kuh;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    System.out.println(Kuh.getAnzahl());

    Kuh berta = new Kuh(18, 5);
    System.out.println(berta);
    System.out.println(Kuh.getAnzahl());

    Kuh charlie = new Kuh();
    System.out.println(charlie);
    System.out.println(Kuh.getAnzahl());
    System.out.println(charlie instanceof Kuh);
    System.out.println(charlie instanceof Object);
  }
}

