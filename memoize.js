function memoize(fn) {
  const cache = {};
  let callCount = 0;

  return function(...args) {
    const key = JSON.stringify(args); // Unique key based on arguments

    if (key in cache) {
      return cache[key]; // Return cached result
    } else {
      callCount++;
      const result = fn.apply(this, args); // Call original function with context
      cache[key] = result; // Store result in cache
      return result;
    }
  };
}

// Example usage:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);

const fib = (n) => (n <= 1) ? 1 : fib(n - 1) + fib(n - 2);
const memoFib = memoize(fib);
