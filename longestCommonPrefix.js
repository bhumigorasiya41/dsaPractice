// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  let char = strs[0].split("");
  let commonStr = "";
  char.forEach((character, index) => {
    const commonChar = strs.every((string) => string[index] === character);
    if (commonChar) {
      commonStr += character;
    } else {
      return commonStr;
    }
  });
  return commonStr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
