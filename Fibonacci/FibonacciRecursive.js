// 0, 1, 1, 2, 3, 5, 8, 11,...

fib = steps => {
  if (steps === 0) {
    return 0;
  } else if (steps === 1) {
    return 1;
  }

  return fib(steps - 2) + fib(steps - 1);
};

console.log(fib(0));
console.log(fib(4));
console.log(fib(15));
