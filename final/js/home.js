/* Opens the navigation menu */
function toggleMenu() {
    document.getElementsByClassName("nav")[0].classList.toggle("responsive");
}

/* Gets today's date, last modified */

const today = new Date();

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
