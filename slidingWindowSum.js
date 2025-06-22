// You are given an array of n integers. Your task is to calculate the sum of each window of k elements, from left to right.
// In this problem the input data is large and it is created using a generator.
// Input
// The first line contains two integers n and k: the number of elements and the size of the window.
// The next line contains four integers x, a, b and c: the input generator parameters. The input is generated as follows:

// x_1=x
// x_i=(ax_{i-1}+b) \bmod c for i=2,3,\dots,n

// Output
// Print the xor of all window sums.

const slidingWindowSum = (nums, k) => {
  let sum = 0;
  let i = 0;
  let j = 0;
  let xor = 0;
  while (j < nums.length) {
    sum += nums[j];
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      xor = xor ^ sum;
      sum = sum - nums[i];
      j++;
      i++;
    }
  }
  return xor;
};

const arr = [3, 0, 1, 8, 2, 4, 7, 6];
console.log(slidingWindowSum(arr, 5));
