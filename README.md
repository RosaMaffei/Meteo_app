# 🌤️ Meteo_app - Progetto 

Benvenuti nella mia **Meteo App**! Questo progetto è un'applicazione web semplice che permette di cercare il meteo di qualsiasi città nel mondo in tempo reale.

## 📝 Di cosa tratta il progetto
L'app è stata creata per fornire informazioni meteo precise in modo rapido. Inserendo il nome di una città, il programma esegue questi passaggi:

* **Ricerca Coordinate**: Utilizza l'API Geocoding di Open-Meteo per trovare latitudine e longitudine della città.
* **Dati Meteo**: Interroga l'API Forecast per ottenere temperatura, vento e condizioni del cielo.
* **Traduzione Automatica**: Trasforma i codici tecnici (come il numero 80) in descrizioni comprensibili in italiano (come "Pioggia debole").

## 🚀 Come navigare ed eseguire il codice
Per far funzionare l'app sul tuo computer, segui queste istruzioni:

1.  **Cartella di Progetto**: Assicurati che i file `index.html`, `style.css` e `app.js` si trovino tutti nella stessa cartella principale.
2.  **Apertura**: Apri la cartella con **Visual Studio Code**.
3.  **Esecuzione**: Fai click destro su `index.html` e seleziona **"Open with Live Server"** per vedere l'app nel browser.
4.  **Ricerca**: Digita il nome di una città nella barra e premi il tasto **Invio** o clicca sul pulsante **"Cerca Meteo"**.

## 🤖 Uso dell'Intelligenza Artificiale
L'IA è stata fondamentale per questo progetto nei seguenti modi:

* **Risoluzione Bug**: Mi ha aiutato a pulire gli indirizzi (URL) necessari per prendere i dati dal web, eliminando simboli sbagliati che bloccavano le richieste.
* **Migliorare la ricerca**: Mi ha suggerito di aggiungere la funzione `encodeURIComponent`, che serve a far funzionare la ricerca anche per le città che hanno spazi nel nome, come "Reggio Emilia" o "New York".
* **Localizzazione**: Mi ha fornito la "mappa" per trasformare i codici numerici tecnici (WMO) in descrizioni semplici e amichevoli in italiano.

## 📂 Struttura dei File
* `index.html`: Contiene la struttura della pagina e i campi di input.
* `style.css`: Gestisce l'aspetto estetico, i colori e la disposizione degli elementi.
* `app.js`: Contiene la logica JavaScript per il recupero e la visualizzazione dei dati.
