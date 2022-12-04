const fs = require('fs');

// read input from file
fs.readFile('/Users/russell.debes/Source/Advent-of-Code-2022/day2/input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // get a list of arrays, each array contains their move and my move
  const processedInput = data.split('\n').reduce((acc, round) => {
    const roundMoves = round.split(' ');
    acc.push(roundMoves);
    return acc;
  }, []);

  // score of what I selected
  // 1 for rock
  // 2 for paper
  // 3 for scissors 

  // score for outcome
  // 0 if lost
  // 3 for draw
  // 6 for win

  // iterate over each round's moves and accumulate the scores
  const solution1 = processedInput.reduce((acc, round) => {
    const theirMove = round[0];
    const myMove = round[1];

    if (theirMove === 'A') {
        if (myMove === 'X') {
            acc += 4;
        }
        else if (myMove === 'Y') {
            acc += 8;
        } else {
            acc += 3;
        }
    } else if (theirMove === 'B') {
        if (myMove === 'X') {
            acc += 1;
        }
        else if (myMove === 'Y') {
            acc += 5;
        } else {
            acc += 9;
        }
    } else {
        if (myMove === 'X') {
            acc += 7;
        }
        else if (myMove === 'Y') {
            acc += 2;
        } else {
            acc += 6;
        }
    }
    return acc;
  }, 0);

  console.log('solution 1: ', solution1);

  // same approach with different scoring
  const solution2 = processedInput.reduce((acc, round) => {
    const theirMove = round[0];
    const desiredOutcome = round[1];

    if (theirMove === 'A') {
        if (desiredOutcome === 'X') {
            acc += 3;
        }
        else if (desiredOutcome === 'Y') {
            acc += 4;
        } else {
            acc += 8;
        }
    } else if (theirMove === 'B') {
        if (desiredOutcome === 'X') {
            acc += 1;
        }
        else if (desiredOutcome === 'Y') {
            acc += 5;
        } else {
            acc += 9;
        }
    } else {
        if (desiredOutcome === 'X') {
            acc += 2;
        }
        else if (desiredOutcome === 'Y') {
            acc += 6;
        } else {
            acc += 7;
        }
    }
    return acc;
  }, 0);

  console.log('solution 2: ', solution2);
});