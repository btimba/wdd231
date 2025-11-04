const navbutton = document.querySelector('#ham-btn');

// Add click event listener to the navigation button
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
});