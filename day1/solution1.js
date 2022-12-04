const fs = require('fs');

fs.readFile('/Users/russell.debes/Source/Advent-of-Code-2022/day1/input1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // split input text on new line characters
  const inputData = data.split('\n');
  
  // reduce input data into array of arrays for each elf's cals
  const numbersOnly = inputData.reduce((acc, num) => {
    if (num === "") {
      // push a new list to accumulator if current num is empty string
      acc.push([]);
    } else {
      // convert num string to integer and push to last array in accumulator
      acc[acc.length -1].push(parseInt(num));
    }
    return acc;
  }, [[]]);

  // reduce numbersOnly to find the largest array
  const largestArray = numbersOnly.reduce((acc, array) => {
    // reduce to find sum of values for the current array 
    sumCurrentArray = array.reduce((acc, num) => acc + num, 0);
    // return sum of current array or current value of accumulator 
    return (sumCurrentArray > acc) ? sumCurrentArray : acc
  }, 0);
  console.log(largestArray);
});