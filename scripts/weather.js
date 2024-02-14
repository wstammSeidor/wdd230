const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.p-weather');

const url = 'https://api.openweathermap.org/data/2.5/weather';

async function apiFetch() {
  try {
    const response = await fetch(`${url}?lat=-34.72&lon=-58.51&units=imperial&appid=51f5f50ac3e1ccb583ec0b54ef002e56`);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.textContent = data.main.temp;
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
  weatherIcon.src = iconUrl;
  captionDesc.textContent = data.weather[0].description;
}
