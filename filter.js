function filter(arr, fn) {
  // Create an empty array to store the filtered elements
  const filteredArr = [];

  // Iterate through each element in the original array
  for (let i = 0; i < arr.length; i++) {
    // Apply the filtering function to the current element and its index
    const shouldInclude = fn(arr[i], i);

    // If the filtering function returns a truthy value, add the element to the filtered array
    if (shouldInclude) {
      filteredArr.push(arr[i]);
    }
  }

  // Return the filtered array
  return filteredArr;
}

// Example usage:
const greaterThan10Fn = function(n) {
  return n > 10;
};

const firstIndexFn = function(n, i) {
  return i === 0;
};

const plusOneFn = function(n) {
  return n + 1;
};

const arr1 = [0, 10, 20, 30];
const newArr1 = filter(arr1, greaterThan10Fn); // [20, 30]

const arr2 = [1, 2, 3];
const newArr2 = filter(arr2, firstIndexFn);  // [1]

const arr3 = [-2, -1, 0, 1, 2];
const newArr3 = filter(arr3, plusOneFn);  // [-2, 0, 1, 2]
