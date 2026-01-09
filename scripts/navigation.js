const navButton = document.getElementById('nav-button');

navButton.addEventListener('click', () => {
navButton.classList.toggle('show');
});

const navBar = document.getElementById('nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});