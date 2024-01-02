function isEmpty(obj) {
  if (Array.isArray(obj)) {
    // Check for empty array
    return obj.length === 0;
  } else if (typeof obj === 'object') {
    // Check for empty object (no enumerable keys)
    return Object.keys(obj).length === 0;
  } else {
    // Not an object or array
    return true;
  }
}

// Example usage:
const obj1 = {};
const obj2 = { x: 5, y: 42 };
const array1 = [];
const array2 = [null, false, 0];

console.log(isEmpty(obj1));   // true
console.log(isEmpty(obj2));   // false
console.log(isEmpty(array1)); // true
console.log(isEmpty(array2)); // false
console.log(isEmpty(null));   // true (not an object or array)
console.log(isEmpty(123));   // true (not an object or array)
console.log(isEmpty("string")); // true (not an object or array)
