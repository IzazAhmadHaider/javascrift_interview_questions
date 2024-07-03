/*
Interview Question No. 1:

Given an array and a target value, find all pairs of values from the array whose sum equals the target value. Ensure that there are no duplicate pairs. For example, [[1, 2], [1, 2], [2, 1]] should be considered as a single pair. Additionally, there should be no self-addition unless the array contains multiple instances of the same number. For instance, if the target value is 6 and the array contains only one "3", then [3, 3] is invalid. However, if the array contains multiple "3"s, then [3, 3] is valid.

 */

const numbers = [2, 4, 3, 5, 7, 8, 1, 4, 5, 6, 7, 8, 9, 1, 2, 4, 4];
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

// ----------------------------------------------------------------//



