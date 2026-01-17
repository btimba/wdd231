async function fetchMemberData() {
    const response = await fetch('./data/members.json');
    const data =await response.json();
    displayMembers(data);
}

function displayMembers(data){
    const dirContainer = document.getElementById('directory-container');
    dirContainer.innerHTML = '';

    data.members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML=`<img src="./images/${member.image}" alt="Logo of ${member.name}" loading="lazy" class="member-image"/>
        <div class="member-info">
            <h3>${member.name}</h3>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}" target="_blank" rel="noopener">${member.website}</a></p>
            <p>Membership Level : ${member.membership_level}</p>
        </div>
        `;
        dirContainer.appendChild(memberCard);

    });

}
fetchMemberData();

const dirContainer = document.getElementById('directory-container');
const gridButton = document.getElementById('grid-view');
const listButton = document.getElementById('list-view');

gridButton.addEventListener('click', () => {
    dirContainer.classList.add('grid');
    dirContainer.classList.remove('list');

    gridButton.classList.add('active');
    listButton.classList.remove('active');
});

listButton.addEventListener('click', () => {
    dirContainer.classList.add('list');
    dirContainer.classList.remove('grid');

    listButton.classList.add('active');
    gridButton.classList.remove('active');
});

const navLinks = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.setAttribute('aria-current', 'page');
    } else {
        link.removeAttribute('aria-current');
    }
});