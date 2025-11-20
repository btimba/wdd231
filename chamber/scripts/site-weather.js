const weatherDesc = document.querySelector('#weather-desc');
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');

const mykey = "b65885360d02f73dd2ca42c0d94811e6"
const mylat = "-34.4191"
const mylon = "19.2058"

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylon}&appid=${mykey}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            display(data);

           }   else {
            throw Error (await response.text());
           }
        }catch (error) {
            console.log(error);
    }
}

function display(data) {
    currentTemp.textContent =`${data.main.temp.toFixed(1)} ℃`;
    
    const iconsrc = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',data.weather[0].icon);

    weatherDesc.textContent = data.weather[0].description;
}

apiFetch();

const forecastContainer = document.querySelector("#forecast-cards");

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${mylat}&lon=${mylon}&appid=${mykey}&units=metric`;

async function getForecast() {
    try{
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displaySimpleForecast(data);
        }else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displaySimpleForecast(data) {
    const noonForecasts = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
    
);

const threeDays = noonForecasts.slice(0,3);

forecastContainer.innerHTML = "";

threeDays.forEach((day)=> {
    const date = new Date(day.dt_txt).toLocaleDateString("en-GB",{
        weekday: "short",
    });

    const temp =`${day.main.temp.toFixed(1)} ℃`;
    
    const p = document.createElement("p");
    p.textContent = `${date}: ${temp}`;

    forecastContainer.appendChild(p);
    
});
}

getForecast();
