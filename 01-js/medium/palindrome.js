/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strLen = str.length;
  str = str.toLowerCase();
  let start = 0;
  let end = strLen - 1;
  const excludeCharSet = new Set([" ", "?", ",", "!", ".", ";"]);
  while (start < end) {
    if (excludeCharSet.has(str[start])) {
      start++;
      continue;
    }

    if (excludeCharSet.has(str[end])) {
      end--;
      continue;
    }

    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

module.exports = isPalindrome;
