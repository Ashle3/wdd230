// I'm writing down both ways to get the date so that I can practice with it

// Method 1
let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let date = d.getDate();
let year = d.getFullYear();
let fulldate = dayName + "," + monthName + " " + date + "," + year;

//Method 2

try {
    let options = {
        year: "numeric"

    }
    document.getElementById(
        "currentyear"
        ).textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
    alert("Error");
}

let lastModif = new Date(document.lastModified);

document.getElementById("lastModified").innerHTML = lastModif
