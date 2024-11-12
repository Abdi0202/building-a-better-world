let health = 10;
let education = 10;
let environment = 10;
let turnCount = 0;

function updateDashboard() {
    document.getElementById("health").textContent = health;
    document.getElementById("education").textContent = education;
    document.getElementById("environment").textContent = environment;
}

const challengeCards = [
    { text: "Outbreak of disease. Spend 3 Health Points or lose 5 Education Points.", healthCost: 3, educationPenalty: 5 },
    { text: "Flood damages crops. Spend 4 Environment Points or lose 2 Health Points.", environmentCost: 4, healthPenalty: 2 }
];

const opportunityCards = [
    { text: "Volunteers arrive with medical supplies. Gain 4 Health Points.", healthGain: 4 },
    { text: "Donation received for education. Gain 3 Education Points.", educationGain: 3 }
];

function drawChallengeCard() {
    const card = challengeCards[Math.floor(Math.random() * challengeCards.length)];
    document.getElementById("card-text").textContent = card.text;
    if (card.healthCost) health -= card.healthCost;
    if (card.environmentCost) environment -= card.environmentCost;
    updateDashboard();
}

function drawOpportunityCard() {
    const card = opportunityCards[Math.floor(Math.random() * opportunityCards.length)];
    document.getElementById("card-text").textContent = card.text;
    if (card.healthGain) health += card.healthGain;
    if (card.educationGain) education += card.educationGain;
    updateDashboard();
}

function endTurn() {
    turnCount++;
    if (turnCount >= 10 && health > 0 && education > 0 && environment > 0) {
        document.getElementById("message").textContent = "You win!";
    } else if (turnCount >= 10) {
        document.getElementById("message").textContent = "Game Over!";
    }
    updateDashboard();
}

updateDashboard();
