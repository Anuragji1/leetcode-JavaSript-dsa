/**
 * @param {Function} fn - The function to execute repeatedly
 * @param {Array<any>} args - The arguments to pass to the function
 * @param {number} t - The interval time in milliseconds
 * @return {Function} - A function that cancels the repeated execution
 */
function cancellable(fn, args, t) {
  let intervalId;
  let result = [];

  const cancelFn = () => {
    clearInterval(intervalId); // Clear the interval to stop execution
    intervalId = null; // Indicate cancellation
  };

  const executeFn = () => {
    const startTime = Date.now();
    const fnResult = fn(...args);
    result.push({ time: Date.now() - startTime, returned: fnResult });
  };

  executeFn(); // Initial execution
  intervalId = setInterval(executeFn, t); // Schedule repeated execution

  return cancelFn; // Return the cancel function
}

// Example usage:
const fn = (x) => x * 2;
const args = [4];
const t = 35; // Interval time in milliseconds

const cancelFn = cancellable(fn, args, t);

// Optionally, schedule a cancellation after a certain time:
const cancelTimeMs = 190;
setTimeout(cancelFn, cancelTimeMs);
