const hamBtn = document.querySelector('#ham-btn');
const navList = document.querySelector('#nav-list')

// Add click event listener to the navigation button
hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('show');
    navList.classList.toggle('show');
});