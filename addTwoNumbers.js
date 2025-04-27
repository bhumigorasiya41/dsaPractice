// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

var addTwoNumbers = function (l1, l2) {
  const maxLength = l1.length > l2.length ? l1.length : l2.length;
  const ans = [];
  let extra = 0;
  for (let i = 0; i < maxLength; i++) {
    const sum = +(l1[i] || 0) + +(l2[i] || 0) + +extra;
    const modifySum = sum.toString().split("");
    if (modifySum.length > 1) {
      extra = modifySum[0];
      ans.push(modifySum[1]);
    } else {
      extra = 0;
      ans.push(modifySum[0]);
    }
  }
  if (+extra) {
    ans.push(extra);
  }
  return ans;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
