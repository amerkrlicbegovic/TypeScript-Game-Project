function startGame() {
    var playerName = getInputValaue('playerName');
    logPlayer(playerName);
    postScore(100);
}
function logPlayer(name) {
    if (name === void 0) { name = 'MultiMath Player'; }
    console.log("New game starting for player: " + name);
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = 'MultiMath Player'; }
    var scoreElement = document.getElementById('postedScore');
    scoreElement.innerHTML = score + " - " + playerName;
}
function getInputValaue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map