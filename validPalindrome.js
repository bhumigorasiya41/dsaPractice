// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

var validPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  let skipCount = 0;
  while (i <= j && i !== j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      if (skipCount === 0) {
        if (s[i + 1] === s[j]) {
          i++;
          skipCount++;
        } else if (s[i] === s[j - 1]) {
          j--;
          skipCount++;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
