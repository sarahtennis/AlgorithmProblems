// 0, 1, 1, 2, 3, 5, 8, 11,...

fib = steps => {
  // base cases for steps = 0 and steps = 1
  const baseCase0 = 0;
  const baseCase1 = 1;

  // return values for base cases
  if (steps === 0) {
    return baseCase0;
  } else if (steps === 1) {
    return baseCase1;
  }

  // variables to hold 3 consecutive fib numbers
  let previous1 = baseCase0;
  let previous2 = baseCase0 + baseCase1;
  let current;

  // finds value at position 'steps'
  for (let x = 2; x <= steps; x++) {
    current = previous1 + previous2;
    previous1 = previous2;
    previous2 = current;
  }

  return current;
};

console.log(fib(0));
console.log(fib(4));
console.log(fib(15));
