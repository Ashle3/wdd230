const requestURL = 'json/fruit.json';
const options = document.querySelector('.fruitopt');

fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function(jsonObject){
    const fruitList= jsonObject['fruitList'];
    fruitList.forEach(displayFruitOption);
    });

function displayFruitOption(fruit){
    let fruitChoice = document.createElement('section');
    let fruitName = document.createElement('label');
    let checkbox = document.createElement('input');

    fruitName.textContent = `${fruit.name}`;
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('value', fruit.name);
    checkbox.setAttribute('name', 'fruit');

    fruitChoice.appendChild(checkbox);
    fruitChoice.appendChild(fruitName);

    document.querySelector('div.fruitopt').appendChild(fruitChoice);
}

/* Output 

let name1 = document.querySelector("#nameValue");
let btn = document.querySelector(".submitBtn");
let nameput = document.querySelector("#name");

function displayOutput() {
    nameput.innerHTML = name1.value;
}

btn.addEventListener('click', displayOutput);*/

function displayOutput() {
    let output = document.querySelector('.output');
    let nameput = document.createElement('p');
    let emailput = document.createElement('p');
    let phoneput = document.createElement('p');
    let instructput = document.createElement('p');
    let fruitput = document.createElement('p');

    const name1 = document.querySelector("#nameValue");
    const email = document.querySelector("#emailValue");
    const phone = document.querySelector("#phoneValue");
    const instructions = document.querySelector("#specinstructions");
    const fruitPicked = document.querySelector(".fruitopt");

    nameput.textContent = `Name: ${name1.value}`;
    emailput.textContent = `Email: ${email.value}`;
    phoneput.textContent = `Cell Phone: ${phone.value}`;
    instructput.textContent = `Special Instructions: ${instructions.value}`;

    let fruitChecks = document.querySelectorAll('input[name="fruit"]:checked');
    let values = [];
    fruitChecks.forEach((fruit1) => {
        values.push(fruit1.value);
    })
    fruitput.textContent = `Fruits Selected: ${values}`;

    output.appendChild(nameput);
    output.appendChild(emailput);
    output.appendChild(phoneput);
    output.appendChild(fruitput);
    output.appendChild(instructput);
}

