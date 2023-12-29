// **Problem Statement:**

// Create a counter function that starts at a given integer n and increments
// by 1 on each subsequent call.

// **Solution:**

function createCounter(n) {
  let counter = n; // Local variable to store the counter value

  return function() {
    // Inner function that acts as the counter
    return counter++; // Return the current value and then increment
  };
}

// **Example Usage:**

const counter10 = createCounter(10);
console.log(counter10());   // Output: 10
console.log(counter10());   // Output: 11
console.log(counter10());   // Output: 12

const counterMinus2 = createCounter(-2);
console.log(counterMinus2()); // Output: -2
console.log(counterMinus2()); // Output: -1
console.log(counterMinus2()); // Output: 0

// **Explanation:**

// - The `createCounter` function uses a closure to create a counter that persists
//   across multiple calls.
// - The inner function returns the current value of `counter` and then increments it
//   using the post-increment operator (`++`).
// - Each call to `createCounter` returns a new counter instance with its own independent state.
