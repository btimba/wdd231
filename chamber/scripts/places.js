import { places } from "../data/places-of-interest.mjs";

const placesContainer = document.getElementById("places-of-interest");

function displayItems(places){
    places.forEach(place => {
        const placeCard = document.createElement("div");
        placeCard.classList.add("place-card");
        placeCard.innerHTML = `
            <h2>${place.name}</h2>
            <figure><img src="images/${place.picture_url}" alt="${place.name}"></figure>
            <address><strong>Address:</strong> ${place.address}</address>
            <p>${place.description}</p>
            <button>Learn More</button>
        `;
        placesContainer.appendChild(placeCard);
    });
}
displayItems(places);

const visitMessage = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = new Date();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! This is your first visit.Let us know if you have any questions or need recommendations for exploring Hermanus!";
} else {
    const lastVisitDate = new Date(lastVisit);
    const daysSinceLastVisit = Math.floor((now - lastVisitDate) / (1000 * 60 * 60 * 24));

    if (daysSinceLastVisit < 1) {
        visitMessage.textContent = "Welcome back! You last visited today.";
    } else if (daysSinceLastVisit === 1) {
        visitMessage.textContent = "Welcome back! You last visited yesterday.";
    } else {
        visitMessage.textContent = `Welcome back! It's been ${daysSinceLastVisit} days since your last visit.`;
    }
    visitMessage.textContent = `Welcome back! It's been ${daysSinceLastVisit} day(s) since your last visit.`;
}

localStorage.setItem("lastVisit", now.toISOString());