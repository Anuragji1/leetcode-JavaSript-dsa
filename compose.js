function compose(functions) {
  // Handle the case of an empty array by returning the identity function
  if (functions.length === 0) {
    return x => x;
  }

  // Compose the functions from right to left using a temporary variable
  let composed = functions[functions.length - 1];
  for (let i = functions.length - 2; i >= 0; i--) {
    composed = x => functions[i](composed(x));
  }

  // Return the composed function
  return composed;
}

// Example usage:
const functions1 = [x => x + 1, x => x * x, x => 2 * x];
const composedFn1 = compose(functions1);
const result1 = composedFn1(4);  // 65

const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
const composedFn2 = compose(functions2);
const result2 = composedFn2(1);  // 1000

const functions3 = [];
const composedFn3 = compose(functions3);
const result3 = composedFn3(42);  // 42
