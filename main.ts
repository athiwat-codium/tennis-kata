//
// Your implementations
// 

export function updateGameScore(player1Points: number, player2Points: number) {
    const score = {
        player1: player1Points,
        player2: player2Points
    };
    return score
}
export function decideGameWinner(score: {}) {
        return score['player1'] > score['player2'] ? 'Player 1' : 'Player 2'
}
export function printScore([player1Points, player2Points]) {
    const score = { player1: player1Points, player2: player2Points };
    const scorePlayer1 = score['player1']
    const scorePlayer2 = score['player2']
    const scoreName = ['love', 'fiteen', 'thirty', 'forty']
    if (scorePlayer1 >= 3 && scorePlayer2 >= 3) {
        if (scorePlayer1 === scorePlayer2) {
            return 'deuce'
        } else if (scorePlayer1 - scorePlayer2 === 1 ) {
            return scorePlayer1 > scorePlayer2 ? 'advantage player 1' : 'advantage player 2'
        } else if (scorePlayer2 - scorePlayer1 === 1 ) {
            return scorePlayer2 > scorePlayer1 ? 'advantage player 2' : 'advantage player 1'
        } else {
            return scorePlayer1 > scorePlayer2 ? 'Player 1' : 'Player 2'
        }
    } else if (scorePlayer1 === scorePlayer2) {
        return scoreName[scorePlayer1] + ' - ' + scoreName[scorePlayer2] 
    } else {
            return scoreName[scorePlayer1] + ' - ' + scoreName[scorePlayer2]
    }
}

const player1Points = 8;
const player2Points = 9;

// when
const score = printScore([player1Points, player2Points]);

console.log(score)