function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

// Example usage:
async function example() {
  console.log("Starting sleep...");
  await sleep(1000); // Sleep for 1 second
  console.log("Sleep completed!");
}

example();
