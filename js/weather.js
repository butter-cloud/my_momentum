const API_KEY = "f5d43408c26b992aae965a17d0d410db";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        const WEATHER_VALUE = data.weather[0].main;
        let WEATHER_ICON = "☀️"
            if (WEATHER_VALUE === "Clouds"){
                WEATHER_ICON = "☁️";
            }
            else if (WEATHER_VALUE === "Rain"){
                WEATHER_ICON = "🌧"
            }
            else if (WEATHER_VALUE === "Snow"){
                WEATHER_ICON = "☃️"
            }
        const TEMP_VALUE = Math.round((data.main.temp)*10)/10;
        console.log(TEMP_VALUE);
        weather.innerText = `${WEATHER_ICON} ${WEATHER_VALUE} / ${TEMP_VALUE}°C`;
        city.innerText = `📍${data.name} `;

    }
    )};

function onGeoError(){
    alert("Can't find your location.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
