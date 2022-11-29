/*Weather Display*/
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#speed');
const windChill = document.querySelector('#chill');
const url = "https://api.openweathermap.org/data/2.5/weather?q=Frisco&units=imperial&appid=0c02a5e529dfd48ed794facaedabd168";

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

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    windSpeed.innerHTML = `Wind Speed: <strong>${weatherData.wind.speed.toFixed(0)}mph</strong>`;
    const windFunction = calculateWindchill(currentTemp, windSpeed);
    windChill.innerHTML = `Wind Chill: <strong>${windFunction}</strtong>`;
  }

function calculateWindchill(temperature, speed) {
  let chill;
  if (temperature<=50 && speed>3) {
    chill = 35.74 + 0.6215*temperature - 35.75*speed**0.16 + 0.4275*temperature*speed**0.16;
    return chill;
  } else {
    chill = "N/A";
  }
  return chill;
}