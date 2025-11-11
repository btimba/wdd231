async function fetchMemberData() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(data) {
    const directoryContainer = document.getElementById('directory-container');
    directoryContainer.innerHTML = '';

    data.members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');    
        memberCard.innerHTML = `

            <img src="./images/${member.image}" alt="${member.name}" class="member-image">
            <div class="member-info">
                <h2>${member.name}</h2>
                <p>Address: ${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membership_level}</p>
            </div>
        `;
        directoryContainer.appendChild(memberCard);
    });

    // Add event listeners for view buttons
    document.getElementById('grid-view').addEventListener('click', () => {
        const container = document.getElementById('directory-container');
        container.classList.add('grid-view');
        container.classList.remove('list-view');
    });

    document.getElementById('list-view').addEventListener('click', () => {
        const container = document.getElementById('directory-container');
        container.classList.add('list-view');
        container.classList.remove('grid-view');
    });
}

fetchMemberData();

// Hamburger menu functionality
const hamBtn = document.getElementById('ham-btn');
const navList = document.getElementById('nav-list');

hamBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
    hamBtn.classList.toggle('show');
});