function timeLimit(fn, t) {
  return async function (...args) {
    const timeout = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Time Limit Exceeded")), t);
    });

    const raceResult = await Promise.race([fn(...args), timeout]);

    if (raceResult instanceof Error) {
      throw raceResult;
    } else {
      return raceResult;
    }
  };
}

// Example usage:
const fn = async (n) => {
  await new Promise(res => setTimeout(res, 100));
  return n * n;
};

const inputs = [5];
const t = 150; // Time limit in milliseconds

const limitedFn = timeLimit(fn, t);

const start = performance.now();
let result;

try {
  const res = await limitedFn(...inputs);
  result = { resolved: res, time: Math.floor(performance.now() - start) };
} catch (err) {
  result = { rejected: err, time: Math.floor(performance.now() - start) };
}

console.log(result); // Output
