// 1. Given this array: `[3,62,234,7,23,74,23,76,92]`, use the array filter method and an arrow function to create an array of the numbers greater than `70`
const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];

// const largeNumbers = numbers.filter(number => number > 70);
// console.log(largeNumbers);

const large = numbers.filter(number => number >= 70);
console.log(large);

let new_array = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 70) {
    new_array.push(numbers[i]);
  }
}
console.log(new_array);



let largeNumsArray = numbers.map(function (number) {
  return number > 70;
});
console.log(largeNumsArray);
