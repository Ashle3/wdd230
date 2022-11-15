
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

let lastModif = new Date(document.lastModified);

document.getElementById("lastModified").innerHTML = lastModif



/* Lazy Loading Image Technique */

let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}


/* Calculating Number of Days Since Last Visit */

let d = new Date();
let today = d.getDate();

const visitDisplay = document.querySelector("#lastvisit");
/*help here
let lastVisit = window.localStorage.getItem("lastvisit");

if (numVisits !== 0){
    visitDisplay.textContent = numVisits;
} else {
    visitDisplay.textContent = "This is your first visit!";
}*/


/* Adding the hidden date input on join page 

document.querySelector("#date").innerHTML = today;*/


/* Displaying the business directory cards from json file */

const requestURL1 = 'https://ashle3.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector(".cards");

fetch(requestURL1)
    .then(function (response) {
        return response.json;
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const directory = jsonObject["directory"];
        directory.forEach(displayBusinesses);
    })

function displayBusinesses(business) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let telephone = document.createElement('p');
    let website = document.createElement('p');

    address.textContent = `${business.address}`;
    telephone.textContent = `${business.phone}`;
    website.textContent = `${business.website}`;

    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `Logo of ${business.name}`);
    logo.setAttribute('loading', 'lazy');

    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(telephone);
    card.appendChild(website);

    document.querySelector('div.cards').appendChild(card);
}