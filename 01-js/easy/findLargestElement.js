/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let maximumElement = numbers[0];
  for (const num of numbers) {
    maximumElement = maximumElement < num ? num : maximumElement;
  }
  return maximumElement;
}

module.exports = findLargestElement;
