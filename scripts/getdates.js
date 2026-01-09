const today = new Date();
document.getElementById("last-modified").textContent = today.toLocaleDateString();
document.getElementById("current-year").textContent = today.getFullYear();