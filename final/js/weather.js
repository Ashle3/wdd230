const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=0c02a5e529dfd48ed794facaedabd168";
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');

async function apiFetch() {
    try {
      const response = await fetch(url);
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

apiFetch();

function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const humid = `${weatherData.main.humidity.toFixed(0)}`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    humidity.innerHTML = `<strong>Humidity: ${humid}%</strong>`;
}