/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowelSet = new Set(["a", "e", "i", "o", "u"]);
  str = str.toLowerCase();
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    vowelCount += vowelSet.has(str[i]) ? 1 : 0;
  }
  return vowelCount;
}

module.exports = countVowels;
