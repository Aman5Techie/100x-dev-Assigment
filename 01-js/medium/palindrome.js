/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let char = str.toLowerCase();
  let low = 0;
  // 97 122
  let high = char.length - 1;
  while (low <= high) {
    while (char.charCodeAt(low) < 97 || char.charCodeAt(low) > 122) {
      low++;
    }
    while (char.charCodeAt(high) < 97 || char.charCodeAt(high) > 122) {
      high--;
    }
    if (char[low] !== char[high]) {
      return false;
    }
    low++;
    high--;
  }
  return true;
}

module.exports = isPalindrome;
