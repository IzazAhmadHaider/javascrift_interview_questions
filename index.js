const numbers = [2, 4, 3, 5, 7, 8, 1, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 4];
const targetSum = 8;
const result = findPairs(numbers, targetSum);
console.log(result);

function findPairs(arr, total) {
  let result = [];
  let seen = new Set();
  let seenPairs = new Set();

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let complement = total - current;

    if (seen.has(complement)) {
      let pair = [current, complement].sort(); 
      let pairKey = pair.toString();
      console.log(pairKey);

      if (!seenPairs.has(pairKey)) {
        result.push(pair);
        seenPairs.add(pairKey);
      }
    }

    seen.add(current);
  }

  return result;
}

