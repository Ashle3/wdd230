
const datefieldUK = document.querySelector("aside");

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


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


document.getElementById("lastModified").innerHTML = (document.lastModified);


/* Calculating Number of Days Since Last Visit */

const visitDisplay = document.querySelector("#lastvisit");
/*help here*/
let daysPassed = 0;
let lastVisited;
let today = now;

const setStorage = () => {
    localStorage.setItem("lastVisited", today.getTime());
    localStorage.setItem("today", today.getTime());
};

const setNewDate = () => {
    localStorage.setItem("today", today.getTime());
    daysPassed = calculateDays();
};

const calculateDays = () => {
    let last = localStorage.getItem("lastVisited");
    let current = localStorage.getItem("today");

    let difference = current-last;

    daysPassed = Math.round(difference/(1000*3600*24));
    return daysPassed;
};

if (!localStorage.getItem("lastVisited")) {
    setStorage();
    daysPassed=calculateDays();
} else {
    setNewDate();
}

visitDisplay.innerHTML = daysPassed;
localStorage.setItem("lastVisited", today.getTime());
/* Adding the hidden date input on join page */

/*document.querySelector("#lastvisit").innerHTML = today;*/

