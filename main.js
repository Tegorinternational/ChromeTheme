function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('digitalClock').textContent = timeString;

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = daysOfWeek[now.getDay()];
    const date = now.getDate();
    const month = monthsOfYear[now.getMonth()];
    const dateInfo = `${day}, ${date} ${month}`;
    document.getElementById('dateInfo').textContent = dateInfo;

    const greeting = getGreeting(now.getHours());
    document.getElementById('greetingText').textContent = greeting;

    // You can fetch a quote from an API or use a predefined list
    const quotes = ['Quote 1', 'Quote 2', 'Quote 3'];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteText').textContent = randomQuote;

    // Fetch user's location based on IP address
    fetchLocation();
    }

    function getGreeting(hour) {
    if (hour >= 5 && hour < 12) {
    return 'Good Morning!, Siddharth';
    } else if (hour >= 12 && hour < 18) {
    return 'Good Afternoon!, Siddharth';
    } else if (hour >= 18 && hour < 24) {
    return 'Good Evening!, Siddharth';
    } else {
    return 'Good Night!, Siddharth';
    }
    }


    async function fetchLocation() {
    try {
    const response = await fetch('https://ipinfo.io/json');
    const data = await response.json();
    const location = 'gwalior' + ','+'madhya pradesh' + ', ' +'india';

    // Set the fetched location as the user's location for weather
    fetchWeather(location);
    } catch (error) {
    console.error('Error fetching location data:', error);
    document.getElementById('weatherInfo').textContent = 'Error fetching location data';
    }
    }

    async function fetchWeather(location) {
    const apiKey = 'bc1301b0b23fe6ef52032a7e5bb70820';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    const weatherIcon = getWeatherIcon(weatherDescription);
    const weatherInfo = `🌡️ ${temperature}°C ${weatherIcon} ${weatherDescription}`;
    document.getElementById('weatherInfo').textContent = weatherInfo;
    } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('weatherInfo').textContent = 'Error fetching weather data';
    }
    }

    function getWeatherIcon(description) {
    switch (description.toLowerCase()) {
    case 'clear sky':
      return '☀️';
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
      return '🌤️';
    case 'overcast clouds':
      return '☁️';
    case 'light rain':
    case 'moderate rain':
    case 'heavy intensity rain':
      return '🌧️';
    case 'thunderstorm':
      return '⛈️';
    case 'snow':
      return '❄️';
    case 'mist':
    case 'fog':
      return '🌫️';
    default:
      return '🌍';
      }
      }

      // Initial call to set the initial values
      updateClock();

      // Update the clock every second
      setInterval(updateClock, 1000);
      
      
      
      
      
      function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput").value;
    const formattedInput = formatInput(searchInput);

    if (isURL(formattedInput)) {
        window.location.href = formattedInput;
    } else {
        const searchQuery = encodeURIComponent(formattedInput);
        window.location.href = `https://www.google.com/search?q=${searchQuery}`;
    }
}

function formatInput(input) {
    const hasDot = input.includes('.');
    const hasValidScheme = /^(https?|ftp):\/\//i.test(input);

    if (hasDot && !hasValidScheme) {
        return `http://${input}`;
    } else {
        return input;
    }
}

function isURL(str) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return str.match(urlRegex);
}

 
 
/* 
 
function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput").value;
    const formattedInput = formatInput(searchInput);

    if (isURL(formattedInput)) {
        window.location.href = formattedInput;
    } else {
        const searchQuery = encodeURIComponent(formattedInput);
        window.location.href = `https://www.google.com/search?q=${searchQuery}`;
    }
}

function formatInput(input) {
    const hasDot = input.includes('.');
    const hasValidScheme = /^(https?|ftp):\/\//i.test(input);

    if (hasDot && !hasValidScheme) {
        return `http://${input}`;
    } else {
        return input;
    }
}

function isURL(str) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return str.match(urlRegex);
}
*/