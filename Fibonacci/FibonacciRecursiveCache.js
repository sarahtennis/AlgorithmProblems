// 0, 1, 1, 2, 3, 5, 8, 11,...

fib = (steps, cache) => {
  if (!(steps in cache)) {
    if (steps === 0) {
      cache[steps] = 0;
    } else if (steps === 1 || steps === 2) {
      cache[steps] = 1;
    } else {
      cache[steps] = fib(steps - 2, cache) + fib(steps - 1, cache);
    }
  }

  return cache[steps];
};

console.log(fib(0, {}));
console.log(fib(4, {}));
console.log(fib(15, {}));
