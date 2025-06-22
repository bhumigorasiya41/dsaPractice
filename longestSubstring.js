// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// const lengthOfLongestSubstring = (str) => {
//   let maxLength = 0;
//   for (let i = 0; i < str.length - 1; i++) {
//     let j = i + 1;
//     let string = str[i];
//     while (!string.includes(str[j]) && j < str.length - 1) {
//       string += str[j];
//       j++;
//     }
//     string.length > maxLength ? (maxLength = string.length) : null;
//   }
//   return maxLength;
// };

const lengthOfLongestSubstring = (str) => {
  let lengthOfString = 0;
  const set = new Set();
  let left = 0;
  let right = 0;
  while (right < str.length) {
    if (!set.has(str[right])) {
      set.add(str[right]);
      right++;
      lengthOfString = Math.max(set.size, lengthOfString);
    } else {
      set.delete(str[left]);
      left++;
    }
  }
  return lengthOfString;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
