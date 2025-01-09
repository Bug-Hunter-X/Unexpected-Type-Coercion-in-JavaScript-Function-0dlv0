function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined || a === 0 || b===0) {
    return 0; // Handle null, undefined, and 0 values explicitly
  }
  return a + b; 
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));   // Output: 10
console.log(foo(0, 5));   // Output: 0
console.log(foo(undefined, 5)); //Output: 0
console.log(foo(5, undefined)); //Output: 0