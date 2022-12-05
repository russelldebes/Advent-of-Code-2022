const fs = require('fs');

// read input from file
fs.readFile('/Users/russell.debes/Source/Advent-of-Code-2022/day3/input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // get a list of all rucksack contents
  const processedInput = data.split('\n');


  const pioritySums = processedInput.reduce((acc, rucksack) => {
    // for each item in the rucksack, split the rucksack in half
    const sliceValue = rucksack.length/2;
    const firstHalf = rucksack.slice(0, sliceValue);
    const secondHalf = rucksack.slice(sliceValue);

    // split firstHalf into an array,
    // then filter the array and check if element x exists in secondHalf string
    // take only the first element of the array that is returned from filter
    const commonLetter = firstHalf.split('').filter(x => secondHalf.includes(x))[0];

    // generate a list that represents the alphabet

    // create an array of the code point values for the letters of the alphabet
    let codePoints = [...Array(26).keys()].map(i => i + 65);

    // use fromCharCode() to create a string from the code point values
    let alphabet = String.fromCharCode(...codePoints);

    // split the string into an array of letters
    alphabet = alphabet.split('');

    // find the index of the commonLetter in the alphabet
    let points = alphabet.indexOf(commonLetter.toUpperCase()) + 1;

    // check if letter is capitalized (exists within alphabet array)
    if (alphabet.includes(commonLetter)) {
        // if so add 26 points
        points += 26;
    }

    acc += points;

    return acc;
  }, 0);

});