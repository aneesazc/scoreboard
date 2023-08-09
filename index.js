let score1 = 0
let score2 = 0

document.getElementById("home-score").textContent = score1
document.getElementById("guest-score").textContent = score2



function addone() {
    score1 += 1
    document.getElementById("home-score").textContent = score1
}

function addtwo() {
    score1 += 2
    document.getElementById("home-score").textContent = score1
}

function addthree() {
    score1 += 3
    document.getElementById("home-score").textContent = score1
}

function addoneAway() {
    score2 += 1
    document.getElementById("guest-score").textContent = score2
}

function addtwoAway() {
    score2 += 2
    document.getElementById("guest-score").textContent = score2
}

function addthreeAway() {
    score2 += 3
    document.getElementById("guest-score").textContent = score2
}

function newGame() {
    score1 = 0
    score2 = 0
    document.getElementById("home-score").textContent = score1
    document.getElementById("guest-score").textContent = score2
    
}

// leaderEl = document.getElementById("leader-score")

// if ((document.getElementById("home-score").textContent) > (document.getElementById("guest-score").textContent)) {
//     leaderEl.textContent = "Leader: Home"
// } else if ((document.getElementById("guest-score").textContent) > (document.getElementById("home-score").textContent)) {
//     leaderEl.textContent = "Leader: Guest"
// }