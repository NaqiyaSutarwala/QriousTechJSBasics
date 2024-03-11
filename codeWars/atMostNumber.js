// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr, n) {
  var counts = {};
  return arr.filter(function (num) {
    counts[num] = (counts[num] || 0) + 1;
    return counts[num] <= n;
  });
}

// Test cases
// console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)); // Output: [1, 2, 3, 1, 2, 3]
// console.log(deleteNth([20, 37, 20, 21], 1)); // Output: [20, 37, 21]

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 1));