// Find the Symmetric Difference
function sym() {
  let inputSets = [];

  for (const arg of arguments) {
    inputSets.push(arg);
  }

  let output = inputSets.reduce((previous, current) => {
    let temp = [];

    previous.forEach((item) => {
      if (current.indexOf(item) < 0 && temp.indexOf(item) < 0) {
        temp.push(item);
      }
    });

    current.forEach((item) => {
      if (previous.indexOf(item) < 0 && temp.indexOf(item) < 0) {
        temp.push(item);
      }
    });

    return temp;
  });

  return output.sort();
}

const result = sym(
  [3, 3, 3, 2, 5],
  [2, 1, 5, 7],
  [3, 4, 6, 6],
  [1, 2, 3],
  [5, 3, 9, 8],
  [1]
);

console.log(result);
