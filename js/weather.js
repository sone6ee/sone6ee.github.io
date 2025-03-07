const API_KEY = "785a9e772380108213d81943f7aa9de6";

function onGeoOk(position) {
    const lat = position.coords.latitude;   // 위도
    const lon = position.coords.longitude;  // 경도

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json().then(data => {
        const weather = document.querySelector("#weather-condition");
        const city = document.querySelector("#weather-city");
        const icon = document.querySelector("#weather i");

        weather.innerText = data.weather[0].main + ',';
        city.innerText = data.name;
        
        const weatherMain = data.weather[0].main.toLowerCase();
        if (weatherMain.includes('cloud')) {
            icon.className = 'fas fa-cloud';
        } else if (weatherMain.includes('clear')) {
            icon.className = 'fas fa-sun';
        } else if (weatherMain.includes('rain')) {
            icon.className = 'fas fa-cloud-rain';
        } else if (weatherMain.includes('snow')) {
            icon.className = 'fas fa-snowflake';
        } else {
            icon.className = 'fas fa-map-marker-alt';
        }
    }));     // fetch(promise) = 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것.
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
