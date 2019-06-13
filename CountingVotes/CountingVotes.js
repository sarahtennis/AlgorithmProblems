countVotes = votes => {
  // keys will be candidate name, value is number of votes
  const counts = {};

  // tally votes and populate counts object
  votes.forEach(vote => {
    if (vote in counts) {
      counts[vote] += 1;
    } else {
      counts[vote] = 1;
    }
  });

  let winner;

  // determine highest vote and if tie last name alphabetically
  for (let candidate in counts) {
    if (winner === undefined) {
      winner = candidate;
    } else {
      if (counts[candidate] > counts[winner]) {
        winner = candidate;
      } else if (counts[candidate] === counts[winner]) {
        winner = candidate > winner ? candidate : winner;
      }
    }
  }

  return winner;
};

console.log(
  countVotes([
    "veronica",
    "mary",
    "alex",
    "james",
    "mary",
    "michael",
    "alex",
    "michael"
  ])
);
