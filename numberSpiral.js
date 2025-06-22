// A number spiral is an infinite grid whose upper-left square has number 1. Here are the first five layers of the spiral:

// Your task is to find out the number in row y and column x.
// Input
// The first input line contains an integer t: the number of tests.
// After this, there are t lines, each containing integers y and x.
// Output
// For each test, print the number in row y and column x.

const numberSpiral = (row, column) => {
  let n = Math.max(row, column);
  let ele;
  let m = n * n - (n - 1);
  if (row % 2 === 0) {
    ele = m + Math.abs(row - column);
  } else {
    ele = m - Math.abs(row - column);
  }
  return ele;
};

// pattern of arra element
// const arr = [
//   [1, 2, 9, 10, 25],
//   [4, 3, 8, 11, 24],
//   [5, 6, 7, 12, 23],
//   [16, 15, 14, 13, 22],
//   [17, 18, 19, 20, 21],
// ];

console.log(numberSpiral(6, 3));
console.log(numberSpiral(2, 3));
console.log(numberSpiral(4, 4));
