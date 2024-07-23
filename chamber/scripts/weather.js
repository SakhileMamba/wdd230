const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=-26.50&lon=31.31&units=metric&appid=c12475d7af51087fb11f15201dc9afcf"
async function apiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;

    let recent = new Date(data.list[0].dt).getUTCDay();


    let k = 0;

    console.log(new Date(data.list[25]["dt"] * 1000).getDay());

    for (let i = 0; i < data.list.length; i++) {

        if (recent !== new Date(data.list[i]["dt"] * 1000).getDay() && k < 4) {
            k = k + 1;
            console.log(k);
            const currentTemp = document.querySelector(`div.forecast:nth-of-type(${k + 1}) .temp`);
            console.log(currentTemp);
            const weatherIcon = document.querySelector(`div.forecast:nth-of-type(${k + 1}) .weather-icon`);
            const captionDesc = document.querySelector(`div.forecast:nth-of-type(${k + 1}) figcaption`);
            currentTemp.innerHTML = `${data.list[i].main.temp}&deg;C`;
            const iconsrc = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;
            let desc = data.list[i].weather[0].description;
            weatherIcon.setAttribute("src", iconsrc);
            weatherIcon.setAttribute("alt", desc);
            captionDesc.textContent = `${desc}`;
            recent = new Date(data.list[i].dt).getUTCDay();
        }
    }

    data.list.forEach(element => {


    });



}

apiFetch();