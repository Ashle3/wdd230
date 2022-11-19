/* Displaying the business directory cards from json file*/

const requestURL1 = 'json/data.json';
const cards = document.querySelector('.cards');
    
fetch(requestURL1)
    .then(function (response) {
    return response.json();
    })
    .then(function(jsonObject){
    const directory = jsonObject['directory'];
    directory.forEach(displayBusinesses);
    });

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

/*Grid vs List*/

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}