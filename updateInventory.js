// Inventory Update
function updateInventory(curInv, newInv) {
  let copyCurInv = curInv;
  newInv.forEach((n, i) => {
    let found = false;
    curInv.forEach((c, x) => {
      if (n[1] == c[1]) {
        found = true;
        copyCurInv[x][0] = c[0] + n[0];
        return;
      }
    });
    if (found === false) {
      copyCurInv.push(n);
    }
  });

  let result = copyCurInv.sort((a, b) => {
    return a[1] > b[1] ? 1 : -1;
  });

  return result;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

const result = updateInventory(curInv, newInv);

console.log(result);
