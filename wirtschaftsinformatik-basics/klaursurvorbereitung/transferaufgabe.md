<!-- markdownlint-disable-file MD026 -->
# Aufgabe Eignung und Verwendung der agilen Vorgehensweise “Scrum”

## Wurde Scrum bei Ihnen im Unternehmen bereits angewendet oder ist es konkret geplant eingeführt zu werden?

Das Unternehmen, in dem ich arbeite, ist weltweit agierend und hat viele
verschiedene Kunden. Es ist abhängig, für welchen Kunden man arbeitet, weil wir
häufig als Berater in ein Unternehmen gehen und vor Ort Softwarelösungen
implementieren - häufig in enger Zusammenarbeit mit dem Kunden.

Wir orientieren uns größtenteils an unseren Kunden, wie diese bereits arbeiten.
Daher wird in vielen Teams bereits die Agile Softwareentwicklung in Modellen wie
Scrum oder Kanban umgesetzt.

Ich persönlich konnte im letzten Jahr Teil von zwei verschiedenen Teams werden,
die Scrum benutzen. Wir haben nicht nur Scrum für die Softwareentwicklung
benutzt, sondern auch für die Planung von Infrastukturprojekten (z.B. die
Installation und Konfiguration von Servern).

## Welche Voraussetzungen müssen Ihrer Bewertung nach gegeben sein, um Scrum grundsätzlich erfolgreich einführen zu können?

Ich konnte erfahren, dass es einige Vorraussetzungen gibt, damit Scrum
funktioniert. Ich werde die wichtigsten zwei kurz erläutern.

Das erste ist auf jeden Fall, dass alle Beteiligten wissen, nicht
nur wie Scrum funktioniert, sondern auch warum es funktioniert. Ohne dieses
WIssen ist es schwierig den Prozess selbst zu verbessern, weil sich niemand
bewusst ist, welche Abläufe für uns besonders relevant oder irrelevant sind.

Die zweite Vorraussetzung ist, dass die Teams "cross-functional" sind, d.h. dass
sie alle Arbeiten erledigen können, ohne auf externe Teams angewiesen zu sein.
Diese Vorraussetzung ist nicht zu 100% zu erreichen, weil das Team dann so groß
werden würde, dass es nichts mehr schaffen kann (ein Daily, bei dem 240
Personen zwei Minuten lang berichten, was sie heute vorhaben). Der Grundgedanke
ist der, dass man schwierig die Zeit planen kann, die ein anderes Team braucht,
um eine Vorraussetzung zu bearbeiten.

## Reflektieren Sie die genannten Voraussetzungen in Ihrem konkreten Unternehmensumfeld, inwieweit diese im wesentlichen gegeben sind oder geschaffen werden könnten!

### 1. Kriterium: Wissen über Scrum

In den Teams, mit denen ich bereits gearbeitet hatte, gab es zwei bis drei von
ca. 8 Personen, die wusseten, wie und warum Scrum funktioniert. Es war relativ
einfach dieses Wissen zu teilen und damit auch ein Grundverständnis bei den
anderen Teammitgleidern aufzubauen. Wir konnten in den Retrospektiven die
Relevanz einiger Meetings einordnen und haben zum Beispiel herausgefunden, dass
das Review für uns nur wenig Nutzen hat, weil wir keine direkten Kunden hatten,
denen wir unseren Fortschritt zeigen konnten.

### 2. Kriterium: Cross-Functional Teams

Hier wurde es etwas schwieriger: In einem der Teams hatten wir sehr viele
Abhängigkeiten zu anderen Abteilungen und Teams (für beispielsweise
Firewall-Freigaben, VM-Bereitstellung, IP-Reservierung, und weitere). Das hatte
zunächst unseren Prozess sehr langsam gemacht, da wir viele Backlog Items auf
"extern geblockt" liegen hatten. Wir haben die ersten Tage des Sprints damit
verbracht unsere ungeblockten Items zu bearbeiten und haben dann den Rest des
Sprints darauf gewartet, dass die anderen Teams unsere Vorraussetzungen
umgesetzt haben.

Dieses Problem konnten wir mit wunderbarer Hilfe vom mittleren Management
bewältigen: Wir wollten selbst Zugangsrechte haben. Das hatte gut für die
VM-Bereitstellung funktioniert. Das VM-Team hat uns Accounts eingerichtet und
berechtigt, dass wir ein Resourcenquota hatten. Für beide Teams war es eine
Win-Win-Situation. Mein Team konnte VM erstellen, ohne extern geblockt zu sein,
und das VM-Team musste nicht mehr unsere Items bearbeiten. Das VM-Team konnte
sogar sicher sein, dass wir nicht zu viele Ressourcen belegen, weil die Quotas
für uns gesetzt wurden.

Bei dem IP-Reservierungs Thema haben unsere Aufrufe zur Verbesserung sogar zu
einem Projekt geführt, in denen das Netzwerk Team ein IP Address Management Tool
(IPAM) benutzt, um neue IPs zu verteilen. Mit kleinem Programmieraufwand von 2
Tagen wurde sogar eine Software geschrieben, die es anderen Teams ermöglicht
hat, eine Anfrage für eine IP zu erstellen.

## Geben Sie eine begründete Einschätzung ab, ob die Entwicklungsweise Scrum nachhaltig in Ihrem Unternehmen etabliert werden wird und werden könnte! Falls es bereits engeführt worden ist, dann lassen Sie diese Erfahrungen mit einfließen!

Wie in den vorherigen Aufgaben schon deutlich werden konnte, habe ich durchaus
positive Erfahrungen mit Scrum in meinem Unternehmen machen können.

Leider sind aber viele Teams noch wie Silos aufgebaut (d.h. keine
cross-functional Teams). Die Aufgaben, die sie bearbeiten können sind also stark
eingeschränkt. Wir haben vor ungefähr einem Jahr ein neues mittleres Management
bekommen, dass jetzt die Mitarbeiter zunächst schulen möchte, um im nächsten
Schritt cross-functional Teams aufzubauen. Jedes dieser Teams soll dann direkt
für ein bis zwei Kunden verantwortlich sein.

DIeser Wandel hat ziemlich direkt nach dem Wechsel im mittlerem Management
angefangen, doch hat sich nicht viel verändert: WIr sind immer noch dabei die
Mitarbeiter zu schulen. Viele von den Mitarbeitern sind sehr zufrieden mit ihrer
alten Rolle gewesen und ströuben sich vor der Veränderung. Es muss also ebenso
ein Kulturwandel entstehen, damit der komplette Betrieb Scrum Teams etablieren
kann. Dieser Kulturwandel ist ein langsamer Prozess und wird lange dauern.

Ich hatte Glück in neu geformten Teams zu arbeiten, die alle Lust auf Agile
Methoden hatten und nicht von einer anderen Kultur vorbelastet waren. Es scheint
noch ein weiter Weg zu sein, bis Scrum komplett bei uns etabliert wird - wenn
überhaupt. Es kann sich ebenso herausstellen, dass dieses Modell und Agile
Vorgehensweisen nur bedingt zu unserer Arbeit passen, und unsere Kunden andere
Anforderungen haben als die Time-to-Market oder andere Metriken, die Scrum
verspricht zu verbessen.
