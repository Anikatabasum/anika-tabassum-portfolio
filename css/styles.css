const apiKey = 'a5b44693d60028d321cafda01e957670';

function fetchWeather() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
            
            try {
                const response = await fetch(url);
                const data = await response.json();

                document.getElementById('location').innerText = `Location: ${data.name}`;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

window.onload = fetchWeather;
