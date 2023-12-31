function map(arr, fn) {
  // Create a new array to store the transformed elements
  const result = [];

  // Iterate through each element in the original array
  for (let i = 0; i < arr.length; i++) {
    // Apply the mapping function to the current element and its index
    const transformedValue = fn(arr[i], i);

    // Push the transformed value to the result array
    result.push(transformedValue);
  }

  // Return the created array with transformed elements
  return result;
}

// Example usage:
const plusOneFn = function(n) {
  return n + 1;
};

const plusIFn = function(n, i) {
  return n + i;
};

const constantFn = function() {
  return 42;
};

const arr1 = [1, 2, 3];
const newArr1 = map(arr1, plusOneFn);  // [2, 3, 4]

const arr2 = [1, 2, 3];
const newArr2 = map(arr2, plusIFn);   // [1, 3, 5]

const arr3 = [10, 20, 30];
const newArr3 = map(arr3, constantFn); // [42, 42, 42]
