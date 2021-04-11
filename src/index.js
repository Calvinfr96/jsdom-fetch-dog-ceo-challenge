console.log('%c HI', 'color: firebrick')

//Fetching dog images (challenge 1)
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
    .then(response => response.json())
    .then(dogs => dogs.message.forEach(dog => {
        appendImage(dog)
    }));

function appendImage(image) {
    const dogImageContainer = document.getElementById("dog-image-container");
    const img = document.createElement('img');
    img.src = image
    img.width = "300"
    dogImageContainer.appendChild(img)
}

//Fetching dog breeds (challenge 2)
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
    .then(response => response.json())
    .then(breeds => appendBreeds(getBreeds(breeds.message)))

function getBreeds(breeds) {
    breedsList = [];
    for (const property in breeds) {
        breedsList.push(property)
    }

    return breedsList
}
function appendBreeds(breedsList) {
    const ul = document.getElementById("dog-breeds");
    breedsList.forEach(breed => {
        const li = document.createElement('li');
        li.innerText = breed
        li.addEventListener('click', function () { changeListColor(li) })
        ul.appendChild(li)
    })
}

//Changing font color on click (Challenge 3)
function changeListColor(listItem) {
    listItem.style.color = 'red';
}
