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

    fruitChoice.appendChild(checkbox);
    fruitChoice.appendChild(fruitName);

    document.querySelector('div.fruitopt').appendChild(fruitChoice);
}