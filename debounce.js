function debounce(fn, t) {
  let timeoutId;

  return function debounced(...args) {
    clearTimeout(timeoutId); // Clear any existing timeout

    timeoutId = setTimeout(() => {
      fn.apply(this, args); // Call the original function with applied arguments
    }, t);
  };
}

// Example usage:
function log(...args) {
  console.log(args);
}

const debouncedLog = debounce(log, 500); // Debounce with a delay of 500ms

debouncedLog("Hello");
debouncedLog("World"); // Will be debounced

setTimeout(() => {
  debouncedLog("After timeout"); // Will be executed after 500ms
}, 200);
