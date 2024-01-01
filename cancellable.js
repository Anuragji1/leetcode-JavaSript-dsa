/**
 * @param {Function} fn
 * @param {Array<any>} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t) {
  let timeoutId;
  let result = [];

  const cancelFn = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    timeoutId = null;      // Indicate cancellation
  };

  const executeFn = () => {
    timeoutId = null;      // Clear timeout reference (no longer needed)
    const startTime = Date.now();
    const fnResult = fn(...args); // Call the original function with arguments
    result.push({ time: Date.now() - startTime, returned: fnResult });
  };

  timeoutId = setTimeout(executeFn, t); // Schedule delayed execution

  return cancelFn; // Return the cancel function
}
