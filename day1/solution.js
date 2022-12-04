const fs = require('fs');

// read input from file
fs.readFile('/Users/russell.debes/Source/Advent-of-Code-2022/day1/input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // split input string on new line chars
  const input = data.split('\n');
  
  // reduce input data into array of arrays for each elf's cals
  const calorieArrayPerElf = input.reduce((acc, num) => {
    if (num === "") {
      // push a new list to accumulator if current num is empty string
      acc.push([]);
    } else {
      // convert num string to integer and push to last array in accumulator
      acc[acc.length -1].push(parseInt(num));
    }
    return acc;
  }, [[]]);

  // reduce calorieArrayPerElf so that we have sum of all sub arrays
  const calorieTotalPerElf = calorieArrayPerElf.reduce((acc, array) => {
    acc.push(array.reduce((acc, num) => acc + num, 0));
    return acc;
  }, []);

  // get single largest value for part 1
  const largestValue = calorieTotalPerElf.reduce((current, next) => (current > next) ? current : next, 0);
  console.log("largest value: ", largestValue);

  // sort calorie totals from largest to smallest and get first three elements
  const threeLargestValues = calorieTotalPerElf.sort((a,b) => b-a).slice(0, 3);
  // get sum of those values
  const threeLargestValuesSum = threeLargestValues.reduce((acc, num) => acc + num, 0);
  console.log("sum of three largest values: ", threeLargestValuesSum);
});