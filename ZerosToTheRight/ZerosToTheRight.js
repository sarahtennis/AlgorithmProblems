zerosToTheRight = arr => {
  const length = arr.length;
  let position = 1;

  // [0, 3, 1, 0, -2]
  // [0, 3, 0, 0, 0, 0]

  for (let x = 0; x < Math.floor(length / 2); x++) {
    if (position === length - 1) {
      return length - position;
    }

    if (arr[x] === 0) {
      while (arr[length - position] === 0) {
        position++;
      }

      if (position <= length - 1) {
        let temp = arr[x];
        arr[x] = arr[length - position];
        arr[length - position] = temp;

        if (position <= length - 2) {
          position++;
        }
      }
    }
  }

  return length - position;
};

console.log(zerosToTheRight([0, 3, 1, 0, -2]));
console.log(zerosToTheRight([0, 3, 0, 0, 0, 0]));
