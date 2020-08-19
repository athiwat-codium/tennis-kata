//
// Your implementations
// 

function updateGameScore(player1Points: number, player2Points: number) {
    const score = {
        player1: player1Points,
        player2: player2Points
    };
    return score
}
function decideGameWinner(score: {}) {
        return score['player1'] > score['player2'] ? 'Player 1' : 'Player 2'
}
function printScore([player1Points, player2Points]) {
    const score = { player1: player1Points, player2: player2Points };
    if (score['player1'] >= 3 && score['player2'] >= 3) {
        if (score['player1'] === score['player2']) {
            return 'deuce'
        } else {
            return score['player1'] > score['player2'] ? 'advantage player 1' : 'advantage player 2'
        }
    } else if (score['player1'] === 2 && score['player2'] === 2) {
        return 'thirty - thirty'
    } else {
            return decideGameWinner(score)
    }
}

const player1Points = 4;
const player2Points = 3;

// when
const score = printScore([player1Points, player2Points]);

console.log(score)