// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

var isSameTree = function (p, q) {
  let sameTree = false;
  if (p.length !== q.length) {
    sameTree = false;
  } else {
    for (let i = 0; i < p.length - 1; i++) {
      if (p[i] !== q[i]) {
        sameTree = false;
      } else {
        sameTree = true;
      }
    }
  }
  return sameTree;
};

console.log(isSameTree([1, 2, 3], [1, 2, 3]));
console.log(isSameTree([1, 2], [1, null, 2]));
console.log(isSameTree([1, 2, 1], [1, 1, 2]));
