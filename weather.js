// API key and base URL
const apiKey = 'a5b44693d60028d321cafda01e957670';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data based on user's coordinates
function getWeather(lat, lon) {
    fetch(`${apiUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => console.log('Error fetching weather data:', error));
}

// Function to display weather data
function displayWeather(data) {
    const locationElement = document.getElementById('location');
    const tempElement = document.getElementById('temp');
    const descriptionElement = document.getElementById('description');

    locationElement.innerText = `Location: ${data.name}, ${data.sys.country}`;
    tempElement.innerText = `Temperature: ${data.main.temp}°C`;
    descriptionElement.innerText = `Weather: ${data.weather[0].description}`;
}

// Get user's current location (Geolocation API)
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeather(lat, lon);
        }, error => {
            console.error('Geolocation error:', error);
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}

// Call the function to get weather data when the page loads
window.onload = getLocation;
