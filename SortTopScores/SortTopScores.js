const sortTopScores = scores => {
  let counts = new Array(1000).fill(0);

  let output = [];

  // linear, # of scores in input
  for (let x = 0; x < scores.length; x++) {
    counts[scores[x] - 1] += 1;
  }

  // constant (upper bound 2*1000)
  for (let x = counts.length - 1; x >= 0; x--) {
    for (let y = 0; y < counts[x]; y++) {
      output.push(x + 1);
    }
  }

  return output;
};

console.log(sortTopScores([2, 3, 300, 200, 132, 454, 1000, 3, 22, 366, 999]));
