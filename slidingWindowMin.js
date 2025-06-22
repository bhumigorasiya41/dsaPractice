// You are given an array of n integers. Your task is to calculate the minimum of each window of k elements, from left to right.
// In this problem the input data is large and it is created using a generator.
// Input
// The first line contains two integers n and k: the number of elements and the size of the window.
// The next line contains four integers x, a, b and c: the input generator parameters. The input is generated as follows:

// x_1=x
// x_i=(ax_{i-1}+b) \bmod c for i=2,3,\dots,n

// Output
// Print the xor of all window minimums.
// Constraints

const minOfArray = (arr) => {
  return Math.min(...arr);
};

const slidingWindowMin = (arr, size) => {
  let min = 0;
  let left = 0;
  right = left + size - 1;
  while (right <= arr.length - 1) {
    min = min ^ minOfArray(arr.slice(left, right + 1));
    left++;
    right++;
  }
  return min;
};

const arr = [3, 0, 1, 8, 2, 4, 7, 6];
console.log(slidingWindowMin(arr, 5));
