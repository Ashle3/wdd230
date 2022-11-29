
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



/* Adding the hidden date input on join page */

/*document.querySelector("#lastvisit").innerHTML = today;*/

