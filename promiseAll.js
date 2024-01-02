function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let pending = functions.length;

    functions.forEach((fn, index) => {
      fn().then(
        result => {
          results[index] = result;
          pending--;
          if (pending === 0) resolve(results);
        },
        error => {
          reject(error);
        }
      );
    });
  });
}

// Example usage:
const functions = [
  () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
  () => new Promise(resolve => setTimeout(() => resolve(10), 100)),
  () => new Promise(resolve => setTimeout(() => resolve(16), 150))
];

promiseAll(functions)
  .then(results => console.log(results)) // Output: [4, 10, 16]
  .catch(error => console.error(error));
