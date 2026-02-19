

// LocalStorage Example (last visit)
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
  localStorage.setItem("lastVisit", Date.now());
} else {
  console.log("Last visit:", new Date(parseInt(lastVisit)));
}