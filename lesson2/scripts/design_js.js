
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