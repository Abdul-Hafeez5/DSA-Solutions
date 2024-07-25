//      Fibonacci Number or series

// It is the series of numbers where each number is the sum of the two preceding numbers. For example, 0, 1, 1, 2, 3, 5, 8, 13

// return value on specific index of array
const fibonacci = (n) => {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  //   console.log(arr);
  return arr[n];
};

// solve using Recursion

const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 2) + fib(n - 1);
};

console.log(fib(7));
console.log(fibonacci(7));
