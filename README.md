🚀 ProTaskManager – Fullstack To-Do Application
Ein modernes Aufgaben-Management-System, das als Fullstack-Projekt konzipiert wurde, um die Kommunikation zwischen einer React-Single-Page-Application und einer .NET 8 Web-API zu demonstrieren.

🌐 Live Demo: https://protaskmanager-frontend.vercel.app/

🛠 Tech Stack
Frontend
React (Vite): Für ein schnelles und reaktives UI.

CSS3: Custom Styling für ein modernes Look-and-Feel.

Vercel: Hosting und Continuous Deployment.

Backend
ASP.NET 10 (Minimal API): Schlankes und performantes Backend.

Entity Framework Core: Object-Relational Mapping (ORM).

PostgreSQL (Neon.tech): Serverless Datenbank für die persistente Speicherung.

Render: Deployment der API.

✨ Features & Lerninhalte
Während der Entwicklung dieses Projekts wurden folgende Schwerpunkte gesetzt:

CRUD-Operationen: Vollständige Implementierung von Erstellen, Lesen, Aktualisieren und Löschen von Aufgaben.

CORS-Handling: Konfiguration von Cross-Origin Resource Sharing für die sichere Kommunikation zwischen verschiedenen Domains (Localhost/Vercel -> Render).

Datenbank-Integration: Anbindung einer Cloud-PostgreSQL-Datenbank inkl. automatischer ID-Generierung und Zeitstempeln (DateTime.UtcNow).

REST-Prinzipien: Strukturierung der Endpunkte nach gängigen Standards (GET, POST, PUT, DELETE).

🚀 Installation & Start (Lokal)
1. Backend
Bash

cd protaskmanager-backend
dotnet run
Die API ist dann unter http://localhost:5000 (oder dem in Render konfigurierten Port) erreichbar.

2. Frontend
Bash

cd protaskmanager-frontend
npm install
npm run dev

Das Frontend startet standardmäßig auf http://localhost:5173