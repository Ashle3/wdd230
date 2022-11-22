
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
/*help here*/
let lastVisit = window.localStorage.getItem("lastvisit");

if (numVisits !== 0){
    visitDisplay.textContent = numVisits;
} else {
    visitDisplay.textContent = "This is your first visit!";
}


/* Adding the hidden date input on join page */

document.querySelector("#lastvisit").innerHTML = today;

