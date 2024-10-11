async function fetchWeather(lat, lon) {
    const apiKey = 'e76a27b9fd4b4fc452f2e9eeb263be64'; // Substitua pela sua chave de API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br&units=metric`);
    const data = await response.json();
    return data;
}

function updateBackground(weather) {
    const body = document.body;

    // Condições do clima com as imagens localizadas na pasta 'img'
    if (weather.weather[0].main === "Clear") {
        body.style.backgroundImage = "url('img/clear.jpeg')"; // Imagem para dias ensolarados
    } else if (weather.weather[0].main === "Clouds") {
        body.style.backgroundImage = "url('img/cloudy.jpeg')"; // Imagem para dias nublados
    } else if (weather.weather[0].main === "Rain") {
        body.style.backgroundImage = "url('img/rainy.jpeg')"; // Imagem para dias chuvosos
    } else if (weather.weather[0].main === "Snow") {
        body.style.backgroundImage = "url('img/snowy.jpeg')"; // Imagem para dias nevados
    } else {
        body.style.backgroundImage = "url('img/default.jpeg')"; // Imagem padrão
    }

    body.style.backgroundSize = "cover"; // Cobrir toda a tela
    body.style.backgroundPosition = "center"; // Centraliza a imagem
}

async function startClock() {
    const hourElement = document.getElementById('hours');
    const minuteElement = document.getElementById('minutes');
    const secondElement = document.getElementById('seconds');
    const dateElement = document.getElementById('date');
    const temperatureElement = document.getElementById('temperature'); // Elemento para mostrar a temperatura

    async function updateTime() {
        const now = new Date();

        // Atualiza o relógio
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        hourElement.textContent = hours;
        minuteElement.textContent = minutes;
        secondElement.textContent = seconds;

        // Atualiza a data
        const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' };
        const formattedDate = now.toLocaleDateString('pt-BR', options);
        dateElement.textContent = formattedDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$1 - $2 - $3'); // Formato "22 - 08 - 2024"
    }

    setInterval(updateTime, 1000);
    updateTime(); 

    // Obter a localização do usuário e clima
    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const weather = await fetchWeather(latitude, longitude);
        updateBackground(weather);

        // Exibe a temperatura no elemento de temperatura
        const temperature = weather.main.temp;
        temperatureElement.textContent = `Temperatura: ${temperature}°C`;
    }, (error) => {
        console.error("Erro ao obter a localização: ", error);
    });
}

// Inicia o relógio
startClock();
