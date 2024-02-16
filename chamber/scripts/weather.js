async function getWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos+Aires&appid=51f5f50ac3e1ccb583ec0b54ef002e56&units=metric');
        const weatherData = await response.json();

        const currentTemperature = weatherData.main.temp;
        const currentConditions = weatherData.weather[0].description;
        const weatherIcon = weatherData.weather[0].icon;

        document.getElementById('current-temperature').textContent = 'Current Temperature: ' + currentTemperature + '°C';
        document.getElementById('current-conditions').textContent = 'Current Conditions: ' + currentConditions;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${weatherIcon}.png`;

        const forecastResponse = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Buenos+Aires&appid=51f5f50ac3e1ccb583ec0b54ef002e56&units=metric');
        const forecastData = await forecastResponse.json();
        const forecastItems = forecastData.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

        const forecastElement = document.getElementById('forecast');
        forecastElement.innerHTML = ''; 
        forecastItems.forEach(item => {
            const date = new Date(item.dt * 1000);
            const day = date.toLocaleDateString('en-US', { weekday: 'long' });
            const temperature = item.main.temp;
            const listItem = document.createElement('li');
            listItem.textContent = `${day}: ${temperature}°C`;
            forecastElement.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

getWeather();
