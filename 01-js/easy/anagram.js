/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const dit = {};
  if (str1.length != str2.length) {
    return false;
  }
  for (let index = 0; index < str1.length; index++) {
    let str1_1 = str1[index].toLowerCase();
    let str2_2 = str2[index].toLowerCase();
    if (dit.hasOwnProperty(str1_1)) {
      dit[str1_1] = dit[str1_1] + 1;
    } else {
      dit[str1_1] = 1;
    }
    if (dit.hasOwnProperty(str2_2)) {
      dit[str2_2] = dit[str2_2] - 1;
    } else {
      dit[str2_2] = -1;
    }
  }

  const allEqual = (arr) => arr.every((val) => val === arr[0]);
  return allEqual(Object.values(dit));
}

module.exports = isAnagram;
