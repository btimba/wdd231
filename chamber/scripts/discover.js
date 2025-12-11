import {places} from '../data/places.mjs';
console.log(places);

const placesSection = document.getElementById('places-section');

function displayItems(places) {
    places.forEach((place) => {
        const placeCard = document.createElement('div');
        placeCard.classList.add('place-card');

        const placeImage = document.createElement('img');
        placeImage.src = `./images/${place.picture_url}`;
        placeImage.alt = place.name;

        const placeName = document.createElement('h2');
        placeName.textContent = place.name;

        const placeAddress = document.createElement('address');
        placeAddress.innerHTML = `<strong>Address:</strong> ${place.address}`;

        const placeDescription = document.createElement('p');
        placeDescription.innerHTML = `<strong>Description:</strong> ${place.description}`;

        const learnMore = document.createElement('button');
        learnMore.textContent = 'Learn More';
        learnMore.classList.add('learnmore-btn');

        placeCard.appendChild(placeImage);
        placeCard.appendChild(placeName);
        placeCard.appendChild(placeAddress);
        placeCard.appendChild(placeDescription);
        placeCard.appendChild(learnMore);
        placesSection.appendChild(placeCard);
    });
}

displayItems(places);

// Visit counter
const messageElement = document.getElementById('visit-message');
let lastVisit = localStorage.getItem('lastVisit');

//current timestamp
const now = Date.now();

if (lastVisit) {
    messageElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diff = now - Number(lastVisit);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 1) {
        messageElement.textContent = "Back so soon! Awesome to see you again!";
    } else {
        messageElement.textContent = `You last visited ${days} day${days === 1 ? '' : 's'} ago.`;
    }
}

localStorage.setItem('lastVisit', now.toString());