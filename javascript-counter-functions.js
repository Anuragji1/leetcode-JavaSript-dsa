// **Problem Statement:**

// Create a counter object with increment, decrement, and reset functions.

// **Solution:**

function createCounter(init) {
  let count = init; // Private variable to store the counter value

  return {
    increment() {
      count++; // Increment and return the new value
      return count;
    },
    decrement() {
      count--; // Decrement and return the new value
      return count;
    },
    reset() {
      count = init; // Reset to initial value and return it
      return count;
    }
  };
}

// **Example Usage:**

const myCounter = createCounter(5);
console.log(myCounter.increment());   // Output: 6
console.log(myCounter.decrement());   // Output: 5
console.log(myCounter.reset());       // Output: 5

// **Explanation:**

// - The `createCounter` function uses a closure to create a counter object
//   with persistent state across function calls.
// - The `count` variable is private to the closure, ensuring data encapsulation.
// - Each counter object instance has its own independent state.
