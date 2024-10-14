async function fetchWeather(lat, lon) {
    const apiKey = 'e76a27b9fd4b4fc452f2e9eeb263be64'; // API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br&units=metric`);
    const data = await response.json();
    return data;
}

function updateBackground(weather) {
    const body = document.body;
    const clockContainer = document.querySelector('.clock-container');

    // Condições do clima com as imagens e cores de fundo
    if (weather.weather[0].main === "Clear") {
        body.style.backgroundImage = "url('img/clear.jpeg')"; // Dias ensolarados
        clockContainer.style.backgroundColor = "rgba(255, 218, 53, 0.7)"; // Fundo amarelo claro
    } else if (weather.weather[0].main === "Clouds") {
        body.style.backgroundImage = "url('img/cloudy.jpeg')"; // Dias nublados
        clockContainer.style.backgroundColor = "rgba(169, 169, 169, 0.7)"; // Fundo cinza claro
    } else if (weather.weather[0].main === "Rain") {
        body.style.backgroundImage = "url('img/rainy.jpeg')"; // Dias chuvosos
        clockContainer.style.backgroundColor = "rgba(100, 149, 237, 0.7)"; // Fundo azul claro
    } else if (weather.weather[0].main === "Snow") {
        body.style.backgroundImage = "url('img/snowy.jpeg')"; // Dias nevados
        clockContainer.style.backgroundColor = "rgba(240, 248, 255, 0.7)"; // Fundo branco azulado
    } else {
        body.style.backgroundImage = "url('img/default.jpeg')"; // Imagem padrão
        clockContainer.style.backgroundColor = "rgba(255, 218, 53, 0.7)"; // Fundo padrão cinza
    }

    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
}

async function startClock() {
    const hourElement = document.getElementById('hours');
    const minuteElement = document.getElementById('minutes');
    const secondElement = document.getElementById('seconds');
    const dateElement = document.getElementById('date');
    const temperatureElement = document.getElementById('temperature'); // Mostrar a temperatura
    const cityElement = document.getElementById('city'); // Mostrar o nome da cidade

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
        temperatureElement.textContent = `${temperature}°C`;

        // Exibe o nome da cidade no elemento de cidade
        const cityName = weather.name; // Obtém o nome da cidade da resposta da API
        cityElement.textContent = cityName; // Atualiza o elemento de cidade
    }, (error) => {
        console.error("Erro ao obter a localização: ", error);
    });
}

// Inicia o relógio
startClock();
