const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json"
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);// note that you reference the prophets array of the JSON data object, not just the object
}   
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the document
        const card = document.createElement('section');
        card.setAttribute('class', 'card');

        const h2 = document.createElement('h2');
        
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        card.appendChild(h2);
        const caption = document.createElement('caption');
        caption.textContent = `Born: ${prophet.birthdate} in ${prophet.birthplace}`;
        card.appendChild(caption);

        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();

