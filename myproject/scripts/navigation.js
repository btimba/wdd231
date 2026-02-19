const navButton = document.getElementById('nav-button');
const navBar = document.getElementById('nav-bar');

navButton.addEventListener('click', () => {
navButton.classList.toggle('show');
navBar.classList.toggle('show');
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
