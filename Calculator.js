class Calculator {
  constructor(initialValue) {
    this.result = initialValue;
  }

  add(value) {
    this.result += value;
    return this; // Enable chaining
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }

  getResult() {
    return this.result;
  }
}

// Example usage:
const calculator1 = new Calculator(10);
const result1 = calculator1.add(5).subtract(7).getResult(); // Output: 8

const calculator2 = new Calculator(2);
const result2 = calculator2.multiply(5).power(2).getResult(); // Output: 100

try {
  const calculator3 = new Calculator(20);
  const result3 = calculator3.divide(0).getResult(); // Throws an error
} catch (error) {
  console.error(error.message); // Output: "Division by zero is not allowed"
}
