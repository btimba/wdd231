const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const mykey = "b65885360d02f73dd2ca42c0d94811e6"
const mylat = "49.750265642553714"
const mylon = "6.635024573125897"

const url = `//api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylon}&appid=${mykey}&units=imperial`;

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
    console.log("hello")
    captionDesc.innerHTML = data.weather[0].description
    currentTemp.innerHTML = `${data.main.temp} °F`
    const iconsrc = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('SRC',iconsrc)
    weatherIcon.setAttribute('alt',data.weather[0].icon)

}

apiFetch();

