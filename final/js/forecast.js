const url1 = "api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=1f57b19719805331049cf09ffe51943d";
const weekday1 = document.querySelector("#dayOne");
const ftemp1 = document.querySelector("#temp1");
const weekday2 = document.querySelector("#dayTwo");
const ftemp2 = document.querySelector("#temp2");
const weekday3 = document.querySelector("#dayThree");
const ftemp3 = document.querySelector("#temp3");


async function apiFetch() {
    try {
      const response = await fetch(url1);
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

weekday1.innerHTML = "<strong>Day 1</strong>";
ftemp1.innerHTML = "53";
weekday2.innerHTML = "<strong>Day 2</strong>";
ftemp2.innerHTML = "54";
weekday3.innerHTML = "<strong>Day 3</strong>";
ftemp3.innerHTML = "54";
