# HTTP Networking Course – Aufgaben

Dieses Projekt fasst die wichtigsten Inhalte und praktischen Aufgaben aus dem Video
„Full HTTP Networking Course – Fetch and REST APIs in JavaScript“ zusammen.

Der Fokus liegt auf dem Verständnis von HTTP-Kommunikation, dem Arbeiten mit der
Fetch API sowie auf der Verarbeitung von URLs und HTML-Inhalten.

## Inhalte

- Grundlagen von HTTP (Requests, Responses, Statuscodes)
- Arbeiten mit GET- und POST-Anfragen
- Fetch API und JSON-Verarbeitung
- Fehlerbehandlung bei HTTP-Anfragen
- Normalisieren von URLs
- Extrahieren von Links aus HTML
- Einfacher Web-Crawler für interne Seiten
- Erstellen eines Reports über gefundene Seiten

## Projektstruktur

src/
 ├── httpBasics.js
 ├── fetchJson.js
 ├── urlTools.js
 ├── crawl.js
 ├── report.js
 └── index.js

## Verwendung

HTTP-Grundlagen testen:
node src/httpBasics.js

Web-Crawler starten:
node src/index.js https://example.com
