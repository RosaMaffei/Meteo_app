// Tabella per tradurre i codici meteo WMO in italiano
const descrizioniMeteo = {
  0: "Cielo sereno ☀️",
  1: "Prevalentemente sereno 🌤️",
  2: "Parzialmente nuvoloso ⛅",
  3: "Nuvoloso ☁️",
  45: "Nebbia 🌫️",
  48: "Nebbia con brina 🌫️",
  51: "Pioviggine leggera 🌧️",
  61: "Pioggia debole 🌧️",
  71: "Neve debole ❄️",
  80: "Rovesci di pioggia deboli 🌦️",
  95: "Temporale ⚡"
};

async function getWeather() {
  const city = document.getElementById('city').value;
  const result = document.getElementById('weather-result');

  // Controllo: campo vuoto
  if (!city.trim()) {
    result.innerHTML = 'Per favore, inserisci il nome di una città!';
    return;
  }

  result.innerHTML = 'Caricamento in corso...';

  try {
    // STEP 1: Geocoding — converte il nome città in coordinate
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
    );
    const geoData = await geoResponse.json();

    if (!geoData.results) {
      result.innerHTML = 'Città non trovata!';
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // STEP 2: Recupero dati meteo con le coordinate
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherResponse.json();

    const { temperature, windspeed, weathercode } = weatherData.current_weather;

    // Converte il codice numerico in una descrizione testuale
    const statoMeteo = descrizioniMeteo[weathercode] || `Codice: ${weathercode}`;

    // STEP 3: Mostra i risultati in italiano
    result.innerHTML = `
      <strong>${name}, ${country}</strong><br>
      Meteo: ${statoMeteo}<br>
      Temperatura: ${temperature}°C<br>
      Vento: ${windspeed} km/h
    `;

  } catch (error) {
    result.innerHTML = 'Errore nel recupero dei dati! Controlla la connessione.';
    console.error(error);
  }
}

// Permette di cercare premendo il tasto Invio
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('city').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') getWeather();
  });
});