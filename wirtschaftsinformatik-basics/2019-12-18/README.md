# Wirtschaftsinformatik Basics

Vorlesung vom *2019-12-18*

## Grundlegendes und Wiederholung

- Klaussurausgestaltung: Agil & Scrum
  - Recherche oder Transferaufgabe
  - ca. 10% der Klausurpunkte
  - Zum nächsten Mal wird eine Transferaufgabe mitgenommen (Samstag, der 21.12.2019)
    - Übertrag in das Unternehmensumfeld
    - Thema Agil und/oder Scrum
  - Vorher wird mit Prof. Paul durchgesprochen, welche Antworten möglich/richtig sind
- Vorlesung am Samstag 21.12.2019 wird Probeklausur mitgenommen und besprochen
  - Die Aufgaben werden vorher hochgeladen, dann schon Gedanken machen, ob die
    Aufgaben klar/verständlich sind
- Sicherer Kanal
  - Ist gesichert gegen Angriffe (z.B. auf C,I,A,NR)
- Kryptologie = Kryptroanalytiker + Kryptograph
  - Kryptroanalytiker bricht Schutzmechanismen
  - Kryptograph entwickelt und installiert Schutzmechanismen

## Informationssicherheit

- Datenschutz
  - Bezogen auf personenbezogene Daten
- Datensicherheit
  - Schutz der Daten vor unberechntigen Angriffen
  - Schwerpunkt für diese Vorlesung
  - Schutzziele
- Datensicherung

### Informationssysteme

- Sind vernutzt und offen
- Man weiß nicht, wer die anderen Prozesspartner sind (Stichpunkt Authentizit#ät)
- Gefahrenquellen
  - Angriff auf Objekte (Systeme, Resourcen)
  - Angriff auf Nachrichten (Austausch von Nachrichten, nicht der Kommunikationskanal)
  - ==> Risiko des Verlustes oder der Beschädigung von Informationen
- Man muss den legitimen Vorgehen von den illegitimen unterscheiden und sich
  gegen letztere schützen

### Nicht CIA Triad

Confidentiality (Vertraulichkeit): Verschlüsselung
Integrity (Integrität): Inhalt der Nachricht ist genau so beim Empfänger
angekommen
Authentication (Authentizität): Der Sender einer Nachricht ist derjenige, der er
vorgibt zu sein

### Prizipale

Prizipale ist die Zuordnung von Berechtigungen zu Aufruf und Resultat

Prinzipale können Menschen, Systeme oder anderes sein.

### Klassifizierung von Sicherheitsbedrohungen

- Leak (Lecks): Erlangen von Informationen durch unberechtigte Empfänger
- Tampering (Intrigieren): Unberechtigte Veränderung von Informationen
- Vandalism (Vandalismus): Anonyme Störung des regulären Betriebs eines Systems
  - Anonym heißt hier, dass es "von außen" kommt; kein bekannter Prizipal/Partner/Person

### Non-repudiation

- Nachrichten nicht zweimal senden können
- Wiederholen von identischen Angriffen kann als Angriff verstanden werden
- Man kann verschlüsselte Nachrichten wiederholt senden

### Informationslecks

Auch Meta-Daten (wie z.B. Nachrichtenfluß) kann ein Sicherheitsleck sein

### Risiko

Eintrittswahrscheinlichkeit * Schadenshöhe

### Angriffsformen

- Lauschangriff = Erstellen von Nachrichtenkopien
- Maskerade (Spoofing) = Schaffung von fremden Identitäten
- Integrieren = MitM
- Repetieren (Replaying) = Wiederholen von abgefangenen Nachrichten
- Verweigerung (DoS) = Überflutung von Kanälen
