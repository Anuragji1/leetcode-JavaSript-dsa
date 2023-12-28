function createHelloWorld() {
  return () => "Hello World";
}
const myHelloWorldFunction = createHelloWorld();

console.log(myHelloWorldFunction());  // Output: "Hello World"
console.log(myHelloWorldFunction(1, 2, 3));  // Output: "Hello World"
