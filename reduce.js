function reduce(nums, fn, init) {
  // Handle empty arrays by returning the initial value
  if (nums.length === 0) {
    return init;
  }

  // Start with the initial value
  let accumulator = init;

  // Iterate through each element of the array
  for (let i = 0; i < nums.length; i++) {
    // Apply the reducer function to the accumulator and current element
    accumulator = fn(accumulator, nums[i]);
  }

  // Return the final accumulated value
  return accumulator;
}

// Example usage:
const sumFn = function(accum, curr) {
  return accum + curr;
};

const squareSumFn = function(accum, curr) {
  return accum + curr * curr;
};

const nums1 = [1, 2, 3, 4];
const result1 = reduce(nums1, sumFn, 0);  // 10

const nums2 = [1, 2, 3, 4];
const result2 = reduce(nums2, squareSumFn, 100);  // 130

const nums3 = [];
const result3 = reduce(nums3, sumFn, 25);  // 25
