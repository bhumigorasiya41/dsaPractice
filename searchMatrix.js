// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

var searchMatrix = function (matrix, target) {
  let found = false;
  let rowIndex = -1;
  for (let i = 0; i < matrix.length; i++) {
    if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
      rowIndex = i;
      break;
    }
  }

  let start = 0;
  let end = matrix[rowIndex].length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (matrix[rowIndex][mid] === target) {
      found = true;
      break;
    } else if (target > matrix[rowIndex][mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return found;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
