fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos+Aires&appid=TU_API_KEY&units=metric')
.then(response => response.json())
.then(data => {
    const currentTemperature = data.main.temp;
    const currentConditions = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;

    document.getElementById('current-temperature').textContent = 'Current Temperature: ' + currentTemperature + '°C';
    document.getElementById('current-conditions').textContent = 'Current Conditions: ' + currentConditions;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${weatherIcon}.png`;

    return fetch('https://api.openweathermap.org/data/2.5/forecast?q=Buenos+Aires&appid=51f5f50ac3e1ccb583ec0b54ef002e56&units=metric');
})
.then(response => response.json())
.then(data => {
    const forecastData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    
    const forecastElement = document.getElementById('forecast');
    forecastData.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temperature = item.main.temp;
        const listItem = document.createElement('li');
        listItem.textContent = `${day}: ${temperature}°C`;
        forecastElement.appendChild(listItem);
    });
})
.catch(error => {
    console.error('Error fetching weather data:', error);
});