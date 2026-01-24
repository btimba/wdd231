async function loadSpotlights() {
    try{
        const response = await fetch("./data/members.json");
        const data = await response.json();

        const qualified = data.members.filter(member =>
            member.membership_level === 2 || member.membership_level === 3
        );

        const shuffled = qualified.sort(()=> 0.5 - Math.random());

        const numberToShow = Math.random() < 0.5 ? 2 : 3;
        const selected = shuffled.slice(0,numberToShow);

        displaySpotLights(selected)

    }  catch (error){
        console.error("Spotlight error:",error);
    }
}

function displaySpotLights(members){
    const container = document.getElementById("spotlight-container");
    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML = `
        <h4>${member.name}</h4>
        <img src="images/${member.image}"alt="${member.name} logo">
        <p><strong>Phone: </strong>${member.phone}</p>
        <p><strong>Address: </strong>${member.address}</p>
        <p><strong>Level: </strong>${getLevelName(member.membership_level)}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        `;
       container.appendChild(card) 
});
}

function getLevelName(level) {
    switch(level){
        case 1 : return "member";
        case 2 : return "silver";
        case 3 : return "gold";
        default :return "unknown";
    }
}

loadSpotlights();

    

