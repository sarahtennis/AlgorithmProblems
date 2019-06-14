// abc => perm(abc) = a + perm(bc) + b + perm(ac) + c + perm(ab)

const rockPaperScissors = n => {
  const options = ["rock", "paper", "scissors"];

  let output = [];

  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [["rock"], ["paper"], ["scissors"]];
  }

  for (let x = 0; x < 3; x++) {
    const first = [options[x]];

    const remainder = rockPaperScissors(n - 1);

    for (let y = 0; y < remainder.length; y++) {
      output.push([].concat(first, remainder[y]));
    }
  }

  return output;
};

// console.log("0", rockPaperScissors(0));
console.log("1", rockPaperScissors(1));
console.log("2", rockPaperScissors(2));
// console.log("3", rockPaperScissors(3));
// console.log("4", rockPaperScissors(4).length);
