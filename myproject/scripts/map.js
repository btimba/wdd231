document.addEventListener("DOMContentLoaded", () => {
            const map = L.map('map').setView([-34.409, 19.244], 11); // Hermanus default

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19
            }).addTo(map);

            // Example marker — you can load real data later
            L.marker([-34.409, 19.244])
                .addTo(map)
                .bindPopup("Hermanus - No active fires reported.")
                .openPopup();
        });