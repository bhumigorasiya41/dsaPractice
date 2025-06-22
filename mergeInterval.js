// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

const mergeBoth = (arr1, arr2) => {
  const concatArr = [...arr1, ...arr2].sort((a, b) => a - b);
  return [concatArr[0], concatArr[concatArr.length - 1]];
};

const mergeInterval = (interval) => {
  return interval.reduce((acc, curr) => {
    let available = acc.find(([a, b]) => curr[0] <= b);
    if (available) {
      acc.splice(acc.indexOf(available));
      acc.push(mergeBoth(available, curr));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
};
console.log(
  mergeInterval([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  mergeInterval([
    [1, 4],
    [4, 5],
    [5, 9],
    [9, 20],
  ])
);

console.log(mergeInterval([[1, 3]]));

const mergeInterval2 = (interval) => {
  const sorted = interval.sort((a, b) => a[0] - b[0]);
  let merged = [sorted[0]];
  for (let i = 0; i < sorted.length; i++) {
    const [currStart, currEnd] = interval[i];
    const lastMerged = merged[merged.length - 1];

    if (lastMerged[1] >= currStart) {
      // merged[merged.length - 1] = [
      //   lastMerged[0],
      //   Math.max(currEnd, lastMerged[1]),
      // ];
      lastMerged[1] = Math.max(lastMerged[1], currEnd);
    } else {
      merged.push(interval[i]);
    }
  }
  return merged;
};

console.log(
  mergeInterval2([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  mergeInterval2([
    [1, 4],
    [4, 5],
    [5, 9],
    [9, 20],
  ])
);

console.log(mergeInterval2([[1, 3]]));
