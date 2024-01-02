function sortBy(arr, fn) {
  return arr.slice().sort((a, b) => fn(a) - fn(b));
}

// Example usage:
const arr1 = [5, 4, 1, 2, 3];
const arr2 = [{"x": 1}, {"x": 0}, {"x": -1}];
const arr3 = [[3, 4], [5, 2], [10, 1]];

const sortIdentity = (x) => x;
const sortByX = (d) => d.x;
const sortBySecondElement = (x) => x[1];

console.log(sortBy(arr1, sortIdentity)); // Output: [1, 2, 3, 4, 5]
console.log(sortBy(arr2, sortByX)); // Output: [{"x": -1}, {"x": 0}, {"x": 1}]
console.log(sortBy(arr3, sortBySecondElement)); // Output: [[10, 1], [5, 2], [3, 4]]
