function chunk(arr, size) {
  const chunks = [];
  let i = 0;

  while (i < arr.length) {
    chunks.push(arr.slice(i, i += size)); // Create a chunk of size elements
  }

  return chunks;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 9, 6, 3, 2];

console.log(chunk(arr1, 1));   // [[1], [2], [3], [4], [5]]
console.log(chunk(arr2, 3));   // [[1, 9, 6], [3, 2]]
console.log(chunk(arr2, 6));   // [[1, 9, 6, 3, 2]]
console.log(chunk([], 1));     // []
console.log(chunk([8, 5, 3, 2, 6], 6)); // [[8, 5, 3, 2, 6]]
