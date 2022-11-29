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