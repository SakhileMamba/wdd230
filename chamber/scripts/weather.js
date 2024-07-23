const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// const url = "https://api.openweathermap.org/data/2.5/weather?lat=-26.50&lon=31.31&units=metric&appid=c12475d7af51087fb11f15201dc9afcf"

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=-26.50&lon=31.31&units=metric&exclude=minutely,hourly,alerts&app   id=c12475d7af51087fb11f15201dc9afcf"
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();