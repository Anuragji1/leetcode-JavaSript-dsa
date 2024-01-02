Array.prototype.groupBy = function (fn) {
  const groups = {};

  for (const item of this) {
    const key = fn(item);
    groups[key] = groups[key] || []; // Create an empty array if the key doesn't exist
    groups[key].push(item);
  }

  return groups;
};

// Example usage:
const array1 = [
  { id: "1" },
  { id: "1" },
  { id: "2" }
];
const array2 = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const groupById = function (item) {
  return item.id;
};
const groupByFirstElement = function (list) {
  return String(list[0]);
};
const groupByGreaterThan5 = function (n) {
  return String(n > 5);
};

console.log(array1.groupBy(groupById));
console.log(array2.groupBy(groupByFirstElement));
console.log(array3.groupBy(groupByGreaterThan5));
