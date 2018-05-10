function startGame() {
    // starting a new game

    let playerName: string | undefined = getInputValaue('playerName');
    logPlayer(playerName);

    postScore(100);
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`);
}

function postScore(score: number, playerName: string ='MultiMath Player'): void {
    let scoreElement: HTMLElement | null = document.getElementById('postedScore');
    scoreElement!.innerHTML = `${score} - ${playerName}`;
}

function getInputValaue(elementID: string): string | undefined{
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if(inputElement.value === ''){
        return undefined
    } else{
        return inputElement.value
    }
}

document.getElementById('startGame')!.addEventListener('click', startGame);