package de.cgi;

class Main {
  public static void main(String[] args) {
    Semver semver = new Semver();
    assert semver.toString() == "0.0.0";
  }
}
