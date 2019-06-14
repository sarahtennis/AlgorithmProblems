integerPairs = (arr, sum) => {
  const store = {};
  const output = [];

  for (let x = 0; x < arr.length; x++) {
    if (Number.isInteger(arr[x])) {
      // "partner" value when added is sum
      const partner = sum - arr[x];

      // partner already exists in store
      if (partner in store) {
        output.push(
          `${Math.max(arr[x], partner)} ${Math.min(arr[x], partner)}`
        );
      }

      // set value to store
      store[arr[x]] = 1;
    } else {
      console.log(`${arr[x]} is invalid input --- type ${typeof arr[x]}`);
    }
  }

  return output;
};

console.log(
  integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, -1, "13", "-2"], 11)
);
console.log(integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, -1], 30));
