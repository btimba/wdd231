import { townsData } from '../data/towns.mjs';

const container = document.querySelector('#cities-container');
const searchInput = document.querySelector('#search-input');
const modal = document.querySelector('#cityModal');
const modalBody = modal.querySelector('#modal-body');
const closeBtn = modal.querySelector('#closeModal');

let citiesData = [];
// Fetch city data from GeoDB API
async function fetchCities() {   
// Cape Town's GeoDB ID for reference
    const capeTownId = "Q1185115";
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${capeTownId}/nearbyCities?limit=10&radius=100&sort=-population`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8f086efe22msh34cf864d5ef1775p19eeeajsndab1964421e8',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };  

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        citiesData = data.data;

        displayCities(citiesData);

    } catch (error) {
        console.warn('API fetch failed, using local data:', error);
        const backupResponse = await fetch('./data/cities.json');
        const backupData = await backupResponse.json();
        citiesData = backupData.city;
        displayCities(citiesData);
    }
}

// Display cities in the container  
function displayCities(cities) {
    container.innerHTML = '';

    if (cities.length === 0) {
        container.innerHTML = '<p>No cities found.</p>';
        return;
    }

    cities.forEach(city => {

        const cityCard = document.createElement('div');
        cityCard.classList.add('city-card');

        cityCard.innerHTML = `
            <h3>${city.city}</h3>
            <p><strong>Population:</strong> ${city.population.toLocaleString()}</p>
            <p><strong>Region:</strong> ${city.region}</p>
            <button class="details-btn" data-id="${city.wikiDataId}">View Details</button>
        `;

        container.appendChild(cityCard);
    });
}
// Search functionality
searchInput.addEventListener('input', () => {
  
    const query = searchInput.value.toLowerCase();
    const filteredCities = citiesData.filter(city => city.city.toLowerCase().includes(query));
    displayCities(filteredCities);
});

// Event delegation for details buttons
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('details-btn')) {
        const cityId = e.target.getAttribute('data-id');  
        const city = citiesData.find(city => city.wikiDataId === cityId);

        
        if (!city) {
            console.error('City not found:', cityId);
            return;
        }
    

        showModal(city);
    }
});

// Show modal
function showModal(city) {
    // Add Number() to ensure toFixed/toLocaleString work even if data comes as a string
const pop = Number(city.population).toLocaleString();
const lat = Number(city.latitude).toFixed(2);
const lon = Number(city.longitude).toFixed(2);
const dist = Number(city.distance).toFixed(2);

    modalBody.innerHTML = `
            <h2 id="modal-title">${city.city}</h2>
            <div id="modal-content">
            <p><strong>Population:</strong> ${pop}</p>
            <p><strong>Coordinates:</strong> ${lat}, ${lon}</p>
            <p><strong>Distance from Cape Town:</strong> ${dist} km</p>
            <p><strong>Region:</strong> ${city.region}</p>
            <p><strong>Country:</strong> ${city.country}</p>
            </div>
        `;
    modal.style.display = 'block';
    localStorage.setItem('lastViewedCity', city.city);
}

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

//initialize
fetchCities();