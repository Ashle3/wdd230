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

function displayOutput() {
    const output = document.querySelector('.output');
    const nameput = document.createElement('p');
    const emailput = document.createElement('p');
    const phoneput = document.createElement('p');
    const instructput = document.createElement('p');
    const fruitput = document.createElement('p');
    const day = document.createElement('p');
    let date = new Date().toLocaleDateString("en-US", options);

    const name1 = document.querySelector("#nameValue");
    const email = document.querySelector("#emailValue");
    const phone = document.querySelector("#phoneValue");
    const instructions = document.querySelector("#specinstructions");

    nameput.textContent = `Name: ${name1.value}`;
    emailput.textContent = `Email: ${email.value}`;
    phoneput.textContent = `Cell Phone: ${phone.value}`;
    instructput.textContent = `Special Instructions: ${instructions.value}`;
    day.textContent = `Date Ordered: ${date}`;

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
    output.appendChild(day);
}

function displayNutrition(fruit){
    const nutrition = document.createElement('section');
    const carbohydrates = document.createElement('p');
    const protein = document.createElement('p');
    const fat = document.createElement('p');
    const sugar = document.createElement('p');
    const calories = document.createElement('p');

    carbohydrates.textContent = `Carbohydrates: ${fruit.nutritions.carbohydrates}`;

    nutrition.appendChild(carbohydrates);
}

