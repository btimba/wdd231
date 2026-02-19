const riskDisplay = document.getElementById('riskLevel');

const riskLevels = ['Low', 'Moderate', 'High', 'Extreme'];

const randomRisk = riskLevels[Math.floor(Math.random() * riskLevels.length)];

riskDisplay.textContent = `Current Veld Fire Risk: ${randomRisk}`;

localStorage.setItem('lastRiskLevel', randomRisk);

const banner = document.querySelector('.fire-banner');

if (randomRisk === 'High' || randomRisk === 'Extreme') {
    banner.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
    
}