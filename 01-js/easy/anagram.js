/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const countMap = new Map();
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  //maintain frequency of the letters in str1
  for (let i = 0; i < str1.length; i++) {
    if (countMap.has(str1[i])) {
      countMap.set(str1[i], countMap.get(str1[i]) + 1);
    } else {
      countMap.set(str1[i], 1);
    }
  }

  //traverse the string str2, if a particular not found in map, then return false, else decrease the frequency count for that letter in map
  for (let i = 0; i < str2.length; i++) {
    if (countMap.has(str2[i])) {
      countMap.set(str2[i], countMap.get(str2[i]) - 1);
    } else {
      return false;
    }
  }

  //now, traverse through the map through all entries, each entry's value must be 0 else return false

  for (const [k, v] of countMap) {
    if (v !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
